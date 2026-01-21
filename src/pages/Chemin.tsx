/**
 * PAGE CHEMIN — ARCHÉ
 * Le Chemin
 * 
 * La ville se traverse autant qu'elle se regarde
 */

import { BackButton } from '../components/BackButton';
import { CheminSVG } from '../components/CheminSVG';

interface CheminProps {
  onNavigate?: (page: 'home' | 'carte' | 'chemin' | 'passeport' | 'edile' | 'cercle') => void;
}

export default function Chemin({ onNavigate }: CheminProps) {
  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}
      {/* Titre */}
      <section 
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '140px 40px 80px',
          textAlign: 'center'
        }}
      >
        <h1 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: '12px',
            lineHeight: 1.2
          }}
        >
          Le Chemin
        </h1>

        {/* Subtitle */}
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '18px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.7,
            marginBottom: '80px',
            lineHeight: 1.8
          }}
        >
          La ville se traverse autant qu'elle se regarde.
        </p>
      </section>

      {/* SVG Chemin */}
      <section
        style={{
          maxWidth: '1080px',
          margin: '0 auto 120px',
          padding: '0 40px'
        }}
      >
        <CheminSVG />
      </section>

      {/* Texte final */}
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
          Le chemin n'indique pas où arriver.<br />
          Il indique comment marcher.
        </p>
      </section>

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
