// Menggantikan formatInline() dari essay.js asli.
// Karena di sini kita berada di dalam React (bukan menyuntik innerHTML
// secara manual), escaping HTML otomatis ditangani oleh React saat kita
// merender teks biasa. Fungsi ini hanya menangani markup ringan:
// **bold**, *italic*, dan [br] / \n untuk baris baru.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * formatInline: bold + italic, hasil berupa HTML string aman
 * (input sudah di-escape dulu sebelum markup ditambahkan,
 * sama seperti escapeHtml(str) -> regex replace di versi asli).
 */
export function formatInline(str) {
  if (!str) return "";
  let escaped = escapeHtml(str);
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return escaped;
}

/**
 * formatQuote: sama seperti formatInline, tapi juga mengubah
 * newline dan token [br] menjadi <br>.
 */
export function formatQuote(str) {
  if (!str) return "";
  let formatted = formatInline(str);
  formatted = formatted.replace(/\n/g, "<br>");
  formatted = formatted.replace(/\[br\]/gi, "<br>");
  return formatted;
}
