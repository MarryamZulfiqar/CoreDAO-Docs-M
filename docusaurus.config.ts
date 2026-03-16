import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

const config: Config = {
  title: "Core DAO Official Documentation",
  tagline: "Bitcoin-Secured. EVM-Compatible. Infinitely Scalable.",
  favicon: "img/favicon.ico",

  url: "https://docs.coredao.org",
  baseUrl: "/",

  organizationName: "coredao-org",
  projectName: "CoreDAO-Docs",
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // PWA / AI discovery
  headTags: [
    {
      tagName: "link",
      attributes: {
        rel: "manifest",
        href: "/manifest.json",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "llms-txt",
        href: "/llms.txt",
        type: "text/plain",
      },
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // "Edit this page" links — points to the source file on GitHub
          editUrl: "https://github.com/coredao-org/CoreDAO-Docs/blob/main",
          routeBasePath: "docs",
          path: "docs",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Auto-populate last updated time and author from git history
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        gtag: {
          trackingID: "G-F20V7Q57RZ",
          anonymizeIP: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    require.resolve("./plugins/serve-markdown.js"),
    // ── Redirects from old paths → new numbered paths ─────────────────────────
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // ── Legacy Learn paths ──
          { from: "/docs/Learn/introduction/core-101", to: "/docs/01-concepts/01-introduction/core-101" },
          { from: "/docs/Learn/introduction/why-core", to: "/docs/01-concepts/01-introduction/why-core" },
          { from: "/docs/Learn/introduction/why-core-chain", to: "/docs/01-concepts/01-introduction/why-core" },
          { from: "/docs/Learn/core-concepts/overview", to: "/docs/01-concepts/02-core-concepts/overview" },
          { from: "/docs/Learn/core-concepts/architecture", to: "/docs/01-concepts/02-core-concepts/architecture" },
          { from: "/docs/Learn/core-concepts/satoshi-plus-consensus/DPoW", to: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/DPoW" },
          { from: "/docs/Learn/core-concepts/satoshi-plus-consensus/BitcoinStaking", to: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/BitcoinStaking" },
          { from: "/docs/Learn/core-concepts/satoshi-plus-consensus/DPoS", to: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/DPoS" },
          { from: "/docs/Learn/core-concepts/satoshi-plus-consensus/rewards", to: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/rewards" },
          { from: "/docs/Learn/core-concepts/satoshi-plus-consensus/validator-election", to: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/validator-election" },
          { from: "/docs/Learn/core-concepts/dual-staking/overview", to: "/docs/01-concepts/02-core-concepts/dual-staking/overview" },
          { from: "/docs/Learn/core-token/tokenomics", to: "/docs/01-concepts/03-core-token/tokenomics" },
          { from: "/docs/Learn/core-token/overview", to: "/docs/01-concepts/03-core-token/overview" },
          { from: "/docs/Learn/liquid-staking/stCore/overview", to: "/docs/01-concepts/04-liquid-staking/stCore/overview" },
          { from: "/docs/Learn/liquid-staking/stCore/design", to: "/docs/01-concepts/04-liquid-staking/stCore/design" },
          { from: "/docs/Learn/rev-plus/overview", to: "/docs/01-concepts/05-rev-plus/overview" },
          { from: "/docs/Learn/governance", to: "/docs/01-concepts/governance" },
          { from: "/docs/Learn/audit", to: "/docs/01-concepts/06-security/audit" },
          { from: "/docs/Learn/bug-reporting", to: "/docs/01-concepts/06-security/bug-reporting" },
          // ── Legacy Dev-Guide paths ──
          { from: "/docs/Dev-Guide/dev-tools", to: "/docs/03-developer/dev-tools" },
          { from: "/docs/Dev-Guide/network-config", to: "/docs/03-developer/network-config" },
          { from: "/docs/Dev-Guide/rpc-list", to: "/docs/03-developer/rpc-list" },
          { from: "/docs/Dev-Guide/core-wallet-config", to: "/docs/03-developer/core-wallet-config" },
          { from: "/docs/Dev-Guide/remix", to: "/docs/03-developer/remix" },
          { from: "/docs/Dev-Guide/hardhat", to: "/docs/03-developer/hardhat" },
          { from: "/docs/Dev-Guide/contract-verify", to: "/docs/03-developer/contract-verify" },
          { from: "/docs/Dev-Guide/core-explorer", to: "/docs/03-developer/core-explorer" },
          { from: "/docs/Dev-Guide/core-faucet", to: "/docs/03-developer/core-faucet" },
          { from: "/docs/Dev-Guide/erc20-tokens", to: "/docs/03-developer/erc20-tokens" },
          { from: "/docs/Dev-Guide/bridge-with-layerzero", to: "/docs/03-developer/bridge-with-layerzero" },
          { from: "/docs/Dev-Guide/precompile-addresses", to: "/docs/03-developer/precompile-addresses" },
          // ── Legacy Node paths ──
          { from: "/docs/Node/overview", to: "/docs/04-node-operator/overview" },
          { from: "/docs/Node/validator/setting-up-validator", to: "/docs/04-node-operator/validator/setting-up-validator" },
          { from: "/docs/Node/validator/overview", to: "/docs/04-node-operator/validator/overview" },
          { from: "/docs/Node/validator/validator-register", to: "/docs/04-node-operator/validator/validator-register" },
          { from: "/docs/Node/slashing/overview", to: "/docs/04-node-operator/slashing/overview" },
          { from: "/docs/Node/config/full-node", to: "/docs/04-node-operator/config/full-node" },
          { from: "/docs/Node/maintenance", to: "/docs/04-node-operator/maintenance/maintenance" },
          // ── Legacy Stake paths ──
          { from: "/docs/stake-and-delegate/overview", to: "/docs/02-staking/overview" },
          { from: "/docs/stake-and-delegate/btc-staking/overview", to: "/docs/02-staking/btc-staking/overview" },
          { from: "/docs/stake-and-delegate/btc-staking/stake-btc-guide", to: "/docs/02-staking/btc-staking/stake-btc-guide" },
          { from: "/docs/stake-and-delegate/btc-staking/Redeeming-Guide", to: "/docs/02-staking/btc-staking/Redeeming-Guide" },
          { from: "/docs/stake-and-delegate/btc-staking/btc-staking-working", to: "/docs/02-staking/btc-staking/btc-staking-working" },
          { from: "/docs/stake-and-delegate/dual-staking-guide", to: "/docs/02-staking/dual-staking-guide" },
          { from: "/docs/stake-and-delegate/CORE-staking", to: "/docs/02-staking/CORE-staking" },
          { from: "/docs/stake-and-delegate/delegating-hash", to: "/docs/02-staking/delegating-hash" },
          // ── Legacy API paths ──
          { from: "/docs/api/core-api", to: "/docs/05-api/core-scan-api/api" },
          { from: "/docs/api/tutorials/creating-an-account", to: "/docs/05-api/core-scan-api/tutorials/creating-an-account" },
          { from: "/docs/api/tutorials/common-error-messages", to: "/docs/05-api/core-scan-api/tutorials/common-error-messages" },
          // ── Legacy FAQ paths ──
          { from: "/docs/FAQs/core-faqs", to: "/docs/06-faqs/core-faqs" },
          { from: "/docs/FAQs/btc-staking-faqs", to: "/docs/06-faqs/btc-staking-faqs" },
          { from: "/docs/FAQs/dual-staking-faqs", to: "/docs/06-faqs/dual-staking-faqs" },
          { from: "/docs/FAQs/validator-faqs", to: "/docs/06-faqs/validator-faqs" },
          // ── External / whitepaper ──
          { from: "/core-white-paper-v1.0.6/", to: "https://whitepaper.coredao.org/" },
          { from: "/core-white-paper-v1.0.7/", to: "https://whitepaper.coredao.org/" },
          { from: "/staking/dual-staking", to: "/docs/02-staking/dual-staking-working" },
          { from: "/developer/", to: "/docs/03-developer/dev-tools" },
          { from: "/api", to: "/docs/05-api/core-scan-api/api" },
          { from: "/satoshi-plus-consensus/rewards", to: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/rewards" },

          // ── Consolidated path redirects (v2 restructure) ──
          { from: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/DPoW", to: "/docs/01-concepts/02-core-concepts/DPoW" },
          { from: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/BitcoinStaking", to: "/docs/01-concepts/02-core-concepts/BitcoinStaking" },
          { from: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/DPoS", to: "/docs/01-concepts/02-core-concepts/DPoS" },
          { from: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/rewards", to: "/docs/01-concepts/02-core-concepts/rewards" },
          { from: "/docs/01-concepts/02-core-concepts/satoshi-plus-consensus/validator-election", to: "/docs/01-concepts/02-core-concepts/validator-election" },
          { from: "/docs/01-concepts/02-core-concepts/dual-staking/overview", to: "/docs/02-staking/dual-staking/overview" },
          { from: "/docs/01-concepts/02-core-concepts/dual-staking/tier-adjustment-system", to: "/docs/02-staking/dual-staking/tier-adjustment-system" },
          { from: "/docs/01-concepts/02-core-concepts/dual-staking/how-to-dual-stake", to: "/docs/02-staking/dual-staking/how-to-dual-stake" },
          { from: "/docs/02-staking/dual-staking-working", to: "/docs/02-staking/dual-staking/how-it-works" },
          { from: "/docs/02-staking/dual-staking-guide", to: "/docs/02-staking/dual-staking/staking-guide" },
          { from: "/docs/02-staking/dual-staking-integration-guide", to: "/docs/02-staking/dual-staking/integration-guide" },
          { from: "/docs/02-staking/CORE-staking", to: "/docs/02-staking/core-staking/CORE-staking" },
          { from: "/docs/02-staking/Ledger-CORE-staking", to: "/docs/02-staking/core-staking/Ledger-CORE-staking" },
          { from: "/docs/02-staking/btc-staking-txn-decoder", to: "/docs/02-staking/btc-staking/btc-staking-txn-decoder" },
          { from: "/docs/03-developer/network-config", to: "/docs/03-developer/network/network-config" },
          { from: "/docs/03-developer/rpc-list", to: "/docs/03-developer/network/rpc-list" },
          { from: "/docs/03-developer/core-wallet-config", to: "/docs/03-developer/network/core-wallet-config" },
          { from: "/docs/03-developer/dev-tools", to: "/docs/03-developer/tooling/dev-tools" },
          { from: "/docs/03-developer/core-faucet", to: "/docs/03-developer/tooling/core-faucet" },
          { from: "/docs/03-developer/core-explorer", to: "/docs/03-developer/tooling/core-explorer" },
          { from: "/docs/03-developer/remix", to: "/docs/03-developer/smart-contracts/remix" },
          { from: "/docs/03-developer/hardhat", to: "/docs/03-developer/smart-contracts/hardhat" },
          { from: "/docs/03-developer/contract-verify", to: "/docs/03-developer/smart-contracts/contract-verify" },
          { from: "/docs/03-developer/bridge-with-layerzero", to: "/docs/03-developer/bridges/bridge-with-layerzero" },
          { from: "/docs/04-node-operator/full-node/on-mainnet", to: "/docs/04-node-operator/running/on-mainnet" },
          { from: "/docs/04-node-operator/full-node/on-testnet", to: "/docs/04-node-operator/running/on-testnet" },
          { from: "/docs/04-node-operator/sync/snapshot-sync", to: "/docs/04-node-operator/maintenance/snapshot-sync" },

          // ── Old manual endpoint stubs → OpenAPI playground ──
          { from: "/docs/05-api/core-scan-api/endpoints/accounts", to: "/docs/05-api/core-scan-api/endpoints/mainnet/api-documentation" },
          { from: "/docs/05-api/core-scan-api/endpoints/blocks", to: "/docs/05-api/core-scan-api/endpoints/mainnet/api-documentation" },
          { from: "/docs/05-api/core-scan-api/endpoints/contracts", to: "/docs/05-api/core-scan-api/endpoints/mainnet/api-documentation" },
          { from: "/docs/05-api/core-scan-api/endpoints/transactions", to: "/docs/05-api/core-scan-api/endpoints/mainnet/api-documentation" },
          { from: "/docs/05-api/core-scan-api/endpoints/statistics", to: "/docs/05-api/core-scan-api/endpoints/mainnet/api-documentation" },
          { from: "/docs/05-api/core-scan-api/endpoints/geth-proxy", to: "/docs/05-api/core-scan-api/endpoints/mainnet/api-documentation" },
          // ── Old stakingAPI paths ──
          { from: "/docs/stakingAPI/mainnet", to: "/docs/05-api/staking-api/mainnet/core-staking-api" },
          { from: "/docs/stakingAPI/testnet", to: "/docs/05-api/staking-api/testnet/core-staking-api" },
        ],
      },
    ],

    // ── OpenAPI Docs ──────────────────────────────────────────────────────────
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "api",
        docsPluginId: "classic",
        config: {
          stakingapimainnet: {
            specPath: "docs/05-api/staking-api/swagger/mainnet.yaml",
            outputDir: "docs/05-api/staking-api/mainnet",
            sidebarOptions: { groupPathsBy: "tag" },
          } satisfies OpenApiPlugin.Options,
          stakingapitestnet: {
            specPath: "docs/05-api/staking-api/swagger/testnet.yaml",
            outputDir: "docs/05-api/staking-api/testnet",
            sidebarOptions: { groupPathsBy: "tag" },
          } satisfies OpenApiPlugin.Options,
          coreapimainnet: {
            specPath: "docs/05-api/core-scan-api/endpoints/mainnet.yaml",
            outputDir: "docs/05-api/core-scan-api/endpoints/mainnet",
            sidebarOptions: { groupPathsBy: "tag" },
          } satisfies OpenApiPlugin.Options,
          coreapitestnet: {
            specPath: "docs/05-api/core-scan-api/endpoints/testnet.yaml",
            outputDir: "docs/05-api/core-scan-api/endpoints/testnet",
            sidebarOptions: { groupPathsBy: "tag" },
          } satisfies OpenApiPlugin.Options,
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    image: "img/core.png",

    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    announcementBar: {
      id: "testnet2_migration",
      content:
        '⚠️ <a target="_blank" rel="noopener noreferrer" href="https://coredao.org/explore/blog/core-testnet1-deprecation-notice-&-migration-guidelines">Core Testnet (1115) is now decommissioned. Migrate to Testnet2 (Chain ID 1114).</a> ⚠️',
      backgroundColor: "#f96e34",
      textColor: "#FBFCFC",
      isCloseable: false,
    },

    algolia: {
      appId: "FA8VWNN4PE",
      apiKey: "32c49e31158edbf93b2c5adee12fc9e7",
      indexName: "coredao",
      contextualSearch: true,
    },

    navbar: {
      title: "Core DAO",
      logo: {
        alt: "Core DAO Logo",
        src: "img/core.png",
        href: "/docs/intro",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "conceptsSidebar",
          position: "left",
          label: "Learn",
        },
        {
          type: "docSidebar",
          sidebarId: "developerSidebar",
          position: "left",
          label: "Build",
        },
        {
          type: "docSidebar",
          sidebarId: "nodeSidebar",
          position: "left",
          label: "Run a Node",
        },
        {
          type: "docSidebar",
          sidebarId: "stakingSidebar",
          position: "left",
          label: "Stake",
        },
        {
          type: "docSidebar",
          sidebarId: "apiSidebar",
          position: "left",
          label: "API",
        },
        {
          type: "docSidebar",
          sidebarId: "faqSidebar",
          position: "left",
          label: "FAQs",
        },
        {
          type: "docSidebar",
          sidebarId: "referenceSidebar",
          position: "left",
          label: "Reference",
        },
        {
          href: "https://github.com/coredao-org",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://coredao.org/explore/blog",
          label: "Blog",
          position: "right",
        },
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          label: "Core DAO",
          href: "https://coredao.org/",
        },
        {
          label: "Docs",
          to: "/docs/intro",
        },
        {
          label: "Explorer",
          href: "https://scan.coredao.org/",
        },
        {
          label: "Blog",
          href: "https://coredao.org/explore/blog",
        },
        {
          label: "Discord",
          href: "https://discord.com/invite/coredaoofficial",
        },
        {
          label: "X (Twitter)",
          href: "https://twitter.com/Coredao_Org",
        },
        {
          label: "Telegram",
          href: "https://t.me/CoreDAOTelegram",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Core DAO`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "solidity", "typescript", "json", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
