# Atruvia-Skills — angepasstes Engineering-Skill-Set

16 Skills, angepasst für: IntelliJ AI Chat (ChatGPT 5.5/5.6), keine Agenten, keine direkten
Code-Änderungen (nur Snippet + Apply/manuell), keine Jira-Anbindung. Siehe die Fit-Analyse im
Repo (`site/skills-content/ATRUVIA-FIT-ANALYSIS.md`) für die Begründung je Skill.

---

---
name: ask-matt
kategorie: Standalone (Router)
aufruf: Nur manuell (/ask-matt)
---

# ask-matt — Welcher Skill passt gerade?

Ein Router über die anderen Skills in diesem Set. Du weißt nicht mehr, welcher Skill gerade passt —
frag einfach.

## Wann brauche ich das?

Immer wenn du zwischen mehreren Skills unsicher bist, oder einen Überblick brauchst, wie die Skills
zusammenhängen.

## Der Hauptfluss: Idee → Umsetzung

1. **`grill-with-docs`** schärft die Idee per Interview. Start hier, sobald du in einem
   Arbeitsverzeichnis bist — die Erkenntnisse landen in `CONTEXT.md` und ADRs.
2. **Verzweigung: lässt sich jede Frage im Gespräch klären?** Wenn eine Frage eine lauffähige
   Antwort braucht (Zustand, Business-Logik, eine UI, die man sehen muss) → Umweg über
   **`prototype`**: den Prototyp-Code als Snippet erzeugen, selbst speichern und ausführen, das
   Ergebnis zurück ins Gespräch tragen.
3. **Verzweigung: mehrere Sitzungen nötig?**
   - **Ja** → **`to-spec`** (Thread zur Spec verdichten, Text zum manuellen Einfügen in Jira),
     dann **`to-tickets`** (Spec in einzelne Tickets zerlegen, ebenfalls zum manuellen Übertragen).
   - **Nein** → **`implement`** direkt im selben Kontextfenster.

   In beiden Fällen treibt **`implement`** intern **`tdd`** (eine rot-grün-Runde nach der anderen)
   und schließt mit **`code-review`** ab (Standards- und Spec-Achse, nacheinander im selben Chat statt
   parallel), bevor du committest.

## On-Ramps — Ausgangslagen, die auf den Hauptfluss münden

- **Etwas ist kaputt** → **`diagnosing-bugs`**. Für die harten Fälle: erst eine scharfe
  Rot/Grün-Schleife bauen (Testlauf, den du selbst anstößt), dann minimieren, hypothetisieren,
  instrumentieren.
- **Ein riesiges, noch neblig es Vorhaben** → **`wayfinder`**. Kartiert eine gemeinsame Landkarte aus
  Entscheidungs-Tickets als Markdown-Dokument (nicht mehr als Tracker-Issue), die du selbst pflegst,
  und arbeitet sie eine Entscheidung nach der anderen ab.

## Codebase-Pflege

- **`improve-codebase-architecture`** — wenn Luft ist: Architektur-Reibung finden, als HTML-Report
  vorschlagen (du speicherst und öffnest ihn selbst), dann durch die gewählte Idee grillen.

## Vokabular darunter

- **`domain-modeling`**: das Domain-Glossar (`CONTEXT.md`, ADRs) scharf halten.
- **`codebase-design`**: die Sprache für tiefe Module (Interface, Naht, Adapter, Hebelwirkung …).

## Standalone

- **`resolving-merge-conflicts`** — einen laufenden Merge-Konflikt Hunk für Hunk auflösen.
- **`research`** — eine Frage gegen Primärquellen im Netz recherchieren, synchron im selben Chat.
- **`wizard`** — ein Bash-Skript für Schritte erzeugen, die nur ein Mensch tun kann (Zugänge,
  Zertifikate, Dashboards).

## Was sich gegenüber dem Original geändert hat

- Keine "Subagent"-Option mehr bei Kontext-Übergängen — es gibt keine Subagenten in diesem Setup.
- `triage` und `setup-matt-pocock-skills` sind komplett entfernt (siehe
  `ATRUVIA-FIT-ANALYSIS.md`) — sie bauten fast vollständig auf Tracker-Automatisierung auf, die es
  bei uns nicht gibt.
- `wayfinder` ist geblieben, aber mit einer anderen Landkarten-Ablage (Dokument statt Tracker-Issue,
  siehe dort).

---

---
name: code-review
kategorie: Hauptfluss
aufruf: Kann automatisch gewählt werden
---

# code-review — Review entlang zweier Achsen

Review des Diffs zwischen `HEAD` und einem fixen Punkt, den du angibst, entlang zweier getrennter
Achsen:

- **Standards**: folgt der Code den dokumentierten Coding-Standards dieses Repos?
- **Spec**: setzt der Code das ursprüngliche Ticket/die Spec tatsächlich um?

## Wann brauche ich das?

Bevor du committest, wenn du einen Branch oder eine Änderung seit einem bestimmten Punkt reviewen
willst.

## Wie funktioniert das?

### 1. Fixpunkt festlegen

Du nennst den Fixpunkt (Commit-SHA, Branch, Tag, `main`, `HEAD~5`, …). `git diff <fixpunkt>...HEAD`
und `git log <fixpunkt>..HEAD --oneline` sind über die Git-Introspektion des Chats abrufbar — das
funktioniert direkt.

### 2. Spec-Quelle

Da keine Tracker-Anbindung existiert: **du fügst den Spec-/Ticket-Text manuell ein** (Copy-Paste aus
Jira), oder verweist auf eine Datei im Repo (`docs/`, `.scratch/`). Ohne Spec markiert die
Spec-Achse sich selbst als "keine Spec verfügbar" statt sie zu überspringen.

### 3. Standards-Quellen

