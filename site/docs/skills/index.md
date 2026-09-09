---
sidebar_position: 1
---

# Skills

:::tip[Neu hier?]
Bevor du dich durch alle 25 Skills klickst: **[Welcher Skill passt zu meiner Situation?](/docs/skills/welcher-skill-passt)**
— ein Entscheidungsbaum nach Aufgabengröße, mit drei konkreten Beispielen.
:::

Ein Skill ist eine wiederverwendbare, in Markdown geschriebene Anleitung, die ein Agent selbst
nachschlägt, sobald die aktuelle Aufgabe dazu passt.

## Manuell oder automatisch?

Jede Skill-Seite trägt einen zweiten Badge neben der Kategorie. Das ist keine Nebensächlichkeit —
Matt Pocock selbst zieht diese Grenze in seinem Repo bewusst:

- **⌨️ Nur manuell** (`disable-model-invocation: true`) — der Skill reagiert **nur**, wenn du ihn
  per Namen aufrufst (`/grill-me`, `/to-tickets`, …). Sein Job ist zu **orchestrieren** — er trifft
  Entscheidungen, die eigentlich dir gehören, deshalb wartet er auf dich.
- **🤖 Claude kann selbst wählen** — der Skill kann sowohl von dir aufgerufen werden als auch von
  Claude selbst gezogen werden, wenn die Aufgabe dazu passt. Er kapselt **wiederverwendbare
  Disziplin** (wie man testet, wie man einen Diff reviewt) statt einer Entscheidung.

**Eine Kompositionsregel gilt fest:** Ein nur-manueller Skill darf einen Claude-wählbaren Skill
aufrufen (z.B. `implement` treibt `tdd`), aber **nie einen anderen nur-manuellen Skill**. Das hält
die Verantwortlichkeiten sauber: Orchestrierung bleibt bei dir, Disziplin bei der Ausführung.

**Nutzungsfrequenz** (Empfehlungen aus Matt Pococks eigenem README): `/grill-me`/`/grill-with-docs`
lohnen sich *bei jeder* Änderung, so klein sie auch scheint. `/improve-codebase-architecture`
dagegen ist als gelegentlicher Gesundheitscheck gedacht — alle paar Tage, nicht bei jedem Commit.

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

## Installierte Skills (Matt Pocock Produktivitäts-Set)

Ergänzend zum Engineering-Set: Skills rund ums Interviewen, Übergeben und Schreiben für Agenten,
aus [mattpocock/skills](https://github.com/mattpocock/skills), Verzeichnis `skills/productivity/`.

- **[grill-me](/docs/skills/grill-me)** — dasselbe Interview wie `grill-with-docs`, ohne Papierspur
- **[grilling](/docs/skills/grilling)** — das Interview-Prinzip selbst, ohne Wrapper
- **[handoff](/docs/skills/handoff)** — die Konversation für eine andere Session verdichten
- **[wait-what](/docs/skills/wait-what)** — eine nicht angekommene Antwort neu formulieren
- **[to-questionnaire](/docs/skills/to-questionnaire)** — eine unbeantwortbare Frage zum Fragebogen für jemand anderen machen
- **[teach](/docs/skills/teach)** — ein Thema über mehrere Sessions hinweg lernen
- **[writing-for-agents](/docs/skills/writing-for-agents)** — Referenz zum Schreiben von Skills und AGENTS.md/CLAUDE.md

### Setup & Router

- **[setup-matt-pocock-skills](/docs/skills/setup-matt-pocock-skills)** — einmalige Konfiguration pro Repo
- **[ask-matt](/docs/skills/ask-matt)** — die Landkarte über alle Skills, wenn unklar ist, wo man anfängt
