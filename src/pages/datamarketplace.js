import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/Footer';
import Helmet from "react-helmet";
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function DataMarketplace() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <Helmet>
        <title>NordXDataspace (NXD)</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
        <script src="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js" crossorigin></script>
      </Helmet>
      <div id="swagger-ui"></div>
      <BrowserOnly>
        {() => {
          window.onload = () => {
            window.ui = SwaggerUIBundle({
              url: '/openapi/datamarketplace.yaml',
              dom_id: '#swagger-ui',
            });
          }
        }}
      </BrowserOnly>
      <Footer />
    </Layout>
  )
}
