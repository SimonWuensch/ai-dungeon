import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {storySteps, stepBySlug} from './storySteps';
import styles from './StoryLayout.module.css';

type StoryLayoutProps = {
  slug: string;
  description: string;
  children: ReactNode;
};

export default function StoryLayout({slug, description, children}: StoryLayoutProps) {
  const current = stepBySlug(slug);
  const total = storySteps.length;
  const prev = storySteps[current.step - 2]; // step is 1-indexed
  const next = storySteps[current.step];

  return (
    <Layout title={current.title} description={description}>
      <div className={styles.wrapper}>
        <div className={styles.eyebrow}>
          <span>
            Schritt {current.step} von {total}
          </span>
          <div className={styles.progressTrack}>
            <div
              className={styles.progressFill}
              style={{width: `${(current.step / total) * 100}%`}}
            />
          </div>
        </div>

        <div className={styles.content}>
          <Heading as="h1" className={styles.title}>
            {current.title}
          </Heading>
          {children}
        </div>

        <nav className={styles.nav}>
          <div className={styles.navSide}>
            {prev && (
              <Link className={styles.navButton} to={prev.slug}>
                <span className={styles.navLabel}>← Zurück</span>
                <span className={styles.navTitle}>{prev.title}</span>
              </Link>
            )}
          </div>
          <div className={styles.navSide}>
            {next ? (
              <Link className={styles.navButton} to={next.slug}>
                <span className={styles.navLabel}>Weiter →</span>
                <span className={styles.navTitle}>{next.title}</span>
              </Link>
            ) : (
              <Link className={styles.navButton} to="/">
                <span className={styles.navLabel}>Fertig →</span>
                <span className={styles.navTitle}>Zur Übersicht</span>
              </Link>
            )}
          </div>
        </nav>
        <div className={styles.overviewLink}>
          <Link to="/">↑ Zurück zur Übersicht</Link>
        </div>
      </div>
    </Layout>
  );
}
