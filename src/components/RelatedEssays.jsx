import { Link } from "react-router-dom";
import { ESSAYS } from "../data/essays.js";

// Menggantikan getRecentEssays() + renderRelated() dari essay.js asli.
function getRecentEssays(excludeSlug, limit) {
  const slugs = Object.keys(ESSAYS).filter((s) => s !== excludeSlug);

  slugs.sort((a, b) => {
    const orderA = ESSAYS[a].order || 0;
    const orderB = ESSAYS[b].order || 0;
    return orderB - orderA;
  });

  return slugs.slice(0, limit).map((s) => ({ slug: s, essay: ESSAYS[s] }));
}

export default function RelatedEssays({ currentSlug, limit = 3 }) {
  const recent = getRecentEssays(currentSlug, limit);
  if (recent.length === 0) return null;

  return (
    <section className="related">
      <h2 className="related-heading">Other works</h2>
      <ul className="related-list">
        {recent.map(({ slug, essay }) => (
          <li className="related-item" key={slug}>
            <Link className="related-link" to={`/essay?slug=${encodeURIComponent(slug)}`}>
              <span className="related-title">{essay.title}</span>
              <span className="related-date">{essay.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
