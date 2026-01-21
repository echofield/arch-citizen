/**
 * CHEMIN SVG — ARCHÉ
 * Line-based construction that evolves: Observer → Traverser → Comprendre → Édifier
 * Only horizontal and vertical strokes — no rectangles, no circles
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

            /* Phase 1: Observer — scattered, tentative */
            .zone-1 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1;
              opacity: 0.15;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards;
            }

            /* Phase 2: Traverser — organizing */
            .zone-2 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.2;
              opacity: 0.35;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            /* Phase 3: Comprendre — structured */
            .zone-3 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.3;
              opacity: 0.55;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }

            /* Phase 4: Édifier — complete */
            .zone-4 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.5;
              opacity: 0.75;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 3s cubic-bezier(0.4, 0, 0.2, 1) 3s forwards;
            }

            /* Connecting base line */
            .base-line {
              stroke: currentColor;
              fill: none;
            }

            .base-1 {
              stroke-width: 0.8;
              opacity: 0.2;
              stroke-dasharray: 2 2;
            }

            .base-2 {
              stroke-width: 1;
              opacity: 0.3;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .base-3 {
              stroke-width: 1.2;
              opacity: 0.4;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
            }

            .base-4 {
              stroke-width: 1.5;
              opacity: 0.5;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards;
            }
          `}
        </style>

        {/* PHASE 1: OBSERVER — scattered, tentative lines */}
        <g className="zone-1">
          {/* Short horizontal strokes (varying lengths, scattered) */}
          <line x1="60" y1="70" x2="95" y2="70" />
          <line x1="120" y1="75" x2="155" y2="75" />
          <line x1="80" y1="80" x2="110" y2="80" />
          {/* Short vertical strokes (disconnected, tentative) */}
          <line x1="75" y1="65" x2="75" y2="85" />
          <line x1="130" y1="68" x2="130" y2="82" />
        </g>

        {/* PHASE 2: TRAVERSER — organizing, beginning rhythm */}
        <g className="zone-2">
          {/* Longer horizontal lines */}
          <line x1="220" y1="70" x2="280" y2="70" />
          <line x1="240" y1="75" x2="300" y2="75" />
          <line x1="260" y1="80" x2="320" y2="80" />
          {/* Vertical strokes (more aligned, beginning rhythm) */}
          <line x1="250" y1="65" x2="250" y2="85" />
          <line x1="270" y1="65" x2="270" y2="85" />
          <line x1="290" y1="65" x2="290" y2="85" />
          <line x1="310" y1="65" x2="310" y2="85" />
        </g>

        {/* PHASE 3: COMPRENDRE — structured, forming bays */}
        <g className="zone-3">
          {/* Strong horizontal base line */}
          <line x1="400" y1="90" x2="520" y2="90" />
          {/* Vertical strokes (aligned, forming bays) */}
          <line x1="420" y1="55" x2="420" y2="90" />
          <line x1="445" y1="55" x2="445" y2="90" />
          <line x1="470" y1="55" x2="470" y2="90" />
          <line x1="495" y1="55" x2="495" y2="90" />
          <line x1="520" y1="55" x2="520" y2="90" />
          {/* Horizontal top line (cornice forming) */}
          <line x1="420" y1="55" x2="520" y2="55" />
        </g>

        {/* PHASE 4: ÉDIFIER — complete, Haussmannian rhythm */}
        <g className="zone-4">
          {/* Strong horizontal base (street level) */}
          <line x1="600" y1="95" x2="850" y2="95" />
          {/* Strong horizontal top (cornice) */}
          <line x1="600" y1="45" x2="850" y2="45" />
          {/* Vertical strokes (Haussmannian rhythm) */}
          <line x1="630" y1="45" x2="630" y2="95" />
          <line x1="670" y1="45" x2="670" y2="95" />
          <line x1="710" y1="45" x2="710" y2="95" />
          <line x1="750" y1="45" x2="750" y2="95" />
          <line x1="790" y1="45" x2="790" y2="95" />
          <line x1="830" y1="45" x2="830" y2="95" />
          {/* Horizontal middle level */}
          <line x1="600" y1="70" x2="850" y2="70" />
        </g>

        {/* CONNECTING BASE LINE — continuous, transforms through phases */}
        {/* Segment 1: dashed, wavy (under Observer) */}
        <path
          className="base-line base-1"
          d="M 40 140 Q 50 138 60 140 Q 70 142 80 140 Q 90 138 100 140 Q 110 142 120 140 Q 130 138 140 140 Q 150 142 160 140"
        />
        
        {/* Segment 2: solid, straight (under Traverser) */}
        <path
          className="base-line base-2"
          d="M 180 140 L 380 140"
        />
        
        {/* Segment 3: solid, slight variations (under Comprendre) */}
        <path
          className="base-line base-3"
          d="M 400 140 L 520 140 L 525 138 L 530 140 L 535 138 L 540 140"
        />
        
        {/* Segment 4: solid, strong (under Édifier) */}
        <path
          className="base-line base-4"
          d="M 600 140 L 850 140"
        />
        {/* Small vertical marks on final segment */}
        <line x1="630" y1="140" x2="630" y2="135" className="base-line base-4" strokeWidth="1" opacity="0.4" />
        <line x1="710" y1="140" x2="710" y2="135" className="base-line base-4" strokeWidth="1" opacity="0.4" />
        <line x1="790" y1="140" x2="790" y2="135" className="base-line base-4" strokeWidth="1" opacity="0.4" />
      </svg>
    </div>
  );
}
