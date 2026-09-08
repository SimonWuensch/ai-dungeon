import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

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
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Los geht's
          </Link>
        </div>
      </div>
    </header>
  );
}

type CardProps = {
  title: string;
  description: string;
  to: string;
};

const cards: CardProps[] = [
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

function HomepageCards() {
  return (
    <section className={styles.cards}>
      <div className="container">
        <div className="row">
          {cards.map((card) => (
            <div key={card.title} className="col col--4">
              <Link to={card.to} className={styles.card}>
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
      description="Wissensbasis für Agentic Coding — Skills, Workflows, Best Practices">
      <HomepageHeader />
      <main>
        <HomepageCards />
      </main>
    </Layout>
  );
}
