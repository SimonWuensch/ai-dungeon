---
name: ask-matt
description: Zeigt, welcher Skill oder Ablauf gerade passt. Router über die user-invoked Skills in diesem Set.
disable-model-invocation: true
kategorie: Standalone (Router)
---

# ask-matt: Welcher Skill passt gerade?

Ein Router über die anderen Skills in diesem Set. Du weißt nicht mehr, welcher Skill gerade passt,
frag einfach.

## Wann brauche ich das?

Immer wenn du zwischen mehreren Skills unsicher bist, oder einen Überblick brauchst, wie die Skills
zusammenhängen.

## Der Hauptfluss: Idee → Umsetzung

1. **`grill-with-docs`** schärft die Idee per Interview. Start hier, sobald du in einem
   Arbeitsverzeichnis bist: die Erkenntnisse landen in `CONTEXT.md` und ADRs.
2. **Verzweigung: lässt sich jede Frage im Gespräch klären?** Wenn eine Frage eine lauffähige
   Antwort braucht (Zustand, Business-Logik, eine UI, die man sehen muss), Umweg über
   **`prototype`**: den Prototyp-Code als Snippet erzeugen, selbst speichern und ausführen, das
   Ergebnis zurück ins Gespräch tragen.
3. **Verzweigung: mehrere Sitzungen nötig?**
   - **Ja**: **`to-spec`** (Thread zur Spec verdichten, Text zum manuellen Einfügen in Jira),
     dann **`to-tickets`** (Spec in einzelne Tickets zerlegen, ebenfalls zum manuellen Übertragen).
   - **Nein**: **`implement`** direkt im selben Kontextfenster.

   In beiden Fällen treibt **`implement`** intern **`tdd`** (eine rot-grün-Runde nach der anderen)
   und schließt mit **`code-review`** ab (Standards- und Spec-Achse, nacheinander im selben Chat statt
   parallel), bevor du committest.

## On-Ramps: Ausgangslagen, die auf den Hauptfluss münden

- **Etwas ist kaputt**: **`diagnosing-bugs`**. Für die harten Fälle: erst eine scharfe
  Rot/Grün-Schleife bauen (Testlauf, den du selbst anstößt), dann minimieren, hypothetisieren,
  instrumentieren.
- **Ein riesiges, noch neblig es Vorhaben**: **`wayfinder`**. Kartiert eine gemeinsame Landkarte aus
  Entscheidungs-Tickets als Markdown-Dokument (nicht mehr als Tracker-Issue), die du selbst pflegst,
  und arbeitet sie eine Entscheidung nach der anderen ab.

## Codebase-Pflege

- **`improve-codebase-architecture`**: wenn Luft ist, Architektur-Reibung finden, als HTML-Report
  vorschlagen (du speicherst und öffnest ihn selbst), dann durch die gewählte Idee grillen.

## Vokabular darunter

- **`domain-modeling`**: das Domain-Glossar (`CONTEXT.md`, ADRs) scharf halten.
- **`codebase-design`**: die Sprache für tiefe Module (Interface, Naht, Adapter, Hebelwirkung …).

## Standalone

- **`resolving-merge-conflicts`**: einen laufenden Merge-Konflikt Hunk für Hunk auflösen.
- **`research`**: eine Frage gegen Primärquellen im Netz recherchieren, synchron im selben Chat.
- **`wizard`**: ein Bash-Skript für Schritte erzeugen, die nur ein Mensch tun kann (Zugänge,
  Zertifikate, Dashboards).
- **`handoff`**: das laufende Gespräch zu einem Übergabe-Dokument für eine neue Chat-Sitzung
  verdichten. Reach for it an jeder Phasen-Grenze: ein Kontextfenster, das voll wird, ein
  Themenwechsel, eine Übergabe an eine andere Person.

## Was sich gegenüber dem Original geändert hat

- Keine "Subagent"-Option mehr bei Kontext-Übergängen, es gibt keine Subagenten in diesem Setup.
  Ohne persistenten Chat-Verlauf über Sitzungen hinweg ist `handoff` hier die einzige Brücke
  zwischen zwei Kontextfenstern, nicht nur eine von mehreren Optionen.
- `triage` und `setup-matt-pocock-skills` sind komplett entfernt (siehe
  `ATRUVIA-FIT-ANALYSIS.md`): sie bauten fast vollständig auf Tracker-Automatisierung auf, die es
  bei uns nicht gibt.
- `wayfinder` ist geblieben, aber mit einer anderen Landkarten-Ablage (Dokument statt Tracker-Issue,
  siehe dort).
- `grill-me`, `grilling` und `grill-with-docs` waren im Original drei Skills, hier ist daraus einer
  geworden (`grill-with-docs`, mit oder ohne Papierspur als Betriebsart).
