/* ── Face-Efface Photo — i18n ──────────────────────────────
   Langues : fr · en · es · it · de · pt
   t('key')            → chaîne traduite
   t('key', {n: 3})    → interpolation {n}
   setLang('en')       → change langue + localStorage
   ──────────────────────────────────────────────────────── */

const I18N = {

  fr: {
    tagline:        "Œuvrant pour le respect de la vie privée.",
    modes_title:    "Les 3 modes",
    manual_always:  "✦ Le mode Manuel est toujours actif",
    tips_title:     "💡 Conseils d'organisation",
    privacy_label:  "Vos photos restent sur votre appareil",
    header_sub:     "Protection de la vie privée · Floutage automatique sur photo ·",
    btn_open:       "Ouvrir une photo",
    btn_detect:     "Détection des visages automatique",
    btn_auto:       "Détection et floutage automatique",
    btn_undo:       "Annuler  Ctrl+Z",
    btn_undo_title: "Annuler (Ctrl+Z)",
    btn_reset:      "Effacer",
    btn_save:       "Enregistrer",
    btn_apply:      "Appliquer",
    btn_deselect:   "✕ Désélectionner",
    drop_here:      "Glissez une image ici",
    footer_download:"⬇️ Télécharger l'application",
    footer_legal:   "Mentions légales",
    footer_privacy: "Confidentialité & RGPD",
    footer_terms:   "CGU",
    footer_contact: "Contact",
    footer_about:   "À propos",
    toast_ia_ko:    "IA indisponible — mode manuel uniquement",
    toast_loaded:   "Image chargée",
    toast_no_face_m:"Aucun visage détecté — tracez manuellement",
    toast_detected: "{n} visage(s) détecté(s) — supprimez les indésirables puis appliquez",
    toast_no_face_a:"Aucun visage détecté",
    toast_blurred:  "{n} visage(s) flouté(s)",
    toast_zones:    "Zones floutées",
    toast_saved:    "Image enregistrée",
    toast_reset:    "Image réinitialisée",
    lbl_detecting:  "Analyse…",
    lbl_blurring:   "En cours…",
    lbl_detect_def: "Détection des visages automatique",
    lbl_auto_def:   "Détection et floutage automatique",
    zone_s: "zone active",
    zone_p: "zones actives",
  },

  en: {
    tagline:        "Working for the respect of privacy.",
    modes_title:    "The 3 modes",
    manual_always:  "✦ Manual mode is always active",
    tips_title:     "💡 Organisation tips",
    privacy_label:  "Your photos stay on your device",
    header_sub:     "Privacy protection · Automatic face blurring ·",
    btn_open:       "Open a photo",
    btn_detect:     "Automatic face detection",
    btn_auto:       "Automatic detection & blur",
    btn_undo:       "Undo  Ctrl+Z",
    btn_undo_title: "Undo (Ctrl+Z)",
    btn_reset:      "Reset",
    btn_save:       "Save",
    btn_apply:      "Apply",
    btn_deselect:   "✕ Deselect",
    drop_here:      "Drop an image here",
    footer_download:"⬇️ Download the app",
    footer_legal:   "Legal notice",
    footer_privacy: "Privacy & GDPR",
    footer_terms:   "Terms",
    footer_contact: "Contact",
    footer_about:   "About",
    toast_ia_ko:    "AI unavailable — manual mode only",
    toast_loaded:   "Image loaded",
    toast_no_face_m:"No face detected — draw manually",
    toast_detected: "{n} face(s) detected — remove unwanted ones then apply",
    toast_no_face_a:"No face detected",
    toast_blurred:  "{n} face(s) blurred",
    toast_zones:    "Areas blurred",
    toast_saved:    "Image saved",
    toast_reset:    "Image reset",
    lbl_detecting:  "Analysing…",
    lbl_blurring:   "Processing…",
    lbl_detect_def: "Automatic face detection",
    lbl_auto_def:   "Automatic detection & blur",
    zone_s: "active area",
    zone_p: "active areas",
  },

  es: {
    tagline:        "Trabajando por el respeto a la privacidad.",
    modes_title:    "Los 3 modos",
    manual_always:  "✦ El modo Manual siempre está activo",
    tips_title:     "💡 Consejos de organización",
    privacy_label:  "Tus fotos permanecen en tu dispositivo",
    header_sub:     "Protección de privacidad · Desenfoque automático ·",
    btn_open:       "Abrir una foto",
    btn_detect:     "Detección automática de rostros",
    btn_auto:       "Detección y desenfoque automático",
    btn_undo:       "Deshacer  Ctrl+Z",
    btn_undo_title: "Deshacer (Ctrl+Z)",
    btn_reset:      "Restablecer",
    btn_save:       "Guardar",
    btn_apply:      "Aplicar",
    btn_deselect:   "✕ Deseleccionar",
    drop_here:      "Arrastra una imagen aquí",
    footer_download:"⬇️ Descargar la app",
    footer_legal:   "Aviso legal",
    footer_privacy: "Privacidad",
    footer_terms:   "Términos",
    footer_contact: "Contacto",
    footer_about:   "Acerca de",
    toast_ia_ko:    "IA no disponible — solo modo manual",
    toast_loaded:   "Imagen cargada",
    toast_no_face_m:"No se detectó ningún rostro — dibuja manualmente",
    toast_detected: "{n} rostro(s) detectado(s) — elimina los no deseados y aplica",
    toast_no_face_a:"No se detectó ningún rostro",
    toast_blurred:  "{n} rostro(s) difuminado(s)",
    toast_zones:    "Zonas difuminadas",
    toast_saved:    "Imagen guardada",
    toast_reset:    "Imagen restablecida",
    lbl_detecting:  "Analizando…",
    lbl_blurring:   "Procesando…",
    lbl_detect_def: "Detección automática de rostros",
    lbl_auto_def:   "Detección y desenfoque automático",
    zone_s: "área activa",
    zone_p: "áreas activas",
  },

  it: {
    tagline:        "Per il rispetto della privacy.",
    modes_title:    "Le 3 modalità",
    manual_always:  "✦ La modalità Manuale è sempre attiva",
    tips_title:     "💡 Consigli di organizzazione",
    privacy_label:  "Le tue foto restano sul tuo dispositivo",
    header_sub:     "Protezione della privacy · Sfocatura automatica ·",
    btn_open:       "Apri una foto",
    btn_detect:     "Rilevamento automatico dei volti",
    btn_auto:       "Rilevamento e sfocatura automatica",
    btn_undo:       "Annulla  Ctrl+Z",
    btn_undo_title: "Annulla (Ctrl+Z)",
    btn_reset:      "Ripristina",
    btn_save:       "Salva",
    btn_apply:      "Applica",
    btn_deselect:   "✕ Deseleziona",
    drop_here:      "Trascina un'immagine qui",
    footer_download:"⬇️ Scarica l'app",
    footer_legal:   "Note legali",
    footer_privacy: "Privacy & GDPR",
    footer_terms:   "Termini",
    footer_contact: "Contatto",
    footer_about:   "Informazioni",
    toast_ia_ko:    "IA non disponibile — solo modalità manuale",
    toast_loaded:   "Immagine caricata",
    toast_no_face_m:"Nessun volto rilevato — disegna manualmente",
    toast_detected: "{n} volto/i rilevato/i — rimuovi quelli indesiderati e applica",
    toast_no_face_a:"Nessun volto rilevato",
    toast_blurred:  "{n} volto/i sfocato/i",
    toast_zones:    "Zone sfocate",
    toast_saved:    "Immagine salvata",
    toast_reset:    "Immagine ripristinata",
    lbl_detecting:  "Analisi…",
    lbl_blurring:   "In corso…",
    lbl_detect_def: "Rilevamento automatico dei volti",
    lbl_auto_def:   "Rilevamento e sfocatura automatica",
    zone_s: "area attiva",
    zone_p: "aree attive",
  },

  de: {
    tagline:        "Für den Schutz der Privatsphäre.",
    modes_title:    "Die 3 Modi",
    manual_always:  "✦ Der manuelle Modus ist immer aktiv",
    tips_title:     "💡 Organisationstipps",
    privacy_label:  "Ihre Fotos bleiben auf Ihrem Gerät",
    header_sub:     "Datenschutz · Automatische Gesichtsunschärfe ·",
    btn_open:       "Foto öffnen",
    btn_detect:     "Automatische Gesichtserkennung",
    btn_auto:       "Automatische Erkennung & Unschärfe",
    btn_undo:       "Rückgängig  Ctrl+Z",
    btn_undo_title: "Rückgängig (Ctrl+Z)",
    btn_reset:      "Zurücksetzen",
    btn_save:       "Speichern",
    btn_apply:      "Anwenden",
    btn_deselect:   "✕ Abwählen",
    drop_here:      "Bild hier ablegen",
    footer_download:"⬇️ App herunterladen",
    footer_legal:   "Impressum",
    footer_privacy: "Datenschutz",
    footer_terms:   "AGB",
    footer_contact: "Kontakt",
    footer_about:   "Über",
    toast_ia_ko:    "KI nicht verfügbar — nur manueller Modus",
    toast_loaded:   "Bild geladen",
    toast_no_face_m:"Kein Gesicht erkannt — manuell zeichnen",
    toast_detected: "{n} Gesicht(er) erkannt — unerwünschte entfernen und anwenden",
    toast_no_face_a:"Kein Gesicht erkannt",
    toast_blurred:  "{n} Gesicht(er) verpixelt",
    toast_zones:    "Bereiche verpixelt",
    toast_saved:    "Bild gespeichert",
    toast_reset:    "Bild zurückgesetzt",
    lbl_detecting:  "Analyse…",
    lbl_blurring:   "Verarbeitung…",
    lbl_detect_def: "Automatische Gesichtserkennung",
    lbl_auto_def:   "Automatische Erkennung & Unschärfe",
    zone_s: "aktiver Bereich",
    zone_p: "aktive Bereiche",
  },

  pt: {
    tagline:        "A trabalhar pelo respeito à privacidade.",
    modes_title:    "Os 3 modos",
    manual_always:  "✦ O modo Manual está sempre ativo",
    tips_title:     "💡 Dicas de organização",
    privacy_label:  "As suas fotos ficam no seu dispositivo",
    header_sub:     "Proteção da privacidade · Desfoque automático ·",
    btn_open:       "Abrir uma foto",
    btn_detect:     "Deteção automática de rostos",
    btn_auto:       "Deteção e desfoque automático",
    btn_undo:       "Desfazer  Ctrl+Z",
    btn_undo_title: "Desfazer (Ctrl+Z)",
    btn_reset:      "Repor",
    btn_save:       "Guardar",
    btn_apply:      "Aplicar",
    btn_deselect:   "✕ Desselecionar",
    drop_here:      "Arraste uma imagem aqui",
    footer_download:"⬇️ Descarregar a app",
    footer_legal:   "Aviso legal",
    footer_privacy: "Privacidade & RGPD",
    footer_terms:   "Termos",
    footer_contact: "Contacto",
    footer_about:   "Sobre",
    toast_ia_ko:    "IA indisponível — apenas modo manual",
    toast_loaded:   "Imagem carregada",
    toast_no_face_m:"Nenhum rosto detetado — desenhe manualmente",
    toast_detected: "{n} rosto(s) detetado(s) — remova os indesejados e aplique",
    toast_no_face_a:"Nenhum rosto detetado",
    toast_blurred:  "{n} rosto(s) desfocado(s)",
    toast_zones:    "Zonas desfocadas",
    toast_saved:    "Imagem guardada",
    toast_reset:    "Imagem reposta",
    lbl_detecting:  "A analisar…",
    lbl_blurring:   "Em curso…",
    lbl_detect_def: "Deteção automática de rostos",
    lbl_auto_def:   "Deteção e desfoque automático",
    zone_s: "área ativa",
    zone_p: "áreas ativas",
  },
};

/* ── Fonctions publiques ─────────────────────────────────── */

let _lang = 'fr';

function t(key, params) {
  const str = (I18N[_lang] && I18N[_lang][key] !== undefined)
    ? I18N[_lang][key]
    : (I18N.fr[key] !== undefined ? I18N.fr[key] : key);
  if (!params) return str;
  return str.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? '');
}

function setLang(lang) {
  if (!I18N[lang]) return;
  _lang = lang;
  localStorage.setItem('fe_lang', lang);
  document.documentElement.lang = lang;

  const cur = document.getElementById('lang-current');
  if (cur) cur.textContent = lang.toUpperCase();

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });

  const menu = document.getElementById('lang-menu');
  if (menu) menu.classList.remove('open');
}

function toggleLangMenu() {
  document.getElementById('lang-menu').classList.toggle('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('#lang-selector')) {
    const m = document.getElementById('lang-menu');
    if (m) m.classList.remove('open');
  }
});

(function initLang() {
  const saved    = localStorage.getItem('fe_lang');
  const browser  = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  const detected = I18N[saved] ? saved : (I18N[browser] ? browser : 'fr');
  setLang(detected);
})();