Alles im Repo, das dokumentiert, wie Code geschrieben werden soll (`CODING_STANDARDS.md`,
`CONTRIBUTING.md`, ESLint-/Checkstyle-Konfiguration). Zusätzlich gilt immer die
**Fowler-Smell-Baseline** (siehe unten) — der Repo-Standard hat aber immer Vorrang, wo er etwas
ausdrücklich erlaubt, was die Baseline anmahnen würde.

**Smell-Baseline** (jeder Fund ist eine Einschätzung, kein hartes Urteil):

- **Mysterious Name** — Name verrät nicht, was etwas tut/hält → umbenennen.
- **Duplicated Code** — dieselbe Logik mehrfach im Diff → gemeinsame Form extrahieren.
- **Feature Envy** — eine Methode greift mehr auf fremde Daten zu als auf eigene → verschieben.
- **Data Clumps** — dieselben Felder reisen immer zusammen → in einen Typ bündeln.
- **Primitive Obsession** — ein Primitive/String steht für ein Domain-Konzept → eigener Typ.
- **Repeated Switches** — dieselbe Fallunterscheidung wiederholt sich → Polymorphie oder eine Map.
- **Shotgun Surgery** — eine fachliche Änderung verstreut sich über viele Dateien → bündeln.
- **Divergent Change** — eine Datei ändert sich aus mehreren unabhängigen Gründen → aufteilen.
- **Speculative Generality** — Abstraktion für einen Bedarf, den die Spec nicht hat → löschen.
- **Message Chains** — lange `a.b().c().d()`-Ketten → hinter einer Methode verstecken.
- **Middle Man** — eine Klasse, die nur weiterreicht → weglassen, direkt aufrufen.
- **Refused Bequest** — eine Unterklasse ignoriert das meiste, was sie erbt → Komposition statt Vererbung.

### 4. Beide Achsen nacheinander statt parallel

Im Original laufen Standards- und Spec-Review als zwei parallele Subagenten. **Ohne Agenten laufen
sie sequenziell im selben Chat**: erst die eine Achse komplett durchgehen und das Ergebnis notieren,
dann die andere — inhaltlich identisch, nur nacheinander statt gleichzeitig.

### 5. Zusammenfassen

Beide Berichte unter eigenen Überschriften `## Standards` und `## Spec` — nicht mischen, nicht
gegeneinander aufwiegen. Ein Fund kann eine Achse bestehen und die andere durchfallen lassen; das
ist der Grund für die Trennung.

## Was sich gegenüber dem Original geändert hat

- Keine parallelen Subagenten → sequenzieller Zwei-Pass-Review im selben Chat.
- Keine automatische Spec-Beschaffung über den Issue-Tracker → du kopierst den Spec-Text manuell
  rein.

---

---
name: codebase-design
kategorie: Vokabular
aufruf: Kann automatisch gewählt werden
---

# codebase-design — Vokabular für tiefe Module

Gemeinsame Sprache, um **tiefe Module** zu entwerfen: viel Verhalten hinter einer kleinen
Schnittstelle, an einer sauberen Naht platziert, testbar über genau diese Schnittstelle. Ziel:
Hebelwirkung für Aufrufer, Lokalität für Wartende, Testbarkeit für alle.

## Wann brauche ich das?

Immer wenn eine Modul-Schnittstelle entworfen oder verbessert wird, eine "deepening"-Gelegenheit
gesucht wird, oder ein anderer Skill dieses Vokabular braucht (`tdd`,
`improve-codebase-architecture`).

## Glossar

Diese Begriffe exakt so verwenden — nicht durch "Komponente", "Service", "API" oder "Boundary"
ersetzen:

- **Modul**: alles mit einer Schnittstelle und einer Implementierung — bewusst größenunabhängig
  (Funktion, Klasse, Package, tier-übergreifender Slice).
- **Schnittstelle**: alles, was ein Aufrufer wissen muss, um das Modul korrekt zu nutzen — nicht
  nur die Typ-Signatur, sondern auch Invarianten, Reihenfolge-Zwänge, Fehlermodi, Konfiguration,
  Performance-Eigenschaften.
- **Implementierung**: was innen im Modul steckt. Unterscheidet sich von **Adapter**: ein Adapter
  kann klein sein mit großer Implementierung (ein Postgres-Repository) oder groß mit kleiner
  Implementierung (ein In-Memory-Fake).
- **Tiefe**: Hebelwirkung an der Schnittstelle. Wie viel Verhalten ein Aufrufer (oder Test) pro
  Einheit Schnittstellen-Wissen ausüben kann. **Tief** = viel Verhalten hinter kleiner Schnittstelle,
  **flach** = Schnittstelle fast so komplex wie die Implementierung.
- **Naht** (Michael Feathers): die Stelle, an der man Verhalten ändern kann, ohne dort zu editieren
  — der *Ort*, an dem die Schnittstelle eines Moduls lebt.
- **Adapter**: ein konkretes Ding, das eine Schnittstelle an einer Naht erfüllt.
- **Hebelwirkung**: was Aufrufer aus Tiefe gewinnen — mehr Fähigkeit pro Einheit gelerntem
  Schnittstellen-Wissen.
- **Lokalität**: was Wartende aus Tiefe gewinnen — Änderungen, Bugs, Wissen und Verifikation
  konzentrieren sich an einem Ort statt sich über Aufrufer zu verteilen.

## Tief vs. flach

```
┌─────────────────────┐
│   Kleine Schnittstelle │  ← wenige Methoden, einfache Parameter
├─────────────────────┤
│                     │
│  Tiefe Implementierung │  ← komplexe Logik verborgen
│                     │
└─────────────────────┘
```

Beim Schnittstellen-Entwurf fragen: Kann ich die Methodenanzahl reduzieren? Die Parameter
vereinfachen? Mehr Komplexität nach innen verstecken?

