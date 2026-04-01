const canvas      = document.getElementById('canvas');
const ctx         = canvas.getContext('2d', { willReadFrequently: true });
const markersDiv  = document.getElementById('markers');
const selRect     = document.getElementById('sel-rect');
const upload      = document.getElementById('upload');
const btnSave     = document.getElementById('btn-save');
const btnUndo     = document.getElementById('btn-undo');
const panelAdjust = document.getElementById('panel-adjust');
const pixelSlider = document.getElementById('pixel-size');
const pixelVal    = document.getElementById('pixel-val');
const emptyMsg    = document.getElementById('empty-msg');
const viewport    = document.getElementById('viewport');
const zoneLabel   = document.getElementById('zone-label');

let img      = null;
let history  = [];
let selected = [];
let drawing  = false;
let sx, sy, scx, scy;
let iaReady  = false;

// Utilitaire : change uniquement le label texte d'un bouton (sans toucher au SVG)
function setBtnLabel(btn, text) {
  const span = btn.querySelector('span.btn-label');
  if (span) span.textContent = text;
  else btn.lastChild.textContent = text;
}

// ── IA ──────────────────────────────────────────
async function loadIA() {
  try {
    await faceapi.nets.ssdMobilenetv1.loadFromUri(
      'https://cdn.jsdelivr.net/npm/@vladmandic/face-api/model/'
    );
    iaReady = true;
    if (img) {
      document.getElementById('btn-detect').disabled = false;
      document.getElementById('btn-auto').disabled   = false;
    }
  } catch(e) {
    showToast('IA indisponible — mode manuel uniquement');
  }
}
loadIA();

// ── CHARGEMENT IMAGE ────────────────────────────
upload.onchange = e => loadFile(e.target.files[0]);

function loadFile(file) {
  if (!file || !file.type.startsWith('image/') || file.type === 'image/svg+xml') return;
  const reader = new FileReader();
  reader.onload = ev => {
    const i = new Image();
    i.onload = () => {
      img = i;
      canvas.width  = i.width;
      canvas.height = i.height;
      ctx.drawImage(i, 0, 0);
      history = [canvas.toDataURL()];
      clearMarkers();
      selected = [];
      updateUI();
      emptyMsg.style.display = 'none';
      btnSave.disabled = false;
      if (iaReady) {
        document.getElementById('btn-detect').disabled = false;
        document.getElementById('btn-auto').disabled   = false;
      }
      showToast('Image chargée');
    };
    i.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

// ── DRAG & DROP ─────────────────────────────────
viewport.addEventListener('dragover', e => { e.preventDefault(); viewport.classList.add('drag-over'); });
viewport.addEventListener('dragleave', () => viewport.classList.remove('drag-over'));
viewport.addEventListener('drop', e => {
  e.preventDefault();
  viewport.classList.remove('drag-over');
  loadFile(e.dataTransfer.files[0]);
});

// ── DÉTECTION IA — pré-sélectionne tout ─────────
async function scanFaces() {
  if (!img || !iaReady) return;
  const btn = document.getElementById('btn-detect');
  btn.disabled = true;
  setBtnLabel(btn, 'Analyse…');
  const dets = await faceapi.detectAllFaces(canvas, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.4 }));
  clearMarkers();
  selected = [];
  if (dets.length === 0) {
    showToast('Aucun visage détecté — tracez manuellement');
  } else {
    dets.forEach(d => {
      const m = addMarker(d.box);
      selected.push({ marker: m, box: d.box });
      m.classList.add('active');
    });
    showToast(dets.length + ' visage(s) détecté(s) — supprimez les indésirables puis appliquez');
  }
  btn.disabled = false;
  setBtnLabel(btn, 'Détection des visages automatique');
  updateUI();
}

// ── FLOUTAGE AUTO COMPLET ───────────────────────
async function autoBlur() {
  if (!img || !iaReady) return;
  const btn = document.getElementById('btn-auto');
  btn.disabled = true;
  setBtnLabel(btn, 'En cours…');
  const dets = await faceapi.detectAllFaces(canvas, new faceapi.SsdMobilenetv1Options({ minConfidence: 0.4 }));
  if (dets.length === 0) {
    showToast('Aucun visage détecté');
  } else {
    dets.forEach(d => {
      const size = Math.max(6, Math.min(80, Math.round(Math.min(d.box.width, d.box.height) * 0.20)));
      pixelate(d.box, size);
    });
    saveHistory();
    showToast(dets.length + ' visage(s) flouté(s)');
  }
  btn.disabled = false;
  setBtnLabel(btn, 'Détection et floutage automatique');
}

