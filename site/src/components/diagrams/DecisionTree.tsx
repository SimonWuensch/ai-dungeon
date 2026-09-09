import Diagram from './Diagram';
import styles from './DecisionTree.module.css';

export type Branch = {
  title: string;
  description: string;
};

type DecisionTreeProps = {
  eyebrow?: string;
  question: string;
  branches: Branch[];
};

/**
 * A one-level decision tree: a root question fans out into N branches, each
 * carrying a full-sentence description — unlike FlowRow, this shows a real
 * fork, not a chain.
 */
export default function DecisionTree({eyebrow, question, branches}: DecisionTreeProps) {
  return (
    <Diagram eyebrow={eyebrow}>
      <div className={styles.wrapper}>
        <div className={styles.root}>{question}</div>
        <div className={styles.rootStem} />
        <div className={styles.bar} />
        <div className={styles.branches}>
          {branches.map((b) => (
            <div key={b.title} className={styles.branch}>
              <span className={styles.branchTitle}>{b.title}</span>
              <p className={styles.branchDescription}>{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Diagram>
  );
}
