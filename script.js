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
      { label: 'Username', teks: '@demuse.cohort', x: 138, y: 119, font: '700 30px Inter', warna: '#666666' },
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
      { label: 'Label di foto 2', teks: '@demuse.cohort', x: 719, y: 648, rata: 'center', font: '600 13px Inter', warna: '#333333' },

      // Bubble kuning di foto bawah
      { label: 'Bubble kuning 1', teks: 'jangan difoto dulu!"', x: 100, y: 930, font: '600 14px Inter', warna: '#3a3a3a' },
      { label: 'Bubble kuning 2', teks: 'posenya berantakan', x: 100, y: 972, font: '600 14px Inter', warna: '#3a3a3a' },

      // Tulisan tangan di dalam foto (putih + garis tepi gelap)
      { label: 'Tulisan foto 1 (atas)', teks: 'pura-pura\ncandid\npadahal\nudah take\n20x', x: 434, y: 307, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 1 (bawah)', teks: 'senyum dulu\nbiar\nkelihatan\nhappy', x: 158, y: 587, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 2', teks: "for my\nmom's\ngallery 💌", x: 905, y: 862, rata: 'center', font: '19px "Kopi Senja Script"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21, putar: 18 },
      { label: 'Tulisan foto 3', teks: 'be honest, outfit hari ini udah\nkayak anak indie belum? atau masih\nkayak mau ke warung? 🤔', x: 180, y: 1256, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 }
    ]
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
      { label: 'Username', teks: '@demuse.cohort', x: 138, y: 128, font: '700 30px Inter', warna: '#666666' },
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
      { label: 'Label di foto 2', teks: '@demuse.cohort', x: 698, y: 697, rata: 'center', font: '600 13px Inter', warna: '#333333' },
      { label: 'Bubble kuning 1', teks: 'jangan difoto dulu!"', x: 105, y: 984, font: '600 14px Inter', warna: '#3a3a3a' },
      { label: 'Bubble kuning 2', teks: 'posenya berantakan', x: 105, y: 1028, font: '600 14px Inter', warna: '#3a3a3a' },
      { label: 'Tulisan foto 1 (atas)', teks: 'pura-pura\ncandid\npadahal\nudah take\n20x', x: 438, y: 331, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 1 (bawah)', teks: 'senyum dulu\nbiar\nkelihatan\nhappy', x: 162, y: 611, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 },
      { label: 'Tulisan foto 2', teks: "for my\nmom's\ngallery 💌", x: 885, y: 911, rata: 'center', font: '19px "Kopi Senja Script"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21, putar: 18 },
      { label: 'Tulisan foto 3', teks: 'be honest, outfit hari ini udah\nkayak anak indie belum? atau masih\nkayak mau ke warung? 🤔', x: 185, y: 1306, rata: 'center', font: '17px "Kopi Senja"', warna: '#ffffff', garis: '#3a3a3a', jarakBaris: 21 }
    ]
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
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const frameList = document.getElementById('frameList');
const video = document.getElementById('camera');
const btnCamera = document.getElementById('btnCamera');
const btnSnap = document.getElementById('btnSnap');
const fileInput = document.getElementById('fileInput');
const btnReset = document.getElementById('btnReset');
const btnDownload = document.getElementById('btnDownload');
const countEl = document.getElementById('count');
const maxEl = document.getElementById('max');
const sorot = document.getElementById('sorot');
const editor = document.getElementById('editor');
const editorTeks = document.getElementById('editorTeks');
const editorFont = document.getElementById('editorFont');
const btnKecil = document.getElementById('btnKecil');
const btnBesar = document.getElementById('btnBesar');
const btnSelesai = document.getElementById('btnSelesai');
const editorWarna = document.getElementById('editorWarna');
const warnaBebas = document.getElementById('warnaBebas');
const filterList = document.getElementById('filterList');
const filterGroup = document.getElementById('filterGroup');
const logoGroup = document.getElementById('logoGroup');
const logoList = document.getElementById('logoList');

let frameAktif = FRAMES[0];
let gambarFrame = new Image();
let fotoList = [];
let stream = null;
let teksAktif = null; // tulisan yang sedang diedit
let filterAktif = FILTER[0];


// Jumlah foto yang perlu diisi user (slot "foto: x" tidak dihitung)
function jumlahFoto(frame) {
  return frame.slot.filter(s => s.foto === undefined).length;
}


/* =========================================================
   3. TOMBOL PILIH BINGKAI (dibuat otomatis)
   ========================================================= */
FRAMES.forEach((frame, i) => {
  const btn = document.createElement('button');
  btn.className = 'frame-item' + (i === 0 ? ' active' : '');
  btn.innerHTML = `<img src="${frame.gambar}" alt="">${frame.nama}`;

  btn.addEventListener('click', () => {
    document.querySelectorAll('.frame-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    pilihFrame(frame);
  });

  frameList.appendChild(btn);
});

/* =========================================================
   3b. TOMBOL PILIH FILTER (dibuat otomatis)
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
    document.querySelectorAll('.filter-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterAktif = f;
    gambarSemua();
  });

  filterList.appendChild(btn);
});

// Isi preview kecil dengan foto pertama (atau warna contoh kalau belum ada foto)
function perbaruiPreviewFilter() {
  filterList.querySelectorAll('canvas').forEach(mini => {
    const m = mini.getContext('2d');
    const foto = fotoList[0];

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

// Browser lama yang belum mendukung filter canvas → sembunyikan pilihan filter
if (!('filter' in ctx)) filterGroup.style.display = 'none';

function pilihFrame(frame) {
  frameAktif = frame;
  fotoList = fotoList.slice(0, jumlahFoto(frame)); // buang foto kelebihan
  canvas.width = frame.lebar;
  canvas.height = frame.tinggi;

  tutupEditor();
  buatPilihanLogo();

  gambarFrame = new Image();
  gambarFrame.onload = () => {
    updateTampilan();
    gambarSemua();
  };
  gambarFrame.src = frame.gambar;
}


/* =========================================================
   3c. PILIHAN TULISAN LOGO
   ========================================================= */
function buatPilihanLogo() {
  logoList.innerHTML = '';
  const pilihan = frameAktif.pilihanTulisan;

  // Bingkai tanpa pilihan logo → sembunyikan bagian ini
  logoGroup.style.display = pilihan ? 'block' : 'none';
  if (!pilihan) return;

  pilihan.forEach((p, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.textContent = p.nama;

    // tandai pilihan yang sedang dipakai
    const cocok = frameAktif.teks.every(t => !(t.grup in p.isi) || t.teks === p.isi[t.grup]);
    if (cocok) btn.classList.add('active');

    btn.addEventListener('click', () => {
      logoList.querySelectorAll('.opt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      frameAktif.teks.forEach(t => {
        if (t.grup in p.isi) t.teks = p.isi[t.grup];
        const pos = p.posisi && p.posisi[t.grup];
        if (pos && t[pos] !== undefined) t.y = t[pos];
      });
      tutupEditor();
      gambarSemua();
    });

    logoList.appendChild(btn);
  });
}

// Tulisan yang satu grup (misal logo atas & bawah) ikut berubah bersama
function samaGrup(t) {
  return t.grup ? frameAktif.teks.filter(x => x.grup === t.grup) : [t];
}


/* =========================================================
   4. MENGGAMBAR
   ========================================================= */

// Foto dipotong rapi seperti object-fit: cover
function gambarFoto(img, s) {
  const rasio = s.w / s.h;
  let sx = 0, sy = 0, sw = img.width, sh = img.height;

  if (sw / sh > rasio) {
    sw = sh * rasio;
    sx = (img.width - sw) / 2;
  } else {
    sh = sw / rasio;
    sy = (img.height - sh) / 2;
  }

  ctx.save();
  putarSlot(s); // pindah ke tengah slot & miringkan
  ctx.beginPath();
  ctx.roundRect(-s.w / 2, -s.h / 2, s.w, s.h, s.r);
  ctx.clip();
  ctx.filter = filterAktif.nilai; // filter hanya untuk foto
  ctx.drawImage(img, sx, sy, sw, sh, -s.w / 2, -s.h / 2, s.w, s.h);
  ctx.filter = 'none';
  ctx.restore();
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
  ctx.font = `800 ${Math.min(80, s.h / 2)}px Inter`; // angka mengecil di slot kecil
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
    t._x = x; // posisi x sebenarnya (dipakai saat digeser)
    const jarak = t.jarakBaris || 0;

    // Pisah baris: pakai \n, atau otomatis kalau ada lebarMax
    let baris = t.teks.split('\n');
    if (t.lebarMax) baris = bungkusTeks(t.teks, t.lebarMax);

    // Simpan kotak area tulisan → dipakai untuk deteksi klik
    let ukuran = parseInt(t.font.match(/(\d+)px/)[1]);
    let lebar = Math.max(...baris.map(b => ctx.measureText(b).width), 40);

    // lebarPas: kalau kepanjangan, tulisan dikecilkan supaya muat
    let skala = 1;
    if (t.lebarPas && lebar > t.lebarPas) {
      skala = t.lebarPas / lebar;
      lebar = t.lebarPas;
      ukuran = ukuran * skala;
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

    // Putar teks (derajat)
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
  ctx.fillStyle = f.latar || '#ffffff'; // warna latar belakang
  ctx.fillRect(0, 0, f.lebar, f.tinggi);

  // Digambar dari slot terakhir, supaya foto yang nomornya
  // lebih kecil selalu ada di atas kalau lubangnya bertumpuk
  for (let i = f.slot.length - 1; i >= 0; i--) {
    const s = f.slot[i];
    const nomor = s.foto ?? i; // pakai ulang foto lain kalau ada "foto: x"
    if (fotoList[nomor]) gambarFoto(fotoList[nomor], s);
    else gambarSlotKosong(s, nomor + 1);
  }

  ctx.drawImage(gambarFrame, 0, 0, f.lebar, f.tinggi);
  gambarTeks(f.teks);
}


/* =========================================================
   4b. EDIT TULISAN LANGSUNG DI GAMBAR
   ========================================================= */

// Ubah posisi klik (piksel layar) jadi posisi di canvas
function titikCanvas(e) {
  const rect = canvas.getBoundingClientRect();
  const skala = canvas.width / rect.width;
  return {
    x: (e.clientX - rect.left) * skala,
    y: (e.clientY - rect.top) * skala
  };
}

// Cari tulisan yang ada di titik itu
function cariTeks(p) {
  const daftar = [...frameAktif.teks].reverse(); // yang paling atas dicek dulu
  return daftar.find(t => {
    const k = t._kotak;
    return k && p.x >= k.x && p.x <= k.x + k.w && p.y >= k.y && p.y <= k.y + k.h;
  });
}

// Ambil nama font dari teks, contoh: '700 30px Inter' → 'Inter'
function namaFont(t) {
  return t.font.match(/px (.+)$/)[1];
}

function bukaEditor(t) {
  teksAktif = t;
  editorTeks.value = t.teks;
  editorTeks.placeholder = t.label || '';
  editorFont.value = (t.font.startsWith('italic') ? 'italic|' : '') + namaFont(t);
  warnaBebas.value = t.warna;
  tandaiWarna(t.warna);
  editor.style.display = 'block';
  sorot.style.display = 'block';
  posisikanEditor();
  editorTeks.focus();
}

function tutupEditor() {
  teksAktif = null;
  editor.style.display = 'none';
  sorot.style.display = 'none';
}

// Taruh kotak sorot & editor tepat di tulisan yang dipilih
function posisikanEditor() {
  if (!teksAktif) return;
  const k = teksAktif._kotak;
  const s = canvas.clientWidth / canvas.width; // skala canvas → layar

  sorot.style.left = k.x * s + 'px';
  sorot.style.top = k.y * s + 'px';
  sorot.style.width = k.w * s + 'px';
  sorot.style.height = k.h * s + 'px';

  // Editor di bawah tulisan; kalau mentok bawah, pindah ke atas
  let atas = (k.y + k.h) * s + 8;
  if (atas + editor.offsetHeight > canvas.clientHeight) {
    atas = k.y * s - editor.offsetHeight - 8;
  }
  let kiri = k.x * s;
  kiri = Math.max(0, Math.min(kiri, canvas.clientWidth - editor.offsetWidth));

  editor.style.top = Math.max(0, atas) + 'px';
  editor.style.left = kiri + 'px';
}

function gambarUlang() {
  gambarSemua();
  posisikanEditor();
}

// ===== KLIK & GESER TULISAN =====
let geser = null; // data saat tulisan sedang digeser

canvas.addEventListener('pointerdown', (e) => {
  const p = titikCanvas(e);
  const t = cariTeks(p);
  if (!t) {
    tutupEditor();
    return;
  }

  // Tulisan "ikuti" jadi punya posisi sendiri kalau dipegang
  if (t.ikuti) {
    t.x = t._x;
    t.ikuti = false;
  }

  geser = { t, dx: p.x - t.x, dy: p.y - t.y, mulai: p, pindah: false };
  canvas.setPointerCapture(e.pointerId);
});

canvas.addEventListener('pointermove', (e) => {
  const p = titikCanvas(e);

  // Tidak sedang menggeser → cuma ganti bentuk kursor
  if (!geser) {
    canvas.style.cursor = cariTeks(p) ? 'grab' : 'default';
    return;
  }

  // Baru dianggap "geser" kalau jarinya pindah lebih dari 8px
  const jauh = Math.hypot(p.x - geser.mulai.x, p.y - geser.mulai.y);
  if (!geser.pindah && jauh < 8) return;

  if (!geser.pindah) {
    geser.pindah = true;
    teksAktif = geser.t;
    editor.style.display = 'none';
    sorot.style.display = 'block';
    canvas.style.cursor = 'grabbing';
  }

  geser.t.x = p.x - geser.dx;
  geser.t.y = p.y - geser.dy;
  gambarUlang();
});

canvas.addEventListener('pointerup', () => {
  if (!geser) return;

  if (geser.pindah) {
    tutupEditor(); // selesai digeser
  } else {
    bukaEditor(geser.t); // cuma diketuk → buka editor
  }
  geser = null;
  canvas.style.cursor = 'grab';
});

// Di HP: kalau jari menyentuh tulisan, halaman jangan ikut scroll
canvas.addEventListener('touchstart', (e) => {
  if (cariTeks(titikCanvas(e.touches[0]))) e.preventDefault();
}, { passive: false });

// Mengetik
editorTeks.addEventListener('input', () => {
  samaGrup(teksAktif).forEach(t => t.teks = editorTeks.value);
  gambarUlang();
});

// Ganti font (ukuran & tebal tetap)
editorFont.addEventListener('change', () => {
  // Nilai bisa berupa 'italic|"Playfair Display"' → gaya miring + nama font
  const bagian = editorFont.value.split('|');
  const nama = bagian.pop();
  const miring = bagian[0] === 'italic';

  samaGrup(teksAktif).forEach(t => {
    t.font = t.font.replace(/^italic /, '');          // hapus miring lama
    t.font = t.font.replace(/px .+$/, 'px ' + nama);  // ganti nama font
    if (miring) t.font = 'italic ' + t.font;          // tambah miring kalau dipilih
  });
  document.fonts.load(teksAktif.font).finally(gambarUlang);
});

// ===== GANTI WARNA =====
// Bikin kotak-kotak warna di dalam editor
WARNA.forEach(w => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'warna';
  btn.style.background = w;
  btn.dataset.warna = w;
  btn.addEventListener('click', () => gantiWarna(w));
  editorWarna.insertBefore(btn, editorWarna.lastElementChild); // sebelum ikon 🎨
});

function gantiWarna(w) {
  samaGrup(teksAktif).forEach(t => t.warna = w);
  warnaBebas.value = w;
  tandaiWarna(w);
  gambarUlang();
}

// Tandai kotak warna yang sedang dipakai
function tandaiWarna(w) {
  editorWarna.querySelectorAll('.warna').forEach(b => {
    b.classList.toggle('active', b.dataset.warna === w.toLowerCase());
  });
}

// Warna bebas dari 🎨
warnaBebas.addEventListener('input', () => gantiWarna(warnaBebas.value));

// Perkecil / perbesar
function ubahUkuran(selisih) {
  samaGrup(teksAktif).forEach(t => {
    const lama = parseInt(t.font.match(/(\d+)px/)[1]);
    const baru = Math.max(8, lama + selisih);
    t.font = t.font.replace(/\d+px/, baru + 'px');
    if (t.jarakBaris) t.jarakBaris = Math.round(t.jarakBaris * baru / lama);
  });
  gambarUlang();
}
btnKecil.addEventListener('click', () => ubahUkuran(-2));
btnBesar.addEventListener('click', () => ubahUkuran(2));

// Selesai: tombol ✓, tombol Esc, atau klik di luar
btnSelesai.addEventListener('click', tutupEditor);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') tutupEditor();
});
document.addEventListener('click', (e) => {
  if (teksAktif && !editor.contains(e.target) && e.target !== canvas) tutupEditor();
});
window.addEventListener('resize', posisikanEditor);


