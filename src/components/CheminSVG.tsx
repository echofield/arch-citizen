/**
 * CHEMIN SVG — ARCHÉ
 * Structure unique qui évolue : Observer → Traverser → Comprendre → Édifier
 * Une seule illustration continue qui se transforme
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

            .evolving-structure * {
              stroke: currentColor;
              fill: none;
              stroke-linecap: round;
              stroke-linejoin: round;
            }

            .zone-1 * {
              stroke-width: 0.7;
              opacity: 0.5;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
            }

            .zone-2 * {
              stroke-width: 0.9;
              opacity: 0.65;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards;
            }

            .zone-3 * {
              stroke-width: 1.1;
              opacity: 0.75;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
            }

            .zone-4 * {
              stroke-width: 1.3;
              opacity: 0.85;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.6s cubic-bezier(0.4, 0, 0.2, 1) 1.1s forwards;
            }

            .base-line {
              stroke: currentColor;
              fill: none;
              stroke-linecap: round;
            }

            .base-1 {
              stroke-width: 0.5;
              opacity: 0.4;
              stroke-dasharray: 2 2;
            }

            .base-2 {
              stroke-width: 0.7;
              opacity: 0.5;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
            }

            .base-3 {
              stroke-width: 0.9;
              opacity: 0.6;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.2s cubic-bezier(0.4, 0, 0.2, 1) 0.7s forwards;
            }

            .base-4 {
              stroke-width: 1.2;
              opacity: 0.7;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawChemin 2.4s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
            }
          `}
        </style>

        {/* STRUCTURE CONTINUE QUI ÉVOLUE — une seule illustration qui se transforme */}

        {/* ZONE 1: OBSERVER — Perspective qui émerge (gauche, très subtile) */}
        <g className="zone-1">
          {/* Fenêtre très subtile */}
          <rect x="20" y="40" width="70" height="50" rx="1" strokeWidth="0.6" />
          {/* Lignes de perspective (très fines) */}
          <line x1="55" y1="48" x2="35" y2="85" strokeWidth="0.5" />
          <line x1="55" y1="48" x2="75" y2="85" strokeWidth="0.5" />
          <line x1="55" y1="48" x2="45" y2="85" strokeWidth="0.4" />
          <line x1="55" y1="48" x2="65" y2="85" strokeWidth="0.4" />
          {/* Horizon subtil */}
          <line x1="35" y1="60" x2="75" y2="60" strokeWidth="0.4" />
        </g>

        {/* ZONE 2: TRAVERSER — Plan de rues (transition, se connecte à zone 1) */}
        <g className="zone-2">
          {/* Rues qui se croisent */}
          <line x1="100" y1="65" x2="200" y2="65" strokeWidth="0.8" />
          <line x1="150" y1="30" x2="150" y2="100" strokeWidth="0.8" />
          {/* Rues secondaires */}
          <line x1="125" y1="30" x2="125" y2="100" strokeWidth="0.6" />
          <line x1="175" y1="30" x2="175" y2="100" strokeWidth="0.6" />
          <line x1="100" y1="50" x2="200" y2="50" strokeWidth="0.6" />
          <line x1="100" y1="80" x2="200" y2="80" strokeWidth="0.6" />
          {/* Point de mouvement */}
          <circle cx="135" cy="65" r="1.2" fill="currentColor" opacity="0.6" />
        </g>

        {/* ZONE 3: COMPRENDRE — Architecture émerge (transition vers structure) */}
        <g className="zone-3">
          {/* Base architecturale */}
          <line x1="220" y1="90" x2="350" y2="90" strokeWidth="1" />
          {/* Seuils/arches qui apparaissent */}
          <path d="M 240 90 Q 250 72 260 90" strokeWidth="0.9" />
          <path d="M 280 90 Q 290 72 300 90" strokeWidth="0.9" />
          <path d="M 320 90 Q 330 72 340 90" strokeWidth="0.9" />
          {/* Lignes verticales (structure émerge) */}
          <line x1="230" y1="55" x2="230" y2="90" strokeWidth="0.9" />
          <line x1="270" y1="55" x2="270" y2="90" strokeWidth="0.9" />
          <line x1="310" y1="55" x2="310" y2="90" strokeWidth="0.9" />
          <line x1="350" y1="55" x2="350" y2="90" strokeWidth="0.9" />
          {/* Ligne supérieure */}
          <line x1="230" y1="55" x2="350" y2="55" strokeWidth="1" />
        </g>

        {/* ZONE 4: ÉDIFIER — Façade Haussmannienne complète (droite, structure finale) */}
        <g className="zone-4">
          {/* Base solide */}
          <line x1="380" y1="95" x2="850" y2="95" strokeWidth="1.4" />
          {/* Corniche supérieure */}
          <line x1="380" y1="30" x2="850" y2="30" strokeWidth="1.4" />
          {/* Bays verticales (rythme Haussmannien) */}
          <line x1="420" y1="30" x2="420" y2="95" strokeWidth="1.2" />
          <line x1="480" y1="30" x2="480" y2="95" strokeWidth="1.2" />
          <line x1="540" y1="30" x2="540" y2="95" strokeWidth="1.2" />
          <line x1="600" y1="30" x2="600" y2="95" strokeWidth="1.2" />
          <line x1="660" y1="30" x2="660" y2="95" strokeWidth="1.2" />
          <line x1="720" y1="30" x2="720" y2="95" strokeWidth="1.2" />
          <line x1="780" y1="30" x2="780" y2="95" strokeWidth="1.2" />
          {/* Fenêtres (modules répétés) */}
          <rect x="400" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          <rect x="460" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          <rect x="520" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          <rect x="580" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          <rect x="640" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          <rect x="700" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          <rect x="760" y="52" width="16" height="20" rx="0.5" strokeWidth="1" />
          {/* Niveau intermédiaire */}
          <line x1="380" y1="68" x2="850" y2="68" strokeWidth="1.1" />
          {/* Arches (arcade) */}
          <path d="M 404 95 Q 408 85 412 95" strokeWidth="1" />
          <path d="M 464 95 Q 468 85 472 95" strokeWidth="1" />
          <path d="M 524 95 Q 528 85 532 95" strokeWidth="1" />
          <path d="M 584 95 Q 588 85 592 95" strokeWidth="1" />
          <path d="M 644 95 Q 648 85 652 95" strokeWidth="1" />
          <path d="M 704 95 Q 708 85 712 95" strokeWidth="1" />
          <path d="M 764 95 Q 768 85 772 95" strokeWidth="1" />
        </g>

        {/* LIGNE DE BASE CONTINUE — se transforme sous la structure */}
        <path
          className="base-line base-1"
          d="M 20 150 Q 30 148 40 150 Q 50 152 60 150"
        />
        <path
          className="base-line base-2"
          d="M 90 150 L 230 150"
        />
        <path
          className="base-line base-3"
          d="M 280 150 L 380 150"
        />
        <path
          className="base-line base-4"
          d="M 380 150 L 850 150"
        />
        {/* Détails architecturaux sur la ligne finale */}
        <line x1="420" y1="150" x2="420" y2="145" className="base-line base-4" strokeWidth="0.7" opacity="0.5" />
        <line x1="540" y1="150" x2="540" y2="145" className="base-line base-4" strokeWidth="0.7" opacity="0.5" />
        <line x1="660" y1="150" x2="660" y2="145" className="base-line base-4" strokeWidth="0.7" opacity="0.5" />
        <line x1="780" y1="150" x2="780" y2="145" className="base-line base-4" strokeWidth="0.7" opacity="0.5" />
      </svg>
    </div>
  );
}
