/* =========================================================
   1. DAFTAR BINGKAI
   Mau tambah bingkai baru? Copy satu blok { ... } di bawah,
   ganti isinya, lalu taruh PNG-nya di folder "frames".
   ========================================================= */
// Pilihan tulisan logo
// isi    = teks baru untuk tiap grup tulisan
// posisi = (opsional) pindah ke posisi yAtas / yBawah milik tulisan itu
const PILIHAN_LOGO = [
  { nama: 'de Muse cohort',      isi: { 'logo-besar': 'DE\nMUSE', 'logo-kecil': 'cohort' },      posisi: { 'logo-kecil': 'yBawah' } },
  { nama: 'de Muse of the Year', isi: { 'logo-besar': 'DE\nMUSE', 'logo-kecil': 'of the Year' }, posisi: { 'logo-kecil': 'yBawah' } },
  { nama: 'member of de Muse',   isi: { 'logo-besar': 'DE\nMUSE', 'logo-kecil': 'member of' },   posisi: { 'logo-kecil': 'yAtas' } }
];

// Untuk bingkai Bubble: tulisan atas (Mallica) + tulisan bawah (Bubblegum)
// Untuk bingkai Today's Diary: username ikut berganti
const PILIHAN_LOGO_DIARY = [
  { nama: 'de Muse cohort',      isi: { 'username': '@demuse.cohort',    'username-label': '@demuse.cohort' } },
  { nama: 'de Muse of the Year', isi: { 'username': '@demuse.oftheyear', 'username-label': '@demuse.oftheyear' } },
  { nama: 'member of de Muse',   isi: { 'username': '@memberofdemuse',   'username-label': '@memberofdemuse' } }
];

const PILIHAN_LOGO_BUBBLE = [
  { nama: 'de Muse cohort',      isi: { 'logo-atas': 'DE MUSE',   'logo-bawah': 'COHORT' } },
  { nama: 'de Muse of the Year', isi: { 'logo-atas': 'DE MUSE',   'logo-bawah': 'OF THE YEAR' } },
  { nama: 'member of de Muse',   isi: { 'logo-atas': 'MEMBER OF', 'logo-bawah': 'DE MUSE' } }
];

