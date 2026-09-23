# Fit-Analyse: Engineering-Skills im Atruvia-Setup

Challenge aller 18 Engineering-Skills aus `engineering/` gegen die konkrete Werkzeug-Realität bei
Atruvia — Stand dieser Analyse. Kein Skill wurde hier bereits angepasst; das ist eine Bewertung als
Grundlage für eine spätere Entscheidung, was und wie angepasst wird.

**Update:** `triage` und `setup-matt-pocock-skills` wurden aus `engineering/` entfernt (Begründung
unten unter "Entfernt"). `wizard` bleibt trotz "🔴 Entfernen"-naher Prüfung drin — es gab noch keinen
konkreten Gegenbeispiel-Usecase, der dagegen sprach, und die Fit-Bewertung war ohnehin "passt
unverändert". `wayfinder` wurde auf Wunsch erneut analysiert: siehe "Wayfinder — zweiter Blick"
unten. Verdikt geändert von "Entfernen" zu "Passt mit Anpassung".

## Umgebung, gegen die geprüft wurde

IntelliJ AI Chat (ChatGPT 5.5/5.6), zwei Projektarten (Angular/npm und Java/Spring mit Maven):

| Fähigkeit | Verfügbar? |
|---|---|
| Ganze Codebase lesen (Auto-Indexing + `@`-Referenzen) | ✅ Ja |
| Git-Introspektion (`log`, `diff`, `status`) | ✅ Ja, read-only |
| Prozesse ausführen (Tests, Build, Typecheck, Lint) | ✅ Ja — aber **einzeln, von dir angestoßen**, kein autonomer Multi-Schritt-Loop |
| Internetzugriff (Docs, APIs, GitHub, Changelogs, Specs) | ✅ Ja, bei Bedarf |
| Code direkt ändern | ❌ Nein — nur Snippet, das du per **Apply** oder manuell übernimmst |
| Agenten / Subagenten / Hintergrundprozesse / Parallelität | ❌ Nein |
| Jira-Anbindung (lesen oder schreiben) | ❌ Nein — komplett manuell |

Zwei Einschränkungen tragen praktisch jede Anpassung unten:

1. **"Keine Agenten"** heißt konkret: jeder einzelne Schritt (ein Testlauf, ein Snippet anwenden)
   ist möglich, aber **die Verkettung vieler Schritte ohne Zwischenschau** (ein Bug-Diagnose-Loop,
   der sich selbst 20 Runden lang instrumentiert, oder `git bisect run` über 50 Commits automatisch)
   ist es nicht — auch wenn einzelne Bausteine technisch ausführbar wären.
2. **"Keine Jira-Anbindung"** trifft *fünf* Skills gleichzeitig (`to-spec`, `to-tickets`, `triage`,
   `wayfinder`, `setup-matt-pocock-skills`), weil sie alle auf demselben Baustein aufbauen: der Agent
   spricht selbst mit dem Issue-Tracker (Ticket anlegen, Label setzen, native Blocking-Links). Das
   fällt bei allen fünfen gleich weg — eine gemeinsame Ursache, kein Zufall. Wichtig für die
   Bewertung: **"kein Tracker-Schreibzugriff" heißt nicht automatisch "Skill kaputt"** — bei
   `to-spec`/`to-tickets` bleibt die eigentliche Textarbeit vollständig erhalten, nur das
   automatische Publizieren fällt weg. Erst wenn ein Skill *zusätzlich* auf Multi-Session-Nebenläufigkeit
   oder Subagenten angewiesen ist (wie ursprünglich bei `wayfinder` vermutet), wird es kritisch — siehe
   unten, warum das bei `wayfinder` bei genauerem Hinsehen doch nicht zutrifft.

## Verdikt-Matrix

