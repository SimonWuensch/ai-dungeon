---
name: implement
description: Setzt die Arbeit um, die eine Spec oder ein Ticket beschreibt.
disable-model-invocation: true
kategorie: Hauptfluss
---

# implement: Ein Ticket umsetzen

Setzt die Arbeit um, die eine Spec oder ein Ticket beschreibt.

## Wann brauche ich das?

Sobald ein Ticket oder eine Spec feststeht und umgesetzt werden soll, egal ob als Teil des
mehrstufigen Hauptflusses (nach `to-tickets`) oder direkt im selben Kontextfenster bei kleineren
Änderungen.

## Wie funktioniert das?

Da Code nicht direkt geändert werden kann, läuft das als enger, iterativer Dialog statt als
autonomer Durchlauf:

1. Die KI schlägt den nächsten Schritt als **Snippet** vor, an der vereinbarten Naht, test-first via
   `/tdd` wo sinnvoll.
2. Du übernimmst es (Apply-Button oder manuell) und lässt Typecheck/Test laufen (einzeln
   angestoßen, bestätigt möglich für Angular/npm **und** Java/Maven-Projekte).
3. Du gibst das Ergebnis zurück: rot oder grün.
4. Nächstes Snippet, bis das Ticket fertig ist.

Am Ende: einmal die volle Test-Suite laufen lassen, dann `/code-review` für den fertigen Diff.

**Committen bleibt bei dir.** Im Original committet der Agent selbst, das setzt voraus, dass er
den Arbeitsstand direkt kontrolliert. Da hier jede Änderung erst durch dich läuft (Review + Apply),
bist du auch diejenige Person, die den fertigen Stand committet, nachdem du ihn geprüft hast.

## Wo passt das rein?

Kettenschritt im Hauptfluss nach `to-tickets` (oder direkt nach `grill-with-docs` bei kleineren
Änderungen), treibt `tdd` und schließt mit `code-review` ab. Gesamtüberblick: `ask-matt`.

## Was sich gegenüber dem Original geändert hat

Aus "Agent baut autonom durch, committet am Ende selbst" wird "Snippet vorschlagen, du wendest
es an, Test/Typecheck auf Zuruf, nächstes Snippet, du committest". Test-getrieben bleibt es in
beiden Fällen.
