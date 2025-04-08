import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/Footer';
import Helmet from "react-helmet";
import Card from '@site/src/components/Card';
import Header from '@site/src/components/Header';


const CardList = [
  {
    title: "Data Marketplace APIs",
    link: "/datamarketplace",
    description: (<>
      Get started with dHDSI data marketplace APIs after onboarding to the dHDSI marketplace.
    </>),
  },
  {
    title: "Domain-Specific Services APIs",
    link: "/domain",
    description: (<>
      Get started with dHDSI domain specific service APIs
    </>),
  },
  {
    title: "Data Intermediation Service Provider APIs",
    link: "/dataintermediation",
    description: (<>
      Get started with Data Intermediation Service Provider (DISP) APIs (Consents, Data Exchange and Digital Walets)
    </>),
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <Header />
      <Helmet>
        <title>NordXDataspace (NXD)</title>
      </Helmet>
      <Footer />
    </Layout>
  );
}
