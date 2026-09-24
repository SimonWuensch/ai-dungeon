---
name: improve-codebase-architecture
description: Findet Deepening-Kandidaten in der Codebase und schlägt sie als HTML-Report vor.
disable-model-invocation: true
kategorie: Codebase-Health
---

# improve-codebase-architecture: Deepening-Kandidaten finden

Architektur-Reibung aufdecken und **Deepening-Kandidaten** vorschlagen: Refactorings, die flache
Module in tiefe verwandeln. Ziel: Testbarkeit und Navigierbarkeit für Menschen und KI.

## Wann brauche ich das?

Wenn Luft ist, um die Codebase für zukünftige Änderungen und KI-Unterstützung gut zu halten, keine
Feature-Arbeit, sondern Pflege.

## Wie funktioniert das?

### 1. Erkunden

Vorher entscheiden, **wo** hingeschaut wird: wenn du einen Bereich nennst, nimm den. Sonst über
`git log --oneline` die Hotspots der letzten Zeit finden (Git-Introspektion funktioniert direkt).
`CONTEXT.md` und relevante ADRs zuerst lesen.

**Kein Subagent nötig**, die Codebase-Exploration passiert direkt in diesem Chat, da voller
Codebase-Kontext ohnehin verfügbar ist (Auto-Indexing). Angewendet wird der **Löschtest**: würde das
Löschen eines vermeintlich flachen Moduls Komplexität konzentrieren (dann lohnt sich Deepening) oder
nur verschieben?

### 2. Kandidaten als HTML-Report vorschlagen

Der Report (Tailwind + Mermaid für Diagramme, editorial gestaltet) kommt als **HTML-Snippet**. Im
Original schreibt der Agent die Datei selbst in den Temp-Ordner und öffnet sie automatisch
(`xdg-open`), das geht hier nicht (kein Dateisystem-Schreibzugriff, kein Shell-Open-Befehl).
**Du speicherst das Snippet selbst als `.html`-Datei und öffnest sie im Browser.**

Jede Karte: Dateien/Module, Problem, Lösung, Nutzen (Lokalität/Hebelwirkung), Vorher/Nachher-Diagramm,
Empfehlungsstärke (`Stark`, `Lohnt sich zu prüfen`, `Spekulativ`). Am Ende eine Top-Empfehlung.

### 3. Grilling-Loop

Sobald du einen Kandidaten wählst, gemeinsam durchgrillen: Constraints, Abhängigkeiten, Form des
vertieften Moduls. `CONTEXT.md` wird dabei live als Snippet aktualisiert (siehe `domain-modeling`),
neue Begriffe werden ergänzt. Lehnst du einen Kandidaten mit tragendem Grund ab, bietet die KI ein
ADR an, damit zukünftige Reviews denselben Vorschlag nicht wiederholen.

## Wo passt das rein?

Periodische Pflege, alle paar Tage statt bei jedem Commit. Ein gewählter Kandidat mündet in
`grill-with-docs`, um die Idee als reguläres Feature aufzunehmen. Gesamtüberblick: `ask-simon`.

## Was sich gegenüber dem Original geändert hat

- Kein Subagent für die Exploration, passiert direkt inline im selben Chat.
- Kein automatisches Schreiben und Öffnen des HTML-Reports, du speicherst und öffnest ihn selbst.
