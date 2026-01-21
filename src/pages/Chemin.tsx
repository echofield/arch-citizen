/**
 * PAGE CHEMIN — ARCHÉ
 * Le Chemin
 *
 * Something is unfolding, step after step.
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
            marginBottom: '80px',
            lineHeight: 1.2
          }}
        >
          Le Chemin
        </h1>
      </section>

      {/* SVG — architecture becoming readable */}
      <section
        style={{
          maxWidth: '720px',
          margin: '0 auto 100px',
          padding: '0 40px'
        }}
      >
        <CheminSVG />
      </section>

      {/* Three architectural statements */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <div style={{ marginBottom: '60px' }}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#0E3F2F',
              marginBottom: '8px',
              opacity: 0.8
            }}
          >
            Observer
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: '#2B2B2B',
              opacity: 0.6
            }}
          >
            La ville se laisse d'abord lire.
          </p>
        </div>

        <div style={{ marginBottom: '60px' }}>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#0E3F2F',
              marginBottom: '8px',
              opacity: 0.8
            }}
          >
            Traverser
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: '#2B2B2B',
              opacity: 0.6
            }}
          >
            Le mouvement révèle la structure.
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '16px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              color: '#0E3F2F',
              marginBottom: '8px',
              opacity: 0.8
            }}
          >
            Comprendre
          </p>
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.7,
              color: '#2B2B2B',
              opacity: 0.6
            }}
          >
            Ce qui persiste devient visible.
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
