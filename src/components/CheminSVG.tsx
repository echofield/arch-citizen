/**
 * CHEMIN SVG — ARCHÉ
 * 4 moments distincts avec une ligne qui se transforme
 * Observer → Traverser → Comprendre → Édifier
 */

export function CheminSVG() {
  return (
    <div
      style={{
        color: '#2D5A4A',
        width: '100%',
        maxWidth: '100%'
      }}
    >
      <svg
        viewBox="0 0 1000 300"
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

            .moment-1 * {
              stroke: currentColor;
              fill: none;
              stroke-width: 1;
              stroke-linecap: round;
              stroke-linejoin: round;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
            }

            .moment-2 * {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.2;
              stroke-linecap: round;
              stroke-linejoin: round;
              opacity: 0.7;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards;
            }

            .moment-3 * {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.4;
              stroke-linecap: round;
              stroke-linejoin: round;
              opacity: 0.8;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 0.9s forwards;
            }

            .moment-4 * {
              stroke: currentColor;
              fill: none;
              stroke-width: 1.6;
              stroke-linecap: round;
              stroke-linejoin: round;
              opacity: 0.9;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.6s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
            }

            .connecting-line {
              stroke: currentColor;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
            }

            .line-1 {
              stroke-width: 0.8;
              opacity: 0.5;
              stroke-dasharray: 2 2;
            }

            .line-2 {
              stroke-width: 1;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .line-3 {
              stroke-width: 1.2;
              opacity: 0.7;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
            }

            .line-4 {
              stroke-width: 1.5;
              opacity: 0.8;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 1.1s forwards;
            }
          `}
        </style>

        {/* MOMENT 1: OBSERVER — Fenêtre avec perspective de rue parisienne */}
        <g className="moment-1" transform="translate(50, 50)">
          {/* Fenêtre (cadre) */}
          <rect x="0" y="0" width="120" height="100" rx="2" strokeWidth="1" />
          
          {/* Perspective de rue (lignes de fuite) */}
          <line x1="60" y1="20" x2="20" y2="100" />
          <line x1="60" y1="20" x2="100" y2="100" />
          <line x1="60" y1="20" x2="40" y2="100" />
          <line x1="60" y1="20" x2="80" y2="100" />
          
          {/* Ligne d'horizon */}
          <line x1="30" y1="50" x2="90" y2="50" strokeWidth="0.8" />
          
          {/* Œil stylisé (très subtil) */}
          <ellipse cx="60" cy="35" rx="8" ry="5" strokeWidth="0.6" opacity="0.4" />
          <line x1="60" y1="30" x2="60" y2="40" strokeWidth="0.5" opacity="0.3" />
        </g>

        {/* MOMENT 2: TRAVERSER — Plan de rues vu du dessus */}
        <g className="moment-2" transform="translate(280, 50)">
          {/* Rues qui se croisent */}
          <line x1="0" y1="50" x2="120" y2="50" />
          <line x1="60" y1="0" x2="60" y2="100" />
          
          {/* Rues secondaires */}
          <line x1="30" y1="0" x2="30" y2="100" strokeWidth="0.8" />
          <line x1="90" y1="0" x2="90" y2="100" strokeWidth="0.8" />
          <line x1="0" y1="25" x2="120" y2="25" strokeWidth="0.8" />
          <line x1="0" y1="75" x2="120" y2="75" strokeWidth="0.8" />
          
          {/* Carrefour central */}
          <circle cx="60" cy="50" r="3" fill="currentColor" opacity="0.6" />
          
          {/* Point/marcheur qui avance */}
          <circle cx="45" cy="50" r="2" fill="currentColor" opacity="0.8" />
        </g>

        {/* MOMENT 3: COMPRENDRE — Seuil qui émerge, architecture apparaît */}
        <g className="moment-3" transform="translate(510, 50)">
          {/* Lignes de rue qui deviennent architecture */}
          <line x1="0" y1="80" x2="120" y2="80" strokeWidth="1.2" />
          
          {/* Seuil/porte qui émerge */}
          <rect x="40" y="50" width="40" height="30" rx="2" strokeWidth="1.3" />
          
          {/* Arche/passage */}
          <path d="M 50 80 Q 60 60 70 80" strokeWidth="1.2" />
          
          {/* Lignes architecturales verticales */}
          <line x1="20" y1="50" x2="20" y2="100" strokeWidth="1" />
          <line x1="100" y1="50" x2="100" y2="100" strokeWidth="1" />
          
          {/* Structure qui émerge */}
          <line x1="40" y1="50" x2="80" y2="50" strokeWidth="1.3" />
          <line x1="50" y1="50" x2="50" y2="80" strokeWidth="1.1" />
          <line x1="70" y1="50" x2="70" y2="80" strokeWidth="1.1" />
        </g>

        {/* MOMENT 4: ÉDIFIER — Façade Haussmannienne simplifiée */}
        <g className="moment-4" transform="translate(740, 50)">
          {/* Base de la façade */}
          <line x1="0" y1="100" x2="120" y2="100" strokeWidth="1.8" />
          
          {/* Ligne de toit/corniche */}
          <line x1="0" y1="20" x2="120" y2="20" strokeWidth="1.8" />
          
          {/* Modules répétés (fenêtres) */}
          <rect x="10" y="40" width="20" height="25" rx="1" strokeWidth="1.2" />
          <rect x="35" y="40" width="20" height="25" rx="1" strokeWidth="1.2" />
          <rect x="60" y="40" width="20" height="25" rx="1" strokeWidth="1.2" />
          <rect x="85" y="40" width="20" height="25" rx="1" strokeWidth="1.2" />
          
          {/* Lignes verticales (rythme Haussmannien) */}
          <line x1="20" y1="20" x2="20" y2="100" strokeWidth="1.3" />
          <line x1="45" y1="20" x2="45" y2="100" strokeWidth="1.3" />
          <line x1="70" y1="20" x2="70" y2="100" strokeWidth="1.3" />
          <line x1="95" y1="20" x2="95" y2="100" strokeWidth="1.3" />
          
          {/* Niveau intermédiaire */}
          <line x1="0" y1="65" x2="120" y2="65" strokeWidth="1.2" />
        </g>

        {/* LIGNE QUI RELIE — se transforme à travers les 4 moments */}
        
        {/* Segment 1: Ligne fine, tremblante, fragmentée (sous Observer) */}
        <path
          className="connecting-line line-1"
          d="M 110 200 Q 115 198 120 200 Q 125 202 130 200 Q 135 198 140 200"
        />
        
        {/* Segment 2: Ligne plus affirmée, commence à se ramifier (sous Traverser) */}
        <path
          className="connecting-line line-2"
          d="M 340 200 L 400 200"
        />
        <line x1="370" y1="200" x2="370" y2="195" className="connecting-line line-2" strokeWidth="0.8" opacity="0.5" />
        
        {/* Segment 3: Ligne architecturale, angles droits apparaissent (sous Comprendre) */}
        <path
          className="connecting-line line-3"
          d="M 570 200 L 620 200 L 630 195 L 640 200 L 650 195 L 660 200"
        />
        
        {/* Segment 4: Ligne solide, structurée, presque une corniche (sous Édifier) */}
        <path
          className="connecting-line line-4"
          d="M 800 200 L 900 200"
        />
        <line x1="800" y1="200" x2="800" y2="195" className="connecting-line line-4" strokeWidth="1" opacity="0.6" />
        <line x1="850" y1="200" x2="850" y2="195" className="connecting-line line-4" strokeWidth="1" opacity="0.6" />
        <line x1="900" y1="200" x2="900" y2="195" className="connecting-line line-4" strokeWidth="1" opacity="0.6" />
      </svg>
    </div>
  );
}
