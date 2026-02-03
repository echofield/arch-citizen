/**
 * PAGE PASSAGE — ARCHÉ
 * Ritual Gate: the symbolic entry
 * Shows after purchase OR after login
 */

import { useState, useEffect } from 'react';
import { ORACLE_SENTENCES } from '../types/citizen';
import type { Page, RitualEntry } from '../types/citizen';

interface PassageProps {
  onNavigate?: (page: Page) => void;
}

export default function Passage({ onNavigate }: PassageProps) {
  const [oracle, setOracle] = useState('');
  const [phrase, setPhrase] = useState('');
  const [step, setStep] = useState<'oracle' | 'input' | 'transition'>('oracle');
  const [fadeIn, setFadeIn] = useState(false);

  // Select random oracle on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * ORACLE_SENTENCES.length);
    setOracle(ORACLE_SENTENCES[randomIndex]);

    // Trigger fade in
    setTimeout(() => setFadeIn(true), 100);
  }, []);

  const handleProceedToInput = () => {
    setFadeIn(false);
    setTimeout(() => {
      setStep('input');
      setFadeIn(true);
    }, 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phrase.trim()) return;

    // Save ritual entry
    const ritualEntry: RitualEntry = {
      carnetEntry: phrase.trim(),
      timestamp: Date.now(),
      oracleShown: oracle,
    };

    // Get existing carnet or create new
    const existingCarnet = localStorage.getItem('arche_carnet');
    const carnet = existingCarnet ? JSON.parse(existingCarnet) : [];
    carnet.unshift({
      id: `passage-${Date.now()}`,
      text: phrase.trim(),
      timestamp: Date.now(),
      context: 'passage',
    });
    localStorage.setItem('arche_carnet', JSON.stringify(carnet));
    localStorage.setItem('arche_ritual', JSON.stringify(ritualEntry));
    localStorage.setItem('arche_entered', 'true');

    // Transition then redirect to /ouvrir
    setFadeIn(false);
    setStep('transition');

    setTimeout(() => {
      onNavigate?.('ouvrir');
    }, 1200);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        background: '#FAF9F6',
      }}
    >
      {/* Oracle step */}
      {step === 'oracle' && (
        <div
          style={{
            maxWidth: '600px',
            textAlign: 'center',
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '28px',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.6,
              color: '#0E3F2F',
              marginBottom: '80px',
            }}
          >
            {oracle}
          </p>

          <button
            onClick={handleProceedToInput}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '18px 48px',
              background: 'transparent',
              color: '#0E3F2F',
              border: '1px solid rgba(14, 63, 47, 0.3)',
              cursor: 'pointer',
              transition: 'all 400ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#0E3F2F';
              e.currentTarget.style.color = '#FAF9F6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#0E3F2F';
            }}
          >
            Continuer
          </button>
        </div>
      )}

      {/* Input step */}
      {step === 'input' && (
        <div
          style={{
            maxWidth: '500px',
            width: '100%',
            textAlign: 'center',
            opacity: fadeIn ? 1 : 0,
            transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '20px',
              fontWeight: 400,
              color: '#0E3F2F',
              marginBottom: '48px',
              opacity: 0.8,
            }}
          >
            Ta première phrase pour cette aventure ?
          </p>

          <form onSubmit={handleSubmit}>
            <textarea
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
              placeholder=""
              rows={3}
              style={{
                width: '100%',
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 300,
                lineHeight: 1.7,
                padding: '24px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                background: 'transparent',
                color: '#2B2B2B',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 300ms ease',
              }}
              onFocus={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)')
              }
              onBlur={(e) =>
                (e.currentTarget.style.borderColor = 'rgba(0, 0, 0, 0.1)')
              }
            />

            <button
              type="submit"
              disabled={!phrase.trim()}
              style={{
                marginTop: '40px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '10px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '18px 56px',
                background: '#0E3F2F',
                color: '#FAF9F6',
                border: 'none',
                cursor: phrase.trim() ? 'pointer' : 'not-allowed',
                transition: 'opacity 400ms ease',
                opacity: phrase.trim() ? 1 : 0.4,
              }}
              onMouseEnter={(e) => {
                if (phrase.trim()) e.currentTarget.style.opacity = '0.85';
              }}
              onMouseLeave={(e) => {
                if (phrase.trim()) e.currentTarget.style.opacity = '1';
              }}
            >
              Entrer
            </button>
          </form>
        </div>
      )}

      {/* Transition step */}
      {step === 'transition' && (
        <div
          style={{
            textAlign: 'center',
            opacity: fadeIn ? 0 : 1,
            transition: 'opacity 1s ease',
          }}
        >
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '56px',
              fontWeight: 500,
              letterSpacing: '0.25em',
              color: '#0E3F2F',
            }}
          >
            ARCHÉ
          </h1>
        </div>
      )}
    </div>
  );
}
