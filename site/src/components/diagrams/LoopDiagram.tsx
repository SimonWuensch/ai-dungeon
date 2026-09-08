import Diagram from './Diagram';

export type LoopStation = {
  name: string;
  sublabel?: string;
  focal?: boolean;
};

type LoopDiagramProps = {
  eyebrow?: string;
  hub: {name: string; sublabel?: string};
  /** 4–7 stations, clockwise from the top. */
  stations: LoopStation[];
};

const STATION_W = 140;
const STATION_H = 60;
const HUB_W = 160;
const HUB_H = 78;
const RADIUS = 190;
const MARGIN = 48;

function shorten(from: {x: number; y: number}, to: {x: number; y: number}, by: number) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: from.x + ux * by,
    y1: from.y + uy * by,
    x2: to.x - ux * by,
    y2: to.y - uy * by,
  };
}

/**
 * A reinforcing-loop diagram: N stations on a ring around a shared hub, following
 * the "Loop" pattern from the diagram-design skill (station ring + write-back spokes).
 */
export default function LoopDiagram({eyebrow, hub, stations}: LoopDiagramProps) {
  const n = stations.length;
  const size = RADIUS * 2 + MARGIN * 2 + STATION_W;
  const cx = size / 2;
  const cy = size / 2;

  const centers = stations.map((_, k) => {
    const theta = (-90 + k * (360 / n)) * (Math.PI / 180);
    return {x: cx + RADIUS * Math.cos(theta), y: cy + RADIUS * Math.sin(theta)};
  });

  return (
    <Diagram eyebrow={eyebrow}>
      <svg
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Loop-Diagramm: ${stations.map((s) => s.name).join(' → ')}, zurück zu ${stations[0]?.name}, alle schreiben in ${hub.name}`}
        style={{width: '100%', height: 'auto', maxWidth: 560, display: 'block', margin: '0 auto'}}>
        <defs>
          <marker id="loop-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--dd-muted)" />
          </marker>
        </defs>

        {/* ring connectors, station k -> station k+1 */}
        {centers.map((c, k) => {
          const next = centers[(k + 1) % n];
          const {x1, y1, x2, y2} = shorten(c, next, STATION_W * 0.55);
          return (
            <line
              key={`ring-${k}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--dd-muted)"
              strokeWidth={1.5}
              markerEnd="url(#loop-arrow)"
            />
          );
        })}

        {/* dashed write-back spokes, station -> hub */}
        {centers.map((c, k) => {
          const {x1, y1, x2, y2} = shorten(c, {x: cx, y: cy}, STATION_H * 0.8);
          return (
            <line
              key={`spoke-${k}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--dd-rule-solid)"
              strokeWidth={1}
              strokeDasharray="3 3"
            />
          );
        })}

        {/* hub */}
        <rect
          x={cx - HUB_W / 2}
          y={cy - HUB_H / 2}
          width={HUB_W}
          height={HUB_H}
          rx={8}
          fill="var(--dd-accent-tint)"
          stroke="var(--dd-accent)"
          strokeWidth={1.5}
        />
        <text x={cx} y={cy - 4} textAnchor="middle" fontSize={12} fontWeight={600} fill="var(--dd-ink)">
          {hub.name}
        </text>
        {hub.sublabel && (
          <text x={cx} y={cy + 14} textAnchor="middle" fontSize={9} fill="var(--dd-muted)" fontFamily="monospace">
            {hub.sublabel}
          </text>
        )}

        {/* stations */}
        {stations.map((s, k) => {
          const c = centers[k];
          return (
            <g key={s.name}>
              <rect
                x={c.x - STATION_W / 2}
                y={c.y - STATION_H / 2}
                width={STATION_W}
                height={STATION_H}
                rx={8}
                fill="var(--dd-paper)"
                stroke={s.focal ? 'var(--dd-accent)' : 'var(--dd-rule-solid)'}
                strokeWidth={s.focal ? 1.75 : 1.25}
              />
              <text x={c.x} y={c.y - 3} textAnchor="middle" fontSize={12} fontWeight={600} fill="var(--dd-ink)">
                {s.name}
              </text>
              {s.sublabel && (
                <text x={c.x} y={c.y + 14} textAnchor="middle" fontSize={9} fill="var(--dd-muted)" fontFamily="monospace">
                  {s.sublabel}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </Diagram>
  );
}
