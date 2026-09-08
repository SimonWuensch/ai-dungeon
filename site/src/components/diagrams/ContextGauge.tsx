import Diagram from './Diagram';
import styles from './ContextGauge.module.css';

export type GaugeRow = {
  label: string;
  percent: number;
};

type ContextGaugeProps = {
  eyebrow?: string;
  rows: GaugeRow[];
};

/** Horizontal fill-bars — used here to show how "full" a context window is. */
export default function ContextGauge({eyebrow, rows}: ContextGaugeProps) {
  return (
    <Diagram eyebrow={eyebrow}>
      <div className={styles.row}>
        {rows.map((r) => (
          <div key={r.label} className={styles.item}>
            <span className={styles.label}>{r.label}</span>
            <span className={styles.track}>
              <span className={styles.fill} style={{width: `${r.percent}%`}} />
            </span>
            <span className={styles.pct}>{r.percent}%</span>
          </div>
        ))}
      </div>
    </Diagram>
  );
}
