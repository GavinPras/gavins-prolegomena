import { formatInline, formatQuote } from "../utils/textFormat.js";
import MathBlock from "./MathBlock.jsx";

export default function EssayBlock({ block }) {
  if (typeof block === "string") {
    return <p dangerouslySetInnerHTML={{ __html: formatQuote(block) }} />;
  }

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

    case "math":
    return <MathBlock formula={block.formula} display={block.display !== false} />;

    case "p":
    default:
      return (
        <p dangerouslySetInnerHTML={{ __html: formatQuote(block.text || "") }} />
      );
  }
}
