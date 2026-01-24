/**
 * MINI-CARTE — ARCHÉ
 * Contour + Seine — territory marked
 *
 * Just the shape. Just the river.
 * Recognizable without being cartographic.
 */

interface MiniCarteProps {
  onClick: () => void;
}

export function MiniCarte({ onClick }: MiniCarteProps) {
  return (
    <div
      onClick={onClick}
      style={{
        width: '400px',
        opacity: 0.18,
        cursor: 'default',
        margin: '0 auto',
        transform: 'translateX(-8px)'
      }}
    >
      <svg
        viewBox="0 0 2037.566 1615.5"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          color: '#0E3F2F'
        }}
      >
        <g>
          {/* Contour — the shape of Paris */}
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            d="M144.289,1303l23.777-35.5l60-88l17-29l21.5-39.5l43.5-67.5l2,1l2.5-4l21-23l37-38.5l59-64.5l31-33l5-6.5 l10.5-35.5l3.5-7.5l5.5-7l54.5-57.5l13.5-12l20-11.5l19-7l18.5-3.5l121-4l91-2.5l95,41l28,14l18.5,12.5l51,20l34,9l26,8 l29.5,25.5l22.5,28.5l21,16l31,12.5l18.5,13.5l17,9l22,11l13,4l27.5,13l49,24.5l36.5,34.5l41.5,52.5l12,13l1.5-1l89.5,100 l-1.5,1.5l8.5,11l26.5,39l109.5,131.5l11,18l40,44.5l3.5,0.5l19.609,20.5l17.388-13.846l-19.997-20.154l0.5-3l-114.5-135.5 l-71.5-86l1-2.5l-23.5-33.5l-11-12l-98-112.5l-44.5-47.5l-5-11l-2.5-10l-0.5-24l-4.5-7l-4.5-2.5l-33-17.5l-58.5-35l-47-28 l-24-10.5l-56.5-23.5l-32.5-9l-43.5-8.5l-59-18l-126-62l-32-16l-208.5,7.5l-23.5,3.5l-34.5,11.5l-29.5,13.5l-7.5,6l-30,36 l-61.5,74.5l-88.5,98.5l-32,35l-123.5,192l-8,7.5l-52.5,78.5l-12.5,20.513L144.289,1303z"
          />

          {/* La Seine — the river through Paris */}
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            points="1714.068,1425.5 1549.566,1228 1510.066,1171.5 1413.066,1062.5 1396.566,1043.5 1372.066,1014.5 1332.066,982.5 1289.566,960 1238.566,943 1216.566,933.5 1202.566,925.5 1182.566,912 1152.566,897.5 1131.066,882.5 1107.566,850.5 1065.566,816.5 1022.066,804.5 988.066,792.5 860.566,730.5 829.066,716 624.566,722.5 604.066,724.5 573.566,734 545.066,749 538.566,754 481.066,819 323.066,1000.5 150.566,1269"
          />
        </g>
      </svg>
    </div>
  );
}
