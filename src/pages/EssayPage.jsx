import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Masthead from "../components/Masthead.jsx";
import EssayBlock from "../components/EssayBlock.jsx";
import RelatedEssays from "../components/RelatedEssays.jsx";
import { ESSAYS } from "../data/essays.js";

export default function EssayPage() {
  const [searchParams] = useSearchParams();
  const slug = searchParams.get("slug");
  const essay = slug ? ESSAYS[slug] : null;

  useEffect(() => {
    document.title = essay
      ? `${essay.title} — Gavin's Prolegomena`
      : "Entry not found — Gavin's Prolegomena";
  }, [essay]);

  return (
    <div className="sheet sheet--essay">
      <Masthead small />

      <main>
        <article className="essay" id="essay-content">
          {essay ? (
            <>
              <p className="essay-meta">{essay.date}</p>
              <h1 className="essay-heading">{essay.title}</h1>
              {(essay.content || essay.paragraphs || []).map((block, i) => (
                <EssayBlock block={block} key={i} />
              ))}
            </>
          ) : (
            <p className="essay-not-found">
              The entry you are looking for was not found.{" "}
              <Link to="/">Back</Link>.
            </p>
          )}
        </article>

        {essay && <RelatedEssays currentSlug={slug} limit={3} />}
      </main>

      <footer className="colophon">
        <Link to="/" className="back-link">
          &larr; Back
        </Link>
      </footer>
    </div>
  );
}