const FRAMES = [
  {
    nama: "Today's Diary",
    gambar: 'frames/diary.png',
    lebar: 1080,
    tinggi: 1350,
    latar: '#fffcf0', // warna di luar kartu-kartu

    // Posisi lubang foto: x, y, lebar (w), tinggi (h), lengkungan sudut (r)
    slot: [
      { x: 108, y: 283, w: 379, h: 379, r: 0 },
      { x: 643, y: 617, w: 319, h: 318, r: 22 },
      { x: 58,  y: 892, w: 702, h: 444, r: 0 }
    ],

    // Semua tulisan — "label" = nama kolom isian, "teks" = isi awal
    // \n = pindah baris
    teks: [
      // Bar atas
      { label: 'Username', grup: 'username', teks: '@demuse.cohort', x: 138, y: 119, font: '700 30px Inter', warna: '#666666' },
      { label: 'Teks setelah username', teks: '  just posted a new story', ikuti: true, y: 119, font: '400 27px Inter', warna: '#7a7a7a' },

      // Kolom search
      { label: 'Kolom search', teks: 'sunday slow day bareng deMuse', x: 137, y: 212, font: '400 26px Inter', warna: '#5a5a5a' },

      // Tab
      { label: 'Tab atas', teks: "today's diary", x: 828, y: 236, rata: 'center', font: '800 42px Inter', warna: '#3a3a3a' },

      // Judul
      { label: 'Judul (tanpa ! dan ?)', teks: 'A DAY WITH\nDEMUSE', x: 790, y: 360, rata: 'center', font: '72px Mallica', warna: '#6d9c77', jarakBaris: 72 },

      // Paragraf
      {
        label: 'Paragraf', teks: 'hello hello!! happy sunday everyone 🌿 udah minum air putih belum hari ini? jangan lupa istirahat juga ya. hari ini anginnya sejuk banget, cocok buat jalan-jalan santai. kalian lagi ngapain nih?',
        x: 534, y: 474, font: '400 19px Inter', warna: '#7a7a7a', lebarMax: 460, jarakBaris: 26
      },

      // Bubble abu-abu
      { label: 'Bubble kamera (baris 1)', teks: 'fresh pic from', x: 278, y: 680, font: '400 27px Inter', warna: '#7a7a7a' },
      { label: 'Bubble kamera (baris 2)', teks: 'Singapore', x: 278, y: 712, font: '700 27px Inter', warna: '#7a7a7a' },

      // Now playing
      { label: 'Now playing', teks: 'now playing: Somewhere Only We Know', x: 115, y: 824, font: '400 22px Inter', warna: '#ffffff' },

      // Tombol view more
      { label: 'Tombol', teks: 'view more', x: 807, y: 1015, rata: 'center', font: '800 42px Inter', warna: '#3a3a3a' },

      // Label di foto kanan
      { label: 'Label di foto 2', grup: 'username-label', lebarPas: 106, teks: '@demuse.cohort', x: 719, y: 648, rata: 'center', font: '600 13px Inter', warna: '#333333' },

      // Bubble kuning di foto bawah
      { label: 'Bubble kuning 1', teks: 'jangan difoto dulu!"', x: 100, y: 930, font: '600 14px Inter', warna: '#3a3a3a' },
      { label: 'Bubble kuning 2', teks: 'posenya berantakan', x: 100, y: 972, font: '600 14px Inter', warna: '#3a3a3a' },

      // Tulisan tangan di dalam foto (putih + garis tepi gelap)
      { label: 'Tulisan foto 1 (atas)', teks: 'pura-pura\ncandid\npadahal\nudah take\n20x', x: 434, y: 307, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 1 (bawah)', teks: 'senyum dulu\nbiar\nkelihatan\nhappy', x: 158, y: 587, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 2', teks: "for my\nmom's\ngallery 💌", x: 905, y: 862, rata: 'center', font: '19px "Kopi Senja Script"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21, putar: 18 },
      { label: 'Tulisan foto 3', teks: 'be honest, outfit hari ini udah\nkayak anak indie belum? atau masih\nkayak mau ke warung? 🤔', x: 180, y: 1256, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 }
    ],

    pilihanTulisan: PILIHAN_LOGO_DIARY
  },

  {
    nama: "Today's Diary (Story)",
    gambar: 'frames/diary-story.png',
    lebar: 1080,
    tinggi: 1920,
    latar: '#fffcf0',

    // foto: 0 = slot ini memakai ulang foto nomor 1 (tidak dihitung sebagai foto baru)
    slot: [
      { x: 112, y: 307,  w: 378, h: 378, r: 0 },   // foto 1
      { x: 623, y: 666,  w: 317, h: 317, r: 22 },  // foto 2
      { x: 63,  y: 942,  w: 698, h: 443, r: 0 },   // foto 3
      { x: 196, y: 1519, w: 207, h: 310, r: 10 },  // foto 4 (carousel)
      { x: 435, y: 1519, w: 206, h: 310, r: 10 },  // foto 5 (carousel)
      { x: 672, y: 1519, w: 207, h: 310, r: 10 },  // foto 6 (carousel)
      { x: 70,  y: 88,   w: 58,  h: 58,  r: 29, foto: 0 } // foto profil bulat
    ],

    teks: [
      { label: 'Username', grup: 'username', teks: '@demuse.cohort', x: 138, y: 128, font: '700 30px Inter', warna: '#666666' },
      { label: 'Teks setelah username', teks: '  just posted instagram story', ikuti: true, y: 128, font: '400 27px Inter', warna: '#7a7a7a' },
      { label: 'Tombol kanan atas', teks: 'archive', x: 870, y: 128, font: '700 28px Inter', warna: '#6b6b6b' },
      { label: 'Kolom search', teks: 'sunday slow day bareng deMuse', x: 137, y: 236, font: '400 26px Inter', warna: '#5a5a5a' },
      { label: 'Tab atas', teks: "today's diary", x: 830, y: 260, rata: 'center', font: '800 42px Inter', warna: '#3a3a3a' },
      { label: 'Judul (tanpa ! dan ?)', teks: 'A DAY WITH\nDEMUSE', x: 790, y: 384, rata: 'center', font: '72px Mallica', warna: '#6d9c77', jarakBaris: 72 },
      {
        label: 'Paragraf',
        teks: 'hello hello!! happy sunday everyone 🌿 udah minum air putih belum hari ini? jangan lupa istirahat juga ya. hari ini anginnya sejuk banget, cocok buat jalan-jalan santai. kalian lagi ngapain nih?',
        x: 538, y: 497, font: '400 19px Inter', warna: '#7a7a7a', lebarMax: 460, jarakBaris: 26
      },
      { label: 'Bubble kamera (baris 1)', teks: 'fresh pic from', x: 255, y: 698, font: '400 27px Inter', warna: '#7a7a7a' },
      { label: 'Bubble kamera (baris 2)', teks: 'Singapore', x: 255, y: 730, font: '700 27px Inter', warna: '#7a7a7a' },
      { label: 'Now playing', teks: 'now playing: Somewhere Only We Know', x: 130, y: 857, font: '400 22px Inter', warna: '#ffffff' },
      { label: 'Tombol', teks: 'view more', x: 787, y: 1063, rata: 'center', font: '800 42px Inter', warna: '#3a3a3a' },
      { label: 'Label di foto 2', grup: 'username-label', lebarPas: 106, teks: '@demuse.cohort', x: 698, y: 697, rata: 'center', font: '600 13px Inter', warna: '#333333' },
      { label: 'Bubble kuning 1', teks: 'jangan difoto dulu!"', x: 105, y: 984, font: '600 14px Inter', warna: '#3a3a3a' },
      { label: 'Bubble kuning 2', teks: 'posenya berantakan', x: 105, y: 1028, font: '600 14px Inter', warna: '#3a3a3a' },
      { label: 'Tulisan foto 1 (atas)', teks: 'pura-pura\ncandid\npadahal\nudah take\n20x', x: 438, y: 331, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 1 (bawah)', teks: 'senyum dulu\nbiar\nkelihatan\nhappy', x: 162, y: 611, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 2', teks: "for my\nmom's\ngallery 💌", x: 885, y: 911, rata: 'center', font: '19px "Kopi Senja Script"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21, putar: 18 },
      { label: 'Tulisan foto 3', teks: 'be honest, outfit hari ini udah\nkayak anak indie belum? atau masih\nkayak mau ke warung? 🤔', x: 185, y: 1306, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 }
    ],

    pilihanTulisan: PILIHAN_LOGO_DIARY
  },

  {
    nama: 'Blue Cohort',
    gambar: 'frames/biru.png',
    lebar: 1080,
    tinggi: 1350,
    latar: '#c5d1dc', // biru soft keabu-abuan

    slot: [
      { x: 94,  y: 129, w: 401, h: 379, r: 20 },
      { x: 94,  y: 548, w: 401, h: 378, r: 20 },
      { x: 584, y: 382, w: 401, h: 378, r: 20 },
      { x: 585, y: 805, w: 400, h: 378, r: 20 }
    ],

    teks: [
      { label: 'Logo atas', grup: 'logo-besar', teks: 'DE\nMUSE', x: 780, y: 167, rata: 'center', font: '900 40px Unbounded', warna: '#2359b4', jarakBaris: 27 },
      { label: 'Tulisan kecil logo atas', grup: 'logo-kecil', teks: 'cohort', x: 780, y: 207, yBawah: 207, yAtas: 126, rata: 'center', font: 'italic 400 26px "Playfair Display"', warna: '#08204a' },
      { label: 'Logo bawah', grup: 'logo-besar', teks: 'DE\nMUSE', x: 289, y: 1029, rata: 'center', font: '900 40px Unbounded', warna: '#2359b4', jarakBaris: 27 },
      { label: 'Tulisan kecil logo bawah', grup: 'logo-kecil', teks: 'cohort', x: 289, y: 1069, yBawah: 1069, yAtas: 988, rata: 'center', font: 'italic 400 26px "Playfair Display"', warna: '#08204a' }
    ],

    pilihanTulisan: PILIHAN_LOGO
  },

  {
    nama: 'Blue Cohort (Story)',
    gambar: 'frames/biru-story.png',
    lebar: 1080,
    tinggi: 1920,
    latar: '#c5d1dc',

    // putar = kemiringan foto (derajat), minus = miring ke kiri
    slot: [
      { x: 123, y: 198,  w: 341, h: 340, r: 0, putar: 1.5 },
      { x: 118, y: 645,  w: 341, h: 340, r: 0, putar: -8 },
      { x: 123, y: 1079, w: 341, h: 340, r: 0, putar: 5.9 },
      { x: 632, y: 517,  w: 341, h: 340, r: 0, putar: 1.5 },
      { x: 626, y: 964,  w: 341, h: 340, r: 0, putar: -8 },
      { x: 632, y: 1398, w: 341, h: 340, r: 0, putar: 5.9 }
    ],

    teks: [
      { label: 'Logo atas', grup: 'logo-besar', teks: 'DE\nMUSE', x: 777, y: 195, rata: 'center', font: '900 56px Unbounded', warna: '#2359b4', jarakBaris: 40 },
      { label: 'Tulisan kecil logo atas', grup: 'logo-kecil', teks: 'cohort', x: 777, y: 252, yBawah: 252, yAtas: 144, rata: 'center', font: 'italic 400 36px "Playfair Display"', warna: '#08204a' },
      { label: 'Logo bawah', grup: 'logo-besar', teks: 'DE\nMUSE', x: 290, y: 1545, rata: 'center', font: '900 56px Unbounded', warna: '#2359b4', jarakBaris: 40 },
      { label: 'Tulisan kecil logo bawah', grup: 'logo-kecil', teks: 'cohort', x: 290, y: 1602, yBawah: 1602, yAtas: 1494, rata: 'center', font: 'italic 400 36px "Playfair Display"', warna: '#08204a' }
    ],

    pilihanTulisan: PILIHAN_LOGO
  }

  ,{
    nama: 'Bubble Cohort',
    gambar: 'frames/bubble.png',
    lebar: 1080,
    tinggi: 1350,
    latar: '#fff0f4', // pink soft hampir putih

    slot: [
      { x: 99,  y: 166, w: 291, h: 290, r: 0 },
      { x: 209, y: 529, w: 291, h: 290, r: 0 },
      { x: 122, y: 893, w: 291, h: 290, r: 0 },
      { x: 690, y: 165, w: 292, h: 291, r: 0, putar: 2.2 },
      { x: 588, y: 529, w: 292, h: 291, r: 0, putar: -3.2 },
      { x: 690, y: 893, w: 292, h: 291, r: 0, putar: 5.4 }
    ],

    // lebarPas = tulisan otomatis mengecil kalau lebih lebar dari ini
    teks: [
      { label: 'Logo atas',  grup: 'logo-atas',  teks: 'DE MUSE', x: 541, y: 103, rata: 'center', font: '58px Mallica',   warna: '#342d2b', lebarPas: 300 },
      { label: 'Logo bawah', grup: 'logo-bawah', teks: 'COHORT',  x: 542, y: 159, rata: 'center', font: '60px Bubblegum', warna: '#0846ab', lebarPas: 300 }
    ],

    pilihanTulisan: PILIHAN_LOGO_BUBBLE
  },

  {
    nama: 'Bubble Cohort (Story)',
    gambar: 'frames/bubble-story.png',
    lebar: 1080,
    tinggi: 1920,
    latar: '#fff0f4',

    slot: [
      { x: 79,  y: 175,  w: 329, h: 328, r: 0, putar: 1.6 },
      { x: 153, y: 614,  w: 329, h: 328, r: 0, putar: 1.6 },
      { x: 70,  y: 1047, w: 329, h: 328, r: 0, putar: 1.6 },
      { x: 147, y: 1451, w: 329, h: 328, r: 0, putar: 1.6 },
      { x: 617, y: 201,  w: 329, h: 328, r: 0, putar: 1.6 },
      { x: 631, y: 609,  w: 329, h: 328, r: 0, putar: -7.4 },
      { x: 650, y: 1038, w: 329, h: 329, r: 0, putar: 9.4 },
      { x: 621, y: 1466, w: 329, h: 328, r: 0, putar: -7.6 }
    ],

    teks: [
      { label: 'Logo atas',  grup: 'logo-atas',  teks: 'DE MUSE', x: 541, y: 94,  rata: 'center', font: '58px Mallica',   warna: '#342d2b', lebarPas: 300 },
      { label: 'Logo bawah', grup: 'logo-bawah', teks: 'COHORT',  x: 542, y: 154, rata: 'center', font: '60px Bubblegum', warna: '#aec134', lebarPas: 300 }
    ],

    pilihanTulisan: PILIHAN_LOGO_BUBBLE
  }

  // , { ...bingkai berikutnya di sini... }
];


/* =========================================================
   1b. DAFTAR FILTER
   Racik sendiri: brightness, contrast, saturate, sepia,
   grayscale, hue-rotate, blur — boleh dicampur
   ========================================================= */
const FILTER = [
  { nama: 'Normal',  nilai: 'none' },
  { nama: 'Hangat',  nilai: 'sepia(0.25) saturate(1.2) brightness(1.05)' },
  { nama: 'Vintage', nilai: 'sepia(0.45) contrast(0.9) brightness(1.05)' },
  { nama: 'Soft',    nilai: 'brightness(1.1) contrast(0.85) saturate(0.9)' },
  { nama: 'Cerah',   nilai: 'brightness(1.12) saturate(1.3) contrast(1.05)' },
  { nama: 'Dingin',  nilai: 'hue-rotate(-12deg) saturate(0.9) brightness(1.05)' },
  { nama: 'B&W',     nilai: 'grayscale(1) contrast(1.1)' }
];


/* =========================================================
   1c. PILIHAN WARNA TULISAN
   ========================================================= */
const WARNA = [
  '#3a3a3a', '#ffffff', '#7a7a7a', '#342d2b',
  '#2359b4', '#0846ab', '#6d9c77', '#aec134',
  '#ee598f', '#f7a8c4', '#f7c948', '#c0392b'
];


/* =========================================================
   2. ELEMEN & DATA
   ========================================================= */
const $ = id => document.getElementById(id);

const canvas = $('canvas');
const ctx = canvas.getContext('2d');
const stage = $('stage');
const canvasWrap = $('canvasWrap');
const sorot = $('sorot');
const video = $('camera');
const kameraAlat = $('kameraAlat');
const hitungEl = $('hitung');
const tip = $('tip');

const frameList = $('frameList');
const filterList = $('filterList');
const logoList = $('logoList');
const tabLogo = $('tabLogo');

const fileInput = $('fileInput');
const gantiInput = $('gantiInput');
const btnShutter = $('btnShutter');
const btnReset = $('btnReset');
const btnDownload = $('btnDownload');
const countEl = $('count');
const maxEl = $('max');
const infoFoto = $('infoFoto');

const editorTeks = $('editorTeks');
const editorFont = $('editorFont');
const editorWarna = $('editorWarna');
const warnaBebas = $('warnaBebas');
const zoomFoto = $('zoomFoto');
const btnUndo = $('btnUndo');
const btnRedo = $('btnRedo');

let frameAktif = FRAMES[0];
let gambarFrame = new Image();
let fotoList = [];           // foto user (boleh ada yang kosong di tengah)
let filterAktif = FILTER[0];
let tabAktif = 'bingkai';

let teksAktif = null;        // tulisan yang sedang diedit
let slotAktif = null;        // nomor slot foto yang sedang diatur

let stream = null;           // kamera
let kameraDepan = true;
let sedangJepret = false;

const filterDidukung = 'filter' in ctx; // iPhone/Safari: belum


/* =========================================================
   2b. UNDO & REDO
   Sebelum ada perubahan, keadaan sekarang dicatat dulu.
   ========================================================= */
let riwayat = []; // keadaan-keadaan sebelumnya (untuk undo)
let maju = [];    // keadaan yang di-undo (untuk redo)

// Foto keadaan sekarang: tulisan, posisi foto, filter, bingkai
function ambilKeadaan() {
  return JSON.stringify({
    frame: FRAMES.indexOf(frameAktif),
    filter: FILTER.indexOf(filterAktif),
    atur: frameAktif.atur || {},
    teks: frameAktif.teks.map(t => ({
      teks: t.teks, x: t.x, y: t.y, font: t.font,
      warna: t.warna, ikuti: t.ikuti, jarakBaris: t.jarakBaris
    }))
  });
}

// Panggil SEBELUM mengubah sesuatu
function catat() {
  const k = ambilKeadaan();
  if (riwayat[riwayat.length - 1] !== k) riwayat.push(k);
  if (riwayat.length > 60) riwayat.shift(); // simpan 60 langkah terakhir
  maju = [];
  updateUndo();
}

function terapkanKeadaan(k) {
  const d = JSON.parse(k);
  const frame = FRAMES[d.frame];
  frame.atur = d.atur;
  frame.teks.forEach((t, i) => Object.assign(t, d.teks[i]));
  pilihFilter(FILTER[d.filter]);

  if (frame !== frameAktif) pilihFrame(frame);
  else {
    selesaiEdit();
    buatPilihanLogo();
    gambarSemua();
  }
}

function undo() {
  const sekarang = ambilKeadaan();
  // lewati catatan yang sama dengan keadaan sekarang
  while (riwayat.length && riwayat[riwayat.length - 1] === sekarang) riwayat.pop();
  if (!riwayat.length) return updateUndo();
  maju.push(sekarang);
  terapkanKeadaan(riwayat.pop());
  updateUndo();
}

function redo() {
  if (!maju.length) return;
  riwayat.push(ambilKeadaan());
  terapkanKeadaan(maju.pop());
  updateUndo();
}

function updateUndo() {
  btnUndo.disabled = !riwayat.some(k => k !== ambilKeadaan());
  btnRedo.disabled = !maju.length;
}

btnUndo.addEventListener('click', undo);
btnRedo.addEventListener('click', redo);

// Keyboard laptop: Ctrl+Z = undo, Ctrl+Shift+Z / Ctrl+Y = redo
document.addEventListener('keydown', (e) => {
  if (!(e.ctrlKey || e.metaKey) || e.target === editorTeks) return;
  const k = e.key.toLowerCase();
  if (k === 'z' && !e.shiftKey) { e.preventDefault(); undo(); }
  if ((k === 'z' && e.shiftKey) || k === 'y') { e.preventDefault(); redo(); }
});


/* =========================================================
   3. TAB & PANEL BAWAH
   ========================================================= */
document.querySelectorAll('.tabs button').forEach(btn => {
  btn.addEventListener('click', () => bukaTab(btn.dataset.tab));
});

function bukaTab(nama) {
  tabAktif = nama;
  lepasPilihan();
  tampilkanPanel(nama);
  document.querySelectorAll('.tabs button').forEach(b => {
    b.classList.toggle('on', b.dataset.tab === nama);
  });
}

// Tampilkan satu panel di bawah (bingkai/foto/filter/logo/teks/atur)
function tampilkanPanel(nama) {
  document.querySelectorAll('.panel').forEach(p => {
    p.classList.toggle('on', p.dataset.panel === nama);
  });
}

// Selesai mengedit tulisan / foto → kembali ke tab terakhir
function lepasPilihan() {
  teksAktif = null;
  slotAktif = null;
  sorot.style.display = 'none';
}

function selesaiEdit() {
  lepasPilihan();
  tampilkanPanel(tabAktif);
}


/* =========================================================
   4. DAFTAR BINGKAI
   ========================================================= */
FRAMES.forEach((frame, i) => {
  const btn = document.createElement('button');
  btn.className = 'frame-item' + (i === 0 ? ' active' : '');
  btn.innerHTML = `<img src="${frame.gambar}" alt="">${frame.nama}`;

  btn.addEventListener('click', () => {
    if (frame === frameAktif) return;
    catat();
    pilihFrame(frame);
  });

  frameList.appendChild(btn);
});

// Jumlah foto yang perlu diisi user (slot "foto: x" tidak dihitung)
function jumlahFoto(frame) {
  return frame.slot.filter(s => s.foto === undefined).length;
}

function pilihFrame(frame) {
  frameAktif = frame;
  document.querySelectorAll('.frame-item').forEach((b, i) => {
    b.classList.toggle('active', FRAMES[i] === frame);
  });
  frame.atur = frame.atur || {}; // posisi & zoom foto per slot
  fotoList = fotoList.slice(0, jumlahFoto(frame));
  canvas.width = frame.lebar;
  canvas.height = frame.tinggi;

  selesaiEdit();
  buatPilihanLogo();

  gambarFrame = new Image();
  gambarFrame.onload = () => {
    aturUkuranTampilan();
    updateTampilan();
    gambarSemua();
  };
  gambarFrame.src = frame.gambar;
}


/* =========================================================
   5. DAFTAR FILTER
   ========================================================= */
FILTER.forEach((f, i) => {
  const btn = document.createElement('button');
  btn.className = 'filter-item' + (i === 0 ? ' active' : '');

  const mini = document.createElement('canvas'); // preview kecil
  mini.width = 120;
  mini.height = 120;
  mini.style.filter = f.nilai;
  btn.appendChild(mini);
  btn.append(f.nama);

  btn.addEventListener('click', () => {
    if (f === filterAktif) return;
    catat();
    pilihFilter(f);
    gambarSemua();
  });

  filterList.appendChild(btn);
});

function pilihFilter(f) {
  filterAktif = f;
  document.querySelectorAll('.filter-item').forEach((b, i) => {
    b.classList.toggle('active', FILTER[i] === f);
  });
}

function perbaruiPreviewFilter() {
  const foto = fotoList.find(Boolean);
  filterList.querySelectorAll('canvas').forEach(mini => {
    const m = mini.getContext('2d');
    if (foto) {
      const sisi = Math.min(foto.width, foto.height);
      m.drawImage(foto, (foto.width - sisi) / 2, (foto.height - sisi) / 2, sisi, sisi, 0, 0, 120, 120);
    } else {
      const g = m.createLinearGradient(0, 0, 120, 120);
      g.addColorStop(0, '#f6c9a8');
      g.addColorStop(0.5, '#bfeac8');
      g.addColorStop(1, '#9fc9e8');
      m.fillStyle = g;
      m.fillRect(0, 0, 120, 120);
    }
  });
}


/* =========================================================
   6. PILIHAN TULISAN LOGO
   ========================================================= */
function buatPilihanLogo() {
  logoList.innerHTML = '';
  const pilihan = frameAktif.pilihanTulisan;

  // Bingkai tanpa pilihan logo → tab Logo disembunyikan
  tabLogo.style.display = pilihan ? '' : 'none';
  if (!pilihan) {
    if (tabAktif === 'logo') bukaTab('bingkai');
    return;
  }

  pilihan.forEach(p => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = p.nama;

    const cocok = frameAktif.teks.every(t => !(t.grup in p.isi) || t.teks === p.isi[t.grup]);
    if (cocok) btn.classList.add('active');

    btn.addEventListener('click', () => {
      catat();
      logoList.querySelectorAll('.opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      frameAktif.teks.forEach(t => {
        if (t.grup in p.isi) t.teks = p.isi[t.grup];
        const pos = p.posisi && p.posisi[t.grup];
        if (pos && t[pos] !== undefined) t.y = t[pos];
      });
      gambarSemua();
    });

    logoList.appendChild(btn);
  });
}

