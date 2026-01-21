/**
 * CHEMIN SVG — ARCHÉ
 * Roadmap evolving into Haussmannian architecture
 * Da Vinci-style architectural drafting: construction lines becoming coherent
 * Horizontal progression: TRACE → ORGANIZATION → CIRCULATION → COHERENT STRUCTURE
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
        viewBox="0 0 900 200"
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

            .stage-1 line, .stage-1 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.5;
              stroke-linecap: round;
              opacity: 0.5;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .stage-2 line, .stage-2 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.8;
              stroke-linecap: round;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            .stage-3 line, .stage-3 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 2;
              stroke-linecap: round;
              opacity: 0.7;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
            }

            .stage-4 line, .stage-4 path {
              stroke: currentColor;
              fill: none;
              stroke-width: 2.5;
              stroke-linecap: round;
              opacity: 0.8;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }

            .flow-path {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.5;
              stroke-linecap: round;
              opacity: 0.4;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 4s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards;
            }
          `}
        </style>

        {/* FLOWING BASELINE — continuous ground line connecting all phases */}
        <polyline
          className="flow-path"
          points="40,170 100,168 180,165 280,158 400,148 520,135 640,120 760,110 860,105"
        />

        {/* PHASE I: TRACE — faint construction lines, grids, regulating axes */}
        <g className="stage-1">
          {/* Construction grid (very faint) */}
          <line x1="50" y1="160" x2="50" y2="180" opacity="0.3" />
          <line x1="70" y1="160" x2="70" y2="180" opacity="0.3" />
          <line x1="90" y1="160" x2="90" y2="180" opacity="0.3" />
          <line x1="110" y1="160" x2="110" y2="180" opacity="0.3" />
          {/* Regulating axes */}
          <line x1="40" y1="170" x2="130" y2="170" />
          <line x1="85" y1="170" x2="85" y2="150" />
          {/* Barely readable proportions */}
          <line x1="60" y1="165" x2="60" y2="175" strokeWidth="1.2" />
          <line x1="105" y1="166" x2="105" y2="174" strokeWidth="1.2" />
        </g>

        {/* PHASE II: ORGANIZATION — repeated vertical rhythms, bays, alignment */}
        <g className="stage-2">
          {/* Four vertical bays (Haussmannian rhythm) */}
          <line x1="200" y1="165" x2="200" y2="145" />
          <line x1="240" y1="165" x2="240" y2="145" />
          <line x1="280" y1="165" x2="280" y2="145" />
          <line x1="320" y1="165" x2="320" y2="145" />
          {/* Top cornice */}
          <line x1="190" y1="145" x2="330" y2="145" />
          {/* Inner rhythm lines */}
          <line x1="195" y1="152" x2="325" y2="152" strokeWidth="1.5" />
          <line x1="195" y1="158" x2="325" y2="158" strokeWidth="1.5" />
          {/* Base foundation */}
          <line x1="190" y1="165" x2="330" y2="165" />
        </g>

        {/* PHASE III: CIRCULATION — arches, passages, movement emerges */}
        <g className="stage-3">
          {/* Five vertical bays */}
          <line x1="400" y1="158" x2="400" y2="130" />
          <line x1="450" y1="158" x2="450" y2="130" />
          <line x1="500" y1="158" x2="500" y2="130" />
          <line x1="550" y1="158" x2="550" y2="130" />
          <line x1="600" y1="158" x2="600" y2="130" />
          {/* Strong cornice */}
          <line x1="390" y1="130" x2="610" y2="130" />
          {/* Arched passages (circulation) */}
          <path d="M 405 158 Q 412.5 148 420 158" fill="none" strokeWidth="1.8" />
          <path d="M 455 158 Q 462.5 148 470 158" fill="none" strokeWidth="1.8" />
          <path d="M 505 158 Q 512.5 148 520 158" fill="none" strokeWidth="1.8" />
          <path d="M 555 158 Q 562.5 148 570 158" fill="none" strokeWidth="1.8" />
          {/* Inner passage line (suggesting depth) */}
          <line x1="395" y1="145" x2="605" y2="145" strokeWidth="1.6" />
          {/* Base */}
          <line x1="390" y1="158" x2="610" y2="158" />
        </g>

        {/* PHASE IV: COHERENT STRUCTURE — layered architecture, system stabilizes */}
        <g className="stage-4">
          {/* Strong horizontal base (street level) */}
          <line x1="650" y1="148" x2="850" y2="148" strokeWidth="2.5" />
          {/* Upper horizontal (roof line) */}
          <line x1="650" y1="120" x2="850" y2="120" strokeWidth="2.5" />
          {/* Six vertical bays (full Haussmannian rhythm) */}
          <line x1="670" y1="120" x2="670" y2="148" strokeWidth="2.3" />
          <line x1="700" y1="120" x2="700" y2="148" strokeWidth="2.3" />
          <line x1="730" y1="120" x2="730" y2="148" strokeWidth="2.3" />
          <line x1="760" y1="120" x2="760" y2="148" strokeWidth="2.3" />
          <line x1="790" y1="120" x2="790" y2="148" strokeWidth="2.3" />
          <line x1="820" y1="120" x2="820" y2="148" strokeWidth="2.3" />
          {/* Arched openings (Haussmannian arcade) */}
          <path d="M 675 148 Q 682.5 138 690 148" fill="none" strokeWidth="2" />
          <path d="M 705 148 Q 712.5 138 720 148" fill="none" strokeWidth="2" />
          <path d="M 735 148 Q 742.5 138 750 148" fill="none" strokeWidth="2" />
          <path d="M 765 148 Q 772.5 138 780 148" fill="none" strokeWidth="2" />
          <path d="M 795 148 Q 802.5 138 810 148" fill="none" strokeWidth="2" />
          {/* Middle level (layered architecture) */}
          <line x1="650" y1="134" x2="850" y2="134" strokeWidth="2" />
          {/* Circulation flow connecting to path */}
          <path d="M 640 155 Q 720 150 850 148" fill="none" strokeWidth="1.8" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
