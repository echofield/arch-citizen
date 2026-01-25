/**
 * MINI-CARTE — ARCHÉ
 * Contour + Seine — territory marked
 *
 * The true shape of Paris. The river through it.
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
        opacity: 0.2,
        cursor: 'default',
        margin: '0 auto',
        transform: 'translateX(-8px)'
      }}
    >
      <svg
        viewBox="0 0 2100 1650"
        preserveAspectRatio="xMidYMid meet"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          color: '#0E3F2F'
        }}
      >
        <g>
          {/* Full outer contour of Paris — traced from boundary polygons */}
          <polygon
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
            points="
              0,1054
              5,1103
              10,1179
              54,1255
              133,1269
              150,1269
              208,1258
              235,1288
              203,1316
              208,1384
              270,1383
              303,1354
              347,1300
              365,1309
              399,1328
              511,1398
              618,1435
              779,1490
              963,1552
              1002,1565
              1018,1591
              1126,1601
              1141,1608
              1152,1605
              1180,1609
              1250,1558
              1292,1607
              1384,1605
              1429,1585
              1598,1499
              1607,1485
              1703,1433
              1724,1417
              1764,1391
              1825,1368
              1852,1356
              1882,1360
              1899,1375
              1973,1271
              2013,1279
              2031,1035
              2036,986
              2029,936
              2010,758
              2005,690
              2006,622
              2002,554
              1988,479
              1967,441
              1950,408
              1891,390
              1851,364
              1836,342
              1825,312
              1825,263
              1820,222
              1808,142
              1796,114
              1779,74
              1723,24
              1645,1
              1467,7
              1330,11
              1244,14
              1148,17
              975,23
              893,25
              856,28
              834,48
              722,103
              695,120
              612,179
              544,231
              504,238
              428,293
              370,363
              358,439
              328,452
              307,448
              309,514
              238,638
              177,762
              67,1031
              61,1054
              58,1056
              21,1054
              0,1054
            "
          />

          {/* La Seine — the river through Paris */}
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="
              1714,1425
              1549,1228
              1510,1171
              1413,1062
              1396,1043
              1372,1014
              1332,982
              1289,960
              1238,943
              1216,933
              1202,925
              1182,912
              1152,897
              1131,882
              1107,850
              1065,816
              1022,804
              988,792
              860,730
              829,716
              624,722
              604,724
              573,734
              545,749
              538,754
              481,819
              323,1000
              150,1269
            "
          />
        </g>
      </svg>
    </div>
  );
}
