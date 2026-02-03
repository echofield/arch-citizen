/**
 * PAGE ASSEMBLÉE — ARCHÉ
 * Civic charter and principles
 * Read-only. No forms. No discussion.
 */

import { BackButton } from '../components/BackButton';
import type { Page } from '../types/citizen';

interface AssembleeProps {
  onNavigate?: (page: Page) => void;
}

export default function Assemblee({ onNavigate }: AssembleeProps) {
  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}

      {/* Title */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '140px 40px 80px',
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
          L'Assemblée
        </h1>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            opacity: 0.6,
          }}
        >
          Ce qui fonde la cité.
        </p>
      </section>

      {/* SECTION: Règles */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 60px',
          padding: '0 40px',
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '24px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#0E3F2F',
            marginBottom: '24px',
          }}
        >
          Règles
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            lineHeight: 1.8,
            opacity: 0.85,
          }}
        >
          Pas de points. Pas de badges. Pas de notifications. Ce qui compte, c'est ce qui a été traversé.
        </p>
      </section>

      {/* Separator */}
      <div
        style={{
          maxWidth: '40px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.1)',
          margin: '0 auto 60px',
        }}
      />

      {/* SECTION: Charte de la preuve */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 60px',
          padding: '0 40px',
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '24px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#0E3F2F',
            marginBottom: '24px',
          }}
        >
          Charte de la preuve
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            lineHeight: 1.8,
            opacity: 0.85,
          }}
        >
          La preuve n'est pas une photo. Pas une géolocalisation. C'est une trace personnelle : une phrase, une observation, un fragment dans le carnet.
        </p>
      </section>

      {/* Separator */}
      <div
        style={{
          maxWidth: '40px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.1)',
          margin: '0 auto 60px',
        }}
      />

      {/* SECTION: Contribuer */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 60px',
          padding: '0 40px',
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '24px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#0E3F2F',
            marginBottom: '24px',
          }}
        >
          Contribuer
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '16px',
            opacity: 0.85,
          }}
        >
          Proposer → Prouver → Graver.
        </p>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            lineHeight: 1.8,
            opacity: 0.85,
          }}
        >
          Chaque lieu proposé doit être traversé. Chaque quête doit être accomplie. Ce qui reste devient inscription.
        </p>
      </section>

      {/* Separator */}
      <div
        style={{
          maxWidth: '40px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.1)',
          margin: '0 auto 60px',
        }}
      />

      {/* SECTION: Contact */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 100px',
          padding: '0 40px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '24px',
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#0E3F2F',
            marginBottom: '24px',
          }}
        >
          Contact
        </h2>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '20px',
            fontWeight: 400,
          }}
        >
          <a
            href="mailto:contact@arche.city"
            style={{
              color: '#0E3F2F',
              textDecoration: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
              transition: 'border-color 400ms ease',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.6)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)')
            }
          >
            contact@arche.city
          </a>
        </p>
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
          Paris
        </p>
      </footer>
    </>
  );
}
