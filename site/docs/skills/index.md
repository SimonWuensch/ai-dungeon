---
sidebar_position: 1
---

import DownloadAllButton from '@site/src/components/skills/DownloadAllButton';

# Skills

:::info[Angepasst für unser Setup]
Alle Skills auf dieser Seite sind **unser eigenes, angepasstes Skill-Set**, nicht die
Original-Skills von Matt Pocock. Angepasst für IntelliJ AI Chat (ChatGPT 5.5/5.6): keine Agenten,
keine direkten Code-Änderungen (nur Snippet + Apply/manuell), keine Jira-Anbindung. Zwei
Original-Skills (`triage`, `setup-matt-pocock-skills`) sind komplett entfallen, sie bauten fast
vollständig auf Automatisierung auf, die es bei uns nicht gibt. Drei weitere (`grill-me`,
`grilling`, `grill-with-docs`) sind zu einem einzigen Skill verschmolzen. Die vollständige
Begründung je Skill steht in `site/skills-content/ATRUVIA-FIT-ANALYSIS.md` im Repo.
:::

:::tip[Neu hier?]
**[Welcher Skill passt zu meiner Situation?](/docs/skills/welcher-skill-passt)**,
ein Entscheidungsbaum nach Aufgabengröße, mit drei konkreten Beispielen.
:::

Ein Skill ist eine wiederverwendbare, in Markdown geschriebene Anleitung, die eine KI selbst
nachschlägt oder die du per Namen aufrufst, sobald die aktuelle Aufgabe dazu passt.

<DownloadAllButton />

## Manuell oder automatisch?

Jede Skill-Seite trägt einen zweiten Badge neben der Kategorie:

- **⌨️ Nur manuell**: der Skill reagiert **nur**, wenn du ihn per Namen aufrufst
  (`/grill-with-docs`, `/to-tickets`, …). Sein Job ist zu **orchestrieren**, er trifft
  Entscheidungen, die eigentlich dir gehören, deshalb wartet er auf dich.
- **🤖 Kann selbst gewählt werden**: der Skill kann sowohl von dir aufgerufen werden als auch
  automatisch gezogen werden, wenn die Aufgabe dazu passt. Er kapselt **wiederverwendbare
  Disziplin** (wie man testet, wie man einen Diff reviewt) statt einer Entscheidung.

**Eine Kompositionsregel gilt fest:** Ein nur-manueller Skill darf einen automatisch wählbaren
Skill aufrufen (z.B. `implement` treibt `tdd`), aber **nie einen anderen nur-manuellen Skill**.

## Unsere 17 Skills

### Hauptfluss: Idee → Umsetzung

Der Pfad, den die meiste Arbeit nimmt: eine Idee schärfen, daraus eine Spec und Tickets machen,
umsetzen.

- **[grill-with-docs](/docs/skills/grill-with-docs)**: die Idee per Interview schärfen, mit oder ohne Papierspur
- **[to-spec](/docs/skills/to-spec)**: das Gespräch zur Spec synthetisieren (Text zum manuellen Einfügen in Jira)
- **[to-tickets](/docs/skills/to-tickets)**: die Spec in greifbare Tickets zerlegen (zum manuellen Übertragen)
- **[implement](/docs/skills/implement)**: ein Ticket umsetzen, treibt `tdd` und schließt mit `code-review`
- **[tdd](/docs/skills/tdd)**: der rot-grün-Loop selbst
- **[code-review](/docs/skills/code-review)**: Diff-Review entlang zweier Achsen: Standards und Spec

### On-Ramps: Ausgangslagen, die auf den Hauptfluss münden

- **[diagnosing-bugs](/docs/skills/diagnosing-bugs)**: harte Bugs ohne Theorie, mit straffem Feedback-Loop
- **[wayfinder](/docs/skills/wayfinder)**: riesigen, unklaren Umfang als Entscheidungs-Landkarte kartieren (als eigenes Dokument, nicht als Tracker-Issue)

### Codebase-Pflege

- **[improve-codebase-architecture](/docs/skills/improve-codebase-architecture)**: "Deepening"-Kandidaten
  finden, wenn Luft ist

### Vokabular darunter

- **[domain-modeling](/docs/skills/domain-modeling)**: das Domain-Glossar eines Projekts scharf halten
- **[codebase-design](/docs/skills/codebase-design)**: die Sprache für tiefe Module (Interface, Naht, Tiefe …)

### Standalone

- **[resolving-merge-conflicts](/docs/skills/resolving-merge-conflicts)**: einen laufenden Merge-Konflikt lösen
- **[research](/docs/skills/research)**: gegen Primärquellen recherchieren, synchron im Chat
- **[prototype](/docs/skills/prototype)**: eine harte Frage mit Wegwerfcode statt Prosa beantworten
- **[wizard](/docs/skills/wizard)**: ein Skript für Schritte erzeugen, die nur ein Mensch tun kann
- **[handoff](/docs/skills/handoff)**: ein Gespräch für eine neue Chat-Sitzung verdichten
- **[ask-matt](/docs/skills/ask-matt)**: die Landkarte über alle Skills, wenn unklar ist, wo man anfängt

## Entfernt oder zusammengeführt

- **`triage`**: baute fast vollständig auf Tracker-Automatisierung (Backlog abfragen, Labels
  setzen, Kommentare posten) auf, die es ohne Jira-Anbindung nicht gibt.
- **`setup-matt-pocock-skills`**: konfigurierte hauptsächlich CLI-Tracker-Integration
  (`gh`/`glab`), die im Atruvia-Setup nicht existiert.
- **`grill-me`** und **`grilling`**: sind in `grill-with-docs` aufgegangen, als Betriebsart
  "ohne Papierspur" statt als eigene Skills.

Begründung im Detail: `site/skills-content/ATRUVIA-FIT-ANALYSIS.md` im Repo.
