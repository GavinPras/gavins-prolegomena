/* =========================================================
   Data katalog untuk halaman indeks.
   Ini terpisah dari ESSAYS (essays.js) karena berisi metadata
   tampilan daftar: status filter, nomor tampil, dan excerpt.

   Tambahkan esai baru dengan menambah entri baru di sini,
   DAN menambahkan entrinya juga di essays.js (src/data/essays.js).
   ========================================================= */

export const CATALOG = [
  {
    slug: "paprika-a-beautiful-terrifying-dream",
    number: "04",
    status: "direvisi",
    statusLabel: "Interpretations",
    title: "A Beautiful Terrifying Dream",
    excerptHtml: 'Philosophical interpretations of the anime <em>Paprika</em>.',
    date: "Mar 1, 2026",
  },
  {
    slug: "analyzing-fullmetal-alchemist",
    number: "03",
    status: "baru",
    statusLabel: "Ideas",
    title: "Analyzing the Logic of the Law of Equivalent Exchange",
    excerptHtml:
      'Philosophical ideas about the law of equivalent exchange in the anime <em>Fullmetal Alchemist: Brotherhood</em>.',
    date: "Feb 14, 2026",
  },
  {
    slug: "hachiman-existentialism",
    number: "02",
    status: "mengendap",
    statusLabel: "Reflections",
    title: "Hachiman as a Genuine Expression of Existentialism",
    excerptHtml: 'Philosophical reflections on the anime <em>Oregairu</em>.',
    date: "Feb 9, 2026",
  },
  {
    slug: "what-if-life-could-be-sold",
    number: "01",
    status: "direvisi",
    statusLabel: "Interpretations",
    title: "What If Life Could be Sold?",
    excerptHtml:
      'Philosophical interpretations of the manga <em>I Sold My Life for Ten Thousand Yen per Year</em>.',
    date: "Dec 7, 2025",
  },
];

export const STATUS_FILTERS = [
  { value: "all", label: "All" },
  { value: "mengendap", label: "Reflections" },
  { value: "direvisi", label: "Interpretations" },
  { value: "baru", label: "Ideas" },
];
