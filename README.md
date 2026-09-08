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

Enthält installierte Claude Code Skills. Aktuell: das Engineering-Skill-Set von
[mattpocock/skills](https://github.com/mattpocock/skills) (MIT-lizenziert, siehe
[`THIRD_PARTY_LICENSES.md`](./THIRD_PARTY_LICENSES.md)).

### `site/`

Öffentliche Docusaurus-Doku-Seite, per GitHub Pages veröffentlicht. Lokal starten:

```bash
cd site
npm install
npm start
```

Status: Grundgerüst mit Platzhalter-Seiten (Skills, Best Practices, Workflows & Sessions) — Inhalte
werden nach und nach erarbeitet.
