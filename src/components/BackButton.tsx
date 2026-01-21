/**
 * BACK BUTTON â€” ARCHÃ‰
 * Bouton retour discret, ARCHÃ‰-compatible
 */

interface BackButtonProps {
  onClick: () => void;
  label?: string;
}

export function BackButton({ onClick, label = 'Retour' }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '24px',
        left: '40px',
        zIndex: 1001,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: '14px',
        fontWeight: 300,
        fontStyle: 'italic',
        color: '#2B2B2B',
        opacity: 0.4,
        letterSpacing: '0.08em',
        padding: '8px 12px',
        transition: 'opacity 300ms ease',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = '0.8';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = '0.4';
      }}
    >
      <span style={{ fontSize: '16px', lineHeight: 1 }}>â†©</span>
      <span>{label}</span>
    </button>
  );
}
