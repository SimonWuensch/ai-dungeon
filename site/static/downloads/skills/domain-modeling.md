---
name: domain-modeling
kategorie: Vokabular
aufruf: Kann automatisch gewählt werden
---

# domain-modeling — Das Domain-Glossar scharf halten

Aktiv das Domain-Modell eines Projekts aufbauen und schärfen: Begriffe herausfordern,
Grenzfall-Szenarien erfinden, das Glossar und Entscheidungen genau dann festhalten, wenn sie sich
klären.

## Wann brauche ich das?

Wenn über Codebase-Terminologie gesprochen wird, eine `CONTEXT.md` geschrieben/bearbeitet wird,
oder eine Architekturentscheidung (ADR) festgehalten werden soll.

## Dateistruktur

```
/
├── CONTEXT.md
├── docs/
│   └── adr/
│       ├── 0001-...md
│       └── 0002-...md
└── src/
```

Bei mehreren fachlichen Kontexten (Monorepo, mehrere Module): eine `CONTEXT-MAP.md` an der Wurzel,
die auf pro-Kontext `CONTEXT.md`-Dateien verweist. Dateien nur bei Bedarf anlegen — nicht auf
Vorrat.

## Während der Sitzung

- **Gegen das Glossar prüfen**: widerspricht ein benutzter Begriff der bestehenden `CONTEXT.md`?
  Sofort ansprechen.
- **Unscharfe Sprache schärfen**: bei vagen/überladenen Begriffen einen präzisen Kandidaten
  vorschlagen ("Meinst du den Kunden oder den Nutzer? Das sind unterschiedliche Dinge.").
- **Konkrete Szenarien durchspielen**: Grenzfälle erfinden, die zur Präzision zwingen.
- **Mit dem Code abgleichen**: wenn eine Aussage dem Code widerspricht, das offen ansprechen.
- **`CONTEXT.md` fortlaufend aktualisieren**: sobald ein Begriff sich klärt, **direkt** als
  Snippet vorschlagen — du übernimmst es per Apply oder manuellem Copy-Paste in die Datei. Nicht
  sammeln und ans Ende verschieben. `CONTEXT.md` bleibt reines Glossar, keine Spec, kein Scratchpad.
- **ADRs nur sparsam anbieten** — nur wenn alle drei zutreffen: schwer umkehrbar, ohne Kontext
  überraschend, Ergebnis eines echten Trade-offs.

## Was sich gegenüber dem Original geändert hat

- "Inline aktualisieren" heißt bei uns: ich schlage die `CONTEXT.md`-/ADR-Änderung als Snippet vor,
  du übernimmst sie per Apply-Button oder manuellem Copy-Paste — ich kann die Datei nicht selbst
  schreiben. Die Disziplin selbst (wann ein Begriff reif ist, wann ein ADR sich lohnt) ist
  unverändert.
