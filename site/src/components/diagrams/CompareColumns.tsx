import clsx from 'clsx';
import Diagram from './Diagram';
import styles from './CompareColumns.module.css';

export type CompareColumn = {
  heading: string;
  items: string[];
  focal?: boolean;
};

type CompareColumnsProps = {
  eyebrow?: string;
  left: CompareColumn;
  right: CompareColumn;
};

/** Two side-by-side columns for a before/after or restricted/full comparison. */
export default function CompareColumns({eyebrow, left, right}: CompareColumnsProps) {
  return (
    <Diagram eyebrow={eyebrow}>
      <div className={styles.grid}>
        {[left, right].map((col) => (
          <div key={col.heading} className={clsx(styles.column, col.focal && styles.columnFocal)}>
            <p className={styles.heading}>{col.heading}</p>
            <ul className={styles.list}>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Diagram>
  );
}
