/**
 * PAGE HOME — ARCHÉ
 * La ville nous attend
 *
 * Structure:
 * 1. Hero: ARCHÉ / Paris · République / La ville nous attend
 * 2. Intro text + CTA "Devenir citoyen"
 * 3. THE MAP (central, dominant)
 * 4. Narrative sections below the map
 */

import { Blason } from '../components/Blason';
import { PortalTransition } from '../components/PortalTransition';
import { CarteInteractive } from '../components/CarteInteractive';
import { useState, useCallback, useRef } from 'react';

interface Lieu {
  id: string;
  nom: string;
  texte: string;
  complement: string;
  x: number;
  y: number;
}

const lieux: Lieu[] = [
  { id: "1", nom: "Le Seuil", texte: "Ici, on entre sans s'en rendre compte.", complement: "Un passage ancien.\nUne promenade sans début.", x: 375, y: 300 },
  { id: "4", nom: "La Mémoire", texte: "La ville se souvient mieux que nous.", complement: "Paris qui archive.\nParis qui conserve.", x: 415, y: 315 },
  { id: "5", nom: "Le Savoir", texte: "Le savoir n'élève pas la voix.", complement: "Ici, on étudie en silence.\nLa ville pense.", x: 375, y: 340 },
  { id: "6", nom: "L'Axe Invisible", texte: "Certains lieux mesurent plus que le temps.", complement: "Ici, la ville ne se regarde pas.\nElle s'oriente.", x: 335, y: 325 },
  { id: "9", nom: "Le Passage", texte: "La ville parle surtout dans les rues ordinaires.", complement: "Commerce ancien.\nBâtiments parlants.", x: 397, y: 257 },
  { id: "10", nom: "La Fracture", texte: "L'eau garde ce que la pierre oublie.", complement: "Pause entre deux flux.\nLa ville respire.", x: 435, y: 257 },
  { id: "18", nom: "La Hauteur", texte: "Monter n'est pas toujours s'élever.", complement: "Vue d'en haut sans domination.\nPoésie populaire.", x: 360, y: 215 }
];

