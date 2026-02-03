/**
 * PAGE OUVRIR — ARCHÉ
 * Handoff page: redirects to ARCHÉ world
 */

import { useEffect, useState } from 'react';
import { ORACLE_SENTENCES } from '../types/citizen';

const ARCHE_WORLD_URL = import.meta.env.VITE_ARCHE_WORLD_URL || 'https://arche-paris.com/';
const STORAGE_KEY = 'arche_card_id';

export default function Ouvrir() {
  const [whisper, setWhisper] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Pick a random whisper
    const randomIndex = Math.floor(Math.random() * ORACLE_SENTENCES.length);
    setWhisper(ORACLE_SENTENCES[randomIndex]);

    // Fade in
    setTimeout(() => setVisible(true), 100);

    // Redirect after 900ms
    const timer = setTimeout(() => {
      const cardId = localStorage.getItem(STORAGE_KEY) || '';
      const url = new URL(ARCHE_WORLD_URL);
      if (cardId) {
        url.searchParams.set('card', cardId);
      }
      window.location.href = url.toString();
    }, 900);

    return () => clearTimeout(timer);
  }, []);

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
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }}
    >
      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '32px',
          fontWeight: 400,
          letterSpacing: '0.08em',
          color: '#0E3F2F',
          marginBottom: '48px',
        }}
      >
        Ouverture...
      </p>

      <p
        style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: '17px',
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#2B2B2B',
          opacity: 0.5,
          maxWidth: '400px',
          textAlign: 'center',
          lineHeight: 1.6,
        }}
      >
        {whisper}
      </p>
    </div>
  );
}
