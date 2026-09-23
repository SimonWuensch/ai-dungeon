import {useState} from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import RawContentModal from './RawContentModal';
import styles from './SkillHeader.module.css';
import atruviaStyles from './AtruviaSkillHeader.module.css';

export type SkillCategory =
  | 'Hauptfluss'
  | 'On-Ramp'
  | 'Codebase-Health'
  | 'Vokabular'
  | 'Standalone';

export type Invocation = 'user' | 'model';

type AtruviaSkillHeaderProps = {
  category: SkillCategory;
  invocation: Invocation;
  /** File name (without extension) under site/static/downloads/skills/ and site/skills-content/atruvia/. */
  slug: string;
};

/**
 * Category + invocation badges, plus "view raw" (opens a dialog) and a download link for this
 * one adapted skill — shown under every Atruvia-Skill page's H1. Unlike SkillHeader, this never
 * links to mattpocock/skills: these pages describe our own adapted version, not the original.
 */
export default function AtruviaSkillHeader({category, invocation, slug}: AtruviaSkillHeaderProps) {
  const downloadUrl = useBaseUrl(`/downloads/skills/${slug}.md`);
  const [rawOpen, setRawOpen] = useState(false);
  return (
    <div className={styles.header}>
      <span className={clsx(styles.badge, category === 'Hauptfluss' && styles.badgeHauptfluss)}>
        {category}
      </span>
      <span className={clsx(styles.badge, styles.badgeInvocation)}>
        {invocation === 'user' ? '⌨️ Nur manuell (/name)' : '🤖 Kann selbst gewählt werden'}
      </span>
      <span className={atruviaStyles.adaptedBadge}>🔧 Angepasst für unser Setup</span>
      <span className={atruviaStyles.actions}>
        <button className={clsx(styles.githubLink, atruviaStyles.buttonReset)} onClick={() => setRawOpen(true)}>
          Rohtext ansehen
        </button>
        <a className={styles.githubLink} href={downloadUrl} download>
          Herunterladen ↓
        </a>
      </span>
      <RawContentModal slug={slug} open={rawOpen} onClose={() => setRawOpen(false)} />
    </div>
  );
}
