---
name: grill-with-docs
kategorie: Hauptfluss
aufruf: Nur manuell (/grill-with-docs)
---

# grill-with-docs — Idee schärfen, mit Papierspur

Ein rücksichtsloses Interview, das eine Idee schärft — und dabei Spuren hinterlässt. Was dabei
geklärt wird, landet in `CONTEXT.md` und in ADRs.

## Wann brauche ich das?

Startpunkt des Hauptflusses, wenn du **in einem Arbeitsverzeichnis** bist *und* das Ergebnis
wiederverwendbares Vokabular oder eine schwer umkehrbare Entscheidung ist. Für eine wirklich
triviale, nicht wiederverwendbare Entscheidung (z.B. reine Formatierungsfragen) lohnt sich die
Papierspur nicht — dann reicht ein kurzes Gespräch ohne `CONTEXT.md`-Eintrag.

## Wie funktioniert das?

Der Loop, immer wieder:

1. **Frage stellen** — eine nach der anderen, nie mehrere auf einmal.
2. **Antwort hören** — mit einer Empfehlung, die du in einem Wort bestätigen oder ablehnen kannst.
3. **Frontier verschieben** — zum nächsten offenen Ast des Entscheidungsbaums.
4. **Doku aktualisieren** — sobald ein Begriff sich klärt, direkt als Snippet für `CONTEXT.md`
   oder ein ADR, das du übernimmst.

Zwei Dinge laufen dabei zusammen:

1. **Das reine Interview-Prinzip**: Runden, die Frontier (der nächste offene Ast), Fakten sind
   meine Aufgabe, Entscheidungen bleiben bei dir.
2. **`domain-modeling`** parallel: sobald ein Begriff sich klärt oder eine schwer umkehrbare
   Entscheidung fällt, wird `CONTEXT.md` sofort als Snippet vorgeschlagen bzw. ein ADR angelegt —
   nicht gesammelt fürs Ende.

## Was sich gegenüber dem Original geändert hat

- Ruft im Original zwei Skills auf ("grilling" für das reine Interview, "domain-modeling" fürs
  Dokumentieren) — "grilling" selbst ist ein Produktivitäts-Skill, der hier noch nicht bewertet
  wurde; das Interview-Prinzip ist aber unverändert reine Konversation, keine Ausführung nötig, und
  funktioniert unabhängig davon vollständig im Chat.
- Doku-Updates sind Snippets, die du übernimmst, nicht automatische Dateischreibvorgänge.
