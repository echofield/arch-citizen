/**
 * CHEMIN SVG — ARCHÉ
 * Lignes architecturales progressives pour "Le Chemin"
 * Style : construction horizontale, rythme vertical
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
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 200"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          maxHeight: '72vh'
        }}
      >
        <style>
          {`
            /* Animation de tracé progressif — encre qui se dessine */
            @keyframes drawMap {
              from {
                stroke-dashoffset: 2000;
              }
              to {
                stroke-dashoffset: 0;
              }
            }

            /* Styles de base pour tous les éléments */
            #chemin-lines line {
              stroke: currentColor;
              fill: none;
              opacity: 0.6;
              transition: all 400ms ease;
              stroke-dasharray: 2000;
              stroke-dashoffset: 2000;
              animation: drawMap 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
              stroke-width: 3;
            }

            /* Délais progressifs par groupe */
            #horizontal-main line {
              animation-delay: 0s;
              animation-duration: 2s;
            }

            #horizontal-secondary line {
              animation-delay: 0.5s;
              animation-duration: 2.5s;
            }

            #vertical-intervals line {
              animation-delay: 1s;
              animation-duration: 3s;
            }

            /* Hover states — épaississement léger */
            @media (hover: hover) {
              #chemin-lines line:hover {
                opacity: 1;
                stroke-width: 4;
                cursor: pointer;
              }
            }

            /* Responsive mobile */
            @media (max-width: 768px) {
              svg {
                padding: 0 24px;
                max-height: 70vh;
              }
              
              /* Désactiver hover sur tactile */
              @media (hover: none) {
                #chemin-lines line:hover {
                  stroke-width: 3;
                  opacity: 0.6;
                }
              }
            }
            
            /* Desktop - limiter la taille maximale */
            @media (min-width: 769px) {
              svg {
                max-width: 1080px;
                margin: 0 auto;
              }
            }
          `}
        </style>

        <g id="chemin-lines">
          {/* Group 1: Lignes principales horizontales — progression */}
          <g id="horizontal-main">
            <line x1="40" y1="100" x2="360" y2="100" />
          </g>

          {/* Group 2: Lignes secondaires horizontales */}
          <g id="horizontal-secondary">
            <line x1="60" y1="80" x2="340" y2="80" />
            <line x1="80" y1="120" x2="320" y2="120" />
          </g>

          {/* Group 3: Intervalles verticaux subtils — rythme */}
          <g id="vertical-intervals">
            <line x1="120" y1="70" x2="120" y2="130" />
            <line x1="200" y1="65" x2="200" y2="135" />
            <line x1="280" y1="70" x2="280" y2="130" />
          </g>
        </g>
      </svg>
    </div>
  );
}
