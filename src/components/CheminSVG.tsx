/**
 * CHEMIN SVG — ARCHÉ
 * Simple roadmap: a single inviting line that evolves across 4 phases
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

            /* Phase 1: Observer — faint, tentative, organic wavy */
            .road-1 {
              stroke: currentColor;
              fill: none;
              stroke-width: 0.8;
              opacity: 0.2;
              stroke-dasharray: 3 4;
              stroke-linecap: round;
              stroke-linejoin: round;
              animation: drawChemin 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards;
            }

            /* Phase 2: Traverser — clearer, flowing upward */
            .road-2 {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.3;
              opacity: 0.45;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              stroke-linejoin: round;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            /* Phase 3: Comprendre — solid, confident ascent */
            .road-3 {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.6;
              opacity: 0.65;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              stroke-linejoin: round;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }

            /* Phase 4: Édifier — strong, clear, graceful finish */
            .road-4 {
              stroke: currentColor;
              fill: none;
              stroke-width: 2.2;
              opacity: 0.85;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              stroke-linecap: round;
              stroke-linejoin: round;
              animation: drawChemin 3s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
            }
          `}
        </style>

        {/* PHASE 1: OBSERVER — faint, organic, wavy exploration */}
        <path
          className="road-1"
          d="M 50 95 Q 70 92 90 94 Q 110 96 130 93 Q 145 91 160 94"
        />

        {/* PHASE 2: TRAVERSER — flowing upward, becoming clearer */}
        <path
          className="road-2"
          d="M 180 93 Q 250 88 320 90 Q 350 89 380 91"
        />

        {/* PHASE 3: COMPRENDRE — confident ascent, smooth curve */}
        <path
          className="road-3"
          d="M 400 90 Q 490 82 580 85"
        />

        {/* PHASE 4: ÉDIFIER — strong, graceful, reaching upward */}
        <path
          className="road-4"
          d="M 600 84 Q 680 78 750 80 Q 790 79 850 82"
        />
      </svg>
    </div>
  );
}
