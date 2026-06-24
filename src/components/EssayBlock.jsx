import { formatInline, formatQuote } from "../utils/textFormat.js";

// Menggantikan renderBlock() dari essay.js asli.
// Setiap tipe block (img, h2, quote, list, p/string) dirender sebagai
// komponen React, sambil tetap mendukung beberapa "typo" yang ada di
// data asli (mis. key "tye" alih-alih "type", atau type:"P" huruf besar).

export default function EssayBlock({ block }) {
  // Block berupa string biasa -> paragraf
  if (typeof block === "string") {
    return <p dangerouslySetInnerHTML={{ __html: formatQuote(block) }} />;
  }

  // Normalisasi: data asli punya beberapa typo seperti `tye` dan `"P"`.
  const rawType = block.type ?? block.tye ?? "p";
  const type = String(rawType).toLowerCase();

  switch (type) {
    case "img": {
      return (
        <figure className="essay-figure">
          <img src={block.src} alt={block.alt || ""} loading="lazy" />
          {block.caption ? (
            <figcaption
              dangerouslySetInnerHTML={{ __html: formatInline(block.caption) }}
            />
          ) : null}
        </figure>
      );
    }

    case "h2":
      return (
        <h2 dangerouslySetInnerHTML={{ __html: formatInline(block.text) }} />
      );

    case "quote":
      return (
        <blockquote
          dangerouslySetInnerHTML={{ __html: formatQuote(block.text) }}
        />
      );

    case "list": {
      const Tag = block.ordered === false ? "ul" : "ol";
      const startAttr =
        Tag === "ol" && block.start ? parseInt(block.start, 10) : undefined;
      return (
        <Tag className="essay-list" start={startAttr}>
          {(block.items || []).map((item, i) => (
            <li
              key={i}
              dangerouslySetInnerHTML={{ __html: formatInline(item) }}
            />
          ))}
        </Tag>
      );
    }

    case "p":
    default:
      return (
        <p dangerouslySetInnerHTML={{ __html: formatQuote(block.text || "") }} />
      );
  }
}