## Prinzipien

- **Tiefe ist eine Eigenschaft der Schnittstelle, nicht der Implementierung.** Ein tiefes Modul
  kann intern aus kleinen, mockbaren Teilen bestehen — die gehören trotzdem nicht zur Schnittstelle.
- **Der Löschtest**: Modul gedanklich löschen. Verschwindet die Komplexität, war es nur ein
  Durchreicher. Taucht sie bei N Aufrufern wieder auf, hat sie sich gelohnt.
- **Die Schnittstelle ist die Testoberfläche.** Aufrufer und Tests queren dieselbe Naht.
- **Ein Adapter = eine hypothetische Naht. Zwei Adapter = eine echte.** Keine Naht einführen, wenn
  nichts tatsächlich variiert.

## Testbarkeit gestalten

1. **Abhängigkeiten annehmen, nicht selbst erzeugen** (Dependency Injection statt `new` im Modul).
2. **Ergebnisse zurückgeben statt Seiteneffekte zu produzieren.**
3. **Kleine Oberfläche** — weniger Methoden, weniger Parameter, einfacherer Testaufbau.

## Was sich gegenüber dem Original geändert hat

Nichts inhaltlich — reine Vokabular-/Prinzipien-Referenz, braucht keine Ausführung. Nur ins
Deutsche übertragen.

---

---
name: diagnosing-bugs
kategorie: On-Ramp
aufruf: Kann automatisch gewählt werden
---

# diagnosing-bugs — Diagnose-Loop für harte Bugs

Eine Disziplin für harte Bugs: den flüchtigen Fehler, den intermittierenden Flake, die Regression,
die sich zwischen zwei bekannt-guten Zuständen eingeschlichen hat.

## Wann brauche ich das?

Wenn etwas kaputt ist, sich aber nicht auf den ersten Blick erklärt.

## Wie funktioniert das?

### Phase 1: Eine scharfe Rot/Grün-Schleife bauen — das ist der Kern

Alles andere ist danach mechanisch. Testläufe sind bei uns möglich (bestätigt), also gilt: **du**
stößt den Lauf an, wenn ich ihn vorschlage, und gibst mir das Ergebnis zurück. Wege, eine Schleife
zu bauen, ungefähr in dieser Reihenfolge:

1. **Fehlschlagender Test** an der Stelle, die den Bug erreicht (Unit, Integration, E2E).
2. **Curl/HTTP-Skript** gegen einen laufenden Dev-Server.
3. **CLI-Aufruf** mit einem Fixture-Input, Diff gegen einen bekannt-guten Snapshot.
4. **Headless-Browser-Skript** (Playwright/Puppeteer), das die UI treibt und auf DOM/Konsole/Netzwerk prüft.
5. **Eine mitgeschnittene Anfrage wiederholen** (echten Request/Payload speichern, isoliert erneut abspielen).
6. **Wegwerf-Testkabel**: eine minimale Teilmenge des Systems (ein Service, gemockte Abhängigkeiten).

Was **nicht** autonom läuft: `git bisect run` über viele Commits unbeaufsichtigt, ein
Property-/Fuzz-Loop mit 1000 automatischen Durchläufen, Debugger-Fernsteuerung. Diese Automatisierung
setzt eine Verkettung vieler Schritte ohne Zwischenschau voraus — das fällt unter "keine Agenten".
Stattdessen: **du** führst die Iterationen einzeln aus, auf meinen Vorschlag hin, und meldest das
Ergebnis zurück. Bei Bisection heißt das: ich schlage vor, welchen Commit als Nächstes zu prüfen ist,
du checkst ihn aus und lässt den Test laufen, wir wiederholen das gemeinsam statt automatisiert.

**Fertig ist Phase 1**, wenn du einen **einzigen Befehl** nennen kannst, den du **schon mindestens
einmal ausgeführt hast** (zeig den Aufruf und die Ausgabe, Secrets geschwärzt), und der:

- **rot-fähig** ist: trifft den echten Bug-Pfad und prüft das **genaue Symptom**.
- **deterministisch** ist: gleiches Ergebnis bei jedem Lauf.
- **schnell** ist: Sekunden, nicht Minuten.

### Phase 2: Reproduzieren + minimieren

Lauf laufen lassen, bestätigen, dass er das **vom Nutzer beschriebene** Symptom zeigt (nicht ein
ähnliches). Dann schrittweise verkleinern: Eingaben, Aufrufer, Konfiguration einzeln streichen,
nach jedem Schritt erneut laufen lassen, bis alles Verbleibende tragend ist.

### Phase 3: Hypothesen bilden

**3–5 rangierte Hypothesen**, bevor irgendeine getestet wird — eine einzelne Hypothese verankert zu
früh auf der ersten plausiblen Idee. Jede muss **falsifizierbar** sein: "Wenn X die Ursache ist,
dann macht das Ändern von Y den Bug verschwinden." Zeig mir die Rangfolge, bevor wir testen — du
kennst oft Kontext, der sofort umsortiert.

### Phase 4: Instrumentieren

Jede Sonde bildet genau eine Vorhersage aus Phase 3 ab, **eine Variable pro Schritt**. Bevorzugt:
Debugger/REPL-Inspektion in der IDE (ein Breakpoint schlägt zehn Logs), sonst gezielte Logs mit
eindeutigem Tag (`[DEBUG-a4f2]`), niemals "alles loggen und grep".

### Phase 5: Fix + Regressionstest

Regressionstest **vor** dem Fix schreiben, aber nur an einer **korrekten Naht** (die den echten
Bug-Pfad trifft). Gibt es keine passende Naht, ist das selbst ein Befund — die Architektur
verhindert, dass sich der Bug festschreiben lässt.