// Tulisan satu grup (logo atas & bawah) ikut berubah bersama
function samaGrup(t) {
  return t.grup ? frameAktif.teks.filter(x => x.grup === t.grup) : [t];
}


/* =========================================================
   7. MENGGAMBAR
   ========================================================= */

// Hitung bagian foto yang tampil di slot (bisa di-zoom & digeser)
function potongFoto(img, s, atur) {
  const rasio = s.w / s.h;
  let sw = img.width, sh = img.height;
  if (sw / sh > rasio) sw = sh * rasio; // foto lebih lebar dari slot
  else sh = sw / rasio;                  // foto lebih tinggi dari slot

  const z = atur ? atur.z : 1;
  sw /= z;
  sh /= z;

  // cx, cy = titik tengah (0–1), dibatasi supaya tidak keluar foto
  let cx = (atur ? atur.cx : 0.5) * img.width;
  let cy = (atur ? atur.cy : 0.5) * img.height;
  cx = Math.min(Math.max(cx, sw / 2), img.width - sw / 2);
  cy = Math.min(Math.max(cy, sh / 2), img.height - sh / 2);
  if (atur) {
    atur.cx = cx / img.width;
    atur.cy = cy / img.height;
  }

  return { sx: cx - sw / 2, sy: cy - sh / 2, sw, sh };
}

