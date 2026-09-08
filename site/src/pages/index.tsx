import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import {storySteps} from '@site/src/components/story/storySteps';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroLead}>
          Agentic Coding in 9 kurzen Schritten erklärt — ca. 12–15 Minuten, keine Vorkenntnisse
          nötig.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to={storySteps[0].slug}>
            Schritt 1 starten →
          </Link>
        </div>
      </div>
    </header>
  );
}

function StoryMap() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Die 9 Schritte
        </Heading>
        <p className={styles.sectionSubtitle}>
          Am besten der Reihe nach — du kannst aber auch direkt zu einem Schritt springen.
        </p>
        <div className={styles.grid}>
          {storySteps.map((s) => (
            <Link key={s.slug} to={s.slug} className={styles.stepCard}>
              <span className={styles.stepNumber}>{String(s.step).padStart(2, '0')}</span>
              <Heading as="h3" className={styles.stepTitle}>
                {s.title}
              </Heading>
              <p className={styles.stepTeaser}>{s.teaser}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

type DeepDiveCardProps = {
  title: string;
  description: string;
  to: string;
};

const deepDiveCards: DeepDiveCardProps[] = [
  {
    title: 'Skills',
    description:
      'Was ein Skill ist, welche es gibt (u.a. das Matt-Pocock-Engineering-Set) und wie man eigene schreibt.',
    to: '/docs/skills',
  },
  {
    title: 'Best Practices',
    description:
      'Empfehlungen von Anthropic, OpenAI und bekannten Praktikern für agentic coding.',
    to: '/docs/best-practices',
  },
  {
    title: 'Workflows & Sessions',
    description:
      'Guter Skill-Workflow, empfohlene Session-Länge, sauberes Kontextmanagement.',
    to: '/docs/workflows',
  },
];

function DeepDiveSection() {
  return (
    <section className={clsx(styles.section, styles.deepDiveSection)}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Zum Vertiefen
        </Heading>
        <p className={styles.sectionSubtitle}>
          Wenn du die Einführung schon kennst und direkt in die Referenz willst.
        </p>
        <div className="row">
          {deepDiveCards.map((card) => (
            <div key={card.title} className="col col--4">
              <Link to={card.to} className={styles.deepDiveCard}>
                <Heading as="h3">{card.title}</Heading>
                <p>{card.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Agentic Coding in 9 kurzen Schritten erklärt — Wissensbasis für Skills, Workflows und Best Practices">
      <HomepageHeader />
      <main>
        <StoryMap />
        <DeepDiveSection />
      </main>
    </Layout>
  );
}