### Phase 6: Aufräumen

- Ursprünglicher Repro reproduziert nicht mehr (Phase-1-Schleife erneut laufen lassen)
- Regressionstest ist grün (oder das Fehlen einer Naht ist dokumentiert)
- Alle `[DEBUG-...]`-Instrumentierung entfernt
- Die bestätigte Hypothese steht in der Commit-/PR-Nachricht

## Was sich gegenüber dem Original geändert hat

- Vollautomatisierte Loops (`git bisect run`, Fuzz-Loop mit 1000 Durchläufen) werden zu von dir
  einzeln ausgeführten Iterationen — die Disziplin (erst Schleife, dann minimieren, dann
  hypothetisieren) bleibt vollständig erhalten.
- Kein HITL-Bash-Skript für "ein Mensch muss klicken" nötig, da Testläufe direkt möglich sind.

---

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

---

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

---

---
name: implement
kategorie: Hauptfluss
aufruf: Nur manuell (/implement)
---

# implement — Ein Ticket umsetzen

Setzt die Arbeit um, die eine Spec oder ein Ticket beschreibt.

## Wann brauche ich das?

Sobald ein Ticket oder eine Spec feststeht und umgesetzt werden soll — egal ob als Teil des
mehrstufigen Hauptflusses (nach `to-tickets`) oder direkt im selben Kontextfenster bei kleineren
Änderungen.

## Wie funktioniert das?

Da Code nicht direkt geändert werden kann, läuft das als enger, iterativer Dialog statt als
autonomer Durchlauf:

1. Ich schlage den nächsten Schritt als **Snippet** vor — an der vereinbarten Naht, test-first via
   `/tdd` wo sinnvoll.
2. Du übernimmst es (Apply-Button oder manuell) und lässt Typecheck/Test laufen (einzeln
   angestoßen — bestätigt möglich für Angular/npm **und** Java/Maven-Projekte).
3. Du gibst mir das Ergebnis zurück — rot oder grün.
4. Nächstes Snippet, bis das Ticket fertig ist.

Am Ende: einmal die volle Test-Suite laufen lassen, dann `/code-review` für den fertigen Diff.

**Committen bleibt bei dir.** Im Original committet der Agent selbst — das setzt voraus, dass er
den Arbeitsstand direkt kontrolliert. Da hier jede Änderung erst durch dich läuft (Review + Apply),
bist du auch diejenige Person, die den fertigen Stand committet, nachdem du ihn geprüft hast.

## Was sich gegenüber dem Original geändert hat

- Aus "Agent baut autonom durch, committet am Ende selbst" wird "Snippet vorschlagen → du wendest
  an → Test/Typecheck auf Zuruf → nächstes Snippet → du committest". Test-getrieben bleibt es in
  beiden Fällen.

---

---
name: improve-codebase-architecture
kategorie: Codebase-Health
aufruf: Nur manuell (/improve-codebase-architecture)
---

# improve-codebase-architecture — Deepening-Kandidaten finden

Architektur-Reibung aufdecken und **Deepening-Kandidaten** vorschlagen: Refactorings, die flache
Module in tiefe verwandeln. Ziel: Testbarkeit und Navigierbarkeit für Menschen und KI.

## Wann brauche ich das?

Wenn Luft ist, um die Codebase für zukünftige Änderungen und KI-Unterstützung gut zu halten — kein
Feature-Arbeit, sondern Pflege.

## Wie funktioniert das?

### 1. Erkunden

Vorher entscheiden, **wo** hingeschaut wird: wenn du einen Bereich nennst, nimm den. Sonst: über
`git log --oneline` die Hotspots der letzten Zeit finden (Git-Introspektion funktioniert direkt).
`CONTEXT.md` und relevante ADRs zuerst lesen.

**Kein Subagent nötig** — die Codebase-Exploration passiert direkt in diesem Chat, da voller
Codebase-Kontext ohnehin verfügbar ist (Auto-Indexing). Angewendet wird der **Löschtest**: würde das
Löschen eines vermeintlich flachen Moduls Komplexität konzentrieren (dann lohnt sich Deepening) oder
nur verschieben?

### 2. Kandidaten als HTML-Report vorschlagen

Der Report (Tailwind + Mermaid für Diagramme, editorial gestaltet) kommt als **HTML-Snippet**. Im
Original schreibt der Agent die Datei selbst in den Temp-Ordner und öffnet sie automatisch
(`xdg-open`) — das geht hier nicht (kein Dateisystem-Schreibzugriff, kein Shell-Open-Befehl).
**Du speicherst das Snippet selbst als `.html`-Datei und öffnest sie im Browser.**

Jede Karte: Dateien/Module, Problem, Lösung, Nutzen (Lokalität/Hebelwirkung), Vorher/Nachher-Diagramm,
Empfehlungsstärke (`Stark`, `Lohnt sich zu prüfen`, `Spekulativ`). Am Ende eine
Top-Empfehlung.

### 3. Grilling-Loop

Sobald du einen Kandidaten wählst, gemeinsam durchgrillen: Constraints, Abhängigkeiten, Form des
vertieften Moduls. `CONTEXT.md` wird dabei live als Snippet aktualisiert (siehe `domain-modeling`),
neue Begriffe werden ergänzt. Lehnst du einen Kandidaten mit tragendem Grund ab, biete ich ein ADR
an, damit zukünftige Reviews denselben Vorschlag nicht wiederholen.

## Was sich gegenüber dem Original geändert hat

- Kein Subagent für die Exploration — passiert direkt inline im selben Chat.
- Kein automatisches Schreiben + Öffnen des HTML-Reports — du speicherst und öffnest ihn selbst.

---

---
name: prototype
kategorie: Standalone
aufruf: Kann automatisch gewählt werden
---