| Skill | Verdikt | Kernproblem |
|---|---|---|
| `codebase-design` | ✅ Passt unverändert | Reine Vokabular-Referenz, keine Ausführung nötig |
| `wizard` | ✅ Passt unverändert | War immer schon "Skript für einen Menschen", nie Agent-Ausführung |
| `ask-matt` | ✅ Passt, kleine Retusche | Verweist auf Subagenten/`/compact`, die es hier nicht gibt |
| `domain-modeling` | ✅ Passt, kleine Retusche | "Inline aktualisieren" wird zu "Snippet vorschlagen, du übernimmst" |
| `grill-with-docs` | ✅ Passt, kleine Retusche | Ruft nur `grilling` + `domain-modeling`, beide kompatibel |
| `tdd` | ✅ Passt, kleine Retusche | Testläufe sind möglich — nur nicht autonom verkettet |
| `prototype` | ✅ Passt, kleine Retusche | Snippet + manuelles Speichern/Ausführen statt autonomer Dateierzeugung |
| `code-review` | 🟡 Passt mit Anpassung | "Parallele Subagenten" → sequenziell im selben Chat |
| `implement` | 🟡 Passt mit Anpassung | "Committet selbst" → du committest, nach jedem Apply |
| `diagnosing-bugs` | 🟡 Passt mit Anpassung | Automatisierte Loops (Bisection, Fuzzing) → Einzelschritte, von dir ausgelöst |
| `resolving-merge-conflicts` | 🟡 Passt mit Anpassung | Hunk-Resolution als Snippet, Commit/Rebase-Fortsetzung bleibt bei dir |
| `research` | 🟡 Passt mit Anpassung | "Hintergrund-Agent" → synchrone Recherche im selben Chat |
| `improve-codebase-architecture` | 🟡 Passt mit Anpassung | Kein Subagent-Scan, keine automatische Datei-Erzeugung + `xdg-open` |
| `to-spec` | 🟡 Passt mit Anpassung | Kein Auto-Publish/Label → Text zum manuellen Einfügen in Jira |
| `to-tickets` | 🟡 Passt mit Anpassung | Gleiches Problem — Ticket-Texte + Blocking-Notizen zum manuellen Übertragen |
| `wayfinder` | 🟡 Passt mit Anpassung *(geändert, siehe unten)* | Karte wird ein von dir gepflegtes Dokument statt eines Tracker-Issues; Claiming entfällt ersatzlos (keine Nebenläufigkeit vorhanden) |
| `triage` | ❌ Entfernt | Automatisierung über den ganzen Backlog entfällt komplett — kein sinnvoller Rest als eigener Skill |
| `setup-matt-pocock-skills` | ❌ Entfernt | Konfiguriert fast nur CLI-Tracker-Automatisierung, die es hier nicht gibt |

## Details

### ✅ Passen unverändert oder mit kosmetischer Retusche

**`codebase-design`** — reine Begriffs-/Prinzipien-Referenz (Modul, Interface, Tiefe, Naht …), keine
Zeile davon setzt Ausführung oder Dateizugriff voraus. Passt 1:1.

**`wizard`** — generiert ein Bash-Skript, das ein **Mensch** ausführt (Infrastruktur, Secrets,
Migrationen). War nie als Agenten-Ausführung gedacht — das Modell liefert das Skript als Snippet,
du führst es lokal aus. Bestmöglicher Fit im ganzen Set.

**`ask-matt`** — der Router-Text selbst ist reine Orientierung. Muss nur an zwei Stellen retuschiert
werden: die "Phase Boundaries"-Optionen "Subagent" und teilweise "`/compact`" existieren so nicht;
die Downstream-Verweise auf `to-spec`/`to-tickets`/`triage`/`wayfinder` müssen auf deren
"passt mit Anpassung/entfernen"-Realität verweisen, sonst verspricht der Router mehr, als die
Ziel-Skills halten.

**`domain-modeling`** — "Update CONTEXT.md inline" wird zu "schlage die CONTEXT.md-Änderung als
Snippet vor, du übernimmst sie per Apply". Die eigentliche Disziplin (Begriffe schärfen,
Widersprüche zum Code aufzeigen, ADR nur bei den drei harten Kriterien) bleibt exakt gleich.

**`grill-with-docs`** — ruft nur `grilling` (reines Interview, 100% Chat) und `domain-modeling`
(oben: passt) auf. Erbt keine neuen Probleme.

**`tdd`** — der Rot-Grün-Loop selbst braucht einen echten Testlauf — den habt ihr (bestätigt: `npm
run test` lief bereits). Einzige Anpassung: der Loop läuft nicht autonom durch, sondern
Schritt-für-Schritt mit dir als Ausführendem zwischen den Runden.

**`prototype`** — der Prototyp-Code selbst ist ein Snippet wie jedes andere; "trivial auszuführen"
bedeutet hier "du speicherst die eine Datei und startest sie selbst", nicht "der Agent erzeugt und
startet sie autonom".

### 🟡 Passen mit spürbarer, aber machbarer Anpassung

**`code-review`** — `git diff`/`git log` sind verfügbar (bestätigt), die Fowler-Smell-Baseline und
die Standards/Spec-Trennung sind reine Textarbeit. Einzige echte Änderung: **"parallele
Subagenten"** gibt es nicht — die zwei Achsen laufen sequenziell im selben Chat (erst Standards,
dann Spec, oder umgekehrt), was etwas mehr Zeit kostet, aber inhaltlich identisch bleibt. Die
"Spec-Quelle über Issue-Tracker holen" fällt weg (keine Jira-Anbindung) → du fügst den
Spec-/Ticket-Text manuell ein.

