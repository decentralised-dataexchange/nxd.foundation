import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '../components/Footer';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary flex-auto p-0')}>
      <div className="container absolute top-[150px] md:top-[225px]">
        <div className={styles.buttons + ['flex']}>
          <p className='text-3xl md:text-5xl w-[300px] md:w-[1000px] md:text-justify break-words whitespace-normal'>NXD: Enabling trust in the data ecosystem for next-generation data sharing.</p>
          <p className='mt-10 text-xl md:text-2xl w-[300px] md:w-[800px] md:text-justify bg-white text-black break-words'>Trust within a dataspace is a requisite for safe and secure data sharing.</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
      <Footer />
    </Layout>
  );
}