# prototype — Eine Design-Frage mit Wegwerfcode beantworten

Ein Prototyp ist **Wegwerfcode, der eine Frage beantwortet**. Die Frage entscheidet die Form.

## Wann brauche ich das?

Wenn unklar ist, ob ein Zustandsmodell/eine Logik sich richtig anfühlt, oder wie eine UI aussehen
soll — und das schwer auf Papier zu klären ist.

## Wie funktioniert das?

Zwei Zweige, je nach Frage:

- **"Fühlt sich diese Logik/dieses Zustandsmodell richtig an?"** → eine einzelne, teilbare
  HTML-Datei (Freispiel-Buttons plus geführte Walkthroughs), die den Zustandsautomaten durch schwer
  auf Papier durchdenkbare Fälle treibt.
- **"Wie soll das aussehen?"** → mehrere UI-Varianten auf einer Route, umschaltbar über einen
  URL-Parameter.

## Regeln, die für beide gelten

1. **Von Anfang an klar als Wegwerf markiert.** Liegt nah am Modul/der Seite, die es prototypt.
2. **Trivial zu starten.** Ein UI-Prototyp läuft über einen Task-Runner-Befehl deines Projekts
   (`npm run <name>` bei Angular, ein einfacher Maven-Aufruf bei Java); eine Logik-Demo ist eine
   einzelne HTML-Datei zum Doppelklicken.
3. **Keine Persistenz standardmäßig.**
4. **Kein Feinschliff.** Keine Tests, keine Fehlerbehandlung über das Nötigste hinaus.
5. **Zustand sichtbar machen** nach jeder Aktion.
6. **Nach der Klärung einfangen**: die validierte Entscheidung fließt in den echten Code, der
   Prototyp selbst wird als Referenz behalten (z.B. in einem eigenen Ordner mit klarem
   "PROTOTYP"-Namen im Repo) statt gelöscht zu werden.

Der Prototyp-Code selbst kommt als **Snippet**, das du speicherst und selbst ausführst — wie jeder
andere Code-Vorschlag auch.

## Was sich gegenüber dem Original geändert hat

- Keine autonome Dateierzeugung/-ausführung — du speicherst die eine Datei und startest sie selbst.
- Statt eines Commits auf einen eigenen `prototype/<name>`-Branch: ablegen, wo es bei euch für
  Referenzcode üblich ist (z.B. ein `prototype/`-Unterordner im Feature-Branch).

---

---
name: research
kategorie: Standalone
aufruf: Kann automatisch gewählt werden
---

# research — Gegen Primärquellen recherchieren

Eine Frage gegen hochwertige Primärquellen untersuchen (offizielle Docs, Quellcode, Specs,
First-Party-APIs) und das Ergebnis zitiert als Markdown-Datei festhalten.

## Wann brauche ich das?

Wenn eine Frage aktuelle, verlässliche Fakten braucht, die nicht zuverlässig aus dem
Projekt-Kontext oder Trainingswissen hervorgehen — z.B. Framework-Versionen, API-Details,
Breaking Changes, Release Notes.

## Wie funktioniert das?

Internetzugriff für genau solche Recherchen ist bestätigt verfügbar (offizielle Dokumentationen,
API-Referenzen, GitHub-Repos, Changelogs, Specs, aktuelle Best Practices). Anders als im Original
läuft das **synchron in diesem Chat**, nicht als Hintergrund-Agent, der parallel weiterliest,
während du weiterarbeitest — du bekommst das Ergebnis direkt in der Antwort.

1. Die Frage gegen Primärquellen untersuchen, jede Aussage bis zur Quelle zurückverfolgen, die sie
   trägt.
2. Das Ergebnis als **ein** Markdown-Dokument formulieren, jede Aussage mit Quelle.
3. Das Dokument kommt als Snippet — du speicherst es dort im Repo, wo Notizen dieser Art
   üblicherweise liegen (oder an einer sinnvollen neuen Stelle, wenn es noch keine Konvention gibt).

## Was sich gegenüber dem Original geändert hat

- Kein Hintergrund-Agent — die Recherche läuft synchron, du wartest auf das Ergebnis statt
  währenddessen weiterzuarbeiten. Inhaltlich identisch (Primärquellen, zitiert, als Markdown).

---

---
name: resolving-merge-conflicts
kategorie: Standalone
aufruf: Kann automatisch gewählt werden
---

# resolving-merge-conflicts — Einen laufenden Merge-Konflikt auflösen

## Wann brauche ich das?

Wenn ein Merge oder Rebase mit Konflikten steckengeblieben ist.

## Wie funktioniert das?

1. **Aktuellen Zustand sehen**: Git-Historie und die konfliktbehafteten Dateien — direkt über die
   verfügbare Git-Introspektion (`log`, `diff`, `status`) abrufbar.
2. **Primärquellen für jeden Konflikt finden**: warum wurde jede Seite geändert? Commit-Nachrichten,
   PRs, ursprüngliche Tickets lesen, um die Absicht zu verstehen.
3. **Jeden Hunk auflösen** — beide Absichten erhalten, wo möglich; wo unvereinbar, die dem
   Merge-Ziel entsprechende wählen und den Trade-off benennen. Nie neues Verhalten erfinden, nie
   `--abort`. Die Auflösung kommt als **Snippet**, das du im IDE-Merge-Tool in die konfliktbehaftete
   Datei einfügst — direkte Dateiänderung ist hier nicht möglich.
4. **Automatisierte Checks laufen lassen** (Typecheck, dann Tests, dann Format) — auf Zuruf einzeln
   angestoßen, nicht autonom verkettet. Alles reparieren, was der Merge kaputt gemacht hat.
