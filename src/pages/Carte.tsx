/**
 * PAGE CARTE — ARCHÉ
 * La Carte de Paris
 * 
 * Une constellation, pas une task list
 * Une carte qui ne se dévoile qu'en marchant
 */

import { useState } from 'react';
import { BackButton } from '../components/BackButton';

interface Lieu {
  id: string;
  nom: string;
  texte: string;
  complement: string;
  x: number;
  y: number;
}

const lieux: Lieu[] = [
  {
    id: '1',
    nom: 'Le Seuil',
    texte: 'Ici, on entre sans s’en rendre compte.',
    complement: 'Un passage ancien.\nUne promenade sans début.',
    x: 375,
    y: 300
  },
  {
    id: '4',
    nom: 'La Mémoire',
    texte: 'La ville se souvient mieux que nous.',
    complement: 'Paris qui archive.\nParis qui conserve.',
    x: 415,
    y: 315
  },
  {
    id: '5',
    nom: 'Le Savoir',
    texte: 'Le savoir n’élève pas la voix.',
    complement: 'Ici, on étudie en silence.\nLa ville pense.',
    x: 375,
    y: 340
  },
  {
    id: '6',
    nom: 'L’Axe Invisible',
    texte: 'Certains lieux mesurent plus que le temps.',
    complement: 'Ici, la ville ne se regarde pas.\nElle s’oriente.',
    x: 335,
    y: 325
  },
  {
    id: '9',
    nom: 'Le Passage',
    texte: 'La ville parle surtout dans les rues ordinaires.',
    complement: 'Commerce ancien.\nBâtiments parlants.',
    x: 397,
    y: 257
  },
  {
    id: '10',
    nom: 'La Fracture',
    texte: 'L’eau garde ce que la pierre oublie.',
    complement: 'Pause entre deux flux.\nLa ville respire.',
    x: 435,
    y: 257
  },
  {
    id: '18',
    nom: 'La Hauteur',
    texte: 'Monter n’est pas toujours s’élever.',
    complement: 'Vue d’en haut sans domination.\nPoésie populaire.',
    x: 360,
    y: 215
  }
];

interface CarteProps {
  onNavigate?: (page: 'home' | 'carte' | 'quetes' | 'passeport' | 'edile' | 'cercle') => void;
}

