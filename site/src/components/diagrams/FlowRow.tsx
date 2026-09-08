import clsx from 'clsx';
import Diagram from './Diagram';
import styles from './FlowRow.module.css';

export type FlowStep = {
  label: string;
  sublabel?: string;
  focal?: boolean;
};

type FlowRowProps = {
  eyebrow?: string;
  steps: FlowStep[];
  /** Renders a loop-back arrow from the last to the first step. */
  loopsBack?: boolean;
};

/** A left-to-right sequence of steps connected by arrows. Wraps to vertical on narrow screens. */
export default function FlowRow({eyebrow, steps, loopsBack}: FlowRowProps) {
  return (
    <Diagram eyebrow={eyebrow}>
      <div className={styles.row}>
        {steps.map((step, i) => (
          <>
            <div key={step.label} className={clsx(styles.box, step.focal && styles.boxFocal)}>
              <span className={styles.label}>{step.label}</span>
              {step.sublabel && <span className={styles.sublabel}>{step.sublabel}</span>}
            </div>
            {i < steps.length - 1 && (
              <span key={`arrow-${i}`} className={styles.arrow} aria-hidden="true">
                →
              </span>
            )}
          </>
        ))}
      </div>
      {loopsBack && (
        <p style={{textAlign: 'center', marginTop: '0.75rem', marginBottom: 0}}>
          <span className={styles.sublabel}>↩ und wieder von vorn, bis fertig</span>
        </p>
      )}
    </Diagram>
  );
}
