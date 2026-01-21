/**
 * CHEMIN SVG — ARCHÉ
 * Architecture under construction, becoming readable
 * Progressive density: emergence → organization → coherence
 */

export function CheminSVG() {
  return (
    <div
      style={{
        color: '#0E3F2F',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <svg
        viewBox="0 0 400 80"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
          display: 'block'
        }}
      >
        <style>
          {`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: var(--target-opacity); }
            }

            .ground {
              --target-opacity: 0.25;
              animation: fadeIn 1.5s ease forwards;
            }

            .emergence {
              --target-opacity: 0.2;
              animation: fadeIn 2s ease 0.5s forwards;
              opacity: 0;
            }

            .organization {
              --target-opacity: 0.4;
              animation: fadeIn 2s ease 1s forwards;
              opacity: 0;
            }

            .coherence {
              --target-opacity: 0.7;
              animation: fadeIn 2s ease 1.5s forwards;
              opacity: 0;
            }
          `}
        </style>

        {/* Layer 1 — Ground: anchors the page */}
        <line
          className="ground"
          x1="20" y1="50" x2="380" y2="50"
          stroke="currentColor"
          strokeWidth="1"
        />

        {/* Layer 2 — Emergence (left third): tentative, misaligned */}
        <g className="emergence">
          <line x1="45" y1="42" x2="45" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="68" y1="38" x2="68" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="85" y1="44" x2="85" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="110" y1="40" x2="110" y2="50" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Layer 3 — Organization (middle third): rhythm appears */}
        <g className="organization">
          <line x1="155" y1="35" x2="155" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="185" y1="35" x2="185" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="215" y1="35" x2="215" y2="50" stroke="currentColor" strokeWidth="1" />
          <line x1="245" y1="35" x2="245" y2="50" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Layer 4 — Coherence (right third): system holds */}
        <g className="coherence">
          <line x1="285" y1="30" x2="285" y2="50" stroke="currentColor" strokeWidth="1.25" />
          <line x1="310" y1="30" x2="310" y2="50" stroke="currentColor" strokeWidth="1.25" />
          <line x1="335" y1="30" x2="335" y2="50" stroke="currentColor" strokeWidth="1.25" />
          <line x1="360" y1="30" x2="360" y2="50" stroke="currentColor" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}
