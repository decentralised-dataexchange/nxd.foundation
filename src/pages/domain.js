import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Footer from '@site/src/components/Footer';
import Helmet from "react-helmet";
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Domain() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Enabling trust in the data ecosystem for next-generation data sharing. ">
      <Helmet>
        <title>NordXDataspace (NXD)</title>
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui.css" />
      </Helmet>
      <div id="swagger-ui"></div>
      <BrowserOnly>
        {() => {

          const script = document.createElement("script");
          script.src = 'https://unpkg.com/swagger-ui-dist@5.11.0/swagger-ui-bundle.js'; // whatever url you want here
          script.charset = "utf-8";
          script.crossOrigin = true;
          script.async = false;
          script.onload = function () {
            window.ui = SwaggerUIBundle({
              url: '/openapi/datamarketplace.yaml',
              dom_id: '#swagger-ui',
            });
          };
          document.head.appendChild(script);
        }}
      </BrowserOnly>
      <Footer />
    </Layout>
  )
}
