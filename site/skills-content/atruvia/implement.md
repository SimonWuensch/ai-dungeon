---
name: implement
description: Setzt die Arbeit um, die eine Spec oder ein Ticket beschreibt, prüft sich vor der Ausgabe selbst und liefert eine fertig geprüfte Version.
disable-model-invocation: true
kategorie: Hauptfluss
---

# implement: Ein Ticket umsetzen

Setzt die Arbeit um, die eine Spec oder ein Ticket beschreibt: genau wie vorgegeben, direkt lauffähig,
und schon vor der Ausgabe gegen sich selbst geprüft.

## Wann brauche ich das?

Sobald ein Ticket oder eine Spec feststeht und umgesetzt werden soll, egal ob als Teil des
mehrstufigen Hauptflusses (nach `to-tickets`) oder direkt im selben Kontextfenster bei kleineren
Änderungen.

## Wie funktioniert das?

Der Fokus liegt auf **schnell und einfach genau das umsetzen, was gefordert ist**, nicht auf einem
strikten Test-first-Ritual. `tdd` ist ein Werkzeug, das dieser Skill bei Bedarf zieht, kein
vorgeschriebener Taktgeber für jeden Schritt:

1. **Spec/Ticket genau lesen** und den vollständigen Umsetzungsschritt planen, bevor der erste
   Code entsteht: welche Dateien, welche Änderung, was am Ende funktionieren muss.
2. **Direkt umsetzen**, wie vorgegeben. Tests entstehen **parallel, an der Stelle, wo sie
   hingehören** (an der öffentlichen Schnittstelle, die die Änderung betrifft), nicht als
   vorgeschalteter Selbstzweck. Bei einer wirklich harten oder unklaren Logik zieht die KI `/tdd`
   gezielt für genau diese Stelle, statt den ganzen Schritt in einen Rot-Grün-Loop zu zwingen.
3. **Vor der Ausgabe: Selbstprüfung.** Bevor das Snippet gezeigt wird, prüft die KI den Entwurf
   intern entlang derselben zwei Achsen wie `/code-review`, Standards und Spec, und behebt
   gefundene Fehler direkt. Was du zu sehen bekommst, ist bereits die **korrigierte, stabile
   Version**, nicht der erste Entwurf.
4. Du übernimmst das Snippet (Apply-Button oder manuell) und lässt Typecheck/Test laufen (einzeln
   angestoßen, bestätigt möglich für Angular/npm **und** Java/Maven-Projekte).
5. Du gibst das Ergebnis zurück: rot oder grün. Bei rot schlägt die KI die Korrektur vor, wieder
   schon selbst vorgeprüft.
6. Nächstes Snippet, bis das Ticket fertig ist.

Am Ende: einmal die volle Test-Suite laufen lassen, dann `/code-review` für den fertigen Diff als
zweiten, unabhängigen Blick von außen, zusätzlich zur Selbstprüfung aus Schritt 3.

**Committen bleibt bei dir.** Im Original committet der Agent selbst, das setzt voraus, dass er
den Arbeitsstand direkt kontrolliert. Da hier jede Änderung erst durch dich läuft (Review + Apply),
bist du auch diejenige Person, die den fertigen Stand committet, nachdem du ihn geprüft hast.

## So wenig Snippets wie möglich

Jedes Snippet kostet dich einen Wechsel: lesen, Datei finden, einfügen, zurück in den Chat. Das
zählt doppelt, weil hier ohnehin schon kein Apply auf den ganzen Diff möglich ist. Zwei Regeln
dagegen:

- **Bündeln statt zersplittern.** Alles, was zu einem Schritt gehört und in dieselbe Datei geht,
  kommt in einem Snippet, nicht in drei kleinen. Eine neue Methode plus ihr Test plus eine
  Typ-Ergänzung in derselben Datei sind ein Snippet, kein Snippet pro Gedanke. Nur wirklich
  unabhängige Dateien (z.B. Komponente und Service) rechtfertigen ein eigenes Snippet.
- **Ein Snippet pro Datei pro Runde**, nicht pro Zeile. Wenn eine Datei in derselben Runde mehrfach
  betroffen wäre, wird daraus ein einziges, vollständiges Snippet für diese Datei, keine Kette aus
  Mini-Diffs, die du nacheinander einfügst.

## Dateiname und Pfad vor jedem Snippet

**Jedes** Code-Snippet trägt direkt davor die vollständige, relative Pfadangabe zur Datei, in die es
gehört, als eigene Zeile, z.B.:

```
src/app/components/basis-vorlage-auswahl-dialog/basis-vorlage-auswahl-dialog.component.ts
```

Gilt auch für eine **neue** Datei (die Pfadangabe zeigt dann, wo sie angelegt werden muss) und für
Java/Maven-Module genauso wie für Angular/npm-Projekte. Ohne diese Zeile muss du raten, wo ein
Snippet hingehört, das kostet Zeit und ist eine der häufigsten Fehlerquellen beim manuellen
Übertragen.

## Wo passt das rein?

Kettenschritt im Hauptfluss nach `to-tickets` (oder direkt nach `grill-with-docs` bei kleineren
Änderungen). Zieht `tdd` gezielt bei harter Logik, schließt mit `code-review` für den fertigen Diff
ab. Gesamtüberblick: `ask-simon`.

## Was sich gegenüber dem Original geändert hat

- Aus "jeder Schritt läuft zwingend über `tdd`" wird "direkt umsetzen wie vorgegeben, Tests parallel
  an passender Stelle, `tdd` gezielt bei harter Logik". Das Original ist test-first als Taktgeber
  für jeden einzelnen Schritt, hier ist es ein Werkzeug für die Stellen, die es brauchen.
- Neu: eine **Selbstprüfung vor der Ausgabe** entlang der `code-review`-Achsen (Standards und Spec),
  damit du von Anfang an eine korrigierte, stabile Version siehst statt eines ungeprüften ersten
  Entwurfs. Der `code-review`-Schritt am Ende bleibt zusätzlich bestehen, als zweiter, unabhängiger
  Blick auf den fertigen Diff.
- Aus "Agent baut autonom durch, committet am Ende selbst" wird "Snippet vorschlagen, du wendest
  es an, Test/Typecheck auf Zuruf, nächstes Snippet, du committest".
- Möglichst wenige, gebündelte Snippets, und jedes davon mit vorangestelltem Dateipfad (im Original
  nicht nötig, weil der Agent dort direkt in den Dateien arbeitet).
