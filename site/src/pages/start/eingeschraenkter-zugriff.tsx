import Link from '@docusaurus/Link';
import StoryLayout from '@site/src/components/story/StoryLayout';
import CompareColumns from '@site/src/components/diagrams/CompareColumns';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/eingeschraenkter-zugriff"
      description="Nur ein Chat-Assistent ohne Ausführungsrechte? Das ist Stufe 1 von Agentic Coding.">
      <p>
        Alles bisher Gezeigte war die volle Ausbaustufe. Vielleicht hast du aktuell nur Zugriff
        auf einen <strong>Chat-Assistenten</strong>, der deine Codebasis versteht und Vorschläge
        macht, aber nichts automatisch ausführt oder ändert — keine eigenen Werkzeuge, keine
        eigenständigen Befehle. Das ist bei vielen Unternehmen aktuell der freigegebene Stand.
      </p>
      <p>
        Die gute Nachricht: Das ist kein anderes Konzept, sondern <strong>Stufe 1</strong> desselben{' '}
        <Link to="/start/der-loop">Grundzyklus</Link> — nur dass du selbst der ausführende Teil
        bist, statt der Agent.
      </p>

      <CompareColumns
        eyebrow="Volle Ausbaustufe vs. Chat-only"
        left={{
          heading: 'Volle Ausbaustufe',
          focal: true,
          items: [
            'Agent liest Dateien selbst',
            'Agent führt Befehle selbst aus',
            'Agent sieht das Ergebnis direkt',
            'Loop läuft weitgehend eigenständig',
          ],
        }}
        right={{
          heading: 'Nur Chat, ohne Ausführung',
          items: [
            'Du fügst Code-Ausschnitte manuell ein',
            'Du führst vorbereitete Befehle selbst aus',
            'Du meldest das Ergebnis zurück',
            'Du bist der "Werkzeug"-Teil des Loops',
          ],
        }}
      />

      <p>
        Der Denkweg bleibt also derselbe: Anweisung geben, kleinen Schritt anfordern, Ergebnis
        prüfen, weitermachen — nur dass "Werkzeug nutzen" bei dir heißt: den vorgeschlagenen
        Codeblock per Hand oder per Übernehmen-Knopf einbauen, und einen vorbereiteten Befehl
        selbst starten. Du machst faktisch schon die Hälfte des Loops — nur manuell statt
        automatisiert.
      </p>
      <p>
        Wenn bei euch mehr freigeschaltet wird, ändert sich also nicht das Prinzip, sondern nur,
        wer die Ausführung übernimmt.
      </p>
    </StoryLayout>
  );
}