5. **Merge/Rebase abschließen**: Staging, Commit, bei Rebase Fortsetzung bis alle Commits
   durchgerebast sind. **Das bleibt bei dir** — Stage/Commit/Rebase-Fortsetzung sind schreibende
   Git-Operationen, die außerhalb der Snippet-und-Apply-Logik liegen.

## Was sich gegenüber dem Original geändert hat

- Die Hunk-Auflösung kommt als Snippet statt als direkte Dateiänderung.
- Stage/Commit/Rebase-Fortsetzung führst du selbst aus, nachdem die Checks grün sind.
- Reasoning (primäre Quellen, Auflösung nach Absicht statt nach Zeilen) bleibt vollständig gleich.

---

---
name: tdd
kategorie: Hauptfluss
aufruf: Kann automatisch gewählt werden
---

# tdd — Test-Driven Development

Der Rot→Grün-Loop. Diese Referenz sorgt dafür, dass dabei Tests entstehen, die sich lohnen:
was ein guter Test ist, wo Tests hingehören, welche Anti-Patterns zu vermeiden sind.

## Wann brauche ich das?

Wenn ein Feature oder ein Bugfix test-first entstehen soll.

## Was ein guter Test ist

Tests verifizieren Verhalten über öffentliche Schnittstellen, nicht Implementierungsdetails. Ein
guter Test liest sich wie eine Spezifikation und übersteht Refactorings, weil er sich nicht für
interne Struktur interessiert.

## Nähte: wo Tests hingehören

Eine **Naht** ist die öffentliche Grenze, an der getestet wird. **Nur an vorher vereinbarten Nähten
testen** — vor dem ersten Test die Nähte festlegen und mit dir abstimmen: "Was ist die öffentliche
Schnittstelle, und welche Nähte sollten wir testen?"

## Anti-Patterns

- **Implementierungsgekoppelt**: mockt interne Kollaborateure, testet private Methoden.
- **Tautologisch**: die Assertion berechnet den Erwartungswert genauso wie der Code selbst.
- **Horizontales Schneiden**: erst alle Tests, dann alle Implementierung. Stattdessen **vertikale
  Slices**: ein Test → eine Implementierung → wiederholen.

## Regeln des Loops

- **Rot vor Grün.** Erst den fehlschlagenden Test schreiben, dann nur so viel Code wie nötig.
- **Eine Naht, ein Test, eine minimale Implementierung pro Runde.**
- **Refactoring gehört nicht zum Loop** — das ist Aufgabe von `code-review`.

Testläufe (rot bestätigen, grün bestätigen) sind bei uns direkt möglich, sowohl bei Angular/npm-
als auch bei Java/Maven-Projekten — auf Zuruf einzeln angestoßen, der Loop läuft also nicht
autonom durch, sondern Runde für Runde mit dir als Ausführendem dazwischen.

## Was sich gegenüber dem Original geändert hat

- Fast nichts inhaltlich — der einzige Unterschied ist, dass der Testlauf zwischen den Runden
  jeweils von dir angestoßen wird, statt dass ich ihn selbst autonom auslöse.

---

---
name: to-spec
kategorie: Hauptfluss
aufruf: Nur manuell (/to-spec)
---

# to-spec — Das Gespräch zur Spec verdichten

Verdichtet das aktuelle Gespräch und das Codebase-Verständnis zu einer Spec. **Kein neues
Interview** — reine Synthese dessen, was schon besprochen wurde.

## Wann brauche ich das?

Nachdem eine Idee in `grill-with-docs` ausreichend geschärft wurde und mehrere Sitzungen für die
Umsetzung nötig sind.

## Wie funktioniert das?

1. Codebase verstehen (falls noch nicht geschehen), Domain-Vokabular und ADRs berücksichtigen.
2. Die Testnähte skizzieren — möglichst wenige, möglichst hoch im Stack, im Idealfall genau eine.
   Mit dir abstimmen, ob das passt.
3. Die Spec nach dem Template unten schreiben.

**Kein Auto-Publish.** Im Original wird die Spec automatisch auf den Issue-Tracker publiziert und
mit einem Label versehen — das geht ohne Jira-Anbindung nicht. **Die Spec kommt stattdessen als
fertiger Markdown-Block, den du selbst in Jira einfügst.**

```markdown
## Problemstellung

Das Problem aus Sicht des Nutzers.

## Lösung

Die Lösung aus Sicht des Nutzers.

## User Stories

Eine LANGE, nummerierte Liste: "Als \<Rolle\>, möchte ich \<Fähigkeit\>, damit \<Nutzen\>."

## Umsetzungsentscheidungen

Betroffene Module, geänderte Schnittstellen, technische Klärungen, Architekturentscheidungen,
Schema-Änderungen, API-Verträge. Keine konkreten Dateipfade oder Code — die veralten schnell.
Ausnahme: ein Prototyp-Snippet, das eine Entscheidung präziser kodiert als Prosa.

## Test-Entscheidungen

Was einen guten Test ausmacht, welche Module getestet werden, Vorbilder im Code.

## Außerhalb des Scopes

## Weitere Notizen
```

## Was sich gegenüber dem Original geändert hat

- Kein automatisches Publizieren + Labeln auf dem Tracker — die fertige Spec kommt als Text zum
  manuellen Einfügen in Jira.

---

---
name: to-tickets
kategorie: Hauptfluss
aufruf: Nur manuell (/to-tickets)
---

# to-tickets — In Tracer-Bullet-Tickets zerlegen

Zerlegt einen Plan, eine Spec oder ein Gespräch in **Tickets**: vertikale Slices, jedes mit seinen
**Blocking-Kanten** (welche Tickets vorher fertig sein müssen).

## Wann brauche ich das?

Nach `to-spec`, um die Spec in greifbare, einzeln umsetzbare Tickets zu zerlegen.

## Wie funktioniert das?

