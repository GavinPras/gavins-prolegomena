# Gavin's Prolegomena — React Version

Versi React (Vite + React Router) dari situs esai statis aslinya
(`index.html`, `about.html`, `essay.html`, `script.js`, `essay.js`,
`essays-data.js`, `style.css`).

## Menjalankan

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173`.

Build untuk produksi:

```bash
npm run build
npm run preview
```

## Struktur

```
src/
  main.jsx              # entry point, bungkus <BrowserRouter>
  App.jsx               # routing: "/", "/about", "/essay?slug=..."
  index.css             # salinan langsung dari style.css asli
  data/
    essays.js           # ESSAYS{} — konten lengkap tiap esai (dari essays-data.js)
    catalog.js          # metadata kartu indeks: status, excerpt, nomor tampil
  components/
    Masthead.jsx         # header/logo Γ yang berulang di semua halaman
    EssayBlock.jsx        # render satu block konten esai (img/h2/quote/list/p)
    RelatedEssays.jsx     # "Other works" di bawah tiap esai
  pages/
    IndexPage.jsx          # pengganti index.html + script.js (filter status)
    AboutPage.jsx           # pengganti about.html
    EssayPage.jsx            # pengganti essay.html + essay.js
  utils/
    textFormat.js              # pengganti formatInline()/formatQuote()
                                  (parsing **bold**, *italic*, [br])
```

## Routing

Versi asli memakai file statis terpisah (`index.html`, `about.html`,
`essay.html?slug=...`). Versi React memakai React Router:

- `/` → halaman indeks (dulu `index.html`)
- `/about` → halaman about (dulu `about.html`)
- `/essay?slug=nama-slug` → halaman esai (dulu `essay.html?slug=...`)

Query parameter `slug` dipertahankan sama persis, jadi tautan lama
(`essay.html?slug=...`) tinggal diganti jadi `/essay?slug=...`.

## Menambah esai baru

Sama seperti versi asli, esai baru butuh 2 tempat:

1. **`src/data/essays.js`** — tambahkan entri baru di object `ESSAYS`
   dengan key berupa slug, isi `title`, `date`, `order`, dan `content`
   (array block: `img`, `h2`, `quote`, `list`, atau `p`/string biasa).
2. **`src/data/catalog.js`** — tambahkan entri baru di array `CATALOG`
   supaya munculnya kartu di halaman indeks, lengkap dengan `status`
   (`mengendap` / `direvisi` / `baru`), `excerptHtml`, dan `number`
   tampilan.

## Gambar

Path gambar pada `essays.js` masih merujuk ke `/images/<slug>/nama.png`
(persis seperti file asli `essays-data.js`). Letakkan folder `images/`
tersebut di dalam `public/images/` supaya Vite menyajikannya sebagai
aset statis di path yang sama persis.

## Catatan migrasi

- Filter status pada halaman indeks (`All` / `Reflections` /
  `Interpretations` / `Ideas`) sebelumnya dikerjakan lewat manipulasi
  DOM langsung di `script.js`; di versi React ini diganti dengan
  `useState` + filter array biasa di `IndexPage.jsx` — perilakunya
  identik, termasuk teks counter "N Work(s)" dan pesan kosong.
- `formatInline` / `formatQuote` dari `essay.js` asli dipindahkan ke
  `src/utils/textFormat.js`, lalu dipakai di `EssayBlock.jsx` lewat
  `dangerouslySetInnerHTML` karena memang perlu menyisipkan tag
  `<strong>`/`<em>`/`<br>` ke dalam teks (sama seperti versi asli yang
  menyetel `innerHTML`).
- Beberapa "typo" pada data asli (`tye` alih-alih `type`, dan
  `type: "P"` huruf besar pada sebagian block) sengaja **dipertahankan
  apa adanya** di `essays.js` (sesuai sumber asli), tapi
  `EssayBlock.jsx` menormalisasinya saat merender supaya tidak ada
  block yang gagal tampil.
- `document.title` diatur lewat `useEffect` di `EssayPage.jsx`,
  menggantikan baris `document.title = ...` di `essay.js` asli.
