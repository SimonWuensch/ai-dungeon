export type StoryStep = {
  slug: string;
  step: number;
  title: string;
  teaser: string;
};

// Single source of truth for the "Wie funktioniert Agentic Coding?" story.
// Overview page, prev/next nav, and the story layout all read from this list.
export const storySteps: StoryStep[] = [
  {
    slug: '/start/wie-du-bisher-codest',
    step: 1,
    title: 'Wie du bisher codest',
    teaser: 'Der vertraute Ausgangspunkt: Editor, Tastatur, dein Kopf.',
  },
  {
    slug: '/start/agent-statt-autocomplete',
    step: 2,
    title: 'Agent statt Autocomplete',
    teaser: 'Der Unterschied in einem Satz: Es antwortet nicht nur, es handelt.',
  },
  {
    slug: '/start/der-loop',
    step: 3,
    title: 'Der Grundzyklus',
    teaser: 'Anweisung, Plan, Werkzeug, Ergebnis, weiter — der eine Kreislauf.',
  },
  {
    slug: '/start/werkzeuge',
    step: 4,
    title: 'Werkzeuge',
    teaser: 'Was ein Agent wirklich anfassen kann — und warum das der Gamechanger ist.',
  },
  {
    slug: '/start/kontext-und-session',
    step: 5,
    title: 'Kontext & Session',
    teaser: 'Was das Modell "im Kopf" hat — und warum das begrenzt ist.',
  },
  {
    slug: '/start/skills',
    step: 6,
    title: 'Skills',
    teaser: 'Wiederverwendbare Anleitungen, die ein Agent selbst nachschlägt.',
  },
  {
    slug: '/start/mensch-im-loop',
    step: 7,
    title: 'Mensch im Loop',
    teaser: 'Kein Autopilot ohne Fahrer: Review, Nachfragen, Freigaben.',
  },
  {
    slug: '/start/eingeschraenkter-zugriff',
    step: 8,
    title: 'Und bei eingeschränktem Zugriff?',
    teaser: 'Nur ein Chat, kein automatisches Ausführen? Das ist Stufe 1.',
  },
  {
    slug: '/start/los-gehts',
    step: 9,
    title: "Los geht's",
    teaser: 'Zusammenfassung und wo es inhaltlich weitergeht.',
  },
];

export function stepBySlug(slug: string): StoryStep {
  const found = storySteps.find((s) => s.slug === slug);
  if (!found) {
    throw new Error(`Unknown story step: ${slug}`);
  }
  return found;
}
