import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * CoreDAO Docs — Consolidated Sidebar
 * 7 sections, zero duplication, content grouped by category
 */
const sidebars: SidebarsConfig = {

  // ── 01 CONCEPTS ─────────────────────────────────────────────────────────────
  conceptsSidebar: [
    {
      type: "category",
      label: "Core Blockchain",
      link: { type: "doc", id: "intro" },
      items: [
        {
          type: "category",
          label: "Introduction",
          collapsed: false,
          items: [
            "concepts/introduction/core-101",
            "concepts/introduction/why-core",
            "concepts/introduction/quickstart",
            { type: "link", label: "Whitepaper", href: "https://whitepaper.coredao.org/" },
          ],
        },
        {
          type: "category",
          label: "Satoshi Plus Consensus",
          link: {
            type: "generated-index",
            title: "Satoshi Plus Consensus",
            description: "How Core's hybrid Bitcoin + PoS consensus mechanism works.",
            slug: "/category/satoshi-plus",
          },
          items: [
            "concepts/core-concepts/satoshi-plus-overview",
            "concepts/core-concepts/architecture",
            "concepts/core-concepts/delegated-proof-of-work",
            "concepts/core-concepts/self-custodial-bitcoin-staking",
            "concepts/core-concepts/delegated-proof-of-stake",
            "concepts/core-concepts/satoshi-plus-validator-election",
            "concepts/core-concepts/rewards",
            // "concepts/core-concepts/security-model",
          ],
        },
        {
          type: "category",
          label: "CORE Token",
          items: [
            "concepts/core-token/core-token-overview",
            "concepts/core-token/tokenomics",
            "concepts/core-token/core-value-creation",
          ],
        },
        {
          type: "category",
          label: "Liquid Staking (stCORE)",
          link: {
            type: "generated-index",
            title: "Liquid Staking on Core",
            description: "Stake CORE and receive stCORE for use in DeFi.",
            slug: "/category/liquid-staking",
          },
          items: [
            "concepts/liquid-staking/stCore/stcore-overview",
            "concepts/liquid-staking/stCore/design",
            "concepts/liquid-staking/stCore/how-to-liquid-stake-stcore",
          ],
        },
        {
          type: "category",
          label: "Rev+ Revenue Sharing",
          items: [
            "concepts/rev-plus/rev-plus-overview",
            "concepts/rev-plus/protocol-design",
            "concepts/rev-plus/rev-plus-compatibility-guide",
            "concepts/rev-plus/track-and-receive-rewards",
          ],
        },
        "concepts/governance",
        {
          type: "category",
          label: "Security",
          items: [
            "concepts/security/core-codebase-audits",
            "concepts/security/reporting-security-vulnerability",
            "concepts/security/reporting-spam",
            "concepts/security/reporting-security-incidents",
          ],
        },
      ],
    },
  ],

  // ── 02 STAKING ──────────────────────────────────────────────────────────────
  stakingSidebar: [
    {
      type: "category",
      label: "Stake & Delegate",
      link: {
        type: "generated-index",
        title: "Stake & Delegate on Core",
        description: "All staking guides: BTC, CORE, dual staking, and hash power delegation.",
        slug: "/staking",
      },
      items: [
        "staking/staking-overview",
        "staking/delegators",
        {
          type: "category",
          label: "Bitcoin (BTC) Staking",
          link: {
            type: "generated-index",
            title: "Non-Custodial Bitcoin Staking",
            description: "Stake BTC to earn CORE rewards — no bridging required.",
            slug: "/staking/bitcoin",
          },
          items: [
            "staking/btc-staking/btc-staking-overview",
            "staking/btc-staking/transaction-design",
            "staking/btc-staking/btc-staking-how-it-works",
            "staking/btc-staking/staking-bitcoin-with-core",
            "staking/btc-staking/redeem-bitcoin-claim-core",
            "staking/btc-staking/faqs-on-self-custodial-bitcoin-staking",
            "staking/btc-staking/btc-staking-transaction-decoder",
            {
              type: "category",
              label: "Using Ledger",
              link: {
                type: "generated-index",
                title: "BTC Staking with Ledger Hardware Wallet",
                slug: "/staking/bitcoin/ledger",
              },
              items: [
                {
                  type: "category",
                  label: "Mainnet",
                  items: [
                    "staking/btc-staking/ledger-guides/mainnet/staking-btc-with-core",
                    "staking/btc-staking/ledger-guides/mainnet/redeeming-timelock-expired-btc",
                    "staking/btc-staking/ledger-guides/mainnet/redelegating-staked-btc",
                  ],
                },
                {
                  type: "category",
                  label: "Testnet",
                  items: [
                    "staking/btc-staking/ledger-guides/testnet/ledger-btc-staking-testnet",
                    "staking/btc-staking/ledger-guides/testnet/redeeming-staked-btc",
                    "staking/btc-staking/ledger-guides/testnet/redelegating-timelock-expired-btc",
                  ],
                },
              ],
            },
          ],
        },
        {
          type: "category",
          label: "CORE Token Staking",
          link: {
            type: "generated-index",
            title: "Stake CORE Tokens",
            slug: "/staking/core",
          },
          items: [
            "staking/core-staking/using-evm-wallets",
            "staking/core-staking/using-ledger-hardware-wallet",
          ],
        },
        {
          type: "category",
          label: "Dual Staking",
          link: {
            type: "generated-index",
            title: "Dual Staking",
            description: "Stake BTC + CORE simultaneously for boosted yield tiers.",
            slug: "/staking/dual",
          },
          items: [
            "staking/dual-staking/dual-staking-overview",
            "staking/dual-staking/tier-adjustment-system",
            "staking/dual-staking/how-it-works",
            "staking/dual-staking/dual-staking-guide",
            "staking/dual-staking/dual-staking-integration-guide",
            "staking/dual-staking/how-to-dual-stake",
          ],
        },
        "staking/bitcoin-hash-power-delegation",
      ],
    },
  ],

  // ── 03 DEVELOPER ────────────────────────────────────────────────────────────
  developerSidebar: [
    {
      type: "category",
      label: "Build on Core",
      link: {
        type: "generated-index",
        title: "Developer Documentation",
        description: "Everything you need to build dApps and smart contracts on Core.",
        slug: "/developer",
      },
      items: [
        {
          type: "category",
          label: "Network & RPC",
          link: {
            type: "generated-index",
            title: "Network Configuration & RPC",
            slug: "/developer/network",
          },
          items: [
            "developer/network/network-configuration",
            "developer/network/rpc-providers",
            "developer/network/connect-through-cli",
            "developer/network/connect-through-postman",
            "developer/network/add-core-network",
          ],
        },
        {
          type: "category",
          label: "Dev Tooling",
          link: {
            type: "generated-index",
            title: "Developer Tooling",
            slug: "/developer/tooling",
          },
          items: [
            "developer/tooling/tools-and-resources",
            "developer/tooling/faucet",
            "developer/tooling/block-explorer",
            "developer/tooling/ecosystem-contracts",
          ],
        },
        {
          type: "category",
          label: "Smart Contracts",
          link: {
            type: "generated-index",
            title: "Smart Contract Development",
            description: "Guides for writing, deploying, and verifying smart contracts on Core.",
            slug: "/developer/contracts",
          },
          items: [
            "developer/smart-contracts/smart-contract-guidelines",
            "developer/smart-contracts/using-remix",
            "developer/smart-contracts/using-hardhat",
            "developer/smart-contracts/using-foundry",
            "developer/smart-contracts/erc-20-tokens",
            "developer/smart-contracts/erc-721-tokens",
            "developer/smart-contracts/contract-verification",
          ],
        },
        {
          type: "category",
          label: "dApp Development",
          items: [
            "developer/dapps/build-dapp-on-core",
            "developer/dapps/full-stack-dapp-toolkit",
          ],
        },
        {
          type: "category",
          label: "Indexing & Subgraphs",
          items: [
            "developer/indexing/core-subgraph-overview",
            "developer/indexing/core-subgraph-tutorial",
          ],
        },
        {
          type: "category",
          label: "Bridges & Cross-Chain",
          link: {
            type: "generated-index",
            title: "Bridges & Cross-Chain",
            slug: "/developer/bridges",
          },
          items: [
            "developer/bridges/bridging-tokens-using-layerzero",
            "developer/bridges/core-bridge-resources",
            "developer/bridges/chainlink-ccip-guide",
            "developer/bridges/thirdweb-universal-bridge",
          ],
        },
      ],
    },
  ],

  // ── 04 NODE OPERATOR ────────────────────────────────────────────────────────
  nodeSidebar: [
    {
      type: "category",
      label: "Run a Node",
      link: {
        type: "generated-index",
        title: "Node Operations",
        description: "Run, configure, and maintain Core full nodes and validators.",
        slug: "/nodes",
      },
      items: [
        "node-operator/types-of-nodes",
        // {
        //   type: "category",
        //   label: "Running a Node",
        //   link: {
        //     type: "generated-index",
        //     title: "Running a Core Node",
        //     slug: "/nodes/running",
        //   },
        //   items: [
        //     "node-operator/running/on-mainnet",
        //     "node-operator/running/on-testnet",
        //   ],
        // },
        {
          type: "category",
          label: "Node Configuration",
          link: {
            type: "generated-index",
            title: "Node Configuration Reference",
            slug: "/nodes/config",
          },
          items: [
            "node-operator/config/full-node",
            "node-operator/config/validator-node",
            "node-operator/config/archive-node",
            "node-operator/config/rpc-node",
            "node-operator/config/snapshot-node",
          ],
        },
        {
          type: "category",
          label: "Validators",
          link: {
            type: "generated-index",
            title: "Validator Operations",
            slug: "/nodes/validators",
          },
          items: [
            "node-operator/validator/validator-overview",
            "node-operator/validator/setup-validator-node",
            "node-operator/validator/node-validator-election",
            "node-operator/validator/register-validator-node",
            "node-operator/validator/validator-rewards",
          ],
        },
        {
          type: "category",
          label: "Slashing",
          items: [
            "node-operator/slashing/slashing-overview",
            "node-operator/slashing/slashing-fee",
          ],
        },
        {
          type: "category",
          label: "Maintenance & Sync",
          items: [
            "node-operator/maintenance/node-maintenance",
            "node-operator/maintenance/upgrading-geth",
            "node-operator/maintenance/syncing-core-nodes",
          ],
        },
      ],
    },
  ],

  // ── 05 API ──────────────────────────────────────────────────────────────────
  // Core Scan API:  api.md + tutorials/ + endpoints/ (OpenAPI-generated playground)
  // Staking API:    staking-api/ (OpenAPI-generated playground)
  apiSidebar: [
    {
      type: "category",
      label: "API Reference",
      link: {
        type: "generated-index",
        title: "Core API Documentation",
        description: "Core Scan API and Staking API interactive playgrounds and tutorials.",
        slug: "/api",
      },
      items: [
        {
          type: "category",
          label: "Core Scan API",
          link: {
            type: "generated-index",
            title: "Core Scan API",
            slug: "/api/core-scan",
          },
          items: [
            "api/core-scan-api/core-scan-openapi",
            {
              type: "category",
              label: "Getting Started",
              items: [
                "api/core-scan-api/tutorials/creating-an-account",
                "api/core-scan-api/tutorials/generate-an-api-key",
                "api/core-scan-api/tutorials/common-error-messages",
              ],
            },
            {
              type: "category",
              label: "Mainnet Endpoints",
              link: {
                type: "generated-index",
                title: "Core Scan API — Mainnet",
                description: "Interactive OpenAPI playground for Core Mainnet endpoints.",
                slug: "/api/core-scan/mainnet",
              },
              items: [require("./docs/05-api/core-scan-api/endpoints/mainnet/sidebar.ts")],
            },
            {
              type: "category",
              label: "Testnet Endpoints",
              link: {
                type: "generated-index",
                title: "Core Scan API — Testnet2",
                description: "Interactive OpenAPI playground for Core Testnet2 endpoints.",
                slug: "/api/core-scan/testnet",
              },
              items: [require("./docs/05-api/core-scan-api/endpoints/testnet/sidebar.ts")],
            },
          ],
        },
        {
          type: "category",
          label: "Staking API",
          link: {
            type: "generated-index",
            title: "Staking API",
            description: "Interactive OpenAPI playground for Core Staking API endpoints.",
            slug: "/api/staking",
          },
          items: [
            {
              type: "category",
              label: "Mainnet",
              link: {
                type: "generated-index",
                title: "Staking API — Mainnet",
                slug: "/api/staking/mainnet",
              },
              items: [require("./docs/05-api/staking-api/mainnet/sidebar.ts")],
            },
            {
              type: "category",
              label: "Testnet",
              link: {
                type: "generated-index",
                title: "Staking API — Testnet2",
                slug: "/api/staking/testnet",
              },
              items: [require("./docs/05-api/staking-api/testnet/sidebar.ts")],
            },
          ],
        },
      ],
    },
  ],

  // ── 06 FAQs ──────────────────────────────────────────────────────────────────
  faqSidebar: [
    {
      type: "category",
      label: "FAQs",
      link: {
        type: "generated-index",
        title: "Frequently Asked Questions",
        description: "Answers to common questions about Core blockchain.",
        slug: "/faqs",
      },
      items: [
        "faqs/core-blockchain-faqs",
        "faqs/self-custodial-btc-staking-faqs",
        "faqs/dual-staking-faqs",
        "faqs/liquid-staking-stcore-faqs",
        "faqs/delegator-faqs",
        "faqs/core-validator-faqs",
        "faqs/core-nodes-faqs",
        "faqs/core-scan-api-faqs",
        "faqs/hardware-wallet-integration-faqs",
      ],
    },
  ],

  // ── 07 REFERENCE ─────────────────────────────────────────────────────────────
  referenceSidebar: [
    {
      type: "category",
      label: "Reference",
      link: {
        type: "generated-index",
        title: "Reference",
        description: "Glossary, network parameters, and technical reference.",
        slug: "/reference",
      },
      items: [
        "reference/glossary",
        "reference/network-params",
      ],
    },
  ],
};

export default sidebars;
