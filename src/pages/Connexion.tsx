/**
 * PAGE CONNEXION — ARCHÉ
 * Citizen login via card ID
 * Minimal, ritual, not marketing.
 */

import { useState, useEffect } from 'react';
import { BackButton } from '../components/BackButton';
import { CARD_ID_PATTERN } from '../types/citizen';
import type { Page } from '../types/citizen';

interface ConnexionProps {
  onNavigate?: (page: Page) => void;
}

const STORAGE_KEY = 'arche_card_id';
const LEGACY_KEY = 'arche_numero';

export default function Connexion({ onNavigate }: ConnexionProps) {
  const [cardId, setCardId] = useState('');
  const [error, setError] = useState('');
  const [isValidating, setIsValidating] = useState(false);

  // Migrate legacy key on mount
  useEffect(() => {
    const legacyValue = localStorage.getItem(LEGACY_KEY);
    if (legacyValue && !localStorage.getItem(STORAGE_KEY)) {
      // Check if legacy value matches new pattern
      if (CARD_ID_PATTERN.test(legacyValue.toUpperCase())) {
        localStorage.setItem(STORAGE_KEY, legacyValue.toUpperCase());
      }
      localStorage.removeItem(LEGACY_KEY);
    }
  }, []);

  // Validate card ID format: PS-0001, AR-0001, CIT-0001
  const validateCardId = async (id: string): Promise<boolean> => {
    // Simulate validation delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Strict pattern: 2-4 uppercase letters, dash, 4 digits
    return CARD_ID_PATTERN.test(id.toUpperCase());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Auto-uppercase and format
    const value = e.target.value.toUpperCase();
    setCardId(value);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmed = cardId.trim().toUpperCase();

    if (!trimmed) {
      setError('Entrez votre identifiant.');
      return;
    }

    setIsValidating(true);

    const isValid = await validateCardId(trimmed);

    setIsValidating(false);

    if (isValid) {
      localStorage.setItem(STORAGE_KEY, trimmed);
      onNavigate?.('passage');
    } else {
      setError('Format invalide.');
    }
  };

  return (
    <>
      {onNavigate && <BackButton onBack={() => onNavigate('home')} />}

      <section
        style={{
          maxWidth: '400px',
          margin: '0 auto',
          padding: '180px 40px 120px',
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
            marginBottom: '60px',
            lineHeight: 1.2,
          }}
        >
          Connexion
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '12px' }}>
            <label
              htmlFor="cardId"
              style={{
                display: 'block',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '14px',
                fontWeight: 400,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#0E3F2F',
                marginBottom: '16px',
                opacity: 0.7,
              }}
            >
              Identifiant
            </label>
            <input
              id="cardId"
              type="text"
              value={cardId}
              onChange={handleInputChange}
              placeholder=""
              autoComplete="off"
              autoCapitalize="characters"
              style={{
                width: '100%',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '24px',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '0.15em',
                padding: '16px',
                border: 'none',
                borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
                background: 'transparent',
                color: '#2B2B2B',
                outline: 'none',
                transition: 'border-color 300ms ease',
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)')
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.15)')
              }
            />
          </div>

          {/* Helper text */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '13px',
              fontWeight: 300,
              opacity: 0.4,
              marginBottom: '28px',
            }}
          >
            Ex: PS-0001
          </p>

          {/* Error message */}
          {error && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '14px',
                fontWeight: 400,
                color: '#8B0000',
                marginBottom: '24px',
                opacity: 0.8,
              }}
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isValidating}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              background: '#0E3F2F',
              color: '#FAF9F6',
              border: 'none',
              cursor: isValidating ? 'wait' : 'pointer',
              transition: 'opacity 400ms ease',
              opacity: isValidating ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (!isValidating) e.currentTarget.style.opacity = '0.85';
            }}
            onMouseLeave={(e) => {
              if (!isValidating) e.currentTarget.style.opacity = '1';
            }}
          >
            {isValidating ? 'Vérification...' : 'Entrer'}
          </button>
        </form>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '14px',
            fontWeight: 300,
            fontStyle: 'italic',
            marginTop: '60px',
            opacity: 0.4,
          }}
        >
          Attribué à l'achat de la Clé ou du Passeport.
        </p>
      </section>

      <div
        style={{
          maxWidth: '80px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.15)',
          margin: '0 auto 100px',
        }}
      />

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
