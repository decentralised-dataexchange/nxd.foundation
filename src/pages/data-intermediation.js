import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '../components/Footer';
import Helmet from "react-helmet";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function DataIntermediation() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <Helmet>
        <title>NordXDataspace (NXD)</title>
      </Helmet>
      <SwaggerUI url="openapi/data-marketplace.yaml" />
      <Footer />
    </Layout>
  );
}