/* =========================================================
   5. TAMBAH FOTO
   ========================================================= */
function tambahFoto(foto) {
  if (fotoList.length >= jumlahFoto(frameAktif)) return;
  fotoList.push(foto);
  perbaruiPreviewFilter();
  updateTampilan();
  gambarSemua();
}

function updateTampilan() {
  const max = jumlahFoto(frameAktif);
  countEl.textContent = fotoList.length;
  maxEl.textContent = max;
  btnSnap.disabled = !stream || fotoList.length >= max;
  btnDownload.disabled = fotoList.length < max;
}


/* =========================================================
   6. KAMERA
   ========================================================= */
btnCamera.addEventListener('click', async () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
    video.classList.remove('on');
    btnCamera.textContent = '📷 Buka Kamera';
    updateTampilan();
    return;
  }

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: false
    });
    video.srcObject = stream;
    video.classList.add('on');
    btnCamera.textContent = '✖ Tutup Kamera';
    updateTampilan();
  } catch (err) {
    alert('Kamera tidak bisa dibuka. Pastikan izin kamera sudah diberikan ya.');
  }
});

const tunggu = ms => new Promise(r => setTimeout(r, ms));

btnSnap.addEventListener('click', async () => {
  btnSnap.disabled = true;

  for (let i = 3; i > 0; i--) {
    btnSnap.textContent = i;
    await tunggu(1000);
  }
  btnSnap.textContent = 'Jepret';

  const temp = document.createElement('canvas');
  temp.width = video.videoWidth;
  temp.height = video.videoHeight;
  const t = temp.getContext('2d');
  t.translate(temp.width, 0);
  t.scale(-1, 1);
  t.drawImage(video, 0, 0);

  tambahFoto(temp);
});