### 1. Kontext sammeln

Aus dem Gespräch heraus arbeiten, ggf. eine übergebene Spec/ein Ticket vollständig lesen.

### 2. Codebase erkunden (optional)

Ticket-Titel und -Beschreibungen im Domain-Vokabular. Nach Prefaktorisierung suchen: "Mach die
Änderung leicht, dann mach die leichte Änderung."

### 3. Vertikale Slices entwerfen

Jeder Slice schneidet einen schmalen, aber vollständigen Pfad durch alle Schichten (Schema, API,
UI, Tests) — demonstrierbar oder verifizierbar für sich allein, passt in ein einzelnes frisches
Kontextfenster.

**Ausnahme — breiter Umbau**: ein mechanischer Umbau mit großem Blast-Radius (Spalte umbenennen,
gemeinsam genutzten Typ umtypisieren) wird nicht in vertikale Slices gezwungen, sondern als
**Expand–Contract** sequenziert: erst die neue Form daneben einführen, dann Aufrufer batchweise
migrieren (grün bleibt CI dabei), zuletzt die alte Form löschen.

### 4. Mit dir abstimmen

Vorschlag als nummerierte Liste: Titel, Blockiert-durch, was das Ticket liefert. Fragen: Stimmt die
Granularität? Sind die Blocking-Kanten korrekt? Iterieren, bis du zustimmst.

### 5. Tickets manuell nach Jira übertragen

**Kein automatisches Anlegen** — du überträgst jeden Ticket-Text selbst in Jira und verknüpfst die
Blocking-Kanten dort manuell (Jira unterstützt "blocked by"-Links, nur eben nicht automatisiert
durch die KI).

```markdown
# <Titel>

**Was zu bauen ist:** das Ende-zu-Ende-Verhalten aus Nutzersicht, keine Schicht-für-Schicht-Liste.

**Blockiert durch:** die Nummern/Titel der Tickets, die dieses hier voraussetzen, oder "Keine
(kann sofort starten)".

- [ ] Akzeptanzkriterium 1
- [ ] Akzeptanzkriterium 2
```

## Was sich gegenüber dem Original geändert hat

- Kein automatisches Anlegen pro Ticket auf dem Tracker — Ticket-Texte inkl. Blocking-Hinweisen
  kommen zum manuellen Übertragen und Verknüpfen in Jira.

---

---
name: wayfinder
kategorie: On-Ramp
aufruf: Nur manuell (/wayfinder)
---

# wayfinder — Ein riesiges, neblig es Vorhaben kartieren

Für ein großes, unklares Vorhaben, das größer als eine Sitzung ist und im Nebel liegt: statt
loszubauen, kartiert dieser Skill eine gemeinsame **Landkarte** aus **Entscheidungs-Tickets**
(Fragen, deren Auflösung eine Entscheidung ist, keine Bau-Slices) und arbeitet sie eine nach der
anderen ab, bis der Weg klar ist.

## Wann brauche ich das?

Ein Greenfield-Projekt oder ein Mega-Feature, dessen Weg von hier zum Ziel noch nicht sichtbar ist
— **nicht** für ein gut umrissenes Feature (dafür reicht `grill-with-docs`).

## Planen, nicht Tun

Jedes Ticket löst eine Entscheidung; die Karte ist fertig, wenn der Weg klar ist und nichts mehr zu
entscheiden bleibt, bevor jemand losbaut. Standardmäßig entstehen **Entscheidungen, keine
Deliverables**.

## Die Karte — angepasst: ein Dokument, das du pflegst

Im Original ist die Karte ein Issue auf dem Tracker mit nativen Kind-Ticket-/Blocking-Beziehungen.
**Ohne Jira-Anbindung wird die Karte stattdessen ein Markdown-Dokument**, das du selbst pflegst
(z.B. `.scratch/wayfinder/<vorhaben>.md` im Repo, oder eine Confluence-Seite) — nach jeder
aufgelösten Frage schlage ich den aktualisierten Abschnitt als Snippet vor, du fügst ihn ein. Genau
dasselbe Copy-Paste-Muster wie bei `to-spec`/`to-tickets`.

```markdown
## Ziel

<wie sieht das Ende dieser Landkarte aus: die Spec, Entscheidung oder Änderung, zu der dieses
Vorhaben den Weg findet. Ein bis zwei Zeilen.>

## Notizen

<Domain, Skills, die jede Sitzung heranziehen sollte; Standing-Preferences>

## Bisherige Entscheidungen

- <Titel der geklärten Frage>: <ein-Zeilen-Gist der Antwort>

## Noch nicht spezifiziert

<Nebel: Fragen, die absehbar kommen, aber noch nicht scharf genug sind, um ein Ticket zu werden>

## Außerhalb des Scopes

<bewusst ausgeschlossene Arbeit>
```

Tickets (einzelne Fragen) können optional als echte Jira-Issues angelegt werden, wenn Sichtbarkeit
fürs Team wichtig ist — dann trägst du sie manuell ein und verknüpfst Blocking-Kanten selbst. Für
eine reine Solo-Planung reicht das Dokument allein.

## Ticket-Typen

- **Recherche**: eine Faktenfrage, die eine Entscheidung braucht — läuft über `research`, **seriell
  im selben Chat statt parallel über Subagenten**.
- **Prototyp**: die Diskussion mit einem billigen, konkreten Artefakt anheben — läuft über
  `prototype`.
- **Grillen**: der Normalfall — ein Gespräch, läuft über das Interview-Prinzip aus
  `grill-with-docs`.
- **Aufgabe**: manuelle Arbeit, die vor einer Entscheidung erledigt sein muss (Zugang beantragen,
  Daten verschieben) — nichts zu entscheiden, aber blockierend.

## Was entfällt: Claiming