function gambarFoto(img, s, atur) {
  const { sx, sy, sw, sh } = potongFoto(img, s, atur);

  ctx.save();
  putarSlot(s);
  ctx.beginPath();
  ctx.roundRect(-s.w / 2, -s.h / 2, s.w, s.h, s.r);
  ctx.clip();

  if (filterDidukung || filterAktif.nilai === 'none') {
    ctx.filter = filterAktif.nilai; // filter hanya untuk foto
    ctx.drawImage(img, sx, sy, sw, sh, -s.w / 2, -s.h / 2, s.w, s.h);
    ctx.filter = 'none';
  } else {
    const hasil = fotoBerfilter(img, sx, sy, sw, sh, s.w, s.h); // iPhone
    ctx.drawImage(hasil, -s.w / 2, -s.h / 2, s.w, s.h);
  }
  ctx.restore();
}

/* ----- Filter manual (browser tanpa ctx.filter, misalnya iPhone) ----- */
function fotoBerfilter(img, sx, sy, sw, sh, w, h) {
  w = Math.round(w);
  h = Math.round(h);
  const kunci = [filterAktif.nilai, sx | 0, sy | 0, sw | 0, sh | 0, w, h].join('|');
  if (img._simpan && img._simpan.kunci === kunci) return img._simpan.hasil;

  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const x = c.getContext('2d');
  x.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
  const data = x.getImageData(0, 0, w, h);
  terapkanFilter(data.data, filterAktif.nilai);
  x.putImageData(data, 0, 0);

  img._simpan = { kunci, hasil: c }; // simpan 1 versi saja biar hemat memori
  return c;
}