// ── MARQUEURS ───────────────────────────────────
function addMarker(box) {
  const m  = document.createElement('div');
  m.className = 'face-box';

  const pc = document.createElement('canvas');
  pc.className = 'pcanvas';
  m.appendChild(pc);

  const del = document.createElement('button');
  del.className = 'del-btn';
  del.textContent = '✕';
  del.addEventListener('click', e => {
    e.stopPropagation();
    const idx = selected.findIndex(z => z.marker === m);
    if (idx > -1) selected.splice(idx, 1);
    m.remove();
    updateUI();
  });
  m.appendChild(del);

  positionMarker(m, box);

  m.addEventListener('click', e => {
    e.stopPropagation();
    const idx = selected.findIndex(z => z.marker === m);
    if (idx > -1) {
      selected.splice(idx, 1);
      m.classList.remove('active');
    } else {
      selected.push({ marker: m, box });
      m.classList.add('active');
    }
    updateUI();
  });

  markersDiv.appendChild(m);
  return m;
}

function positionMarker(m, box) {
  const r  = canvas.getBoundingClientRect();
  const rw = canvas.parentElement.getBoundingClientRect();
  const rx = r.width  / canvas.width;
  const ry = r.height / canvas.height;
  m.style.left   = (r.left - rw.left + box.x * rx) + 'px';
  m.style.top    = (r.top  - rw.top  + box.y * ry) + 'px';
  m.style.width  = (box.width  * rx) + 'px';
  m.style.height = (box.height * ry) + 'px';
}

function clearMarkers() {
  while (markersDiv.firstChild) markersDiv.removeChild(markersDiv.firstChild);
}

// ── SÉLECTION MANUELLE ──────────────────────────
canvas.addEventListener('mousedown', e => {
  if (!img) return;
  clearSelection();
  drawing = true;
  const c = getCoords(e);
  sx = c.x; sy = c.y; scx = c.cx; scy = c.cy;
  selRect.style.left = scx + 'px'; selRect.style.top = scy + 'px';
  selRect.style.width = '0px';     selRect.style.height = '0px';
  selRect.style.display = 'block';
});

window.addEventListener('mousemove', e => {
  if (!drawing) return;
  const c = getCoords(e);
  const w = c.cx - scx, h = c.cy - scy;
  selRect.style.width  = Math.abs(w) + 'px';
  selRect.style.height = Math.abs(h) + 'px';
  selRect.style.left   = (w > 0 ? scx : c.cx) + 'px';
  selRect.style.top    = (h > 0 ? scy : c.cy) + 'px';
});

window.addEventListener('mouseup', e => {
  if (!drawing) return;
  drawing = false;
  selRect.style.display = 'none';
  const c = getCoords(e);
  const w = Math.abs(c.x - sx), h = Math.abs(c.y - sy);
  if (w > 10 && h > 10) {
    const box = { x: Math.min(sx, c.x), y: Math.min(sy, c.y), width: w, height: h };
    const m   = addMarker(box);
    selected.push({ marker: m, box });
    m.classList.add('active');
    updateUI();
    renderPreviews();
  }
});

function getCoords(e) {
  const r  = canvas.getBoundingClientRect();
  const rw = canvas.parentElement.getBoundingClientRect();
  return {
    x:  (e.clientX - r.left) * (canvas.width  / r.width),
    y:  (e.clientY - r.top)  * (canvas.height / r.height),
    cx: e.clientX - rw.left,
    cy: e.clientY - rw.top
  };
}

// ── APERÇU TEMPS RÉEL ───────────────────────────
function renderPreviews() {
  const size = parseInt(pixelSlider.value);
  selected.forEach(({ marker, box }) => {
    const pc  = marker.querySelector('.pcanvas');
    const pct = pc.getContext('2d');
    const w   = Math.max(1, Math.floor(box.width));
    const h   = Math.max(1, Math.floor(box.height));
    const sw  = Math.max(1, Math.floor(w / size));
    const sh  = Math.max(1, Math.floor(h / size));
    pc.width = sw; pc.height = sh;
    pct.drawImage(canvas, box.x, box.y, w, h, 0, 0, sw, sh);
  });
}

