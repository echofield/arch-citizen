/**
 * PAGE ENTRER — ARCHÉ
 * Merged entry point: La Clé (45€) + Passeport Fondateur (100€)
 */

import { BackButton } from '../components/BackButton';
import { ImageWithFilter } from '../components/ImageWithFilter';
import type { Page } from '../types/citizen';

interface EntrerProps {
  onNavigate?: (page: Page) => void;
}

export default function Entrer({ onNavigate }: EntrerProps) {
  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}

      {/* Title */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '140px 40px 60px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            color: '#0E3F2F',
            marginBottom: '24px',
            lineHeight: 1.2,
          }}
        >
          Entrer
        </h1>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            opacity: 0.7,
          }}
        >
          Deux seuils. Une même cité.
        </p>
      </section>

      {/* Two offers grid */}
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '60px 40px 100px',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '60px',
          alignItems: 'start',
        }}
      >
        {/* OFFER A: La Clé — 45€ */}
        <div
          style={{
            borderRight: '0.5px solid rgba(0, 0, 0, 0.08)',
            paddingRight: '60px',
          }}
        >
          {/* Image */}
          <div
            style={{
              aspectRatio: '1 / 1',
              border: '0.5px solid rgba(0, 0, 0, 0.08)',
              marginBottom: '48px',
            }}
          >
            <ImageWithFilter
              src="/images/cle.png"
              alt=""
              height="100%"
              priority={true}
              imageOpacity={0.5}
              overlayOpacity={0.04}
              saturation={-8}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '32px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0E3F2F',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            La Clé
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: '20px',
              opacity: 0.85,
            }}
          >
            L'entrée dans ARCHÉ. Accès aux cartes vivantes, aux quêtes urbaines, au carnet personnel.
          </p>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '15px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.8,
              marginBottom: '40px',
              opacity: 0.6,
            }}
          >
            Accès numérique immédiat.
          </p>

          {/* CTA */}
          <a
            href="https://buy.stripe.com/00wdRa4j7aEOftf4lR5J604"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '18px 40px',
              background: '#0E3F2F',
              color: '#FAF9F6',
              textDecoration: 'none',
              transition: 'opacity 400ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Obtenir la Clé — 45 €
          </a>
        </div>

        {/* OFFER B: Passeport Fondateur — 100€ */}
        <div style={{ paddingLeft: '0' }}>
          {/* Image */}
          <div
            style={{
              border: '0.5px solid rgba(0, 0, 0, 0.1)',
              marginBottom: '48px',
            }}
          >
            <ImageWithFilter
              src="/images/passeport.webp"
              alt=""
              height="420px"
              priority={true}
              imageOpacity={0.5}
              overlayOpacity={0.04}
              saturation={-8}
            />
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '32px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0E3F2F',
              marginBottom: '24px',
              lineHeight: 1.2,
            }}
          >
            Le Passeport Fondateur
          </h2>

          {/* Edition badge */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#0E3F2F',
              marginBottom: '20px',
              opacity: 0.7,
            }}
          >
            Édition fondatrice
          </p>

          {/* Description */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: '20px',
              opacity: 0.85,
            }}
          >
            Document de passage. Ouvre l'accès complet et inscrit comme citoyen fondateur de la première année.
          </p>

          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '15px',
              fontWeight: 300,
              fontStyle: 'italic',
              lineHeight: 1.8,
              marginBottom: '40px',
              opacity: 0.6,
            }}
          >
            Participation à l'édification de la cité.
          </p>

          {/* CTA */}
          <a
            href="https://buy.stripe.com/3cI6oIcPD7sC0yl2dJ5J603"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '18px 40px',
              background: '#0E3F2F',
              color: '#FAF9F6',
              textDecoration: 'none',
              transition: 'opacity 400ms ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Obtenir le Passeport — 100 €
          </a>
        </div>
      </section>

      {/* Separator */}
      <div
        style={{
          maxWidth: '80px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.15)',
          margin: '0 auto 100px',
        }}
      />

      {/* Footer */}
      <footer
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 40px 120px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '42px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: '#0E3F2F',
            marginBottom: '16px',
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
          }}
        >
          Paris · République
        </p>
      </footer>

      {/* Responsive styles */}
      <style>
        {`
          @media (max-width: 768px) {
            section[style*="grid-template-columns: repeat(2"] {
              grid-template-columns: 1fr !important;
              gap: 80px !important;
            }
            section[style*="grid-template-columns: repeat(2"] > div:first-child {
              border-right: none !important;
              padding-right: 0 !important;
              border-bottom: 0.5px solid rgba(0, 0, 0, 0.08);
              padding-bottom: 80px;
            }
          }
        `}
      </style>
    </>
  );
}