// Matriks warna tiap jenis filter (rumus resmi CSS filter)
function matriksFilter(nama, n) {
  const a = 1 - Math.min(n, 1);
  if (nama === 'grayscale') return [
    0.2126 + 0.7874 * a, 0.7152 - 0.7152 * a, 0.0722 - 0.0722 * a,
    0.2126 - 0.2126 * a, 0.7152 + 0.2848 * a, 0.0722 - 0.0722 * a,
    0.2126 - 0.2126 * a, 0.7152 - 0.7152 * a, 0.0722 + 0.9278 * a
  ];
  if (nama === 'sepia') return [
    0.393 + 0.607 * a, 0.769 - 0.769 * a, 0.189 - 0.189 * a,
    0.349 - 0.349 * a, 0.686 + 0.314 * a, 0.168 - 0.168 * a,
    0.272 - 0.272 * a, 0.534 - 0.534 * a, 0.131 + 0.869 * a
  ];
  if (nama === 'saturate') return [
    0.213 + 0.787 * n, 0.715 - 0.715 * n, 0.072 - 0.072 * n,
    0.213 - 0.213 * n, 0.715 + 0.285 * n, 0.072 - 0.072 * n,
    0.213 - 0.213 * n, 0.715 - 0.715 * n, 0.072 + 0.928 * n
  ];
  if (nama === 'hue-rotate') {
    const r = n * Math.PI / 180, cos = Math.cos(r), sin = Math.sin(r);
    return [
      0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928,
      0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283,
      0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072
    ];
  }
  return null;
}

