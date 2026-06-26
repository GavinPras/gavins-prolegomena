import { useMemo } from "react";
import katex from "katex";

export default function MathBlock({ formula, display = true }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(formula || "", {
        throwOnError: false,
        displayMode: display,
      });
    } catch (err) {
      console.error("Gagal merender formula KaTeX:", formula, err);
      return formula || "";
    }
  }, [formula, display]);

  if (display) {
    return (
      <div className="essay-math" dangerouslySetInnerHTML={{ __html: html }} />
    );
  }

  return (
    <span className="essay-math-inline" dangerouslySetInnerHTML={{ __html: html }} />
  );
}