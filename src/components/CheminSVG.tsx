/**
 * CHEMIN SVG — ARCHÉ
 * Test : Points qui évoluent en rectangles puis en carrés
 * Style CarteInteractive : même couleur, complexité, animation
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
        viewBox="0 0 800 180"
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
            @keyframes drawChemin {
              from { stroke-dashoffset: 2000; }
              to { stroke-dashoffset: 0; }
            }

            /* ZONE 1: Points — Observer */
            .zone-1 circle {
              fill: currentColor;
              opacity: 0.6;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards;
            }

            .zone-1 rect {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.5;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            /* ZONE 2: Rectangles — Traverser */
            .zone-2 rect {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.5;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            /* ZONE 3: Rectangles qui deviennent carrés — Comprendre */
            .zone-3 rect {
              stroke: currentColor;
              fill: none;
              stroke-width: 2;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
            }

            /* ZONE 4: Carrés — Édifier */
            .zone-4 rect {
              stroke: currentColor;
              fill: none;
              stroke-width: 2.5;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }

            /* LIGNE DE BASE */
            .base-line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.5;
              opacity: 0.6;
            }

            .base-1 {
              stroke-dasharray: 2 2;
              opacity: 0.4;
            }

            .base-2 {
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
            }

            .base-3 {
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
            }

            .base-4 {
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
            }
          `}
        </style>

        {/* ZONE 1: OBSERVER — Points simples */}
        <g className="zone-1">
          <circle cx="80" cy="65" r="3" />
          <circle cx="120" cy="65" r="2.5" />
          <circle cx="140" cy="65" r="2" />
        </g>

        {/* ZONE 2: TRAVERSER — Rectangles horizontaux */}
        <g className="zone-2">
          <rect x="200" y="55" width="40" height="20" rx="1" />
          <rect x="260" y="55" width="45" height="20" rx="1" />
          <rect x="320" y="55" width="40" height="20" rx="1" />
        </g>

        {/* ZONE 3: COMPRENDRE — Rectangles qui deviennent plus carrés */}
        <g className="zone-3">
          <rect x="420" y="50" width="30" height="30" rx="1" />
          <rect x="470" y="50" width="30" height="30" rx="1" />
          <rect x="520" y="50" width="30" height="30" rx="1" />
        </g>

        {/* ZONE 4: ÉDIFIER — Carrés parfaits */}
        <g className="zone-4">
          <rect x="600" y="50" width="25" height="25" rx="0.5" />
          <rect x="640" y="50" width="25" height="25" rx="0.5" />
          <rect x="680" y="50" width="25" height="25" rx="0.5" />
          <rect x="720" y="50" width="25" height="25" rx="0.5" />
        </g>

        {/* LIGNE DE BASE CONTINUE — se transforme */}
        <path
          className="base-line base-1"
          d="M 40 130 Q 50 128 60 130 Q 70 132 80 130"
        />
        <path
          className="base-line base-2"
          d="M 160 130 L 380 130"
        />
        <path
          className="base-line base-3"
          d="M 400 130 L 580 130"
        />
        <path
          className="base-line base-4"
          d="M 600 130 L 760 130"
        />
        {/* Détails sur la ligne finale */}
        <line x1="620" y1="130" x2="620" y2="125" className="base-line base-4" strokeWidth="1.2" opacity="0.5" />
        <line x1="680" y1="130" x2="680" y2="125" className="base-line base-4" strokeWidth="1.2" opacity="0.5" />
        <line x1="740" y1="130" x2="740" y2="125" className="base-line base-4" strokeWidth="1.2" opacity="0.5" />
      </svg>
    </div>
  );
}