interface HomeProps {
  onNavigate: (page: 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [portalActive, setPortalActive] = useState(false);
  const [hoveredLieu, setHoveredLieu] = useState<Lieu | null>(null);
  const [selectedLieu, setSelectedLieu] = useState<Lieu | null>(null);
  const mapRef = useRef<HTMLElement>(null);

  const handleBlasonClick = useCallback(() => {
    onNavigate('cercle');
  }, [onNavigate]);

  const handleTransitionComplete = useCallback(() => {
    setPortalActive(false);
    onNavigate('cercle');
  }, [onNavigate]);

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

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const displayedInfo = hoveredLieu?.texte || null;

  return (
    <>
      <Blason onClick={handleBlasonClick} />
      <PortalTransition isActive={portalActive} onComplete={handleTransitionComplete} />

      <section style={{ maxWidth: '680px', margin: '0 auto', padding: '180px 40px 60px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '68px', fontWeight: 500, letterSpacing: '0.25em', color: '#0E3F2F', marginBottom: '20px', lineHeight: 1 }}>ARCHÉ</h1>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '15px', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.08em', color: '#2B2B2B', opacity: 0.4, marginBottom: '80px' }}>Paris · République</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '40px', fontWeight: 500, letterSpacing: '0.02em', lineHeight: 1.4, marginBottom: '60px' }}>La ville nous attend.</h2>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 300, lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: '28px', opacity: 0.85 }}>Sous les pavés, sous les façades, sous le bruit, une autre ville. Celle qui se murmure. Celle qui se marche. Celle qui s'invente.</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 400, lineHeight: 1.8, marginBottom: '60px', opacity: 0.9 }}>ARCHÉ est une cité pour ceux qui veulent la lire.</p>
        <button onClick={() => onNavigate('cle')} style={{ display: 'inline-block', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '18px 48px', background: '#0E3F2F', color: '#FAF9F6', border: 'none', cursor: 'pointer', transition: 'background 400ms ease' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'} onMouseLeave={(e) => e.currentTarget.style.background = '#0E3F2F'}>Devenir citoyen</button>
      </section>

      <section ref={mapRef} id="map-section" style={{ maxWidth: '1200px', margin: '80px auto 40px', padding: '0 40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '16px', fontWeight: 300, fontStyle: 'italic', color: '#2B2B2B', opacity: displayedInfo ? 0.65 : 0, height: '26px', transition: 'opacity 300ms ease' }}>{displayedInfo || ' '}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '1080px' }}>
            <CarteInteractive />
            <svg viewBox="0 0 2037.566 1615.5" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
              <style>{`.home-lieu-circle { fill: rgba(14, 63, 47, 0.08); stroke: #0E3F2F; stroke-width: 0.8; opacity: 0.5; cursor: pointer; pointer-events: all; transition: all 400ms ease; } .home-lieu-circle:hover { opacity: 1 !important; fill: rgba(14, 63, 47, 0.15); stroke-width: 1.2; } .home-lieu-circle.selected { opacity: 1 !important; fill: rgba(14, 63, 47, 0.2); stroke-width: 1.5; }`}</style>
              {lieux.map(lieu => { const scaleX = 2037.566 / 800; const scaleY = 1615.5 / 600; return (<circle key={lieu.id} className={`home-lieu-circle ${selectedLieu?.id === lieu.id ? "selected" : ""}`} cx={lieu.x * scaleX} cy={lieu.y * scaleY} r="8" onMouseEnter={() => handleLieuMouseEnter(lieu)} onMouseLeave={handleLieuMouseLeave} onClick={(e) => { e.stopPropagation(); handleLieuClick(lieu, e); }} />); })}
            </svg>
          </div>
        </div>
        <div style={{ maxWidth: '1000px', margin: '40px auto 0', padding: '0 40px', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '0.8px solid #0E3F2F', background: 'rgba(14, 63, 47, 0.08)' }} /><span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '13px', fontWeight: 300, color: '#2B2B2B', opacity: 0.4 }}>À découvrir</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', border: '0.8px solid #0E3F2F', background: 'linear-gradient(90deg, #0E3F2F 50%, rgba(14, 63, 47, 0.08) 50%)' }} /><span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '13px', fontWeight: 300, color: '#2B2B2B', opacity: 0.4 }}>En marche</span></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#0E3F2F' }} /><span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '13px', fontWeight: 300, color: '#2B2B2B', opacity: 0.4 }}>Intégré</span></div>
        </div>
      </section>

      <div style={{ maxWidth: '80px', height: '0.5px', background: 'rgba(0, 0, 0, 0.15)', margin: '100px auto 120px' }} />

      <section style={{ maxWidth: '640px', margin: '0 auto 160px', padding: '0 40px' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '15px', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.12em', color: '#2B2B2B', opacity: 0.35, marginBottom: '50px', textAlign: 'center' }}>Ordo per motum</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '21px', fontWeight: 300, lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: '32px', opacity: 0.85 }}>Paris est née de l'imagination.</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 300, lineHeight: 1.8, letterSpacing: '0.01em', marginBottom: '32px', opacity: 0.8 }}>Hugo l'a écrite. Balzac l'a peuplée. Les surréalistes l'ont rêvée éveillés. Chaque génération réinvente la ville, et la ville survit parce qu'elle devient mythe.</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 400, lineHeight: 1.8, opacity: 0.9 }}>ARCHÉ continue ce geste. En marchant.</p>
      </section>

      <section style={{ maxWidth: '640px', margin: '0 auto 160px', padding: '0 40px' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '21px', fontWeight: 300, lineHeight: 2, letterSpacing: '0.01em', marginBottom: '40px', opacity: 0.85 }}>Les murs parlent à ceux qui s'arrêtent.<br />Les seuils gardent mémoire.<br />Les inscriptions attendent qu'on les lise.</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 300, lineHeight: 1.8, opacity: 0.8 }}>Une bibliothèque oubliée. Un oratoire caché. Un alignement que personne ne regarde plus. La ville est pleine de ce que nous avons cessé de voir.</p>
      </section>

      <section style={{ maxWidth: '640px', margin: '0 auto 160px', padding: '0 40px' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 300, lineHeight: 1.8, marginBottom: '60px', opacity: 0.85 }}>La carte d'ARCHÉ recense ces lieux. Elle n'est jamais complète. Elle s'écrit avec ceux qui marchent.</p>
        <div style={{ textAlign: 'center' }}>
          <button onClick={scrollToMap} style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 32px', background: 'transparent', color: '#0E3F2F', border: '0.5px solid rgba(14, 63, 47, 0.25)', cursor: 'pointer', opacity: 0.6, transition: 'all 400ms ease' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.25)'; }}>Voir la carte</button>
        </div>
      </section>

      <section style={{ maxWidth: '640px', margin: '0 auto 160px', padding: '0 40px' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '21px', fontWeight: 400, lineHeight: 1.8, marginBottom: '32px', opacity: 0.9 }}>Les quêtes ne sont pas des jeux.</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 300, lineHeight: 1.8, marginBottom: '32px', opacity: 0.8 }}>Ce sont des invitations à regarder autrement. À lever les yeux. À traverser une rue comme si c'était la première fois. À laisser la ville vous parler.</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '19px', fontWeight: 300, lineHeight: 1.8, marginBottom: '60px', opacity: 0.8 }}>Certaines quêtes sont historiques. D'autres sont inventées. D'autres encore n'existent pas encore — elles attendent que quelqu'un les imagine.</p>
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => onNavigate('chemin')} style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '14px 32px', background: 'transparent', color: '#0E3F2F', border: '0.5px solid rgba(14, 63, 47, 0.25)', cursor: 'pointer', opacity: 0.6, transition: 'all 400ms ease' }} onMouseEnter={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)'; }} onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.6'; e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.25)'; }}>Suivre le chemin</button>
        </div>
      </section>

      <div style={{ maxWidth: '80px', height: '0.5px', background: 'rgba(0, 0, 0, 0.15)', margin: '0 auto 100px' }} />

      <footer style={{ maxWidth: '640px', margin: '0 auto', padding: '0 40px 120px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '42px', fontWeight: 500, letterSpacing: '0.25em', color: '#0E3F2F', marginBottom: '16px' }}>ARCHÉ</h2>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '14px', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.08em', opacity: 0.4, marginBottom: '60px' }}>Paris · République</p>
        <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '15px', fontWeight: 300, fontStyle: 'italic', opacity: 0.35 }}>En construction permanente</p>
      </footer>
    </>
  );
}
