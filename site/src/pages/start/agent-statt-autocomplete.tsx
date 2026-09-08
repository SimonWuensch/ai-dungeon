import StoryLayout from '@site/src/components/story/StoryLayout';
import CompareColumns from '@site/src/components/diagrams/CompareColumns';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/agent-statt-autocomplete"
      description="Der zentrale Unterschied: Ein Agent handelt, statt nur zu antworten.">
      <p>
        Der Kernunterschied lässt sich in einem Satz sagen: <strong>Ein Agent antwortet nicht
        nur — er handelt.</strong> Er kann Dateien in deinem Projekt öffnen und lesen, Befehle
        ausführen (Tests, Build, Linter), das echte Ergebnis sehen und darauf reagieren — ohne dass
        du jeden einzelnen Schritt manuell anstößt.
      </p>
      <p>
        Autocomplete kennt nur den Text unter deinem Cursor. Ein Agent kennt (im Rahmen dessen, was
        du ihm erlaubst) die ganze Codebasis, kann sie durchsuchen, verändern und das Ergebnis
        seiner eigenen Änderung überprüfen — bevor er dir überhaupt etwas zeigt.
      </p>

      <CompareColumns
        eyebrow="Autocomplete vs. Agent"
        left={{
          heading: 'Autocomplete',
          items: [
            'Sieht nur den aktuellen Ausschnitt',
            'Schlägt den nächsten Text vor',
            'Führt nichts aus',
            'Prüft kein Ergebnis',
          ],
        }}
        right={{
          heading: 'Agent',
          focal: true,
          items: [
            'Kann die ganze Codebasis lesen',
            'Führt Befehle selbst aus',
            'Sieht echte Ergebnisse (Tests, Fehler, Output)',
            'Reagiert darauf und macht weiter',
          ],
        }}
      />

      <p>
        Das ist der Sprung von "hilft mir beim Formulieren" zu "erledigt einen Teil der Arbeit
        selbstständig — und zeigt dir, was dabei herauskam". Wie dieser Ablauf konkret aussieht,
        ist das Thema des nächsten Schritts: der Grundzyklus.
      </p>
    </StoryLayout>
  );
}