**`implement`** — Testläufe und Typecheck sind möglich (einzeln angestoßen). Was nicht geht: der
Agent "committet selbst". Wird zu: Snippet vorschlagen → du wendest an → Test/Typecheck läuft
(von dir oder auf Zuruf einzeln ausgelöst) → nächstes Snippet → am Ende committest **du**. Aus dem
"Agent baut autonom durch" wird ein enger, aber weiterhin test-getriebener Dialog.

**`diagnosing-bugs`** — die Kern-Disziplin (Phase 1: erst eine scharfe Rot/Grün-Schleife bauen,
dann minimieren, dann hypothesieren, dann instrumentieren) bleibt komplett gültig und ist die
wertvollste Idee im ganzen Skill-Set. Was **nicht** geht: die vollautomatisierten Varianten davon —
`git bisect run` über viele Commits unbeaufsichtigt, ein Property/Fuzz-Loop mit 1000 Durchläufen,
Debugger-Fernsteuerung. Diese werden zu von dir Schritt für Schritt ausgeführten Iterationen statt
einem unbeaufsichtigten Loop. Der Kern der Disziplin übersteht die Anpassung fast unbeschädigt.

**`resolving-merge-conflicts`** — "primäre Quellen finden, nach Intent statt Zeilen auflösen" ist
reines Lesen + Reasoning (Git-Introspektion verfügbar). Die Hunk-Auflösung kommt als Snippet, das du
im IDE-Merge-Tool einfügst; Checks laufen auf Zuruf; **Stage/Commit/Rebase-Fortsetzung bleiben bei
dir**, weil das schreibende Git-Operationen sind, die nicht in der "Snippet + Apply"-Logik
mitlaufen.

**`research`** — der "Hintergrund-Agent, der parallel weiterliest, während du weiterarbeitest"
funktioniert nicht (keine Agenten). Aber die eigentliche Recherche-Fähigkeit (Primärquellen im Netz,
zitiert, als Markdown-Datei) ist genau bestätigt vorhanden. Wird zu: synchrone Recherche-Anfrage im
selben Chat, du bekommst das zitierte Ergebnis direkt, statt weiterzuarbeiten während es im
Hintergrund läuft.

**`improve-codebase-architecture`** — "Subagent läuft die Codebase ab" entfällt (kein Subagent
nötig, der Chat hat ohnehin vollen Codebase-Kontext, macht den Explore-Schritt einfach selbst
inline). "Schreibt HTML-Report in den Temp-Ordner und öffnet ihn automatisch" entfällt (kein
Dateisystem-Schreibzugriff, kein `xdg-open`) → der Report kommt als HTML-Snippet, du speicherst und
öffnest ihn selbst. Grilling-Loop danach ist unverändert nutzbar.

**`to-spec`** — Spec-Synthese aus dem Gespräch ist reine Textarbeit. "Auf den Tracker publizieren,
Label setzen" entfällt komplett → die Spec kommt als fertiger Markdown-Block, den du selbst in Jira
einfügst.

**`to-tickets`** — gleiches Muster: Zerlegung in Tracer-Bullet-Tickets mit Blocking-Kanten ist reine
Textarbeit, "pro Ticket ein Issue anlegen" entfällt → Ticket-Texte inkl. "Blocked by"-Hinweisen zum
manuellen Übertragen und Verknüpfen in Jira.

### Wayfinder — zweiter Blick

Ursprünglich als "Entfernen" eingestuft, mit der Begründung: die Landkarte sei ein Tracker-Issue mit
nativen Blocking-Links, das Claiming brauche Multi-Session-Nebenläufigkeit, Research-Tickets liefen
über Subagenten — alle drei fehlen. Bei genauerem Hinsehen tragen zwei dieser drei Gründe nicht:

1. **Die Landkarte muss kein Tracker-Issue sein.** Die Struktur (`Destination`, `Notes`,
   `Decisions so far`, `Not yet specified`, `Out of scope`) ist reiner Text — genau dieselbe Art
   Dokument, die `to-spec` schon als Snippet zum manuellen Einfügen produziert. Statt eines
   lebenden Jira-Issues wird die Karte ein **Markdown-Dokument, das du selbst pflegst** (z.B. unter
   `.scratch/wayfinder/<effort>.md` im Repo, oder eine Confluence-Seite) — der Chat schlägt nach
   jeder Ticket-Auflösung den aktualisierten Abschnitt als Snippet vor, du fügst ihn ein. Das ist
   exakt dasselbe Copy-Paste-Muster wie bei `to-spec`/`to-tickets`, kein neues Problem.

