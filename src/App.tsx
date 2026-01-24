/**
 * ARCHÉ — v3.2 (Figma Update)
 * Une façade civique contemporaine
 * 
 * Principes :
 * - Marche silencieuse, pas interface
 * - Respiration maximale
 * - Géométrie fine
 * - Mystère comme mécanique
 * 
 * Couleurs :
 * - Ivoire : #FAF9F6
 * - Vert ARCHÉ : #0E3F2F
 * - Gris texte : #2B2B2B
 * - Gris lignes : rgba(0,0,0,0.15)
 * 
 * Typographie : Cormorant Garamond
 */

import { useState } from 'react';
import Home from './pages/Home';
import Carte from './pages/Carte';
import Chemin from './pages/Chemin';
import Passeport from './pages/Passeport';
import Cle from './pages/Cle';
import Edile from './pages/Edile';
import Cercle from './pages/Cercle';
import { Blason } from './components/Blason';
import { BackButton } from './components/BackButton';

type Page = 'home' | 'carte' | 'chemin' | 'passeport' | 'cle' | 'edile' | 'cercle';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateTo = (page: Page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <>
      {/* Import Cormorant Garamond depuis Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
          
          @media (max-width: 768px) {
            section {
              padding-left: 24px !important;
              padding-right: 24px !important;
            }
            
            nav {
              padding: 20px 24px !important;
            }
            
            nav > div {
              flex-direction: column !important;
              gap: 20px !important;
            }
            
            nav > div > div {
              gap: 24px !important;
            }
            
            /* BackButton responsive */
            button[style*="position: fixed"][style*="top: 24px"] {
              left: 24px !important;
              z-index: 10000 !important;
            }
            
            button[style*="position: fixed"][style*="top: 24px"] span:last-child {
              display: none !important;
            }
            
            /* Blason responsive - ensure visibility above nav */
            .blason-container {
              z-index: 10000 !important;
              top: 16px !important;
            }
          }
          
          /* MiniCarte — only visible on wide screens */
          .mini-carte-container {
            display: none;
          }

          @media (min-width: 1100px) {
            .mini-carte-container {
              display: block;
            }
          }

          /* Transition fluide globale pour toutes les pages */
          .page-wrapper {
            animation: pageFadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          
          @keyframes pageFadeIn {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div 
        style={{
          minHeight: '100vh',
          background: '#FAF9F6',
          backgroundImage: `
            url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.015'/%3E%3C/svg%3E")
          `,
          color: '#2B2B2B'
        }}
      >
        {/* BLASON — toujours visible au-dessus du nav */}
        {currentPage === 'home' && (
          <Blason onClick={() => navigateTo('cercle')} />
        )}

        {/* BACK BUTTON — visible sur toutes les pages sauf home */}
        {currentPage !== 'home' && (
          <BackButton onBack={() => navigateTo('home')} />
        )}

        {/* MENU TOP — discret, horizontal */}
        <nav 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            height: '72px',
            background: 'rgba(250, 249, 246, 0.95)',
            backdropFilter: 'blur(8px)',
            borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
            padding: '0 40px',
            zIndex: 1000,
            display: currentPage === 'cercle' ? 'none' : 'flex',
            alignItems: 'center'
          }}
        >
          <div 
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            {/* Logo */}
            <button
              onClick={() => navigateTo('home')}
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'opacity 400ms ease',
                padding: 0,
                height: '32px'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <svg 
                width="80" 
                height="32" 
                viewBox="0 0 527 598" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                <g transform="translate(0,598) scale(0.1,-0.1)" fill="#0E3F2F">
                  <path d="M71 5464 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
<path d="M976 4991 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"/>
<path d="M1025 4981 c-3 -5 -2 -12 3 -15 5 -3 9 1 9 9 0 17 -3 19 -12 6z"/>
<path d="M3455 4690 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
<path d="M2090 4490 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M2130 4490 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0
-4 -4 -4 -10z"/>
<path d="M2170 4490 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M2210 4491 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5
3 -10 2 -10 -4z"/>
<path d="M1710 4474 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0
-10 -7 -10 -16z"/>
<path d="M1745 4480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
<path d="M1785 4480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
<path d="M1820 4480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M1860 4480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M1900 4480 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
-10 -4 -10 -10z"/>
<path d="M1940 4479 c0 -5 5 -7 10 -4 6 3 10 8 10 11 0 2 -4 4 -10 4 -5 0 -10
-5 -10 -11z"/>
<path d="M1975 4480 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"/>
<path d="M2015 4480 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"/>
                </g>
              </svg>
            </button>

            {/* Navigation — pas de Contact */}
            <div 
              style={{
                display: 'flex',
                gap: '40px',
                alignItems: 'center'
              }}
            >
              <button
                onClick={() => navigateTo('carte')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: 'none',
                  color: '#2B2B2B',
                  opacity: currentPage === 'carte' ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 300ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'carte' ? '1' : '0.4'}
              >
                Carte
              </button>

              <button
                onClick={() => navigateTo('chemin')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: 'none',
                  color: '#2B2B2B',
                  opacity: currentPage === 'chemin' ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 300ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'chemin' ? '1' : '0.4'}
              >
                Chemin
              </button>

              <button
                onClick={() => navigateTo('passeport')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: 'none',
                  color: '#2B2B2B',
                  opacity: currentPage === 'passeport' ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 300ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'passeport' ? '1' : '0.4'}
              >
                Passeport
              </button>

              <button
                onClick={() => navigateTo('cle')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: 'none',
                  color: '#2B2B2B',
                  opacity: currentPage === 'cle' ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 300ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'cle' ? '1' : '0.4'}
              >
                Clé
              </button>

              <button
                onClick={() => navigateTo('edile')}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  background: 'transparent',
                  border: 'none',
                  color: '#2B2B2B',
                  opacity: currentPage === 'edile' ? 1 : 0.4,
                  cursor: 'pointer',
                  transition: 'opacity 300ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = currentPage === 'edile' ? '1' : '0.4'}
              >
                Édile
              </button>
            </div>
          </div>
        </nav>

        {/* PAGES */}
        <div key={currentPage} className="page-wrapper">
          {currentPage === 'home' && <Home onNavigate={navigateTo} />}
          {currentPage === 'carte' && <Carte onNavigate={navigateTo} />}
          {currentPage === 'chemin' && <Chemin onNavigate={navigateTo} />}
          {currentPage === 'passeport' && <Passeport onNavigate={navigateTo} />}
          {currentPage === 'cle' && <Cle onNavigate={navigateTo} />}
          {currentPage === 'edile' && <Edile onNavigate={navigateTo} />}
          {currentPage === 'cercle' && <Cercle onNavigate={navigateTo} />}
        </div>
      </div>
    </>
  );
}