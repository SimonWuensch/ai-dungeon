import Link from '@docusaurus/Link';
import StoryLayout from '@site/src/components/story/StoryLayout';
import FlowRow from '@site/src/components/diagrams/FlowRow';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/skills"
      description="Wiederverwendbare Anleitungen, die ein Agent selbst nachschlägt.">
      <p>
        Ein <strong>Skill</strong> ist eine kurze, wiederverwendbare Anleitung für eine
        wiederkehrende Aufgabe — "wie man einen Merge-Konflikt löst", "wie man ein Code-Review
        macht", "wie man Bugs systematisch eingrenzt". Geschrieben einmal, genutzt beliebig oft.
      </p>
      <p>
        Der Clou: Der Agent lädt einen Skill nicht, weil du ihn explizit erwähnst, sondern weil er
        selbst erkennt, dass die aktuelle Aufgabe dazu passt.
      </p>

      <FlowRow
        eyebrow="Wie ein Skill zum Einsatz kommt"
        steps={[
          {label: 'Aufgabe erkannt', sublabel: '„klingt nach Bugfix"'},
          {label: 'Passender Skill', sublabel: 'wird gefunden', focal: true},
          {label: 'Anleitung geladen', sublabel: 'kompakt, gezielt'},
          {label: 'Angewendet', sublabel: 'auf deine Aufgabe'},
        ]}
      />

      <p>
        Das löst genau das Problem aus dem letzten Schritt: Statt bei jeder Session das gesamte
        Vorgehen neu auszuformulieren, steht es kompakt an einer Stelle — und wird nur bei Bedarf
        in den Kontext geladen, statt ihn ständig zu füllen.
      </p>
      <p>
        Diese Wissensbasis hier bringt bereits ein erstes Set an Engineering-Skills mit — schau
        dir das in Ruhe unter <Link to="/docs/skills">Skills</Link> an, sobald du mit dieser
        Einführung durch bist.
      </p>
    </StoryLayout>
  );
}
