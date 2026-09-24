---
name: codebase-design
description: Vokabular für tiefe Module (Interface, Naht, Adapter, Hebelwirkung, Lokalität). Automatisch wählbar beim Entwurf oder der Verbesserung einer Modul-Schnittstelle, beim Suchen von Deepening-Kandidaten, oder wenn ein anderer Skill dieses Vokabular braucht.
kategorie: Vokabular
---

# codebase-design: Vokabular für tiefe Module

Gemeinsame Sprache, um **tiefe Module** zu entwerfen: viel Verhalten hinter einer kleinen
Schnittstelle, an einer sauberen Naht platziert, testbar über genau diese Schnittstelle. Ziel:
Hebelwirkung für Aufrufer, Lokalität für Wartende, Testbarkeit für alle.

## Wann brauche ich das?

Immer wenn eine Modul-Schnittstelle entworfen oder verbessert wird, eine "deepening"-Gelegenheit
gesucht wird, oder ein anderer Skill dieses Vokabular braucht (`tdd`,
`improve-codebase-architecture`).

## Glossar

Diese Begriffe exakt so verwenden, nicht durch "Komponente", "Service", "API" oder "Boundary"
ersetzen:

- **Modul**: alles mit einer Schnittstelle und einer Implementierung, bewusst größenunabhängig
  (Funktion, Klasse, Package, tier-übergreifender Slice).
- **Schnittstelle**: alles, was ein Aufrufer wissen muss, um das Modul korrekt zu nutzen, nicht
  nur die Typ-Signatur, sondern auch Invarianten, Reihenfolge-Zwänge, Fehlermodi, Konfiguration,
  Performance-Eigenschaften.
- **Implementierung**: was innen im Modul steckt. Unterscheidet sich von **Adapter**: ein Adapter
  kann klein sein mit großer Implementierung (ein Postgres-Repository) oder groß mit kleiner
  Implementierung (ein In-Memory-Fake).
- **Tiefe**: Hebelwirkung an der Schnittstelle. Wie viel Verhalten ein Aufrufer (oder Test) pro
  Einheit Schnittstellen-Wissen ausüben kann. **Tief** heißt viel Verhalten hinter kleiner
  Schnittstelle, **flach** heißt Schnittstelle fast so komplex wie die Implementierung.
- **Naht** (Michael Feathers): die Stelle, an der man Verhalten ändern kann, ohne dort zu editieren,
  der *Ort*, an dem die Schnittstelle eines Moduls lebt.
- **Adapter**: ein konkretes Ding, das eine Schnittstelle an einer Naht erfüllt.
- **Hebelwirkung**: was Aufrufer aus Tiefe gewinnen, mehr Fähigkeit pro Einheit gelerntem
  Schnittstellen-Wissen.
- **Lokalität**: was Wartende aus Tiefe gewinnen. Änderungen, Bugs, Wissen und Verifikation
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
  kann intern aus kleinen, mockbaren Teilen bestehen, die gehören trotzdem nicht zur Schnittstelle.
- **Der Löschtest**: Modul gedanklich löschen. Verschwindet die Komplexität, war es nur ein
  Durchreicher. Taucht sie bei N Aufrufern wieder auf, hat sie sich gelohnt.
- **Die Schnittstelle ist die Testoberfläche.** Aufrufer und Tests queren dieselbe Naht.
- **Ein Adapter ist eine hypothetische Naht, zwei Adapter sind eine echte.** Keine Naht einführen,
  wenn nichts tatsächlich variiert.

## Testbarkeit gestalten

1. **Abhängigkeiten annehmen, nicht selbst erzeugen** (Dependency Injection statt `new` im Modul).
2. **Ergebnisse zurückgeben statt Seiteneffekte zu produzieren.**
3. **Kleine Oberfläche**: weniger Methoden, weniger Parameter, einfacherer Testaufbau.

## Wo passt das rein?

Vokabular, das `tdd` und `improve-codebase-architecture` beide nutzen, um beim Entwurf oder bei
der Bewertung einer Schnittstelle dieselbe Sprache zu sprechen. Gesamtüberblick: `ask-simon`.

## Was sich gegenüber dem Original geändert hat

Nichts inhaltlich, reine Vokabular-/Prinzipien-Referenz, braucht keine Ausführung. Nur ins
Deutsche übertragen.
