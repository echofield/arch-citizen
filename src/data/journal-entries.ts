/**
 * JOURNAL ENTRIES — ARCHÉ
 * Timeless library entries
 */

import type { JournalEntry } from '../types/citizen';

export const journalEntries: JournalEntry[] = [
  // Theory entries (migrated from Chemin)
  {
    id: 'le-chemin',
    slug: 'le-chemin',
    title: 'Le Chemin',
    subtitle: 'Quatre moments dans la cité.',
    kind: 'theory',
    invocation: 'Observer. Traverser. Comprendre. Édifier.',
    content: [
      "La ville se laisse d'abord lire. Elle demande à être regardée avant d'être traversée.",
      "Le mouvement révèle ce qui était caché. Ce que l'œil fixe ne peut pas voir, le pas le découvre.",
      'Les fragments deviennent forme. Ce qui semblait éparpillé commence à résonner.',
      'La cité se construit avec ceux qui marchent. Chaque trace laissée devient fondation.',
    ],
  },
  {
    id: 'les-convergences',
    slug: 'les-convergences',
    title: 'Les Convergences',
    subtitle: 'Là où les lignes se rejoignent.',
    kind: 'theory',
    content: [
      "Paris n'est pas une ville plate. Elle est striée de lignes invisibles — anciennes voies romaines, méridiens oubliés, axes de pouvoir.",
      'Les convergences sont les points où ces lignes se croisent. Pas toujours monumentaux. Souvent discrets.',
      'ARCHÉ cartographie ces intersections. Non pour les expliquer, mais pour les rendre lisibles.',
    ],
  },
  {
    id: 'la-fin-impossible',
    slug: 'la-fin-impossible',
    title: 'La fin impossible',
    subtitle: "Ce qui ne peut pas s'achever.",
    kind: 'theory',
    content: [
      'Une ville ne se termine jamais. Elle se transforme.',
      "ARCHÉ n'a pas de version finale. Chaque marche ajoute une couche. Chaque regard modifie la carte.",
      "La fin impossible, c'est le refus de figer. C'est accepter que comprendre soit un mouvement perpétuel.",
    ],
  },
  {
    id: 'transmission',
    slug: 'transmission',
    title: 'Transmission',
    subtitle: "Ce qui passe de l'un à l'autre.",
    kind: 'theory',
    invocation: 'La mémoire ne se conserve pas. Elle se transmet.',
    content: [
      'Les murs parlent à ceux qui savent écouter. Les inscriptions demandent à être lues.',
      "Transmettre dans ARCHÉ, ce n'est pas enseigner. C'est déposer une trace pour celui qui viendra.",
      'Chaque entrée dans le carnet devient un fragment de mémoire collective. Pas pour être vu — pour être trouvé.',
    ],
  },

  // Date entry (timeless calendar)
  {
    id: 'jour-du-meridien',
    slug: 'jour-du-meridien',
    title: 'Le jour du méridien',
    subtitle: 'Quand le soleil traverse Paris.',
    kind: 'date',
    dateTag: '21 juin',
    content: [
      "Le 21 juin, à midi solaire, l'ombre disparaît sur la ligne du méridien de Paris.",
      "Ce jour-là, marcher le long de l'axe nord-sud devient un acte de lecture. L'Observatoire, le jardin du Luxembourg, Saint-Sulpice — alignés depuis trois siècles.",
      'ARCHÉ ne célèbre pas les solstices. Il les traverse.',
    ],
  },

  // Place entry (spatial anecdote)
  {
    id: 'passage-du-desir',
    slug: 'passage-du-desir',
    title: 'Passage du Désir',
    subtitle: 'Ce que le nom ne dit pas.',
    kind: 'place',
    place: {
      address: '85 rue du Faubourg Saint-Denis, 75010 Paris',
      mapsUrl: 'https://maps.app.goo.gl/JZkZ8GjV9hPmJnZE6',
    },
    content: [
      "Le passage du Désir ne mène nulle part. Vingt mètres de pavés entre deux rues, bordés d'immeubles ordinaires.",
      "Le nom vient d'une ancienne guinguette. Le désir, ici, n'était que celui de s'arrêter un instant.",
      "Aujourd'hui, le passage reste. Le désir aussi, peut-être — celui de trouver ce qui n'est pas indiqué.",
    ],
  },
];

export function getJournalEntry(slug: string): JournalEntry | undefined {
  return journalEntries.find(entry => entry.slug === slug);
}
