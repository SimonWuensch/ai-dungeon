# AI Dungeon

Wissensbasis für **agentic coding**: Skills, Workflows und Best Practices an einem Ort — kuratiert
aus den Erfahrungen bekannter Praktiker (u.a. [Matt Pocock](https://github.com/mattpocock/skills))
sowie den offiziellen Empfehlungen von Anthropic und OpenAI.

## Struktur

```
ai-dungeon/
├── .claude/skills/   ← installierte, nutzbare Claude Code Skills
└── site/             ← Docusaurus-Seite (GitHub Pages)
```

### `.claude/skills/`

Enthält installierte Claude Code Skills (MIT-lizenziert, siehe
[`THIRD_PARTY_LICENSES.md`](./THIRD_PARTY_LICENSES.md)):

- Engineering-Skill-Set von [mattpocock/skills](https://github.com/mattpocock/skills)
- `diagram-design` von [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design)
  — erzeugt die Diagramme auf der Seite in einem konsistenten, editorialen Stil

### `site/`

Öffentliche Docusaurus-Seite, per GitHub Pages veröffentlicht unter
<https://simonwuensch.github.io/ai-dungeon/>. Lokal starten:

```bash
cd site
npm install
npm start
```

**Startseite** (`src/pages/index.tsx`): Übersicht/Landkarte mit 9 Schritten.

**`src/pages/start/*.tsx`**: die 9 Schritte der Einführung "Wie funktioniert Agentic Coding?" —
eine lineare, scrollytelling-artige Strecke für Entwickler ohne/mit wenig KI-Erfahrung, gleichzeitig
als Live-Präsentation nutzbar (einfach durchklicken/durchscrollen). Gemeinsame Bausteine dafür
liegen in `src/components/story/` (Navigation, Fortschritt, Bild-Platzhalter) und
`src/components/diagrams/` (Loop, Vergleichs-Spalten, Flow-Reihen, Kontext-Gauge).

**`docs/`**: die Referenz-Bereiche Skills, Best Practices, Workflows & Sessions — noch
Platzhalter, Inhalte werden nach und nach erarbeitet.

**Bild-Platzhalter:** Stellen, die ein generiertes Bild brauchen (z.B. via Nano Banana), zeigen im
Browser einen Kasten mit Prompt + ID (`<GeneratedImage id="..." prompt="..." />`). Fertiges Bild
unter `site/static/img/generated/<id>.png` ablegen und der Komponente `src="/img/generated/<id>.png"`
mitgeben, um den Platzhalter zu ersetzen.
