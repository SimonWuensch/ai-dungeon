import StoryLayout from '@site/src/components/story/StoryLayout';
import ContextGauge from '@site/src/components/diagrams/ContextGauge';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/kontext-und-session"
      description="Was das Modell 'im Kopf' hat, und warum das begrenzt ist.">
      <p>
        Ein Agent hat kein Gedächtnis im menschlichen Sinn. Was er "weiß", ist genau das, was
        gerade in seinem <strong>Kontext</strong> steht: deine Anweisungen, die Dateien, die er
        gelesen hat, die Ergebnisse seiner Werkzeug-Aufrufe — alles als Text, in der Reihenfolge,
        in der es passiert ist.
      </p>
      <p>
        Dieser Kontext hat eine feste Obergrenze. Er wächst mit jeder Runde des Loops — jede
        gelesene Datei, jede Testausgabe kommt dazu. Irgendwann ist er voll.
      </p>

      <ContextGauge
        eyebrow="Kontext füllt sich über eine Session"
        rows={[
          {label: 'Session-Start', percent: 8},
          {label: 'Nach ein paar Schritten', percent: 35},
          {label: 'Nach längerer Arbeit', percent: 78},
        ]}
      />

      <p>
        Deshalb wirken sehr lange Sessions manchmal seltsam: Frühe Details werden ungenauer,
        wichtige Informationen sind zwischen viel unwichtigem Text vergraben. Gute
        Agentic-Coding-Werkzeuge fassen ältere Teile automatisch zusammen — aber die Faustregel
        bleibt: <em>ein frischer Start mit klarem Auftrag schlägt eine ewig lange, vollgestopfte
        Session.</em>
      </p>
      <p>
        Das ist auch, warum wiederverwendbare Anleitungen so wertvoll sind — statt bei jeder
        Session alles neu zu erklären, kann der Agent auf etwas Kompaktes zurückgreifen. Genau
        darum geht es im nächsten Schritt: Skills.
      </p>
    </StoryLayout>
  );
}