function terapkanFilter(px, nilai) {
  const langkah = [...nilai.matchAll(/([a-z-]+)\(([-\d.]+)/g)].map(m => [m[1], parseFloat(m[2])]);
  langkah.forEach(([nama, n]) => {
    const m = matriksFilter(nama, n);
    for (let i = 0; i < px.length; i += 4) {
      let r = px[i], g = px[i + 1], b = px[i + 2];
      if (m) {
        const r2 = m[0] * r + m[1] * g + m[2] * b;
        const g2 = m[3] * r + m[4] * g + m[5] * b;
        const b2 = m[6] * r + m[7] * g + m[8] * b;
        r = r2; g = g2; b = b2;
      } else if (nama === 'brightness') {
        r *= n; g *= n; b *= n;
      } else if (nama === 'contrast') {
        const t = 128 * (1 - n);
        r = r * n + t; g = g * n + t; b = b * n + t;
      }
      px[i] = r; px[i + 1] = g; px[i + 2] = b;
    }
  });
}

// Titik (0,0) dipindah ke tengah slot, lalu diputar kalau ada "putar"
function putarSlot(s) {
  ctx.translate(s.x + s.w / 2, s.y + s.h / 2);
  if (s.putar) ctx.rotate(s.putar * Math.PI / 180);
}

// Kotak kosong bernomor
function gambarSlotKosong(s, nomor) {
  ctx.save();
  putarSlot(s);
  ctx.fillStyle = '#e4ecef';
  ctx.beginPath();
  ctx.roundRect(-s.w / 2, -s.h / 2, s.w, s.h, s.r);
  ctx.fill();
  ctx.fillStyle = '#b8c6cc';
  ctx.font = `800 ${Math.min(80, s.h / 2)}px Inter`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(nomor, 0, 0);
  ctx.restore();
}

// Pecah kalimat panjang jadi beberapa baris
function bungkusTeks(teks, lebarMax) {
  const kata = teks.split(' ');
  const baris = [];
  let sekarang = '';
  kata.forEach(k => {
    const coba = sekarang ? sekarang + ' ' + k : k;
    if (ctx.measureText(coba).width > lebarMax && sekarang) {
      baris.push(sekarang);
      sekarang = k;
    } else {
      sekarang = coba;
    }
  });
  baris.push(sekarang);
  return baris;
}

// Tulis semua teks
function gambarTeks(daftar) {
  let ujungKanan = 0; // untuk teks yang "ikuti"

  daftar.forEach(t => {
    ctx.save();
    ctx.font = t.font;
    ctx.fillStyle = t.warna;
    ctx.textAlign = t.rata || 'left';

    const x = t.ikuti ? ujungKanan : t.x;
    t._x = x;
    const jarak = t.jarakBaris || 0;

    let baris = t.teks.split('\n');
    if (t.lebarMax) baris = bungkusTeks(t.teks, t.lebarMax);

    let ukuran = parseInt(t.font.match(/(\d+)px/)[1]);
    let lebar = Math.max(...baris.map(b => ctx.measureText(b).width), 40);

    // lebarPas: kalau kepanjangan, tulisan dikecilkan supaya muat
    let skala = 1;
    if (t.lebarPas && lebar > t.lebarPas) {
      skala = t.lebarPas / lebar;
      lebar = t.lebarPas;
      ukuran *= skala;
    }

    let kiri = x;
    if (ctx.textAlign === 'center') kiri = x - lebar / 2;
    if (ctx.textAlign === 'right') kiri = x - lebar;
    t._kotak = {
      x: kiri - 6,
      y: t.y - ukuran - 4,
      w: lebar + 12,
      h: ukuran * 1.3 + (baris.length - 1) * jarak * skala + 8
    };

    ctx.translate(x, t.y);
    if (t.putar) ctx.rotate(t.putar * Math.PI / 180);
    if (skala < 1) ctx.scale(skala, skala);

    baris.forEach((b, i) => {
      if (t.garis) {
        ctx.strokeStyle = t.garis;
        ctx.lineWidth = 3;
        ctx.lineJoin = 'round';
        ctx.strokeText(b, 0, i * jarak);
      }
      ctx.fillText(b, 0, i * jarak);
    });

    ujungKanan = x + ctx.measureText(baris[baris.length - 1]).width;
    ctx.restore();
  });
}

// Gambar semuanya: foto → bingkai → teks
function gambarSemua() {
  const f = frameAktif;
  ctx.fillStyle = f.latar || '#ffffff';
  ctx.fillRect(0, 0, f.lebar, f.tinggi);

  // Dari slot terakhir, supaya slot bernomor kecil ada di atas
  for (let i = f.slot.length - 1; i >= 0; i--) {
    const s = f.slot[i];
    const nomor = s.foto ?? i;
    if (fotoList[nomor]) gambarFoto(fotoList[nomor], s, f.atur[i]);
    else gambarSlotKosong(s, nomor + 1);
  }

  ctx.drawImage(gambarFrame, 0, 0, f.lebar, f.tinggi);
  gambarTeks(f.teks);
  posisikanSorot();
  if (!aksi) updateUndo();
}

// Ukuran tampilan canvas: dibuat pas dengan ruang yang tersedia
function aturUkuranTampilan() {
  const ruangW = stage.clientWidth - 28;
  const ruangH = stage.clientHeight - 8;
  const skala = Math.min(ruangW / canvas.width, ruangH / canvas.height);
  canvasWrap.style.width = canvas.width * skala + 'px';
  canvasWrap.style.height = canvas.height * skala + 'px';
  posisikanSorot();
}
window.addEventListener('resize', aturUkuranTampilan);


/* =========================================================
   8. KETUK & GESER DI GAMBAR
   ========================================================= */

// Posisi jari/mouse (layar) → posisi di canvas
function titikCanvas(e) {
  const rect = canvas.getBoundingClientRect();
  const skala = canvas.width / rect.width;
  return { x: (e.clientX - rect.left) * skala, y: (e.clientY - rect.top) * skala };
}

function cariTeks(p) {
  return [...frameAktif.teks].reverse().find(t => {
    const k = t._kotak;
    return k && p.x >= k.x && p.x <= k.x + k.w && p.y >= k.y && p.y <= k.y + k.h;
  });
}

// Ubah titik canvas ke koordinat di dalam slot (memperhitungkan kemiringan)
function titikDiSlot(p, s) {
  const a = -(s.putar || 0) * Math.PI / 180;
  const dx = p.x - (s.x + s.w / 2);
  const dy = p.y - (s.y + s.h / 2);
  return {
    x: dx * Math.cos(a) - dy * Math.sin(a),
    y: dx * Math.sin(a) + dy * Math.cos(a)
  };
}

// Cari slot foto di titik itu (yang paling depan dicek dulu)
function cariSlot(p) {
  const slot = frameAktif.slot;
  for (let i = 0; i < slot.length; i++) {
    const q = titikDiSlot(p, slot[i]);
    if (Math.abs(q.x) <= slot[i].w / 2 && Math.abs(q.y) <= slot[i].h / 2) return i;
  }
  return null;
}

// Kotak putus-putus mengikuti tulisan / foto yang dipilih
function posisikanSorot() {
  const s = canvas.clientWidth / canvas.width;
  let k = null, putar = 0;

  if (teksAktif) k = teksAktif._kotak;
  if (slotAktif !== null) {
    k = frameAktif.slot[slotAktif];
    putar = k.putar || 0;
  }
  if (!k) {
    sorot.style.display = 'none';
    return;
  }

  sorot.style.display = 'block';
  sorot.style.left = k.x * s + 'px';
  sorot.style.top = k.y * s + 'px';
  sorot.style.width = k.w * s + 'px';
  sorot.style.height = k.h * s + 'px';
  sorot.style.transform = `rotate(${putar}deg)`;
}

const jari = new Map(); // jari yang sedang menyentuh layar
let aksi = null;         // apa yang sedang dilakukan: geser tulisan / foto / cubit

canvas.addEventListener('pointerdown', (e) => {
  if (stream) return; // saat kamera menyala, gambar tidak bisa disentuh
  canvas.setPointerCapture(e.pointerId);
  jari.set(e.pointerId, titikCanvas(e));

  // Dua jari di foto yang dipilih → mode cubit (zoom)
  if (jari.size === 2 && slotAktif !== null) {
    const [a, b] = [...jari.values()];
    const atur = ambilAtur(slotAktif);
    catat();
    aksi = { jenis: 'cubit', jarak: Math.hypot(a.x - b.x, a.y - b.y), z: atur.z };
    return;
  }
  if (jari.size > 1) return;

  const p = titikCanvas(e);
  const t = cariTeks(p);
  if (t) {
    aksi = null;
    const sebelum = ambilKeadaan();
    if (t.ikuti) { t.x = t._x; t.ikuti = false; }
    aksi = { jenis: 'teks', t, dx: p.x - t.x, dy: p.y - t.y, mulai: p, pindah: false, sebelum };
    return;
  }

  const i = cariSlot(p);
  if (i !== null) {
    aksi = { jenis: 'foto', i, akhir: p, mulai: p, pindah: false };
    return;
  }

  aksi = { jenis: 'kosong' };
});

canvas.addEventListener('pointermove', (e) => {
  if (!jari.has(e.pointerId)) return;
  const p = titikCanvas(e);
  jari.set(e.pointerId, p);
  if (!aksi) return;

  if (aksi.jenis === 'cubit' && jari.size === 2) {
    const [a, b] = [...jari.values()];
    const atur = ambilAtur(slotAktif);
    atur.z = Math.min(3, Math.max(1, aksi.z * Math.hypot(a.x - b.x, a.y - b.y) / aksi.jarak));
    zoomFoto.value = atur.z;
    gambarSemua();
    return;
  }

  if (aksi.jenis === 'teks' || aksi.jenis === 'foto') {
    if (!aksi.pindah && Math.hypot(p.x - aksi.mulai.x, p.y - aksi.mulai.y) < 8) return;
    if (!aksi.pindah) {
      // mulai digeser → catat posisi lama
      if (aksi.sebelum) { riwayat.push(aksi.sebelum); maju = []; }
      else catat();
    }
    aksi.pindah = true;
  }

  if (aksi.jenis === 'teks') {
    if (teksAktif !== aksi.t) bukaEditorTeks(aksi.t, false);
    aksi.t.x = p.x - aksi.dx;
    aksi.t.y = p.y - aksi.dy;
    gambarSemua();
  }

  if (aksi.jenis === 'foto') {
    const s = frameAktif.slot[aksi.i];
    const img = fotoList[s.foto ?? aksi.i];
    if (!img) return;
    if (slotAktif !== aksi.i) pilihSlot(aksi.i);

    // Geser foto: ikuti arah jari (diputar balik sesuai kemiringan slot)
    const q1 = titikDiSlot(aksi.akhir, s);
    const q2 = titikDiSlot(p, s);
    const atur = ambilAtur(aksi.i);
    const { sw, sh } = potongFoto(img, s, atur);
    atur.cx -= (q2.x - q1.x) * (sw / s.w) / img.width;
    atur.cy -= (q2.y - q1.y) * (sh / s.h) / img.height;
    aksi.akhir = p;
    gambarSemua();
  }
});

function lepasJari(e) {
  jari.delete(e.pointerId);
  if (!aksi || jari.size > 0) return;

  // Cuma diketuk (tidak digeser)
  if (aksi.jenis === 'teks' && !aksi.pindah) bukaEditorTeks(aksi.t, true);
  if (aksi.jenis === 'foto' && !aksi.pindah) {
    const s = frameAktif.slot[aksi.i];
    if (fotoList[s.foto ?? aksi.i]) pilihSlot(aksi.i);
    else isiSlotKosong(s.foto ?? aksi.i); // slot kosong → pilih foto dari album
  }
  if (aksi.jenis === 'kosong') selesaiEdit();
  aksi = null;
  updateUndo();
}
canvas.addEventListener('pointerup', lepasJari);
canvas.addEventListener('pointercancel', lepasJari);


/* =========================================================
   9. EDIT TULISAN (panel bawah)
   ========================================================= */
function bukaEditorTeks(t, fokus) {
  slotAktif = null;
  teksAktif = t;
  editorTeks.value = t.teks;
  editorTeks.placeholder = t.label || '';
  editorFont.value = (t.font.startsWith('italic') ? 'italic|' : '') + t.font.match(/px (.+)$/)[1];
  warnaBebas.value = t.warna;
  tandaiWarna(t.warna);
  tampilkanPanel('teks');
  posisikanSorot();
  if (fokus) editorTeks.focus();
}

editorTeks.addEventListener('focus', catat); // catat sebelum mulai mengetik
editorTeks.addEventListener('input', () => {
  samaGrup(teksAktif).forEach(t => t.teks = editorTeks.value);
  gambarSemua();
});

editorFont.addEventListener('change', () => {
  catat();
  const bagian = editorFont.value.split('|');
  const nama = bagian.pop();
  const miring = bagian[0] === 'italic';
  samaGrup(teksAktif).forEach(t => {
    t.font = t.font.replace(/^italic /, '').replace(/px .+$/, 'px ' + nama);
    if (miring) t.font = 'italic ' + t.font;
  });
  document.fonts.load(teksAktif.font).finally(gambarSemua);
});

function ubahUkuran(selisih) {
  catat();
  samaGrup(teksAktif).forEach(t => {
    const lama = parseInt(t.font.match(/(\d+)px/)[1]);
    const baru = Math.max(8, lama + selisih);
    t.font = t.font.replace(/\d+px/, baru + 'px');
    if (t.jarakBaris) t.jarakBaris = Math.round(t.jarakBaris * baru / lama);
  });
  gambarSemua();
}
$('btnKecil').addEventListener('click', () => ubahUkuran(-2));
$('btnBesar').addEventListener('click', () => ubahUkuran(2));
$('btnSelesai').addEventListener('click', selesaiEdit);

// Kotak-kotak warna
WARNA.forEach(w => {
  const btn = document.createElement('button');
  btn.className = 'warna';
  btn.style.background = w;
  btn.dataset.warna = w;
  btn.addEventListener('click', () => gantiWarna(w));
  editorWarna.insertBefore(btn, editorWarna.lastElementChild); // sebelum 🎨
});

function gantiWarna(w) {
  catat();
  samaGrup(teksAktif).forEach(t => t.warna = w);
  warnaBebas.value = w;
  tandaiWarna(w);
  gambarSemua();
}

function tandaiWarna(w) {
  editorWarna.querySelectorAll('.warna').forEach(b => {
    b.classList.toggle('active', b.dataset.warna === w.toLowerCase());
  });
}
warnaBebas.addEventListener('input', () => gantiWarna(warnaBebas.value));


/* =========================================================
   10. ATUR FOTO: geser, zoom, ganti (panel bawah)
   ========================================================= */
function ambilAtur(i) {
  frameAktif.atur[i] = frameAktif.atur[i] || { z: 1, cx: 0.5, cy: 0.5 };
  return frameAktif.atur[i];
}

function pilihSlot(i) {
  teksAktif = null;
  slotAktif = i;
  zoomFoto.value = ambilAtur(i).z;
  tampilkanPanel('atur');
  posisikanSorot();
}

zoomFoto.addEventListener('pointerdown', catat);
zoomFoto.addEventListener('input', () => {
  ambilAtur(slotAktif).z = parseFloat(zoomFoto.value);
  gambarSemua();
});

$('btnResetFoto').addEventListener('click', () => {
  catat();
  frameAktif.atur[slotAktif] = { z: 1, cx: 0.5, cy: 0.5 };
  zoomFoto.value = 1;
  gambarSemua();
});

$('btnSelesaiFoto').addEventListener('click', selesaiEdit);

// Ganti foto di slot yang dipilih
let nomorGanti = null;
$('btnGantiFoto').addEventListener('click', () => {
  const s = frameAktif.slot[slotAktif];
  isiSlotKosong(s.foto ?? slotAktif);
});

function isiSlotKosong(nomor) {
  nomorGanti = nomor;
  gantiInput.click();
}

gantiInput.addEventListener('change', async () => {
  const file = gantiInput.files[0];
  gantiInput.value = '';
  if (!file || nomorGanti === null) return;
  fotoList[nomorGanti] = await createImageBitmap(file);
  // posisi slot yang memakai foto ini dikembalikan ke tengah
  frameAktif.slot.forEach((s, i) => {
    if ((s.foto ?? i) === nomorGanti) delete frameAktif.atur[i];
  });
  nomorGanti = null;
  setelahFotoBerubah();
});


/* =========================================================
   11. TAMBAH FOTO
   ========================================================= */
function jumlahTerisi() {
  return fotoList.filter(Boolean).length;
}

// Isi slot kosong pertama
function tambahFoto(foto) {
  const max = jumlahFoto(frameAktif);
  for (let i = 0; i < max; i++) {
    if (!fotoList[i]) {
      fotoList[i] = foto;
      setelahFotoBerubah();
      return true;
    }
  }
  return false;
}

function setelahFotoBerubah() {
  perbaruiPreviewFilter();
  updateTampilan();
  gambarSemua();
}

function updateTampilan() {
  const max = jumlahFoto(frameAktif);
  const terisi = jumlahTerisi();
  countEl.textContent = terisi;
  maxEl.textContent = max;
  btnDownload.disabled = terisi < max;
  btnShutter.classList.toggle('siap', !!stream);
  infoFoto.textContent = stream
    ? 'ketuk tombol bulat untuk jepret'
    : terisi < max ? 'ketuk tombol bulat untuk buka kamera' : 'lengkap! simpan dengan tombol ⬇';
}

fileInput.addEventListener('change', async () => {
  for (const file of fileInput.files) {
    const foto = await createImageBitmap(file);
    if (!tambahFoto(foto)) break;
  }
  fileInput.value = '';
});

btnReset.addEventListener('click', () => {
  fotoList = [];
  frameAktif.atur = {};
  selesaiEdit();
  setelahFotoBerubah();
});


/* =========================================================
   12. KAMERA
   ========================================================= */
async function bukaKamera() {
  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: kameraDepan ? 'user' : 'environment' },
      audio: false
    });
    video.srcObject = stream;
    video.classList.add('on');
    video.classList.toggle('cermin', kameraDepan);
    kameraAlat.classList.add('on');
    selesaiEdit();
  } catch (err) {
    stream = null;
    alert('Kamera tidak bisa dibuka. Pastikan izin kamera sudah diberikan ya.');
  }
  updateTampilan();
}

