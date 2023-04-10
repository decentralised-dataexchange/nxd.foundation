// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NordXDataspace",
  tagline:
    "Trust within a dataspace is a requisite for safe and secure data sharing",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://nxd.foundation",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "decentralised-dataexchange", // Usually your GitHub org/user name.
  projectName: "nxd.foundation", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "sv"],
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
        injectHtmlTags({ content }) {
          return {
            postBodyTags: [
              `
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/gh/L3-iGrant/cookie-mgmnt@2.0.4/dist/cookie-consent-ui.css"
            />
            <div id="ccui"></div>
            <script
              id="cookie-consent-ui"
              data-element-id="ccui"
              data-banner-title="YOUR DATA, YOUR CHOICE"
              data-banner-company-name="iGrant.io"
              data-banner-company-link="https://igrant.io"
              data-banner-cookie-policy-link="https://igrant.io/privacy.html"
              data-banner-privacy-policy-link="https://igrant.io/privacy.html#privacy"
              src="https://cdn.jsdelivr.net/gh/L3-iGrant/cookie-mgmnt@2.0.4/dist/cookie-consent-ui.js"
            ></script>
            <script>
              window.CookieConsentUI([
                {
                  consent: true,
                  cookieCategory: "Essential Cookies",
                  cookieCategoryDescription:
                    "are necessary for this site to function properly, authenticating logins, for instance. You can only disable essential cookies via browser settings.",
                  cookiesUsed: ["PrivacyPolicy"],
                  isMandatory: true,
                },
                {
                  consent: true,
                  cookieCategory: "Analytical Cookies",
                  cookieCategoryDescription:
                    "provide information about how this site is being used so we can improve your experience. Data captured is aggregated and anonymized.",
                  cookiesUsed: ["Analytics", "_ga", "_gid", "_gat"],
                  isMandatory: false,
                },
                {
                  consent: false,
                  cookieCategory: "Advertising Cookies",
                  cookieCategoryDescription:
                    "are used for contextual ads from third parties.",
                  cookiesUsed: ["AdSense"],
                  isMandatory: false,
                },
              ]);
            </script>
          `,
            ],
          };
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/nxd-social-v3.png",
      navbar: {
        items: [
          {
            type: "custom-nordxdataspace-logo",
            label: "",
            position: "left",
          },
          {
            type: "custom-local-dropdown",
            position: "right",
          },
          {
            type: "custom-indy-nav-btn",
            label: "Indy testnet",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
