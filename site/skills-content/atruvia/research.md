---
name: research
description: Recherchiert eine Frage gegen Primärquellen im Netz. Automatisch wählbar, wenn aktuelle, verlässliche Fakten fehlen, etwa zu Framework-Versionen, APIs oder Breaking Changes.
kategorie: Standalone
---

# research: Gegen Primärquellen recherchieren

Eine Frage gegen hochwertige Primärquellen untersuchen (offizielle Docs, Quellcode, Specs,
First-Party-APIs) und das Ergebnis zitiert als Markdown-Datei festhalten.

## Wann brauche ich das?

Wenn eine Frage aktuelle, verlässliche Fakten braucht, die nicht zuverlässig aus dem
Projekt-Kontext oder Trainingswissen hervorgehen, z.B. Framework-Versionen, API-Details,
Breaking Changes, Release Notes.

## Wie funktioniert das?

Internetzugriff für genau solche Recherchen ist bestätigt verfügbar (offizielle Dokumentationen,
API-Referenzen, GitHub-Repos, Changelogs, Specs, aktuelle Best Practices). Anders als im Original
läuft das **synchron in diesem Chat**, nicht als Hintergrund-Agent, der parallel weiterliest,
während du weiterarbeitest: du bekommst das Ergebnis direkt in der Antwort.

1. Die Frage gegen Primärquellen untersuchen, jede Aussage bis zur Quelle zurückverfolgen, die sie
   trägt.
2. Das Ergebnis als **ein** Markdown-Dokument formulieren, jede Aussage mit Quelle.
3. Das Dokument kommt als Snippet, du speicherst es dort im Repo, wo Notizen dieser Art
   üblicherweise liegen (oder an einer sinnvollen neuen Stelle, wenn es noch keine Konvention gibt).

## Wo passt das rein?

Standalone, jederzeit erreichbar. Das Ergebnis fließt oft in `grill-with-docs`, da Recherche das
Denken füttert statt es zu ersetzen. Gesamtüberblick: `ask-matt`.

## Was sich gegenüber dem Original geändert hat

Kein Hintergrund-Agent, die Recherche läuft synchron, du wartest auf das Ergebnis statt
währenddessen weiterzuarbeiten. Inhaltlich identisch (Primärquellen, zitiert, als Markdown).