Im Original weist eine Sitzung sich selbst ein Ticket zu, damit parallele Sitzungen es überspringen
— das löst ein Problem, das nur bei **mehreren gleichzeitig laufenden Agenten-Sessions** entsteht.
Ohne Agenten gibt es bei uns keine Nebenläufigkeit zu koordinieren: du arbeitest ohnehin ein Ticket
nach dem anderen, in genau einer Sitzung. Der Abschnitt fällt ersatzlos weg — das ist eine
Vereinfachung, keine Lücke.

## Nebel des Krieges

Die Karte ist bewusst unvollständig: nicht kartieren, was man noch nicht sehen kann. Jenseits der
aktuellen Tickets liegt der **Nebel** — Fragen, die absehbar kommen, aber noch nicht scharf genug
sind. **Ticket oder Nebel?** Der Test ist, ob sich die Frage *jetzt schon präzise formulieren*
lässt, nicht ob sie *jetzt schon beantwortbar* ist.

## Ablauf

**Karte anlegen** (einmalig, User startet mit einer losen Idee):

1. **Ziel benennen** — grillen, um festzulegen, worauf diese Karte zusteuert.
2. **Nebel breitensuchend kartieren** — nochmal grillen, diesmal in die Breite: was ist offen,
   was ist jetzt schon startbar. Ergibt sich dabei kein Nebel (der Weg ist schon klar genug für eine
   Sitzung), braucht es keine Karte.
3. **Dokument anlegen**: Ziel und Notizen ausgefüllt, bisherige Entscheidungen leer, der Nebel unter
   "Noch nicht spezifiziert".
4. Die Tickets, die sich schon spezifizieren lassen, als Abschnitt/Liste anlegen.

**Karte abarbeiten** (User startet mit einer bestehenden Karte, ein Ticket ist optional — ohne
gewähltes Ticket wählst du selbst die nächste Frage aus der Karte):

1. Karte laden (die Kurzfassung, nicht jedes Detail).
2. Ticket wählen.
3. Auflösen — bei Bedarf grillen und domain-modeling aufrufen.
4. Auflösung als Ergänzung zu "Bisherige Entscheidungen" vorschlagen, du fügst sie ins Dokument ein.
5. Neu sichtbar gewordene Tickets ergänzen; Nebel, der jetzt spezifizierbar ist, aus "Noch nicht
   spezifiziert" herauslösen.

## Was sich gegenüber dem Original geändert hat

- Die Karte ist ein von dir gepflegtes Markdown-Dokument statt eines lebenden Tracker-Issues mit
  nativen Blocking-Links.
- Der Claiming-Mechanismus für parallele Sessions entfällt ersatzlos — das Problem, das er löst,
  existiert ohne Agenten nicht.
- Recherche-Tickets laufen seriell im selben Chat statt parallel über Subagenten.
- Die eigentliche Planungsdisziplin (Ziel zuerst, breitensuchend, Ticket-Typen,
  Nebel-vs-Scope-Trennung, ein Ticket pro Sitzung) bleibt vollständig erhalten.

---

---
name: wizard
kategorie: Standalone
aufruf: Kann automatisch gewählt werden
---

# wizard — Ein Skript für Schritte, die nur ein Mensch tun kann

Ein **Wizard** ist ein Bash-Skript, das einen Menschen Schritt für Schritt durch eine manuelle
Prozedur führt, die mühsam per Hand zu tun und mühsam jedes Mal neu einer KI zu erklären ist. Es
öffnet URLs, sagt genau, was zu klicken und zu kopieren ist, erfasst Werte, schreibt sie dorthin,
wo sie hingehören (`.env`, CI-Secrets), bestätigt bei jedem Schritt.

## Wann brauche ich das?

Infrastruktur bereitstellen, Zugänge/Zertifikate einrichten, ein unbekanntes Drittanbieter-Dashboard
durchklicken, eine einmalige Migration oder Umstellung fahren. **Nicht** für Schritte, die die KI
selbst erledigen könnte.

## Wie funktioniert das?

Dieser Skill wurde nie als autonome Agenten-Ausführung gedacht — das Skript ist für **dich**, um es
selbst auszuführen. Passt damit unverändert in unser Setup.

### 1. Prozedur abstecken

Jeden manuellen Schritt und jeden dabei erfassten Wert ermitteln — Repo zuerst lesen (`.env`,
`.env.example`, README, `.github/workflows/*` für jede `secrets.*`-Referenz), dann die geordnete
Stufenliste mit dir abstimmen.

### 2. Jede Stufe im Detail beschreiben

Für jede Stufe: genauer Pfad ("Dashboard → Developers → API keys → Reveal test key → kopieren").
Wo die genaue UI unbekannt ist: das offen sagen und nachfragen, nie einen Schritt erfinden, der
vielleicht nicht existiert.

### 3. Das Skript schreiben

Auf Basis der vorgegebenen Bibliothek (Stage-Fortschritt, Bestätigungs-Gates, plattformübergreifendes
URL-Öffnen, verstecktes Secret-Eingeben, idempotente `.env`-Updates, abschließende Zusammenfassung).
Deine Aufgabe ist nur, die Prozedur abzustecken und die Stufen zu verfassen — die Bibliothek selbst
nicht von Hand anfassen.

### 4. Prüfen und übergeben

Syntax-Check, ausführbar machen, **nicht selbst durchlaufen** (öffnet Browser, blockiert auf
menschliche Eingabe) — stattdessen statisch nachvollziehen: jeder Wert landet dort, wo er soll.

## Was sich gegenüber dem Original geändert hat

Inhaltlich nichts — dieser Skill war von Anfang an für menschliche Ausführung gedacht, nicht für
einen autonomen Agenten. Nur ins Deutsche übertragen.

---
