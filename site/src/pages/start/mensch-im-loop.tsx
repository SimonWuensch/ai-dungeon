import StoryLayout from '@site/src/components/story/StoryLayout';
import GeneratedImage from '@site/src/components/story/GeneratedImage';
import CompareColumns from '@site/src/components/diagrams/CompareColumns';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/mensch-im-loop"
      description="Kein Autopilot ohne Fahrer: Review, Nachfragen, Freigaben.">
      <p>
        Nach allem, was wir bisher gesehen haben, klingt Agentic Coding vielleicht nach
        "Autopilot". Das ist es bewusst nicht. Gute Agentic-Coding-Werkzeuge bauen an mehreren
        Stellen den Menschen aktiv mit ein.
      </p>

      <GeneratedImage
        id="start-07-hero"
        prompt="Ein Entwickler lehnt sich entspannt zurück und schaut prüfend auf einen Bildschirm, auf dem ein Diff/Code-Review zu sehen ist, ruhige Geste, warmes Licht, editorial photography style, keine Text-Overlays"
        alt="Ein Entwickler prüft eine vorgeschlagene Änderung"
      />

      <CompareColumns
        eyebrow="Kontrollpunkte im Loop"
        left={{
          heading: 'Was der Agent selbst tut',
          items: [
            'Dateien lesen, Pläne machen',
            'Ungefährliche Befehle (z.B. Tests lesen)',
            'Vorschläge formulieren',
          ],
        }}
        right={{
          heading: 'Was Freigabe braucht',
          focal: true,
          items: [
            'Dateien wirklich ändern',
            'Riskante Befehle ausführen',
            'Etwas committen, pushen, senden',
          ],
        }}
      />

      <p>
        Konkret heißt das: Bei heiklen Schritten fragt das Werkzeug nach, bevor es sie ausführt.
        Änderungen lassen sich als Diff prüfen, bevor sie endgültig sind. Und du entscheidest, wie
        viel Freiheit der Agent insgesamt bekommt — von "frag bei jeder Kleinigkeit nach" bis
        "arbeite eigenständig, ich schaue mir am Ende alles an".
      </p>
      <p>
        Diese Kontrollpunkte sind kein Misstrauen gegenüber der Technik, sondern das, was
        Agentic Coding im Berufsalltag überhaupt erst vertrauenswürdig macht: Du bleibst am
        Ende immer verantwortlich für das, was in den Code kommt.
      </p>
    </StoryLayout>
  );
}