function tutupKamera() {
  if (stream) stream.getTracks().forEach(track => track.stop());
  stream = null;
  video.classList.remove('on');
  kameraAlat.classList.remove('on');
  updateTampilan();
}

const tunggu = ms => new Promise(r => setTimeout(r, ms));

btnShutter.addEventListener('click', async () => {
  if (!stream) {
    if (jumlahTerisi() >= jumlahFoto(frameAktif)) fotoList = []; // mulai ulang
    return bukaKamera();
  }
  if (sedangJepret) return;
  sedangJepret = true;

  // Hitung mundur besar di layar
  hitungEl.classList.add('on');
  for (let i = 3; i > 0; i--) {
    hitungEl.textContent = i;
    await tunggu(800);
  }
  hitungEl.classList.remove('on');

  const temp = document.createElement('canvas');
  temp.width = video.videoWidth;
  temp.height = video.videoHeight;
  const t = temp.getContext('2d');
  if (kameraDepan) {
    t.translate(temp.width, 0);
    t.scale(-1, 1);
  }
  t.drawImage(video, 0, 0);
  tambahFoto(temp);
  sedangJepret = false;

  // Sudah lengkap → kamera ditutup, hasil langsung kelihatan
  if (jumlahTerisi() >= jumlahFoto(frameAktif)) tutupKamera();
});

