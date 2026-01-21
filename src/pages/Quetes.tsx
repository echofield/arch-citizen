/**
 * PAGE QUÊTES — ARCHÉ
 * Le mystère est la mécanique
 * 
 * Pas de catalogue, pas de liste
 */

import { BackButton } from '../components/BackButton';

interface QuetesProps {
  onNavigate?: (page: 'home' | 'carte' | 'quetes' | 'passeport' | 'edile' | 'cercle') => void;
}

export default function Quetes({ onNavigate }: QuetesProps) {
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
          Les quêtes
        </h1>
      </section>

      {/* Texte principal */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto 120px',
          padding: '0 40px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '21px',
            fontWeight: 400,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            marginBottom: '32px',
            opacity: 0.9
          }}
        >
          Les quêtes sont une invitation à regarder, se rappeler, construire.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            marginBottom: '32px',
            opacity: 0.85
          }}
        >
          Levons les yeux. La ville est pleine de ce qu'on a cessé de voir. Les quêtes se construisent ici, dans cette page, avec ceux qui marchent. Nous gagnons à mieux voir, à créer, à transmettre.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            marginBottom: '80px',
            opacity: 0.8
          }}
        >
          Certaines quêtes sont historiques. D'autres sont inventées. D'autres attendent encore d'être écrites.
        </p>

        {/* Annonce calme */}
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '17px',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.8,
            textAlign: 'center',
            color: '#2B2B2B',
            opacity: 0.5
          }}
        >
          Les premières quêtes apparaîtront bientôt.
        </p>
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