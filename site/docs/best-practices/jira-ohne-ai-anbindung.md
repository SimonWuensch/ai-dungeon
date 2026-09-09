---
sidebar_position: 4
---

# Jira ohne native AI-Anbindung

Unsere Skills sind auf GitHub, GitLab oder lokale Markdown-Dateien zugeschnitten (siehe
[`setup-matt-pocock-skills`](/docs/skills/setup-matt-pocock-skills)) — Jira ist dort nicht direkt
vorgesehen, und viele Unternehmen erlauben ohnehin (noch) keine direkte API-/MCP-Anbindung eines
KI-Tools an den eigenen Jira-Tenant. Das bedeutet nicht, dass `to-spec` und `to-tickets` nutzlos
werden — nur, dass der letzte Schritt manuell bleibt.

## Der Weg: Copy-Paste, bewusst strukturiert

1. **`to-spec`/`to-tickets` normal laufen lassen.** Die Skills wissen nichts von Jira — sie liefern
   Spec und Tickets als Markdown im Chat, exakt wie bei jedem anderen Tracker auch.
2. **`setup-matt-pocock-skills` mit Tracker "Other" konfigurieren.** In `docs/agents/issue-tracker.md`
   in eigenen Worten festhalten: *"Issues werden manuell in Jira angelegt. Ich kopiere Titel und
   Beschreibung aus dem Ticket-Markdown, setze Issue-Typ (Story/Task) und den Epic-Link von Hand."*
   Damit wissen zukünftige Sessions, dass sie Markdown erzeugen sollen, das sich gut von Hand
   übertragen lässt — nicht `gh issue create` versuchen.
3. **Pro Ticket ein Jira-Issue anlegen.** Titel → Summary, "What to build" → Description,
   Acceptance Criteria → Checkliste in der Description oder als Sub-Tasks, "Blocked by" → Jiras
   native "is blocked by"-Verknüpfung.
4. **Die Blocking Edges nicht verlieren.** Genau das geht beim reinen Copy-Paste am leichtesten
   unter — die Reihenfolge aus `to-tickets` (Blocker zuerst) ist die Reihenfolge, in der die Issues
   angelegt werden sollten, damit die Verknüpfung beim Anlegen schon existiert.

## Warum das trotzdem lohnt

Der eigentliche Wert von `to-spec`/`to-tickets` liegt nicht im automatischen Anlegen der Issues,
sondern darin, dass die **Zerlegung selbst** (vertikale Slices, klare Blocker, verifizierbare
Akzeptanzkriterien) schon vor dem ersten Jira-Klick durchdacht ist. Das manuelle Übertragen wird
dadurch mechanisch, statt selbst die schwierige Denkarbeit zu sein.

:::info[Ausblick]
Bei sehr vielen Tickets auf einmal lohnt sich zusätzlich Jiras eigener **CSV-Import** (Summary,
Description, Issue Type, Epic Link als Spalten) — das würde das Copy-Paste auf einen einzigen
Upload reduzieren. Das behandeln wir hier noch nicht im Detail.
:::
