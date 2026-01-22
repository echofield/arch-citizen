/**
 * PAGE CHEMIN — ARCHÉ
 * Le Chemin
 *
 * 4 moments : Observer → Traverser → Comprendre → Édifier
 */

import { BackButton } from '../components/BackButton';

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
            color: '#2D5A4A',
            marginBottom: '80px',
            lineHeight: 1.2
          }}
        >
          Le Chemin
        </h1>
      </section>

      {/* Minimal textual composition — spatial meaning */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 120px',
          padding: '100px 40px',
          position: 'relative'
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%'
          }}
        >
          {/* Upper sentence — lighter, more elevated */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#2D5A4A',
              lineHeight: 1.6,
              margin: 0,
              paddingLeft: '0',
              opacity: 0.65,
              transform: 'translateY(-8px)'
            }}
          >
            Tout commence par un regard.
          </p>

          {/* Lower sentence — more grounded, slightly descended */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '18px',
              fontWeight: 300,
              letterSpacing: '0.05em',
              color: '#2D5A4A',
              lineHeight: 1.6,
              margin: 0,
              marginTop: '24px',
              paddingLeft: '24px',
              opacity: 0.75,
              transform: 'translateY(8px)'
            }}
          >
            Ce qui est vu appelle un pas.
          </p>
        </div>
      </section>

      {/* Séparateur */}
      <div
        style={{
          maxWidth: '80px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.15)',
          margin: '0 auto 100px'
        }}
      />

      {/* FOOTER */}
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
            color: '#2D5A4A',
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
