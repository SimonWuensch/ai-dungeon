import styles from './HintBox.module.css';

export type Hint = {
  skill: string;
  text: string;
};

type HintBoxRowProps = {
  hints: Hint[];
};

/**
 * One "Warum dieser Skill?" callout per branch, meant to sit directly below a
 * DecisionTree — same column widths as the branches above it, so the
 * reasoning lines up visually with the branch it explains.
 */
export default function HintBoxRow({hints}: HintBoxRowProps) {
  return (
    <div className={styles.row}>
      {hints.map((h) => (
        <div key={h.skill} className={styles.box}>
          <span className={styles.title}>💡 Warum {h.skill}?</span>
          <p className={styles.text}>{h.text}</p>
        </div>
      ))}
    </div>
  );
}
