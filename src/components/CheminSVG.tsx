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

            /* Phase 1: Observer — scattered, very faint cross shapes */
            .zone-1 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 0.7;
              opacity: 0.15;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0s forwards;
            }

            /* Phase 2: Traverser — organizing into frames/bays */
            .zone-2 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 0.9;
              opacity: 0.35;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }

            /* Phase 3: Comprendre — structured, 5-bay facade */
            .zone-3 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.1;
              opacity: 0.55;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards;
            }

            /* Phase 4: Édifier — complete, strong, 7-8 bays with middle line */
            .zone-4 line {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.4;
              opacity: 0.78;
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
              stroke-width: 0.6;
              opacity: 0.18;
              stroke-dasharray: 2 3;
            }

            .base-2 {
              stroke-width: 0.9;
              opacity: 0.32;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .base-3 {
              stroke-width: 1.1;
              opacity: 0.45;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 1.5s forwards;
            }

            .base-4 {
              stroke-width: 1.3;
              opacity: 0.58;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 2.5s forwards;
            }
          `}
        </style>

        {/* PHASE 1: OBSERVER — scattered cross shapes (horizontal + vertical intersections) */}
        <g className="zone-1">
          {/* Cross shape 1 */}
          <line x1="55" y1="68" x2="75" y2="68" />
          <line x1="65" y1="63" x2="65" y2="78" />
          {/* Cross shape 2 */}
          <line x1="110" y1="72" x2="125" y2="72" />
          <line x1="117" y1="67" x2="117" y2="82" />
        </g>

        {/* PHASE 2: TRAVERSER — organizing into 2 clear rectangular frames/bays */}
        <g className="zone-2">
          {/* Frame 1: Left bay */}
          <line x1="220" y1="65" x2="220" y2="85" />
          <line x1="245" y1="65" x2="245" y2="85" />
          <line x1="220" y1="65" x2="245" y2="65" />
          <line x1="220" y1="85" x2="245" y2="85" />
          
          {/* Frame 2: Right bay */}
          <line x1="265" y1="65" x2="265" y2="85" />
          <line x1="290" y1="65" x2="290" y2="85" />
          <line x1="265" y1="65" x2="290" y2="65" />
          <line x1="265" y1="85" x2="290" y2="85" />
        </g>

        {/* PHASE 3: COMPRENDRE — structured, continuous 5-bay facade */}
        <g className="zone-3">
          {/* Top horizontal line */}
          <line x1="400" y1="52" x2="540" y2="52" />
          {/* Bottom horizontal line */}
          <line x1="400" y1="88" x2="540" y2="88" />
          {/* Vertical lines creating 5 bays */}
          <line x1="420" y1="52" x2="420" y2="88" />
          <line x1="440" y1="52" x2="440" y2="88" />
          <line x1="460" y1="52" x2="460" y2="88" />
          <line x1="480" y1="52" x2="480" y2="88" />
          <line x1="500" y1="52" x2="500" y2="88" />
          <line x1="520" y1="52" x2="520" y2="88" />
        </g>

        {/* PHASE 4: ÉDIFIER — complete, strong, extended with 7 bays + middle line */}
        <g className="zone-4">
          {/* Top horizontal line (cornice) */}
          <line x1="600" y1="45" x2="860" y2="45" />
          {/* Bottom horizontal line (base) */}
          <line x1="600" y1="95" x2="860" y2="95" />
          {/* Middle horizontal line (subdivision) */}
          <line x1="600" y1="70" x2="860" y2="70" />
          {/* Vertical lines creating 7 bays (8 vertical lines) */}
          <line x1="620" y1="45" x2="620" y2="95" />
          <line x1="650" y1="45" x2="650" y2="95" />
          <line x1="680" y1="45" x2="680" y2="95" />
          <line x1="710" y1="45" x2="710" y2="95" />
          <line x1="740" y1="45" x2="740" y2="95" />
          <line x1="770" y1="45" x2="770" y2="95" />
          <line x1="800" y1="45" x2="800" y2="95" />
          <line x1="830" y1="45" x2="830" y2="95" />
        </g>

        {/* CONNECTING BASE LINE — continuous, transforms through phases */}
        {/* Segment 1: dashed, wavy (under Observer) */}
        <path
          className="base-line base-1"
          d="M 40 145 Q 50 143 60 145 Q 70 147 80 145 Q 90 143 100 145 Q 110 147 120 145 Q 130 143 140 145 Q 150 147 160 145"
        />
        
        {/* Segment 2: solid, straight (under Traverser) */}
        <path
          className="base-line base-2"
          d="M 180 145 L 380 145"
        />
        
        {/* Segment 3: solid with subtle wave/rise at end (under Comprendre) */}
        <path
          className="base-line base-3"
          d="M 400 145 L 530 145 Q 535 143 540 145"
        />
        
        {/* Segment 4: solid, strong (under Édifier) */}
        <path
          className="base-line base-4"
          d="M 600 145 L 860 145"
        />
        {/* Small vertical tick marks on final segment */}
        <line x1="650" y1="145" x2="650" y2="140" className="base-line base-4" strokeWidth="0.9" opacity="0.5" />
        <line x1="730" y1="145" x2="730" y2="140" className="base-line base-4" strokeWidth="0.9" opacity="0.5" />
        <line x1="810" y1="145" x2="810" y2="140" className="base-line base-4" strokeWidth="0.9" opacity="0.5" />
      </svg>
    </div>
  );
}