export default function Carte({ onNavigate }: CarteProps) {
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [hoveredLieu, setHoveredLieu] = useState<Lieu | null>(null);
  const [selectedLieu, setSelectedLieu] = useState<Lieu | null>(null);

  const handleDistrictMouseEnter = (district: string) => {
    setHoveredDistrict(district);
  };

  const handleDistrictMouseLeave = () => {
    setHoveredDistrict(null);
  };

  const handleDistrictClick = (district: string) => {
    if (selectedDistrict === district) {
      setSelectedDistrict(null);
    } else {
      setSelectedDistrict(district);
    }
  };

  const handleLieuMouseEnter = (lieu: Lieu) => {
    setHoveredLieu(lieu);
  };

  const handleLieuMouseLeave = () => {
    setHoveredLieu(null);
  };

  const handleLieuClick = (lieu: Lieu, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedLieu?.id === lieu.id) {
      setSelectedLieu(null);
    } else {
      setSelectedLieu(lieu);
    }
  };

  const displayedInfo = hoveredLieu?.texte || (selectedDistrict || hoveredDistrict);

  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}
      {/* Titre */}
      <section 
        style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '100px 40px 20px',
          textAlign: 'center'
        }}
      >
        <h1 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '48px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: '12px',
            lineHeight: 1.2
          }}
        >
          La Carte de Paris
        </h1>

        {/* Subtitle — une carte qui ne se dévoile qu'en marchant */}
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.5,
            marginBottom: '30px'
          }}
        >
          Une carte qui ne se dévoile qu'en marchant.
        </p>
      </section>

      {/* Info hover — arrondissement ou lieu */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '16px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: displayedInfo ? 0.65 : 0,
            height: '26px',
            transition: 'opacity 300ms ease'
          }}
        >
          {displayedInfo || '\u00A0'}
        </p>
      </div>

      {/* VISUEL DE CARTE — géométrie de Paris + lieux symboliques */}
      <section
        style={{
          maxWidth: selectedLieu ? '2400px' : 'none',
          margin: '-100px auto 100px',
          padding: '0 80px',
          display: 'flex',
          gap: '100px',
          alignItems: 'flex-start',
          justifyContent: 'center',
          transition: 'all 500ms ease'
        }}
      >
        {/* Carte SVG */}
        <div
          style={{
            flex: selectedLieu ? '0 0 65%' : 'none',
            background: 'transparent',
            padding: '0',
            display: 'flex',
            justifyContent: 'center',
            transition: 'all 500ms ease',
            width: selectedLieu ? 'auto' : '100%'
          }}
        >
          <svg 
            viewBox="0 0 800 600" 
            style={{
              width: '100%',
              maxWidth: selectedLieu ? '1600px' : '3000px',
              height: 'auto',
              transition: 'all 500ms ease'
            }}
          >
            <style>
              {`
                .arrondissement {
                  fill: transparent;
                  stroke: #2B2B2B;
                  stroke-width: 0.5;
                  opacity: 0.35;
                  transition: all 300ms ease;
                  cursor: pointer;
                }
                .arrondissement:hover {
                  opacity: 0.6;
                  stroke-width: 0.8;
                  stroke: #0E3F2F;
                }
                .arrondissement.selected {
                  opacity: 0.7;
                  stroke-width: 1;
                  stroke: #0E3F2F;
                  fill: rgba(14, 63, 47, 0.03);
                }
                .label {
                  font-size: 10px;
                  fill: #2B2B2B;
                  opacity: 0.3;
                  pointer-events: none;
                  font-weight: 300;
                  font-family: 'Cormorant Garamond', Georgia, serif;
                }
                .lieu-circle {
                  fill: rgba(14, 63, 47, 0.08);
                  stroke: #0E3F2F;
                  stroke-width: 0.8;
                  opacity: 0.5;
                  cursor: pointer;
                  transition: all 300ms ease;
                }
                .lieu-circle:hover {
                  opacity: 1;
                  fill: rgba(14, 63, 47, 0.15);
                  stroke-width: 1.2;
                }
                .lieu-circle.selected {
                  opacity: 1;
                  fill: rgba(14, 63, 47, 0.2);
                  stroke-width: 1.5;
                }
              `}
            </style>

            {/* Arrondissements */}
            <path 
              className={`arrondissement ${selectedDistrict === '1er - Louvre' ? 'selected' : ''}`}
              d="M360,280 L390,275 L395,300 L385,320 L360,315 Z"
              onMouseEnter={() => handleDistrictMouseEnter('1er - Louvre')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('1er - Louvre')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '2e - Bourse' ? 'selected' : ''}`}
              d="M390,275 L420,270 L425,295 L395,300 Z"
              onMouseEnter={() => handleDistrictMouseEnter('2e - Bourse')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('2e - Bourse')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '3e - Temple' ? 'selected' : ''}`}
              d="M420,270 L450,275 L445,305 L425,295 Z"
              onMouseEnter={() => handleDistrictMouseEnter('3e - Temple')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('3e - Temple')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '4e - Hôtel-de-Ville' ? 'selected' : ''}`}
              d="M385,320 L395,300 L425,295 L445,305 L440,330 L410,335 Z"
              onMouseEnter={() => handleDistrictMouseEnter('4e - Hôtel-de-Ville')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('4e - Hôtel-de-Ville')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '5e - Panthéon' ? 'selected' : ''}`}
              d="M360,315 L385,320 L410,335 L400,365 L370,360 L350,340 Z"
              onMouseEnter={() => handleDistrictMouseEnter('5e - Panthéon')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('5e - Panthéon')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '6e - Luxembourg' ? 'selected' : ''}`}
              d="M330,310 L360,315 L350,340 L320,335 L310,320 Z"
              onMouseEnter={() => handleDistrictMouseEnter('6e - Luxembourg')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('6e - Luxembourg')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '7e - Palais-Bourbon' ? 'selected' : ''}`}
              d="M300,280 L330,275 L330,310 L310,320 L280,305 L275,285 Z"
              onMouseEnter={() => handleDistrictMouseEnter('7e - Palais-Bourbon')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('7e - Palais-Bourbon')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '8e - Élysée' ? 'selected' : ''}`}
              d="M330,275 L360,280 L390,275 L380,245 L340,240 L325,255 Z"
              onMouseEnter={() => handleDistrictMouseEnter('8e - Élysée')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('8e - Élysée')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '9e - Opéra' ? 'selected' : ''}`}
              d="M380,245 L390,275 L420,270 L415,240 L385,235 Z"
              onMouseEnter={() => handleDistrictMouseEnter('9e - Opéra')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('9e - Opéra')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '10e - Entrepôt' ? 'selected' : ''}`}
              d="M415,240 L420,270 L450,275 L455,245 L425,235 Z"
              onMouseEnter={() => handleDistrictMouseEnter('10e - Entrepôt')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('10e - Entrepôt')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '11e - Popincourt' ? 'selected' : ''}`}
              d="M445,305 L450,275 L455,245 L485,250 L490,285 L480,315 L440,330 Z"
              onMouseEnter={() => handleDistrictMouseEnter('11e - Popincourt')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('11e - Popincourt')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '12e - Reuilly' ? 'selected' : ''}`}
              d="M440,330 L480,315 L510,320 L515,360 L480,375 L410,365 L410,335 Z"
              onMouseEnter={() => handleDistrictMouseEnter('12e - Reuilly')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('12e - Reuilly')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '13e - Gobelins' ? 'selected' : ''}`}
              d="M370,360 L400,365 L410,365 L480,375 L470,410 L380,400 L360,380 Z"
              onMouseEnter={() => handleDistrictMouseEnter('13e - Gobelins')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('13e - Gobelins')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '14e - Observatoire' ? 'selected' : ''}`}
              d="M320,335 L350,340 L370,360 L360,380 L320,375 L300,355 Z"
              onMouseEnter={() => handleDistrictMouseEnter('14e - Observatoire')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('14e - Observatoire')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '15e - Vaugirard' ? 'selected' : ''}`}
              d="M250,320 L280,305 L310,320 L320,335 L300,355 L250,360 L230,340 Z"
              onMouseEnter={() => handleDistrictMouseEnter('15e - Vaugirard')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('15e - Vaugirard')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '16e - Passy' ? 'selected' : ''}`}
              d="M220,250 L260,240 L275,285 L280,305 L250,320 L230,340 L200,330 L190,280 Z"
              onMouseEnter={() => handleDistrictMouseEnter('16e - Passy')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('16e - Passy')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '17e - Batignolles-Monceau' ? 'selected' : ''}`}
              d="M260,240 L300,230 L325,255 L340,240 L335,210 L290,200 L250,215 Z"
              onMouseEnter={() => handleDistrictMouseEnter('17e - Batignolles-Monceau')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('17e - Batignolles-Monceau')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '18e - Montmartre' ? 'selected' : ''}`}
              d="M335,210 L340,240 L380,245 L385,235 L380,200 L340,190 Z"
              onMouseEnter={() => handleDistrictMouseEnter('18e - Montmartre')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('18e - Montmartre')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '19e - Buttes-Chaumont' ? 'selected' : ''}`}
              d="M380,200 L385,235 L415,240 L425,235 L430,200 L390,190 Z"
              onMouseEnter={() => handleDistrictMouseEnter('19e - Buttes-Chaumont')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('19e - Buttes-Chaumont')}
            />
            <path 
              className={`arrondissement ${selectedDistrict === '20e - Ménilmontant' ? 'selected' : ''}`}
              d="M430,200 L425,235 L455,245 L485,250 L490,220 L470,190 L435,195 Z"
              onMouseEnter={() => handleDistrictMouseEnter('20e - Ménilmontant')}
              onMouseLeave={handleDistrictMouseLeave}
              onClick={() => handleDistrictClick('20e - Ménilmontant')}
            />

            {/* Labels numérotés arrondissements */}
            <text x="375" y="300" className="label" textAnchor="middle">1</text>
            <text x="407" y="285" className="label" textAnchor="middle">2</text>
            <text x="435" y="287" className="label" textAnchor="middle">3</text>
            <text x="415" y="315" className="label" textAnchor="middle">4</text>
            <text x="375" y="340" className="label" textAnchor="middle">5</text>
            <text x="335" y="325" className="label" textAnchor="middle">6</text>
            <text x="302" y="300" className="label" textAnchor="middle">7</text>
            <text x="355" y="260" className="label" textAnchor="middle">8</text>
            <text x="397" y="257" className="label" textAnchor="middle">9</text>
            <text x="435" y="257" className="label" textAnchor="middle">10</text>
            <text x="465" y="280" className="label" textAnchor="middle">11</text>
            <text x="460" y="345" className="label" textAnchor="middle">12</text>
            <text x="420" y="387" className="label" textAnchor="middle">13</text>
            <text x="340" y="365" className="label" textAnchor="middle">14</text>
            <text x="275" y="337" className="label" textAnchor="middle">15</text>
            <text x="235" y="285" className="label" textAnchor="middle">16</text>
            <text x="295" y="225" className="label" textAnchor="middle">17</text>
            <text x="360" y="215" className="label" textAnchor="middle">18</text>
            <text x="405" y="217" className="label" textAnchor="middle">19</text>
            <text x="460" y="220" className="label" textAnchor="middle">20</text>

            {/* 7 lieux symboliques — cercles fins */}
            {lieux.map(lieu => (
              <circle
                key={lieu.id}
                className={`lieu-circle ${selectedLieu?.id === lieu.id ? 'selected' : ''}`}
                cx={lieu.x}
                cy={lieu.y}
                r="7"
                onMouseEnter={() => handleLieuMouseEnter(lieu)}
                onMouseLeave={handleLieuMouseLeave}
                onClick={(e) => handleLieuClick(lieu, e)}
              />
            ))}
          </svg>
        </div>

        {/* Panneau latéral — apparaît au clic sur un lieu */}
        {selectedLieu && (
          <div
            style={{
              flex: '0 0 38%',
              background: 'transparent',
              borderLeft: '0.5px solid rgba(14, 63, 47, 0.2)',
              padding: '60px 50px',
              position: 'relative',
              animation: 'slideIn 500ms ease',
              minHeight: '500px'
            }}
          >
            <button
              onClick={() => setSelectedLieu(null)}
              style={{
                position: 'absolute',
                top: '30px',
                right: '30px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                fontSize: '24px',
                color: '#2B2B2B',
                opacity: 0.3,
                transition: 'opacity 300ms ease',
                fontWeight: 300
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.3'}
            >
              ×
            </button>

            <h3
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '36px',
                fontWeight: 500,
                color: '#0E3F2F',
                marginBottom: '32px',
                lineHeight: 1.3,
                letterSpacing: '0.01em'
              }}
            >
              {selectedLieu.nom}
            </h3>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '20px',
                fontWeight: 300,
                fontStyle: 'italic',
                lineHeight: 1.8,
                color: '#2B2B2B',
                opacity: 0.8,
                marginBottom: '40px'
              }}
            >
              {selectedLieu.texte}
            </p>

            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '16px',
                fontWeight: 300,
                color: '#2B2B2B',
                opacity: 0.6,
                lineHeight: 1.9,
                whiteSpace: 'pre-line'
              }}
            >
              {selectedLieu.complement}
            </p>
          </div>
        )}
      </section>

      {/* Légende discrète */}
      <section
        style={{
          maxWidth: '1000px',
          margin: '0 auto 60px',
          padding: '0 40px',
          display: 'flex',
          justifyContent: 'center',
          gap: '40px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '0.8px solid #0E3F2F',
              background: 'rgba(14, 63, 47, 0.08)'
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.4
            }}
          >
            À découvrir
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              border: '0.8px solid #0E3F2F',
              background: 'linear-gradient(90deg, #0E3F2F 50%, rgba(14, 63, 47, 0.08) 50%)'
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.4
            }}
          >
            En marche
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: '#0E3F2F'
            }}
          />
          <span
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              color: '#2B2B2B',
              opacity: 0.4
            }}
          >
            Intégré
          </span>
        </div>
      </section>

      {/* Phrase finale */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 160px',
          padding: '0 40px',
          textAlign: 'center'
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.9,
            color: '#2B2B2B',
            opacity: 0.6
          }}
        >
          La carte n’indique pas où aller.<br />
          Elle indique où écouter.
        </p>
      </section>

      {/* Animation pour le panneau latéral */}
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      {/* FOOTER — simplifié */}
      <footer 
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 40px 120px',
          textAlign: 'center'
        }}
      >
        <h2 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: '#0E3F2F',
            marginBottom: '16px'
          }}
        >
          ARCHÉ
        </h2>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '14px',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.08em',
            opacity: 0.4,
            marginBottom: '60px'
          }}
        >
          Paris · République
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '15px',
            fontWeight: 300,
            fontStyle: 'italic',
            opacity: 0.35
          }}
        >
          En construction permanente
        </p>
      </footer>
    </>
  );
}