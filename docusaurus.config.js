const organizationName = "jayhuynh";
const projectName = "biasnavi-website";

const config = {
  title: "Biasnavi",
  tagline:
    "Biasnavi handles behaviour, accessibility and interactions so you can implement custom components and design systems for Android, iOS and Web",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Biasnavi",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "right",
        },
        {
          href: "https://github.com/CIRES-Hub/BiasNavi",
          label: "GitHub",
          position: "right",
        },
        {
          href:
            "https://cires.org.au/",
          label: "Hire Us",
          position: "right",
        },
      ],
    },
    algolia: {
      apiKey: "e2206a9dbfb5b7bba33d6dccec9acfe1",
      indexName: "ReactNativeAria",
      placeholder: "Search",
      algoliaOptions: {
        facetFilters: ["language:en"],
      },
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",

              to: "https://twitter.com/geekyants",
            },
            {
              label: "Stack Overflow",

              to:
                "https://stackoverflow.com/questions/tagged/React-native-aria",
            },
            {
              label: "Discord",

              to: "https://discord.com/invite/jpxVeDFqxG",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/CIRES-Hub/BiasNavi",
            },
            // {
            //   label: "Roadmap",
            //   href: "https://trello.com/b/8HcLFH3K/react-native-aria-roadmap",
            // },
            {
              label: "Contribution Guidelines",

              to:
                "https://github.com/CIRES-Hub/BiasNavi/blob/main/CONTRIBUTING.md",
            },
          ],
        },
        {
          title: " ",
          items: [
            {
              label: "Built with ❤️ at GeekyAnts ",
              href:
                "https://geekyants.com/?utm_source=Landing_Page&utm_medium=Made_with_love&utm_campaign=RN_ARIA",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ReactNativeAria `,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
          sidebarPath: "./sidebars.js",
        },
        blog: {
          path: "blog",
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: "../src/css/custom.css",
        },
      },
    ],
  ],
};

module.exports = config;
