import StoryLayout from '@site/src/components/story/StoryLayout';
import GeneratedImage from '@site/src/components/story/GeneratedImage';
import FlowRow from '@site/src/components/diagrams/FlowRow';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/wie-du-bisher-codest"
      description="Der vertraute Ausgangspunkt, bevor wir über Agentic Coding sprechen.">
      <p>
        Bevor wir über <strong>Agentic Coding</strong> sprechen, ein kurzer Blick auf das, was du
        schon kennst: Du öffnest einen Editor, denkst dir eine Lösung aus, tippst sie — Zeile für
        Zeile. Autocomplete schlägt dir unterwegs das nächste Wort oder eine ganze Zeile vor, du
        nimmst an oder verwirfst.
      </p>
      <p>
        Das Werkzeug reagiert nur auf das, was gerade unter deinem Cursor steht. Es liest keine
        anderen Dateien von sich aus, führt nichts aus, prüft kein Ergebnis. Es ist ein sehr guter
        Zuruf-Assistent — mehr nicht.
      </p>

      <GeneratedImage
        id="start-01-hero"
        prompt="Ein Entwickler sitzt konzentriert vor einem Laptop in einem ruhigen, minimalistischen Büro, Editor mit Code auf dem Bildschirm, warmes Licht, editorial photography style, keine Text-Overlays"
        alt="Ein Entwickler arbeitet konzentriert am Laptop"
      />

      <FlowRow
        eyebrow="Klassisches Coding"
        steps={[
          {label: 'Du denkst', sublabel: 'Lösung im Kopf'},
          {label: 'Du tippst', sublabel: 'Zeile für Zeile'},
          {label: 'Autocomplete', sublabel: 'schlägt vor'},
          {label: 'Du entscheidest', sublabel: 'annehmen / verwerfen', focal: true},
        ]}
      />

      <p>
        Diese Schleife läuft komplett in deinem Kopf und deinen Fingern ab. Das Werkzeug liefert
        Vorschläge, aber <em>du</em> bist die einzige Instanz, die etwas tut. Genau das ändert sich
        im nächsten Schritt.
      </p>
    </StoryLayout>
  );
}
