import clsx from 'clsx';
import styles from './SkillHeader.module.css';

export type SkillCategory =
  | 'Setup'
  | 'Router'
  | 'Hauptfluss'
  | 'On-Ramp'
  | 'Codebase-Health'
  | 'Vokabular'
  | 'Standalone';

type SkillHeaderProps = {
  category: SkillCategory;
  /** Folder name under mattpocock/skills/tree/main/skills/engineering/ */
  githubPath: string;
};

/** Category badge + link to the skill's source on GitHub — shown under every skill page's H1. */
export default function SkillHeader({category, githubPath}: SkillHeaderProps) {
  return (
    <div className={styles.header}>
      <span className={clsx(styles.badge, category === 'Hauptfluss' && styles.badgeHauptfluss)}>
        {category}
      </span>
      <a
        className={styles.githubLink}
        href={`https://github.com/mattpocock/skills/tree/main/skills/engineering/${githubPath}`}
        target="_blank"
        rel="noopener noreferrer">
        Auf GitHub ansehen ↗
      </a>
    </div>
  );
}
