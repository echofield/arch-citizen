/**
 * CHEMIN SVG — ARCHÉ
 * Architecture under construction, becoming readable
 * Progressive density: emergence → organization → coherence
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
        viewBox="0 0 400 120"
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
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: var(--target-opacity); }
            }

            .cluster-1 {
              --target-opacity: 0.2;
              animation: fadeIn 2s ease 0.5s forwards;
              opacity: 0;
            }

            .cluster-2 {
              --target-opacity: 0.4;
              animation: fadeIn 2s ease 1s forwards;
              opacity: 0;
            }

            .cluster-3 {
              --target-opacity: 0.7;
              animation: fadeIn 2s ease 1.5s forwards;
              opacity: 0;
            }
          `}
        </style>

        {/* Cluster 1 — Emergence (left, low): tentative, scattered */}
        <g className="cluster-1">
          {/* Horizontal segments */}
          <line x1="40" y1="95" x2="55" y2="95" stroke="currentColor" strokeWidth="1" />
          <line x1="65" y1="95" x2="78" y2="95" stroke="currentColor" strokeWidth="1" />
          <line x1="85" y1="95" x2="100" y2="95" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Vertical connector 1 */}
        <g className="cluster-1">
          <line x1="70" y1="95" x2="70" y2="80" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Cluster 2 — Organization (middle, higher): rhythm appears */}
        <g className="cluster-2">
          {/* Horizontal segments */}
          <line x1="130" y1="80" x2="148" y2="80" stroke="currentColor" strokeWidth="1" />
          <line x1="155" y1="80" x2="170" y2="80" stroke="currentColor" strokeWidth="1" />
          <line x1="175" y1="80" x2="192" y2="80" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Vertical connector 2 */}
        <g className="cluster-2">
          <line x1="161" y1="80" x2="161" y2="60" stroke="currentColor" strokeWidth="1" />
        </g>

        {/* Cluster 3 — Coherence (right, highest): system holds */}
        <g className="cluster-3">
          {/* Horizontal segments */}
          <line x1="230" y1="60" x2="250" y2="60" stroke="currentColor" strokeWidth="1.25" />
          <line x1="258" y1="60" x2="278" y2="60" stroke="currentColor" strokeWidth="1.25" />
          <line x1="285" y1="60" x2="305" y2="60" stroke="currentColor" strokeWidth="1.25" />
        </g>

        {/* Vertical connector 3 */}
        <g className="cluster-3">
          <line x1="268" y1="60" x2="268" y2="35" stroke="currentColor" strokeWidth="1.25" />
        </g>

        {/* Cluster 4 — Final (rightmost, highest): legibility */}
        <g className="cluster-3">
          {/* Horizontal segments */}
          <line x1="320" y1="35" x2="340" y2="35" stroke="currentColor" strokeWidth="1.25" />
          <line x1="345" y1="35" x2="360" y2="35" stroke="currentColor" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}