/* =========================================================
   7. DARI ALBUM
   ========================================================= */
fileInput.addEventListener('change', async () => {
  for (const file of fileInput.files) {
    if (fotoList.length >= jumlahFoto(frameAktif)) break;
    const gambar = await createImageBitmap(file);
    tambahFoto(gambar);
  }
  fileInput.value = '';
});


/* =========================================================
   8. ULANGI
   ========================================================= */
btnReset.addEventListener('click', () => {
  fotoList = [];
  perbaruiPreviewFilter();
  updateTampilan();
  gambarSemua();
});


/* =========================================================
   9. DOWNLOAD
   ========================================================= */
btnDownload.addEventListener('click', () => {
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
   10. MULAI — tunggu font siap dulu, baru gambar
   ========================================================= */
Promise.all([
  document.fonts.load('72px Mallica'),
  document.fonts.load('17px "Kopi Senja"'),
  document.fonts.load('19px "Kopi Senja Script"'),
  document.fonts.load('400 20px Inter'),
  document.fonts.load('700 20px Inter'),
  document.fonts.load('800 20px Inter'),
  document.fonts.load('20px "Playfair Display"'),
  document.fonts.load('italic 20px "Playfair Display"'),
  document.fonts.load('900 20px Unbounded'),
  document.fonts.load('20px Horizon'),
  document.fonts.load('20px Bubblegum'),
  document.fonts.load('20px "Anak Manja"')
]).finally(() => {
  perbaruiPreviewFilter();
  pilihFrame(FRAMES[0]);
});