function onSlider() {
  pixelVal.textContent = pixelSlider.value;
  if (selected.length) renderPreviews();
}

// ── APPLIQUER ────────────────────────────────────
function applyBlur() {
  if (!selected.length) return;
  const size = parseInt(pixelSlider.value);
  selected.forEach(({ marker, box }) => { pixelate(box, size); marker.remove(); });
  saveHistory();
  selected = [];
  updateUI();
  showToast('Zones floutées');
}

function pixelate(box, size) {
  let { x, y, width: w, height: h } = box;
  x = Math.floor(x); y = Math.floor(y); w = Math.floor(w); h = Math.floor(h);
  const id   = ctx.getImageData(x, y, w, h);
  const data = id.data;
  for (let v = 0; v < h; v += size) {
    for (let u = 0; u < w; u += size) {
      const i = (v * w + u) * 4;
      const r = data[i], g = data[i+1], b = data[i+2];
      for (let n = 0; n < size && (v+n) < h; n++) {
        for (let m2 = 0; m2 < size && (u+m2) < w; m2++) {
          const p = ((v+n)*w + (u+m2)) * 4;
          data[p] = r; data[p+1] = g; data[p+2] = b;
        }
      }
    }
  }
  ctx.putImageData(id, x, y);
}

// ── HISTORIQUE ──────────────────────────────────
function saveHistory() {
  history.push(canvas.toDataURL());
  if (history.length > 20) history.shift();
  btnUndo.disabled = false;
}

function undo() {
  if (history.length <= 1) return;
  history.pop();
  const i = new Image();
  i.onload = () => {
    ctx.drawImage(i, 0, 0);
    clearMarkers(); selected = []; updateUI();
    if (history.length <= 1) btnUndo.disabled = true;
  };
  i.src = history[history.length - 1];
}

// ── ENREGISTRER / RESET ─────────────────────────
async function saveImage() {
  if (window.__TAURI__) {
    // Version bureau : boîte "Enregistrer sous" native Windows
    const defaultName = 'face-efface-' + Date.now();
    // On passe les données en JPEG par défaut, PNG si l'utilisateur change l'extension
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
    const base64 = dataUrl.split(',')[1];
    const bytes = Array.from(Uint8Array.from(atob(base64), c => c.charCodeAt(0)));
    const saved = await window.__TAURI__.core.invoke('save_image_dialog', {
      data: bytes,
      defaultName
    });
    if (saved) showToast('Image enregistrée');
  } else {
    // Version web : téléchargement navigateur
    const a = document.createElement('a');
    a.download = 'face-efface-' + Date.now() + '.jpg';
    a.href = canvas.toDataURL('image/jpeg', 0.92);
    a.click();
    showToast('Image enregistrée');
  }
}

function resetAll() {
  if (!img) return;
  canvas.width = img.width; canvas.height = img.height;
  ctx.drawImage(img, 0, 0);
  history = [canvas.toDataURL()];
  clearMarkers(); selected = []; updateUI();
  showToast('Image réinitialisée');
}

// ── UTILITAIRES ─────────────────────────────────
function clearSelection() {
  selected.forEach(z => {
    z.marker.classList.remove('active');
    const pc = z.marker.querySelector('.pcanvas');
    if (pc) { pc.width = 0; pc.height = 0; }
  });
  selected = []; updateUI();
}

function updateUI() {
  const n = selected.length;
  const blockAdjust = document.getElementById('block-adjust');
  if (n > 0) {
    blockAdjust.style.display = 'flex';
    zoneLabel.textContent = n + ' zone' + (n > 1 ? 's' : '') + ' active' + (n > 1 ? 's' : '');
  } else {
    blockAdjust.style.display = 'none';
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// ── RACCOURCIS ──────────────────────────────────
window.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') undo();
  if (e.key === 'Enter' && selected.length) applyBlur();
  if (e.key === 'Escape') clearSelection();
});

// ── REDIMENSIONNEMENT ───────────────────────────
window.addEventListener('resize', () => {
  if (!img) return;
  const data = selected.map(z => ({ box: z.box }));
  clearMarkers(); selected = [];
  data.forEach(d => {
    const m = addMarker(d.box);
    selected.push({ marker: m, box: d.box });
    m.classList.add('active');
  });
  renderPreviews(); updateUI();
});
