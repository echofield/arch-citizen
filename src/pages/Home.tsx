/**
 * PAGE HOME — ARCHÉ
 * La ville nous attend
 */

import { Blason } from '../components/Blason';
import { PortalTransition } from '../components/PortalTransition';
import { ImageWithFilter } from '../components/ImageWithFilter';
import { useState, useCallback } from 'react';

interface HomeProps {
  onNavigate: (page: 'carte' | 'quetes' | 'passeport' | 'edile' | 'cercle') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [portalActive, setPortalActive] = useState(false);

  const handleBlasonClick = useCallback(() => {
    // Transition immédiate pour débugger
    onNavigate('cercle');
  }, [onNavigate]);

  const handleTransitionComplete = useCallback(() => {
    setPortalActive(false);
    onNavigate('cercle');
  }, [onNavigate]);

  return (
    <>
      {/* BLASON — Position fixe haut-gauche */}
      <Blason onClick={handleBlasonClick} />

      {/* PORTAL TRANSITION */}
      <PortalTransition isActive={portalActive} onComplete={handleTransitionComplete} />

      {/* HERO */}
      <section 
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '180px 40px 100px',
          textAlign: 'center'
        }}
      >
        {/* Logo — tracking large */}
        <h1 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '68px',
            fontWeight: 500,
            letterSpacing: '0.25em',
            color: '#0E3F2F',
            marginBottom: '20px',
            lineHeight: 1
          }}
        >
          ARCHÉ
        </h1>

        {/* Lieu — voix basse */}
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '15px',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.08em',
            color: '#2B2B2B',
            opacity: 0.4,
            marginBottom: '100px'
          }}
        >
          Paris · République
        </p>

        {/* Titre principal */}
        <h2 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '40px',
            fontWeight: 500,
            letterSpacing: '0.02em',
            lineHeight: 1.4,
            marginBottom: '70px'
          }}
        >
          La ville nous attend.
        </h2>

        {/* Prose d'ouverture */}
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            marginBottom: '28px',
            opacity: 0.85
          }}
        >
          Sous les pavés, sous les façades, sous le bruit — une autre ville. Celle qui se murmure. Celle qui se marche. Celle qui s'invente.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 400,
            lineHeight: 1.8,
            marginBottom: '90px',
            opacity: 0.9
          }}
        >
          ARCHÉ est une cité pour ceux qui veulent la lire.
        </p>

        {/* CTA principal */}
        <button
          onClick={() => onNavigate('passeport')}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '18px 48px',
            background: '#0E3F2F',
            color: '#FAF9F6',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 400ms ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(14, 63, 47, 0.85)'}
          onMouseLeave={(e) => e.currentTarget.style.background = '#0E3F2F'}
        >
          Entrer dans la cité
        </button>
      </section>

      {/* IMAGE STÈLE — après hero */}
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
            width: '100%',
            minHeight: '360px',
            background: 'linear-gradient(135deg, rgba(14, 63, 47, 0.03) 0%, rgba(14, 63, 47, 0.06) 100%)',
            border: '0.5px solid rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            position: 'relative',
            padding: '60px 40px',
            overflow: 'hidden'
          }}
        >
          <ImageWithFilter
            src="/images/blason.png"
            alt=""
            aspectRatio="4/3"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
            imageOpacity={0.15}
            overlayOpacity={0}
            saturation={0}
          />
        </div>

        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '15px',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.12em',
            color: '#2B2B2B',
            opacity: 0.35,
            marginTop: '24px'
          }}
        >
          Ordo per motum
        </p>
      </section>

      {/* Séparateur */}
      <div 
        style={{
          maxWidth: '80px',
          height: '0.5px',
          background: 'rgba(0, 0, 0, 0.15)',
          margin: '0 auto 120px'
        }}
      />

      {/* FRAGMENT 1 — Paris imaginée */}
      <section 
        style={{
          maxWidth: '640px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '21px',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            marginBottom: '32px',
            opacity: 0.85
          }}
        >
          Paris est née de l'imagination.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            marginBottom: '32px',
            opacity: 0.8
          }}
        >
          Hugo l'a écrite. Balzac l'a peuplée. Les surréalistes l'ont rêvée éveillés. Chaque génération réinvente la ville — et la ville survit parce qu'elle devient mythe.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 400,
            lineHeight: 1.8,
            opacity: 0.9
          }}
        >
          ARCHÉ continue ce geste. En marchant.
        </p>
      </section>

      {/* FRAGMENT 2 — Les murs parlent */}
      <section 
        style={{
          maxWidth: '640px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        {/* Image — passage parisien */}
        <div style={{ marginBottom: '50px', border: '0.5px solid rgba(0, 0, 0, 0.08)' }}>
          <ImageWithFilter
            src="/images/passageparisien.png"
            alt=""
            height="320px"
            priority={true}
            imageOpacity={0.5}
            overlayOpacity={0.04}
            saturation={-8}
          />
        </div>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '21px',
            fontWeight: 300,
            lineHeight: 2,
            letterSpacing: '0.01em',
            marginBottom: '40px',
            opacity: 0.85
          }}
        >
          Les murs parlent à ceux qui s'arrêtent.<br />
          Les seuils gardent mémoire.<br />
          Les inscriptions attendent qu'on les lise.
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
          Une bibliothèque oubliée. Un oratoire caché. Un alignement que personne ne regarde plus. La ville est pleine de ce que nous avons cessé de voir.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '60px',
            opacity: 0.85
          }}
        >
          La carte d'ARCHÉ recense ces lieux. Elle n'est jamais complète. Elle s'écrit avec ceux qui marchent.
        </p>

        {/* CTA Carte */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onNavigate('carte')}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: 'transparent',
              color: '#0E3F2F',
              border: '0.5px solid rgba(14, 63, 47, 0.25)',
              cursor: 'pointer',
              opacity: 0.6,
              transition: 'all 400ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.6';
              e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.25)';
            }}
          >
            Voir la carte
          </button>
        </div>
      </section>

      {/* FRAGMENT 3 — Les quêtes */}
      <section 
        style={{
          maxWidth: '640px',
          margin: '0 auto 160px',
          padding: '0 40px'
        }}
      >
        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '21px',
            fontWeight: 400,
            lineHeight: 1.8,
            marginBottom: '32px',
            opacity: 0.9
          }}
        >
          Les quêtes ne sont pas des jeux.
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
          Ce sont des invitations à regarder autrement. À lever les yeux. À traverser une rue comme si c'était la première fois. À laisser la ville vous parler.
        </p>

        <p 
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '19px',
            fontWeight: 300,
            lineHeight: 1.8,
            marginBottom: '60px',
            opacity: 0.8
          }}
        >
          Certaines quêtes sont historiques. D'autres sont inventées. D'autres encore n'existent pas encore — elles attendent que quelqu'un les imagine.
        </p>

        {/* CTA Quêtes */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => onNavigate('quetes')}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '14px 32px',
              background: 'transparent',
              color: '#0E3F2F',
              border: '0.5px solid rgba(14, 63, 47, 0.25)',
              cursor: 'pointer',
              opacity: 0.6,
              transition: 'all 400ms ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.6';
              e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.25)';
            }}
          >
            Découvrir les quêtes
          </button>
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