$('btnTutupKamera').addEventListener('click', tutupKamera);
$('btnBalik').addEventListener('click', () => {
  kameraDepan = !kameraDepan;
  tutupKamera();
  bukaKamera();
});


/* =========================================================
   13. DOWNLOAD
   ========================================================= */
btnDownload.addEventListener('click', () => {
  selesaiEdit();
  gambarSemua();
  canvas.toBlob(async (blob) => {
    const namaFile = `demuse-photobooth-${Date.now()}.png`;
    const file = new File([blob], namaFile, { type: 'image/png' });

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      try {
        await navigator.share({ files: [file], title: 'deMuse Photobooth' });
        return;
      } catch (err) {}
    }

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = namaFile;
    link.click();
    URL.revokeObjectURL(link.href);
  }, 'image/png');
});


/* =========================================================
   13b. DERETAN GESER DI LAPTOP
   Di HP cukup diusap. Di laptop: bisa pakai scroll mouse
   atau klik-tahan lalu tarik ke samping.
   ========================================================= */
document.querySelectorAll('.baris-geser').forEach(el => {
  // Scroll mouse (atas/bawah) → geser ke samping
  el.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  }, { passive: false });

  // Klik-tahan lalu tarik
  let tarik = null;
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse') return;
    tarik = { x: e.clientX, kiri: el.scrollLeft, pindah: false };
  });
  window.addEventListener('pointermove', (e) => {
    if (!tarik) return;
    const geser = e.clientX - tarik.x;
    if (Math.abs(geser) > 5) tarik.pindah = true;
    if (tarik.pindah) {
      el.scrollLeft = tarik.kiri - geser;
      el.classList.add('ditarik');
    }
  });
  window.addEventListener('pointerup', () => {
    if (!tarik) return;
    // habis ditarik → jangan sampai dianggap klik tombol
    if (tarik.pindah) {
      el.addEventListener('click', (e) => e.stopPropagation(), { capture: true, once: true });
    }
    tarik = null;
    el.classList.remove('ditarik');
  });
});


/* =========================================================
   14. MULAI — tunggu font siap dulu, baru gambar
   ========================================================= */
Promise.all([
  '72px Mallica', '17px "Kopi Senja"', '19px "Kopi Senja Script"',
  '400 20px Inter', '700 20px Inter', '800 20px Inter',
  '20px "Playfair Display"', 'italic 20px "Playfair Display"',
  '900 20px Unbounded', '20px Horizon', '20px Bubblegum', '20px "Anak Manja"'
].map(f => document.fonts.load(f))).finally(() => {
  perbaruiPreviewFilter();
  bukaTab('bingkai');
  pilihFrame(FRAMES[0]);
});
