import type {ReactNode} from 'react';
import styles from './Diagram.module.css';

type DiagramProps = {
  eyebrow?: string;
  children: ReactNode;
};

/** Shared "paper" card frame every diagram sits in — keeps the editorial look consistent. */
export default function Diagram({eyebrow, children}: DiagramProps) {
  return (
    <div className={styles.card}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      {children}
    </div>
  );
}
