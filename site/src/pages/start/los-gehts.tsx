import Link from '@docusaurus/Link';
import StoryLayout from '@site/src/components/story/StoryLayout';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/los-gehts"
      description="Zusammenfassung der Einführung und wo es inhaltlich weitergeht.">
      <p>Zusammengefasst:</p>
      <ul>
        <li>Ein Agent <strong>handelt</strong>, statt nur zu antworten.</li>
        <li>Alles läuft im selben <strong>Grundzyklus</strong>: Anweisung → Plan → Werkzeug → Ergebnis prüfen → weiter.</li>
        <li><strong>Werkzeuge</strong> sind das, was den Agenten von Autocomplete unterscheidet.</li>
        <li><strong>Kontext</strong> ist begrenzt — lieber ein frischer Start als eine ewig lange Session.</li>
        <li><strong>Skills</strong> machen wiederkehrendes Vorgehen wiederverwendbar.</li>
        <li>Der <strong>Mensch bleibt im Loop</strong> — Freigaben, Review, Verantwortung.</li>
        <li>Nur Chat, ohne Ausführung? Auch das ist derselbe Loop — nur manuell.</li>
      </ul>

      <p>Von hier aus geht's tiefer in die Referenz-Bereiche dieser Seite:</p>
      <ul>
        <li>
          <Link to="/docs/skills">Skills</Link> — die installierten Engineering-Skills im Detail.
        </li>
        <li>
          <Link to="/docs/best-practices">Best Practices</Link> — Empfehlungen von Anthropic,
          OpenAI und der Community.
        </li>
        <li>
          <Link to="/docs/workflows">Workflows & Sessions</Link> — guter Skill-Workflow, empfohlene
          Session-Länge, sauberes Kontextmanagement.
        </li>
      </ul>

      <p>
        Und falls du diese Einführung gerade jemandem präsentiert hast: <Link to="/">zurück zur
        Übersicht</Link>, um direkt zu einem bestimmten Schritt zu springen.
      </p>
    </StoryLayout>
  );
}
