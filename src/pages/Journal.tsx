/**
 * PAGE JOURNAL — ARCHÉ
 * Timeless library of entries
 */

import { useState } from 'react';
import { BackButton } from '../components/BackButton';
import { journalEntries } from '../data/journal-entries';
import type { Page } from '../types/citizen';
import type { JournalEntry } from '../types/citizen';

interface JournalProps {
  onNavigate?: (page: Page) => void;
}

// Helper to get metadata line for an entry
function getMetadataLine(entry: JournalEntry): string | null {
  if (entry.kind === 'date' && entry.dateTag) {
    return entry.dateTag;
  }
  if (entry.kind === 'place' && entry.place?.address) {
    return entry.place.address;
  }
  return null;
}

export default function Journal({ onNavigate }: JournalProps) {
  const [selectedEntry, setSelectedEntry] = useState<JournalEntry | null>(null);

  // Entry detail view
  if (selectedEntry) {
    const metadata = getMetadataLine(selectedEntry);

    return (
      <>
        <BackButton onBack={() => setSelectedEntry(null)} />

        <section
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            padding: '140px 40px 80px',
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '42px',
              fontWeight: 500,
              letterSpacing: '0.02em',
              color: '#0E3F2F',
              marginBottom: '16px',
              lineHeight: 1.2,
              textAlign: 'center',
            }}
          >
            {selectedEntry.title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '17px',
              fontWeight: 300,
              fontStyle: 'italic',
              opacity: 0.6,
              marginBottom: metadata ? '12px' : '80px',
              textAlign: 'center',
            }}
          >
            {selectedEntry.subtitle}
          </p>

          {/* Metadata line (dateTag or address) */}
          {metadata && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '13px',
                fontWeight: 300,
                letterSpacing: '0.05em',
                opacity: 0.4,
                marginBottom: '80px',
                textAlign: 'center',
              }}
            >
              {selectedEntry.place?.mapsUrl ? (
                <a
                  href={selectedEntry.place.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none',
                    borderBottom: '0.5px solid rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {metadata}
                </a>
              ) : (
                metadata
              )}
            </p>
          )}

          {/* Invocation if present */}
          {selectedEntry.invocation && (
            <p
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 400,
                fontStyle: 'italic',
                lineHeight: 1.8,
                marginBottom: '60px',
                opacity: 0.7,
                textAlign: 'center',
              }}
            >
              {selectedEntry.invocation}
            </p>
          )}

          {/* Content paragraphs */}
          {selectedEntry.content.map((paragraph, index) => (
            <p
              key={index}
              style={{
                fontFamily: 'Cormorant Garamond, Georgia, serif',
                fontSize: '19px',
                fontWeight: 300,
                lineHeight: 1.8,
                marginBottom: '32px',
                opacity: 0.85,
              }}
            >
              {paragraph}
            </p>
          ))}
        </section>

        {/* Separator */}
        <div
          style={{
            maxWidth: '80px',
            height: '0.5px',
            background: 'rgba(0, 0, 0, 0.15)',
            margin: '60px auto 100px',
          }}
        />

        {/* Back to Journal link */}
        <div style={{ textAlign: 'center', marginBottom: '120px' }}>
          <button
            onClick={() => setSelectedEntry(null)}
            style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: '15px',
              fontWeight: 400,
              color: '#0E3F2F',
              background: 'transparent',
              border: 'none',
              borderBottom: '0.5px solid rgba(14, 63, 47, 0.3)',
              cursor: 'pointer',
              transition: 'border-color 400ms ease',
              padding: '4px 0',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.6)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = 'rgba(14, 63, 47, 0.3)')
            }
          >
            Retour au Journal
          </button>
        </div>
      </>
    );
  }

  // Journal index view
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
          Journal
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
          Fragments d'une cité en construction.
        </p>
      </section>

      {/* Entries list */}
      <section
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 40px 100px',
        }}
      >
        {journalEntries.map((entry, index) => {
          const metadata = getMetadataLine(entry);

          return (
            <button
              key={entry.id}
              onClick={() => setSelectedEntry(entry)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                borderTop:
                  index === 0 ? '0.5px solid rgba(0, 0, 0, 0.1)' : 'none',
                borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
                padding: '32px 0',
                cursor: 'pointer',
                transition: 'background 400ms ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.015)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = 'transparent')
              }
            >
              <h2
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#0E3F2F',
                  marginBottom: '8px',
                  lineHeight: 1.3,
                }}
              >
                {entry.title}
              </h2>
              <p
                style={{
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: '15px',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  opacity: 0.6,
                  margin: 0,
                }}
              >
                {entry.subtitle}
              </p>
              {/* Metadata line under subtitle */}
              {metadata && (
                <p
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: '12px',
                    fontWeight: 300,
                    opacity: 0.35,
                    margin: 0,
                    marginTop: '6px',
                  }}
                >
                  {metadata}
                </p>
              )}
            </button>
          );
        })}
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
