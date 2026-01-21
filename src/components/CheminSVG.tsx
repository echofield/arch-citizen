/**
 * CHEMIN SVG — ARCHÉ
 * 4-stage ascent: TRACE → MODULE → EDIFICE → CITY
 * Architectural drafting: construction lines becoming coherent
 * Upward progression: left → right = sequence, bottom → top = comprehension
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
            /* Animation de tracé progressif — matching CarteInteractive */
            @keyframes drawChemin {
              from {
                stroke-dashoffset: 2000;
              }
              to {
                stroke-dashoffset: 0;
              }
            }

            .stage-1 line,
            .stage-1 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 0.75;
              stroke-linecap: round;
              opacity: 0.15;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .stage-2 line,
            .stage-2 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 0.85;
              stroke-linecap: round;
              opacity: 0.3;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            .stage-3 line,
            .stage-3 path,
            .stage-3 rect {
              stroke: currentColor;
              fill: none;
              stroke-width: 1;
              stroke-linecap: round;
              opacity: 0.5;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
            }

            .stage-4 line,
            .stage-4 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.1;
              stroke-linecap: round;
              opacity: 0.7;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }
          `}
        </style>

        {/* STAGE 1: TRACE — measurement, not symbol */}
        <g className="stage-1">
          {/* Baseline segment */}
          <line x1="60" y1="155" x2="130" y2="155" />
          {/* Light construction ticks */}
          <line x1="75" y1="150" x2="75" y2="160" />
          <line x1="95" y1="152" x2="95" y2="158" />
          <line x1="115" y1="151" x2="115" y2="159" />
          {/* One vertical connector */}
          <line x1="95" y1="155" x2="95" y2="140" />
        </g>

        {/* STAGE 2: MODULE — repeated bays, organized */}
        <g className="stage-2">
          {/* Three verticals (bays) */}
          <line x1="220" y1="140" x2="220" y2="125" />
          <line x1="250" y1="140" x2="250" y2="125" />
          <line x1="280" y1="140" x2="280" y2="125" />
          {/* Top line (roof/cornice) */}
          <line x1="210" y1="125" x2="290" y2="125" />
          {/* Inner rhythm line */}
          <line x1="215" y1="132" x2="285" y2="132" />
          {/* Base */}
          <line x1="210" y1="140" x2="290" y2="140" />
        </g>

        {/* STAGE 3: EDIFICE — minimal façade logic */}
        <g className="stage-3">
          {/* Three vertical bays */}
          <line x1="400" y1="115" x2="400" y2="95" />
          <line x1="440" y1="115" x2="440" y2="95" />
          <line x1="480" y1="115" x2="480" y2="95" />
          {/* Two horizontal cornice lines */}
          <line x1="390" y1="95" x2="490" y2="95" />
          <line x1="390" y1="105" x2="490" y2="105" />
          {/* Base */}
          <line x1="390" y1="115" x2="490" y2="115" />
          {/* Arch hint / opening rectangle (middle bay) */}
          <rect x="432" y="100" width="16" height="12" fill="none" stroke-width="0.8" />
        </g>

        {/* STAGE 4: CITY — coherent system */}
        <g className="stage-4">
          {/* Two stacked horizontals */}
          <line x1="600" y1="80" x2="740" y2="80" />
          <line x1="600" y1="90" x2="740" y2="90" />
          {/* Repeated arches/bays (arcade pattern) */}
          <path d="M 610 90 Q 615 85 620 90" fill="none" stroke-width="0.9" />
          <path d="M 640 90 Q 645 85 650 90" fill="none" stroke-width="0.9" />
          <path d="M 670 90 Q 675 85 680 90" fill="none" stroke-width="0.9" />
          <path d="M 700 90 Q 705 85 710 90" fill="none" stroke-width="0.9" />
          {/* Vertical supports */}
          <line x1="615" y1="75" x2="615" y2="95" />
          <line x1="645" y1="75" x2="645" y2="95" />
          <line x1="675" y1="75" x2="675" y2="95" />
          <line x1="705" y1="75" x2="705" y2="95" />
          {/* Circulation line (subtle ramp/curve) */}
          <path d="M 590 100 Q 670 95 750 90" fill="none" stroke-width="0.7" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}
