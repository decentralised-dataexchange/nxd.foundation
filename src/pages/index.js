import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '../components/Footer';
import Helmet from "react-helmet";
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary flex-auto p-0 min-h-screen')}>
      <div className="container absolute top-[150px] md:top-[225px]">
        <div className={styles.buttons + ['flex']}>
          <p className='text-3xl md:text-5xl w-full md:w-4/6 text-left break-words whitespace-normal'><Translate>NXD: Enabling trust in the data ecosystem for next-generation data sharing.</Translate></p>
          <p className='mt-10 text-xl md:text-2xl w-full md:w-4/6 text-left opacity-70 text-black break-words'><span className='inline bg-white'><Translate>Trust within a dataspace is a requisite for safe and secure data sharing.</Translate></span></p>
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
      <Helmet>
        <title>NordXDataspace (NXD)</title>
      </Helmet>
      {/* <main>
        <HomepageFeatures />
      </main> */}
      <Footer />
    </Layout>
  );
}
