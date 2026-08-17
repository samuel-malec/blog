import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.title}>
          Hello there 🐙
        </Heading>
        <p className={styles.subtitle}>
          Mostly just schizo rants.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/blog">
            Posts
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Home"
      description="ZJBlog"
    >
      <HomepageHeader />

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <div className="container">
            <div className={styles.card}>
              <Heading as="h2">Welcome</Heading>
              <p>
                I only created this to shitpost; we'll see what the future will bring to this blog
              </p>
            </div>
          </div>
        </section>

      </main>
    </Layout>
  );
}
