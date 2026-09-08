import Link from '@docusaurus/Link';
import StoryLayout from '@site/src/components/story/StoryLayout';
import FlowRow from '@site/src/components/diagrams/FlowRow';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/werkzeuge"
      description="Was ein Agent wirklich anfassen kann — und warum das der eigentliche Gamechanger ist.">
      <p>
        Im <Link to="/start/der-loop">Grundzyklus</Link> war die Rede von "ein Werkzeug nutzen".
        Das ist der eigentliche Gamechanger von Agentic Coding: Das Modell schreibt nicht nur Text
        — es kann konkrete Aktionen auslösen und bekommt ein echtes Ergebnis zurück.
      </p>

      <FlowRow
        eyebrow="Typische Werkzeuge"
        steps={[
          {label: 'Dateien lesen', sublabel: '& durchsuchen'},
          {label: 'Dateien ändern', sublabel: 'gezielt, Zeile für Zeile'},
          {label: 'Befehle ausführen', sublabel: 'Tests, Build, Linter', focal: true},
          {label: 'Im Web/in Docs suchen', sublabel: 'aktuelle Infos'},
        ]}
      />

      <p>
        Jedes dieser Werkzeuge ist im Grunde eine klar definierte Funktion mit einer Beschreibung
        — "liest den Inhalt einer Datei", "führt einen Shell-Befehl aus und gibt die Ausgabe
        zurück". Das Modell entscheidet selbst, welches Werkzeug es für den nächsten Schritt
        braucht, ruft es auf und liest das Ergebnis, bevor es weitermacht.
      </p>
      <p>
        Wichtig: Werkzeuge sind kein Freifahrtschein. Du legst fest, welche Werkzeuge überhaupt
        zur Verfügung stehen, und bei heiklen Aktionen (Dateien löschen, etwas ins Internet
        schicken, Code committen) wird — je nach Einstellung — erst bei dir nachgefragt. Mehr dazu
        im Schritt <Link to="/start/mensch-im-loop">Mensch im Loop</Link>.
      </p>
    </StoryLayout>
  );
}
