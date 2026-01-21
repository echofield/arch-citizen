/**
 * CHEMIN SVG — ARCHÉ
 * Simple roadmap: straight line with infinity symbol at the end
 * Animation system matching CarteInteractive.tsx
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
        viewBox="0 0 900 180"
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
            /* Animation de tracé progressif — encre qui se dessine (from CarteInteractive) */
            @keyframes drawChemin {
              from {
                stroke-dashoffset: 2000;
              }
              to {
                stroke-dashoffset: 0;
              }
            }

            /* Phase 1: Observer — faint, dashed */
            .road-1 {
              stroke: currentColor;
              fill: none;
              stroke-width: 0.8;
              opacity: 0.2;
              stroke-dasharray: 3 4;
              stroke-linecap: round;
              animation: drawChemin 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards;
            }

            /* Phase 2: Traverser — clearer */
            .road-2 {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.3;
              opacity: 0.45;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            /* Phase 3: Comprendre — solid */
            .road-3 {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.6;
              opacity: 0.65;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }

            /* Phase 4: Édifier — strong */
            .road-4 {
              stroke: currentColor;
              fill: none;
              stroke-width: 2.2;
              opacity: 0.85;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              animation: drawChemin 3s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
            }

            /* Infinity symbol */
            .infinity {
              stroke: currentColor;
              fill: none;
              stroke-width: 2;
              opacity: 0.9;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 5s forwards;
            }
          `}
        </style>

        {/* PHASE 1: OBSERVER — faint, dashed */}
        <line className="road-1" x1="50" y1="90" x2="160" y2="90" />

        {/* PHASE 2: TRAVERSER — clearer */}
        <line className="road-2" x1="180" y1="90" x2="380" y2="90" />

        {/* PHASE 3: COMPRENDRE — solid */}
        <line className="road-3" x1="400" y1="90" x2="580" y2="90" />

        {/* PHASE 4: ÉDIFIER — strong */}
        <line className="road-4" x1="600" y1="90" x2="720" y2="90" />

        {/* Infinity symbol (∞) at the end */}
        <path
          className="infinity"
          d="M 750 90 
             C 750 85, 760 85, 765 90
             C 770 95, 780 95, 780 90
             C 780 85, 770 85, 765 90
             C 760 95, 750 95, 750 90
             Z"
        />
      </svg>
    </div>
  );
}
