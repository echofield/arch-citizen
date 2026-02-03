/**
 * ARCHÉ Citizen Types
 * Core models for the civic interface
 */

// Place / Lieu — spatial anchors for the map
export interface Place {
  id: string;
  address: string;
  title?: string;
  text: string;
  mapsUrl?: string;
  dateTag?: string;
}

// Journal Entry — timeless library entries
export interface JournalEntry {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  content: string[];  // Array of paragraphs
  invocation?: string; // Optional opening line (italic)
  kind?: 'theory' | 'date' | 'place';
  dateTag?: string;
  place?: {
    address: string;
    mapsUrl?: string;
  };
}

// Ritual Entry — passage gate data
export interface RitualEntry {
  carnetEntry: string;  // User's first phrase
  timestamp: number;
  oracleShown: string;
}

// Carnet — personal notebook (local-first)
export interface CarnetEntry {
  id: string;
  text: string;
  timestamp: number;
  context?: 'passage' | 'lieu' | 'quete';
}

// Oracle sentences for the Passage ritual
export const ORACLE_SENTENCES: string[] = [
  "La ville se souvient de ceux qui l'écoutent.",
  "Chaque pas laisse une trace invisible.",
  "Le chemin n'existe qu'après avoir été parcouru.",
  "Ce qui semble fermé attend simplement d'être reconnu.",
  "Les murs parlent à ceux qui savent ralentir.",
  "La cité se construit avec ceux qui marchent.",
  "Entrer, c'est déjà transformer.",
];

// Card ID validation pattern: PS-0001, AR-0001, CIT-0001
export const CARD_ID_PATTERN = /^[A-Z]{2,4}-\d{4}$/;

// Page type for routing
export type Page =
  | 'home'
  | 'carte'
  | 'journal'
  | 'entrer'
  | 'assemblee'
  | 'connexion'
  | 'passage'
  | 'ouvrir'
  | 'cercle'
  // Legacy routes for redirects
  | 'passeport'
  | 'cle'
  | 'edile'
  | 'chemin';

// Redirect mappings
export const ROUTE_REDIRECTS: Partial<Record<Page, Page>> = {
  passeport: 'entrer',
  cle: 'entrer',
  edile: 'assemblee',
  chemin: 'journal',
};
