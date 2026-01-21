/**
 * IMAGE WITH FILTER â€” ARCHÃ‰
 * Image avec filtre lÃ©ger unifiÃ© + fade-in blur-up + aspect ratio
 */

import { useState, useEffect } from 'react';

interface ImageWithFilterProps {
  src: string;
  alt?: string;
  aspectRatio?: string;
  height?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
  overlayOpacity?: number;
  imageOpacity?: number;
  saturation?: number;
}

export function ImageWithFilter({
  src,
  alt = '',
  aspectRatio,
  height,
  className = '',
  style = {},
  priority = false,
  overlayOpacity = 0.04,
  imageOpacity = 0.95,
  saturation = -8,
}: ImageWithFilterProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (priority && src) {
      const existingLink = document.querySelector(`link[rel="preload"][as="image"][href="${src}"]`);
      if (!existingLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      }
    }
  }, [priority, src]);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'rgba(250, 249, 246, 0.5)',
    ...style,
    ...(aspectRatio
      ? { aspectRatio }
      : height
      ? { height }
      : { aspectRatio: '16/9' }),
  };

  const overlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, rgba(250, 249, 246, ${overlayOpacity}) 0%, rgba(250, 249, 246, ${overlayOpacity * 0.6}) 100%)`,
    zIndex: 1,
    pointerEvents: 'none',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 400ms ease, filter 400ms ease',
    opacity: loaded ? imageOpacity : 0,
    filter: loaded
      ? `grayscale(${Math.abs(saturation) * 10}%) saturate(${100 + saturation}%)`
      : 'blur(8px) grayscale(100%)',
  };

  if (error) {
    return (
      <div
        className={className}
        style={{
          ...containerStyle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, rgba(14, 63, 47, 0.04) 0%, rgba(14, 63, 47, 0.08) 100%)',
        }}
      >
        <p
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '14px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#2B2B2B',
            opacity: 0.3,
            letterSpacing: '0.08em',
          }}
        >
          [Image indisponible]
        </p>
      </div>
    );
  }

  return (
    <div className={className} style={containerStyle}>
      <div style={overlayStyle} />
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        style={imageStyle}
      />
    </div>
  );
}
