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

      {/* SVG — architecture becoming readable with anchored labels */}
      <section
        style={{
          maxWidth: '720px',
          margin: '0 auto 160px',
          padding: '0 40px',
          position: 'relative'
        }}
      >
        <div style={{ position: 'relative', width: '100%' }}>
          <CheminSVG />
          
          {/* Labels anchored to structural clusters */}
          <div
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '100%',
              height: '100%',
              pointerEvents: 'none'
            }}
          >
            {/* Observer — under first cluster (left, low), smallest, quietest */}
            {/* Cluster 1 centered at x=70 (17.5% of 400), y=95 (79% from top of 120) */}
            <div
              style={{
                position: 'absolute',
                left: '17.5%',
                top: '79%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                marginTop: '12px'
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: '#0E3F2F',
                  marginBottom: '6px',
                  opacity: 0.7
                }}
              >
                Observer
              </p>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '15px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#2B2B2B',
                  opacity: 0.5
                }}
              >
                La ville se laisse d'abord lire.
              </p>
            </div>

            {/* Traverser — under middle cluster, slightly more presence */}
            {/* Cluster 2 centered at x=161 (40.25% of 400), y=80 (67% from top of 120) */}
            <div
              style={{
                position: 'absolute',
                left: '40.25%',
                top: '67%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                marginTop: '12px'
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: '#0E3F2F',
                  marginBottom: '6px',
                  opacity: 0.8
                }}
              >
                Traverser
              </p>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '16px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#2B2B2B',
                  opacity: 0.55
                }}
              >
                Le mouvement révèle la structure.
              </p>
            </div>

            {/* Comprendre — under final cluster (right, high), strongest presence */}
            {/* Cluster 3 centered at x=268 (67% of 400), y=60 (50% from top of 120) */}
            <div
              style={{
                position: 'absolute',
                left: '67%',
                top: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                marginTop: '12px'
              }}
            >
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '16px',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  color: '#0E3F2F',
                  marginBottom: '6px',
                  opacity: 0.9
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
                  lineHeight: 1.6,
                  color: '#2B2B2B',
                  opacity: 0.6
                }}
              >
                Ce qui persiste devient visible.
              </p>
            </div>
          </div>
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
