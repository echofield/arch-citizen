/**
 * PAGE PASSEPORT — ARCHÉ
 * 100 € · Document de passage
 */

import { ImageWithFilter } from '../components/ImageWithFilter';
import { BackButton } from '../components/BackButton';

interface PasseportProps {
  onNavigate?: (page: 'home' | 'carte' | 'quetes' | 'passeport' | 'edile' | 'cercle') => void;
}

export default function Passeport({ onNavigate }: PasseportProps) {
  return (
    <>
      {/* Bouton retour */}
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}

      {/* Titre */}
      <section 
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '140px 40px 60px',
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
          Le Passeport
        </h1>
      </section>

      {/* IMAGE DU PASSEPORT — placeholder */}
      <section
        style={{
          maxWidth: '520px',
          margin: '0 auto 80px',
          padding: '0 40px',
          textAlign: 'center'
        }}
      >
        <div
          style={{
            border: '0.5px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <ImageWithFilter
            src="/images/passeport.webp"
            alt=""
            height="420px"
            priority={true}
            imageOpacity={0.6}
            overlayOpacity={0.04}
            saturation={-8}
          />
        </div>
      </section>

      {/* Texte */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 80px',
          padding: '0 40px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '32px',
            opacity: 0.85
          }}
        >
          Le Passeport est un document de passage.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '32px',
            opacity: 0.8
          }}
        >
          Il ouvre l'accès à la carte, aux quêtes, aux parcours. Il permet de proposer des lieux, des lectures, des chemins nouveaux.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 400,
            lineHeight: 1.8,
            marginBottom: '80px',
            opacity: 0.9
          }}
        >
          Ceux qui rejoignent la cité dans sa première année seront inscrits comme citoyens fondateurs — et participeront à ce qu'elle deviendra, et à ce qu'elle permettra.
        </p>
      </section>

      {/* Prix */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 80px',
          padding: '0 40px',
          textAlign: 'center'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '56px',
            fontWeight: 400,
            color: '#0E3F2F',
            marginBottom: '80px'
          }}
        >
          100 €
        </p>

        {/* CTA Stripe */}
        <a
          href="https://buy.stripe.com/3cI6oIcPD7sC0yl2dJ5J603"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '18px 48px',
            background: '#0E3F2F',
            color: '#FAF9F6',
            textDecoration: 'none',
            transition: 'background 400ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#0E3F2F'}
        >
          Obtenir le Passeport — 100 €
        </a>
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