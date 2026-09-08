import Link from '@docusaurus/Link';
import StoryLayout from '@site/src/components/story/StoryLayout';
import LoopDiagram from '@site/src/components/diagrams/LoopDiagram';

export default function Page() {
  return (
    <StoryLayout
      slug="/start/der-loop"
      description="Der eine Kreislauf, der hinter jedem Agentic-Coding-Werkzeug steckt.">
      <p>
        Jedes Agentic-Coding-Werkzeug — egal ob Claude Code, Cursor oder ein anderes — läuft im
        Kern denselben Zyklus. Das ist die wichtigste Grafik dieser ganzen Seite: Wenn du nur eine
        Sache mitnimmst, dann diese.
      </p>

      <LoopDiagram
        eyebrow="Der Grundzyklus"
        hub={{name: 'Aufgabe & Zustand', sublabel: 'was gerade gilt'}}
        stations={[
          {name: 'Anweisung', sublabel: 'von dir'},
          {name: 'Plan', sublabel: 'nächster Schritt'},
          {name: 'Werkzeug nutzen', sublabel: 'lesen, ausführen …'},
          {name: 'Ergebnis prüfen', sublabel: 'stimmt das?', focal: true},
          {name: 'Entscheiden', sublabel: 'fertig oder weiter'},
        ]}
      />

      <p>
        Du gibst eine Anweisung. Der Agent überlegt sich einen ersten, kleinen Schritt, nutzt dafür
        ein Werkzeug — etwa eine Datei lesen oder einen Testlauf starten — und bekommt ein echtes
        Ergebnis zurück. Er prüft dieses Ergebnis (lief der Test durch? stand die Funktion da, wo
        er sie erwartet hat?) und entscheidet: reicht das, oder braucht es noch einen Schritt?
        Dann beginnt die Runde von vorn, bis die Aufgabe erledigt ist.
      </p>
      <p>
        Entscheidend ist: Jede Runde <strong>baut auf einem echten Ergebnis auf</strong>, nicht auf
        einer Vermutung. Der Agent rät nicht, ob sein Code funktioniert — er lässt den Test laufen
        und sieht es. Das ist der Unterschied zu einer einzelnen, langen Textantwort.
      </p>
      <p>
        Die einzelnen Stationen dieses Loops — was ein <Link to="/start/werkzeuge">Werkzeug</Link>{' '}
        eigentlich ist, was im <Link to="/start/kontext-und-session">Kontext</Link> steckt — sehen
        wir uns jetzt einzeln an.
      </p>
    </StoryLayout>
  );
}