2. **Das Claiming-Problem existiert bei euch gar nicht.** Die Zuweisungs-Mechanik ("assign dich
   selbst, damit parallele Sessions das Ticket überspringen") löst ein Problem, das nur bei
   **mehreren gleichzeitig laufenden Agenten-Sessions** entsteht. Ohne Agenten gibt es bei Atruvia
   keine Nebenläufigkeit zu koordinieren — du arbeitest ohnehin ein Ticket nach dem anderen, in
   genau einer Chat-Session. Der Abschnitt fällt ersatzlos weg, weil das Problem, das er löst, in
   eurem Setup nicht vorkommt — das ist eine Vereinfachung, keine Lücke.

3. **Was tatsächlich wegfällt:** Research-Tickets werden nicht parallel von Subagenten aufgelöst,
   sondern seriell, eine Recherche-Anfrage nach der anderen, im selben Chat (wie beim angepassten
   `research`-Skill oben). Das kostet Zeit bei mehreren offenen Research-Tickets, ändert aber nichts
   Strukturelles. Tickets als echte Jira-Issues anzulegen (für Sichtbarkeit im Team) bleibt optional
   und manuell — für eine reine Solo-Planungssitzung reicht das Markdown-Dokument allein.

**Was den Skill von einer langen `grilling`-Sitzung unterscheidet** (mein ursprüngliches Gegenargument)
und auch ohne Tracker-Automatisierung erhalten bleibt: die **Destination zuerst benennen** (Scope vor
allem anderen fixieren), **breitensuchend** statt tiefensuchend über den ganzen Nebel fächern, die
**Ticket-Typen** (Research/Prototype/Grilling/Task), die explizite Trennung **Fog of War vs. Out of
Scope**, und die Disziplin **ein Ticket pro Sitzung**. Das ist eine echte Planungsstruktur, die
plain `grilling` nicht hat — und die trägt vollständig über viele Chat-Sessions hinweg, solange *du*
das Markdown-Dokument zwischen den Sessions am Leben hältst.

**Verdikt geändert: 🟡 Passt mit Anpassung.** Anpassung: Karte = von dir gepflegtes Markdown/Confluence-
Dokument statt Tracker-Issue; Claiming-Abschnitt streichen; Research-Tickets seriell statt parallel;
Ticket-Erstellung in Jira bleibt optional und manuell, mit Blocking-Notizen im Text wie bei
`to-tickets`.

### ❌ Entfernt

**`triage`** — der eigentliche Witz des Skills ist die **Automatisierung über den ganzen Backlog**:
Buckets abfragen (unlabeled / needs-triage / needs-info-mit-Antwort), Label setzen, Kommentare
posten, Issues schließen — alles Tracker-Schreibzugriff, den es nicht gibt. Der Rest wäre nur noch
"du fügst ein einzelnes Jira-Ticket manuell ein, der Chat gibt eine Einschätzung" — kein eigener
Workflow mehr, sondern ein Prompt-Schnipsel. Auf deine Bestätigung hin entfernt.

**`setup-matt-pocock-skills`** — fast der komplette Inhalt ist Konfiguration für CLI-basierte
Tracker (`gh`/`glab`) plus native Label-/Blocking-Automatisierung. Keine der drei eingebauten
Optionen (GitHub, GitLab, lokale Markdown-Dateien) bildet "Jira, komplett manuell" ab. Auf deine
Bestätigung hin entfernt.

## Offene Fragen für die nächste Runde

1. Für die verbleibenden tracker-betroffenen Skills (`to-spec`, `to-tickets`, `wayfinder`): lohnt
   sich eine **gemeinsame** "Jira-manuell"-Konvention (ein Format für Spec-/Ticket-/Karten-Texte
   zum Copy-Paste), statt jeden Skill einzeln zu flicken?
2. Reihenfolge der tatsächlichen Anpassung: welche Skills zuerst umschreiben?
3. `setup-matt-pocock-skills` ist komplett entfernt — soll der kleine Rest, der sinnvoll war (wo
   liegt `CONTEXT.md`, wo liegen ADRs, einmalig pro Repo), als eigenständiger Mini-Skill neu
   entstehen, oder reicht die Erwähnung in `domain-modeling`?
