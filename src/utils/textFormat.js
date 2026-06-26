// **bold**, *italic*, dan [br] / \n untuk baris baru.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/&amp;nbsp;/g, "&nbsp;");
}

export function formatInline(str) {
  if (!str) return "";
  let escaped = escapeHtml(str);
  escaped = escaped.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  escaped = escaped.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return escaped;
}

export function formatQuote(str) {
  if (!str) return "";
  let formatted = formatInline(str);
  formatted = formatted.replace(/\n/g, "<br>");
  formatted = formatted.replace(/\[br\]/gi, "<br>");
  return formatted;
}
