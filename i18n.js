/* ── Face-Efface Photo — i18n ──────────────────────────────
   Langues : fr · en · es · it · de · pt
   t('key')            → chaîne traduite
   t('key', {n: 3})    → interpolation {n}
   setLang('en')       → change langue + localStorage
   ──────────────────────────────────────────────────────── */

const LANG_NAMES = { fr: 'Français', en: 'English', es: 'Español', it: 'Italiano', de: 'Deutsch', pt: 'Português' };

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
    lbl_detecting:  "Analyse…",
    lbl_blurring:   "En cours…",
    lbl_detect_def: "Détection des visages automatique",
    lbl_auto_def:   "Détection et floutage automatique",
    zone_s: "zone active",
    zone_p: "zones actives",
    modes_desc: `<span style="color:#fff;font-weight:800;">Mode 1 — Manuel :</span> tracez un rectangle sur la photo pour définir une zone à flouter. <span style="color:var(--cyan);">Entrée</span> pour appliquer, <span style="color:var(--cyan);">Échap</span> pour désélectionner.<br><br><span style="color:#fff;font-weight:800;">Mode 2 — IA Détection :</span> l'IA détecte les visages et pose les cadres. Cliquez sur ceux que vous voulez flouter pour les sélectionner, la croix rouge pour en supprimer un. Ajustez l'intensité puis appliquez.<br><br><span style="color:var(--dim);">Les cadres <span style="color:#ff6a00;font-weight:800;">orange</span> sont sélectionnés (seront floutés), les cadres <span style="color:var(--cyan);">bleus</span> sont inactifs. Cliquez pour basculer.</span><br><br><span style="color:var(--dim);">Dans les modes 1 et 2, une <span style="color:var(--cyan);">molette de réglage</span> apparaît au centre de la console dès qu'une zone est sélectionnée — elle permet d'ajuster l'intensité du floutage avant d'appliquer.</span><br><br><span style="color:#fff;font-weight:800;">Mode 3 — IA Floutage complet :</span> l'IA détecte et floute tous les visages en un seul clic.`,
    tips_text: `Avant de commencer, créez deux dossiers sur votre ordinateur :<br><br><strong style="color:#fff;">📁 Photos originales</strong> — vos photos telles qu'elles sont.<br><strong style="color:#fff;">📁 Photos floutées</strong> — les photos une fois traitées.<br><br>Cela évite d'écraser vos originaux par accident et simplifie votre workflow.`,
    privacy_tip: `Votre photo est traitée directement dans votre navigateur, sur votre ordinateur.<br><br>Elle n'est jamais envoyée sur internet ni stockée sur un serveur. Même quand l'application est en ligne, vos images restent chez vous.`,
    modal_dl_title: "⬇️ Télécharger l'application",
    modal_dl_p1: `La version <strong>installable Windows</strong> de Face-Efface · Photo est disponible pour les personnes qui soutiennent XiPiNOCODE sur Tipeee — à partir de <strong>2 €</strong>.`,
    modal_dl_p2: "Linux et Android à venir. 100 % local, aucune donnée envoyée sur internet.",
    modal_dl_p3: `<strong>Ce que vos dons permettent de développer :</strong><br>— Version Vidéo — floutage automatique sur vidéo<br>— Mises à jour régulières et nouveaux outils de protection de la vie privée`,
    modal_dl_cta: "💛 Soutenir &amp; télécharger sur Tipeee",
    float_btn: `💛 Télécharger l'application<br>Soutenir sur Tipeee`,
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
    lbl_detecting:  "Analysing…",
    lbl_blurring:   "Processing…",
    lbl_detect_def: "Automatic face detection",
    lbl_auto_def:   "Automatic detection & blur",
    zone_s: "active area",
    zone_p: "active areas",
    modes_desc: `<span style="color:#fff;font-weight:800;">Mode 1 — Manual:</span> draw a rectangle on the photo to define an area to blur. <span style="color:var(--cyan);">Enter</span> to apply, <span style="color:var(--cyan);">Esc</span> to deselect.<br><br><span style="color:#fff;font-weight:800;">Mode 2 — AI Detection:</span> AI detects faces and places frames. Click the ones you want to blur to select them, the red cross to remove one. Adjust the intensity then apply.<br><br><span style="color:var(--dim);">Frames in <span style="color:#ff6a00;font-weight:800;">orange</span> are selected (will be blurred), frames in <span style="color:var(--cyan);">blue</span> are inactive. Click to toggle.</span><br><br><span style="color:var(--dim);">In modes 1 and 2, an <span style="color:var(--cyan);">intensity slider</span> appears at the centre of the console when an area is selected — it lets you adjust the blur level before applying.</span><br><br><span style="color:#fff;font-weight:800;">Mode 3 — Full AI Blur:</span> AI detects and blurs all faces in one click.`,
    tips_text: `Before starting, create two folders on your computer:<br><br><strong style="color:#fff;">📁 Original photos</strong> — your photos as they are.<br><strong style="color:#fff;">📁 Blurred photos</strong> — the photos once processed.<br><br>This avoids accidentally overwriting your originals and simplifies your workflow.`,
    privacy_tip: `Your photo is processed directly in your browser, on your computer.<br><br>It is never sent over the internet or stored on a server. Even when the application is online, your images stay with you.`,
    modal_dl_title: "⬇️ Download the app",
    modal_dl_p1: `The <strong>installable Windows</strong> version of Face-Efface · Photo is available for people who support XiPiNOCODE on Tipeee — from <strong>€2</strong>.`,
    modal_dl_p2: "Linux and Android coming soon. 100% local, no data sent over the internet.",
    modal_dl_p3: `<strong>What your donations help develop:</strong><br>— Video version — automatic video blurring<br>— Regular updates and new privacy protection tools`,
    modal_dl_cta: "💛 Support &amp; download on Tipeee",
    float_btn: `💛 Download the app<br>Support on Tipeee`,
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
    lbl_detecting:  "Analizando…",
    lbl_blurring:   "Procesando…",
    lbl_detect_def: "Detección automática de rostros",
    lbl_auto_def:   "Detección y desenfoque automático",
    zone_s: "área activa",
    zone_p: "áreas activas",
    modes_desc: `<span style="color:#fff;font-weight:800;">Modo 1 — Manual:</span> traza un rectángulo sobre la foto para definir una zona a difuminar. <span style="color:var(--cyan);">Intro</span> para aplicar, <span style="color:var(--cyan);">Esc</span> para deseleccionar.<br><br><span style="color:#fff;font-weight:800;">Modo 2 — IA Detección:</span> la IA detecta los rostros y coloca los marcos. Haz clic en los que deseas difuminar para seleccionarlos, la cruz roja para eliminar uno. Ajusta la intensidad y aplica.<br><br><span style="color:var(--dim);">Los marcos en <span style="color:#ff6a00;font-weight:800;">naranja</span> están seleccionados (se difuminarán), los marcos en <span style="color:var(--cyan);">azul</span> están inactivos. Haz clic para alternar.</span><br><br><span style="color:var(--dim);">En los modos 1 y 2, una <span style="color:var(--cyan);">rueda de ajuste</span> aparece en el centro de la consola cuando se selecciona una zona — permite ajustar la intensidad del desenfoque antes de aplicar.</span><br><br><span style="color:#fff;font-weight:800;">Modo 3 — IA Desenfoque completo:</span> la IA detecta y desenfoca todos los rostros en un solo clic.`,
    tips_text: `Antes de empezar, crea dos carpetas en tu ordenador:<br><br><strong style="color:#fff;">📁 Fotos originales</strong> — tus fotos tal como están.<br><strong style="color:#fff;">📁 Fotos difuminadas</strong> — las fotos una vez procesadas.<br><br>Esto evita sobrescribir tus originales por accidente y simplifica tu flujo de trabajo.`,
    privacy_tip: `Tu foto se procesa directamente en tu navegador, en tu ordenador.<br><br>Nunca se envía por internet ni se almacena en un servidor. Incluso cuando la aplicación está en línea, tus imágenes permanecen en tu dispositivo.`,
    modal_dl_title: "⬇️ Descargar la app",
    modal_dl_p1: `La versión <strong>instalable para Windows</strong> de Face-Efface · Photo está disponible para quienes apoyan a XiPiNOCODE en Tipeee — desde <strong>2 €</strong>.`,
    modal_dl_p2: "Linux y Android próximamente. 100 % local, sin datos enviados a internet.",
    modal_dl_p3: `<strong>En qué se invierten tus donaciones:</strong><br>— Versión Vídeo — desenfoque automático en vídeo<br>— Actualizaciones regulares y nuevas herramientas de privacidad`,
    modal_dl_cta: "💛 Apoyar &amp; descargar en Tipeee",
    float_btn: `💛 Descargar la app<br>Apoyar en Tipeee`,
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
    lbl_detecting:  "Analisi…",
    lbl_blurring:   "In corso…",
    lbl_detect_def: "Rilevamento automatico dei volti",
    lbl_auto_def:   "Rilevamento e sfocatura automatica",
    zone_s: "area attiva",
    zone_p: "aree attive",
    modes_desc: `<span style="color:#fff;font-weight:800;">Modalità 1 — Manuale:</span> traccia un rettangolo sulla foto per definire un'area da sfocare. <span style="color:var(--cyan);">Invio</span> per applicare, <span style="color:var(--cyan);">Esc</span> per deselezionare.<br><br><span style="color:#fff;font-weight:800;">Modalità 2 — IA Rilevamento:</span> l'IA rileva i volti e posiziona i riquadri. Clicca su quelli che vuoi sfocare per selezionarli, la croce rossa per rimuoverne uno. Regola l'intensità e applica.<br><br><span style="color:var(--dim);">I riquadri in <span style="color:#ff6a00;font-weight:800;">arancione</span> sono selezionati (verranno sfocati), i riquadri in <span style="color:var(--cyan);">blu</span> sono inattivi. Clicca per alternare.</span><br><br><span style="color:var(--dim);">Nelle modalità 1 e 2, una <span style="color:var(--cyan);">rotella di regolazione</span> appare al centro della console quando un'area è selezionata — consente di regolare l'intensità della sfocatura prima di applicare.</span><br><br><span style="color:#fff;font-weight:800;">Modalità 3 — IA Sfocatura completa:</span> l'IA rileva e sfocia tutti i volti con un solo clic.`,
    tips_text: `Prima di iniziare, crea due cartelle sul tuo computer:<br><br><strong style="color:#fff;">📁 Foto originali</strong> — le tue foto così come sono.<br><strong style="color:#fff;">📁 Foto sfocate</strong> — le foto una volta elaborate.<br><br>Questo evita di sovrascrivere accidentalmente gli originali e semplifica il flusso di lavoro.`,
    privacy_tip: `La tua foto viene elaborata direttamente nel tuo browser, sul tuo computer.<br><br>Non viene mai inviata su internet né archiviata su un server. Anche quando l'applicazione è online, le tue immagini rimangono da te.`,
    modal_dl_title: "⬇️ Scarica l'app",
    modal_dl_p1: `La versione <strong>installabile per Windows</strong> di Face-Efface · Photo è disponibile per chi supporta XiPiNOCODE su Tipeee — a partire da <strong>2 €</strong>.`,
    modal_dl_p2: "Linux e Android in arrivo. 100% locale, nessun dato inviato su internet.",
    modal_dl_p3: `<strong>A cosa servono le tue donazioni:</strong><br>— Versione Video — sfocatura automatica su video<br>— Aggiornamenti regolari e nuovi strumenti per la privacy`,
    modal_dl_cta: "💛 Supporta &amp; scarica su Tipeee",
    float_btn: `💛 Scarica l'app<br>Supporta su Tipeee`,
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
    lbl_detecting:  "Analyse…",
    lbl_blurring:   "Verarbeitung…",
    lbl_detect_def: "Automatische Gesichtserkennung",
    lbl_auto_def:   "Automatische Erkennung & Unschärfe",
    zone_s: "aktiver Bereich",
    zone_p: "aktive Bereiche",
    modes_desc: `<span style="color:#fff;font-weight:800;">Modus 1 — Manuell:</span> zeichnen Sie ein Rechteck auf das Foto, um einen Bereich zum Unschärfen zu definieren. <span style="color:var(--cyan);">Enter</span> zum Anwenden, <span style="color:var(--cyan);">Esc</span> zum Abwählen.<br><br><span style="color:#fff;font-weight:800;">Modus 2 — KI-Erkennung:</span> die KI erkennt Gesichter und platziert Rahmen. Klicken Sie auf die, die Sie unscharf machen möchten, das rote Kreuz zum Entfernen. Intensität anpassen und anwenden.<br><br><span style="color:var(--dim);">Rahmen in <span style="color:#ff6a00;font-weight:800;">Orange</span> sind ausgewählt (werden verpixelt), Rahmen in <span style="color:var(--cyan);">Blau</span> sind inaktiv. Klicken zum Umschalten.</span><br><br><span style="color:var(--dim);">In den Modi 1 und 2 erscheint ein <span style="color:var(--cyan);">Intensitätsregler</span> in der Mitte der Konsole, sobald ein Bereich ausgewählt ist — er ermöglicht die Anpassung der Unschärfe vor dem Anwenden.</span><br><br><span style="color:#fff;font-weight:800;">Modus 3 — Vollständige KI-Unschärfe:</span> die KI erkennt und verpixelt alle Gesichter mit einem Klick.`,
    tips_text: `Erstellen Sie vor dem Start zwei Ordner auf Ihrem Computer:<br><br><strong style="color:#fff;">📁 Originalfotos</strong> — Ihre Fotos wie sie sind.<br><strong style="color:#fff;">📁 Verpixelte Fotos</strong> — die Fotos nach der Bearbeitung.<br><br>So vermeiden Sie das versehentliche Überschreiben Ihrer Originale und vereinfachen Ihren Workflow.`,
    privacy_tip: `Ihr Foto wird direkt in Ihrem Browser auf Ihrem Computer verarbeitet.<br><br>Es wird niemals ins Internet gesendet oder auf einem Server gespeichert. Auch wenn die Anwendung online ist, bleiben Ihre Bilder bei Ihnen.`,
    modal_dl_title: "⬇️ App herunterladen",
    modal_dl_p1: `Die <strong>installierbare Windows-Version</strong> von Face-Efface · Photo ist für alle verfügbar, die XiPiNOCODE auf Tipeee unterstützen — ab <strong>2 €</strong>.`,
    modal_dl_p2: "Linux und Android folgen. 100 % lokal, keine Daten ins Internet gesendet.",
    modal_dl_p3: `<strong>Wofür Ihre Spenden verwendet werden:</strong><br>— Video-Version — automatische Video-Unschärfe<br>— Regelmäßige Updates und neue Datenschutztools`,
    modal_dl_cta: "💛 Unterstützen &amp; herunterladen auf Tipeee",
    float_btn: `💛 App herunterladen<br>Unterstützen auf Tipeee`,
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
    lbl_detecting:  "A analisar…",
    lbl_blurring:   "Em curso…",
    lbl_detect_def: "Deteção automática de rostos",
    lbl_auto_def:   "Deteção e desfoque automático",
    zone_s: "área ativa",
    zone_p: "áreas ativas",
    modes_desc: `<span style="color:#fff;font-weight:800;">Modo 1 — Manual:</span> trace um retângulo na foto para definir uma área a desfocar. <span style="color:var(--cyan);">Enter</span> para aplicar, <span style="color:var(--cyan);">Esc</span> para desselecionar.<br><br><span style="color:#fff;font-weight:800;">Modo 2 — IA Deteção:</span> a IA deteta os rostos e coloca os quadros. Clique nos que quer desfocar para os selecionar, a cruz vermelha para remover um. Ajuste a intensidade e aplique.<br><br><span style="color:var(--dim);">Os quadros a <span style="color:#ff6a00;font-weight:800;">laranja</span> estão selecionados (serão desfocados), os quadros a <span style="color:var(--cyan);">azul</span> estão inativos. Clique para alternar.</span><br><br><span style="color:var(--dim);">Nos modos 1 e 2, uma <span style="color:var(--cyan);">roda de ajuste</span> aparece no centro da consola quando uma área está selecionada — permite ajustar a intensidade do desfoque antes de aplicar.</span><br><br><span style="color:#fff;font-weight:800;">Modo 3 — IA Desfoque completo:</span> a IA deteta e desfoca todos os rostos com um clique.`,
    tips_text: `Antes de começar, crie duas pastas no seu computador:<br><br><strong style="color:#fff;">📁 Fotos originais</strong> — as suas fotos tal como estão.<br><strong style="color:#fff;">📁 Fotos desfocadas</strong> — as fotos após o tratamento.<br><br>Isto evita sobrescrever os seus originais por acidente e simplifica o seu fluxo de trabalho.`,
    privacy_tip: `A sua foto é processada diretamente no seu navegador, no seu computador.<br><br>Nunca é enviada pela internet nem armazenada num servidor. Mesmo quando a aplicação está online, as suas imagens ficam consigo.`,
    modal_dl_title: "⬇️ Descarregar a app",
    modal_dl_p1: `A versão <strong>instalável para Windows</strong> do Face-Efface · Photo está disponível para quem apoia o XiPiNOCODE no Tipeee — a partir de <strong>2 €</strong>.`,
    modal_dl_p2: "Linux e Android em breve. 100 % local, sem dados enviados pela internet.",
    modal_dl_p3: `<strong>O que as suas doações permitem desenvolver:</strong><br>— Versão Vídeo — desfoque automático em vídeo<br>— Atualizações regulares e novas ferramentas de privacidade`,
    modal_dl_cta: "💛 Apoiar &amp; descarregar no Tipeee",
    float_btn: `💛 Descarregar a app<br>Apoiar no Tipeee`,
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
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const val = (I18N[_lang] && I18N[_lang][key] !== undefined)
      ? I18N[_lang][key] : (I18N.fr[key] !== undefined ? I18N.fr[key] : '');
    el.textContent = '';
    el.appendChild(document.createRange().createContextualFragment(val));
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });

  const nameEl = document.getElementById('lang-name');
  if (nameEl) nameEl.textContent = LANG_NAMES[lang] || lang.toUpperCase();

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

document.addEventListener('DOMContentLoaded', function() {
  const saved    = localStorage.getItem('fe_lang');
  const browser  = (navigator.language || 'fr').slice(0, 2).toLowerCase();
  const detected = I18N[saved] ? saved : (I18N[browser] ? browser : 'fr');
  setLang(detected);
});
