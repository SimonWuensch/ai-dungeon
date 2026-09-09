---
sidebar_position: 1
---

# Skills

:::info[Inhalt folgt]
Was genau ein Claude Code Skill ist, wie ein `SKILL.md` aufgebaut ist und wann sich ein Skill
gegenüber einem einfachen Prompt lohnt, entsteht hier noch als eigener Abschnitt. Für den Moment:
ein Skill ist eine wiederverwendbare, in Markdown geschriebene Anleitung, die ein Agent selbst
nachschlägt, sobald die aktuelle Aufgabe dazu passt.
:::

## Installierte Skills (Matt Pocock Engineering-Set)

Die Engineering-Skills aus [mattpocock/skills](https://github.com/mattpocock/skills)
(MIT-lizenziert) sind unter `.claude/skills/` in diesem Repo installiert und in Claude Code direkt
nutzbar. Jeder hat unten eine eigene Seite mit Erklärung, Ablauf-Diagramm und Link zur Quelle.

### Hauptfluss — Idee → Ship

Der Pfad, den die meiste Arbeit nimmt: eine Idee schärfen, daraus eine Spec und Tickets machen,
umsetzen.

- **[grill-with-docs](/docs/skills/grill-with-docs)** — die Idee per Interview schärfen, mit Papierspur
- **[prototype](/docs/skills/prototype)** — eine harte Frage mit Wegwerfcode statt Prosa beantworten
- **[to-spec](/docs/skills/to-spec)** — das Gespräch zur Spec synthetisieren
- **[to-tickets](/docs/skills/to-tickets)** — die Spec in greifbare, blockierungsbewusste Tickets zerlegen
- **[implement](/docs/skills/implement)** — ein Ticket umsetzen, treibt `tdd` und schließt mit `code-review`
- **[tdd](/docs/skills/tdd)** — der rot-grün-Loop selbst
- **[code-review](/docs/skills/code-review)** — Diff-Review entlang zweier Achsen: Standards und Spec

### On-Ramps — Ausgangslagen, die auf den Hauptfluss münden

- **[triage](/docs/skills/triage)** — eingehende Bugs/Requests durch eine Zustandsmaschine bewegen
- **[diagnosing-bugs](/docs/skills/diagnosing-bugs)** — harte Bugs ohne Theorie, mit straffem Feedback-Loop
- **[wayfinder](/docs/skills/wayfinder)** — riesigen, unklaren Umfang als Entscheidungs-Landkarte kartieren

### Codebase-Pflege

- **[improve-codebase-architecture](/docs/skills/improve-codebase-architecture)** — "Deepening"-Kandidaten
  finden, wenn Luft ist

### Vokabular darunter

- **[domain-modeling](/docs/skills/domain-modeling)** — das Domain-Glossar eines Projekts scharf halten
- **[codebase-design](/docs/skills/codebase-design)** — die Sprache für tiefe Module (Interface, Seam, Depth …)

### Standalone

- **[resolving-merge-conflicts](/docs/skills/resolving-merge-conflicts)** — einen laufenden Merge-Konflikt lösen
- **[research](/docs/skills/research)** — Lesearbeit an einen Hintergrund-Agenten delegieren
- **[wizard](/docs/skills/wizard)** — einen interaktiven Wizard für rein menschliche Schritte erzeugen

### Setup & Router

- **[setup-matt-pocock-skills](/docs/skills/setup-matt-pocock-skills)** — einmalige Konfiguration pro Repo
- **[ask-matt](/docs/skills/ask-matt)** — die Landkarte über alle Skills, wenn unklar ist, wo man anfängt
