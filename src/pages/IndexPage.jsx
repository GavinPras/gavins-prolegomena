import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Masthead from "../components/Masthead.jsx";
import { CATALOG, STATUS_FILTERS } from "../data/catalog.js";

export default function IndexPage() {
  const [activeStatus, setActiveStatus] = useState("all");

  const visibleCards = useMemo(() => {
    if (activeStatus === "all") return CATALOG;
    return CATALOG.filter((card) => card.status === activeStatus);
  }, [activeStatus]);

  const count = visibleCards.length;

  return (
    <div className="sheet">
      <Masthead withSubtitle />

      <div className="index-toolbar">
        <div className="status-key" aria-label="Saring menurut status tulisan">
          {STATUS_FILTERS.map((filter) => (
            <button
              key={filter.value}
              className={`status-btn${activeStatus === filter.value ? " is-active" : ""}`}
              data-status={filter.value}
              onClick={() => setActiveStatus(filter.value)}
            >
              <span
                className={`status-dot${
                  filter.value !== "all" ? ` status-dot--${filter.value}` : ""
                }`}
              ></span>
              {filter.label}
            </button>
          ))}
        </div>
        <Link to="/about" className="toolbar-link">
          About
        </Link>
        <p className="toolbar-count" id="toolbar-count">
          {count} {count === 1 ? "Work" : "Works"}
        </p>
      </div>

      <main>
        <ol className="catalog" id="catalog">
          {visibleCards.map((card) => (
            <li className="card" data-status={card.status} key={card.slug}>
              <Link className="card-link" to={`/essay?slug=${encodeURIComponent(card.slug)}`}>
                {card.cover ? (
                  <img 
                    className="card-cover" 
                    src={card.cover} alt={card.title} 
                    loading="lazy" 
                    style={{ objectPosition: card.coverPosition || "center" }}
                  />
                ) : (
                  <div className="card-cover card-cover--empty" />
                )}
                <span className="card-main">
                  <span className="card-title-row">
                    <span className="card-title">{card.title}</span>
                  </span>
                  <span className="card-excerpt" dangerouslySetInnerHTML={{ __html: card.excerptHtml }} />
                  <span className="card-bottom-row">
                    <span className="card-trace">{card.date}</span>
                    <span className={`card-stamp card-stamp--${card.status}`}>{card.statusLabel}</span>
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {count === 0 && (
          <p className="empty-state" id="empty-state">
            There are no entry for this topic yet.
          </p>
        )}
      </main>

      <footer className="colophon">
        <p>Published since 2025. Updated irregularly.</p>
      </footer>
    </div>
  );
}
