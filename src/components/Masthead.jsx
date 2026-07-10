import { Link } from "react-router-dom";

export default function Masthead({ small = false, withSubtitle = false }) {
  return (
    <header className={`masthead${small ? " masthead--small" : ""}`}>
      <div className="masthead-mark" aria-hidden="true">
        <svg viewBox="0 0 60 60" width={small ? 32 : 40} height={small ? 32 : 40}>
          <circle cx="30" cy="30" r="27" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text
            x="30"
            y="38"
            textAnchor="middle"
            fontFamily="Georgia, serif"
            fontSize="26"
            fill="currentColor"
          >
            &#915;
          </text>
        </svg>
      </div>

      {withSubtitle ? (
        <div className="masthead-text">
          <Link to="/" className="masthead-title">
            Gavin&apos;s Prolegomena
          </Link>
          <p className="masthead-sub">
            A personal archive of writings. 
          </p>
        </div>
      ) : (
        <Link to="/" className="masthead-title">
          Gavin&apos;s Prolegomena
        </Link>
      )}
    </header>
  );
}
