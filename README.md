# Core DAO Documentation — Restructured

Official documentation for the [Core blockchain](https://coredao.org), rebuilt with Docusaurus v3, GitHub Pages deployment, and AI-ready structure.

## 🗂️ Structure

```
docs/
├── intro.md                        # Root landing page
├── 01-concepts/                    # Protocol concepts & theory
│   ├── 01-introduction/
│   ├── 02-core-concepts/
│   │   ├── satoshi-plus-consensus/
│   │   └── dual-staking/
│   ├── 03-core-token/
│   ├── 04-liquid-staking/
│   ├── 05-rev-plus/
│   ├── 06-security/
│   └── governance.md
├── 02-staking/                     # BTC staking, CORE staking, dual staking
│   └── btc-staking/
│       └── ledger-guides/
├── 03-developer/                   # Dev tools, contracts, bridges
├── 04-node-operator/               # Full nodes, validators, slashing
│   ├── config/
│   ├── validator/
│   ├── slashing/
│   ├── maintenance/
│   └── sync/
├── 05-api/                         # Core Scan API + Staking API
│   └── core-scan-api/
├── 06-faqs/                        # 9 FAQ files
└── 07-reference/                   # Glossary + network parameters
    ├── glossary.md
    └── network-params.md
```

## ✨ What Changed

| Feature | Before | After |
|---------|--------|-------|
| Folder structure | Flat `Learn/`, `Dev-Guide/`, etc. | 7 numbered sections `01-concepts/` → `07-reference/` |
| Frontmatter | 2–3 fields | 12 fields (id, title, label, position, description, keywords, tags, hide_toc, last_update, custom_edit_url, pagination_next, pagination_prev) |
| AI discovery | None | `static/llms.txt` per [llmstxt.org](https://llmstxt.org) |
| PWA | None | `static/manifest.json` |
| Reference | None | `glossary.md` + `network-params.md` |
| CI | None | `.github/workflows/ai-docs-check.yml` (6 jobs) |
| Navbar | 6 items | 7 items (+ Reference) |
| Redirects | ~60 rules | ~80 rules (all legacy + new paths) |

## 🚀 Getting Started

```bash
npm install
npm start          # dev server at http://localhost:3000
npm run build      # production build
npm run deploy     # deploy to GitHub Pages
```

## 🤖 CI Jobs (`ai-docs-check.yml`)

1. **Frontmatter Check** — validates all 12 required YAML fields on every `.md`
2. **Link Check** — builds site and checks for broken links / 404s
3. **LLMs.txt Check** — ensures `static/llms.txt` exists and has required sections
4. **Markdown Lint** — runs markdownlint with Core-specific rule config
5. **Spell Check** — cspell with Core-domain word allowlist
6. **Summary** — posts a ✅/❌ table comment on every PR

## 📋 Frontmatter Template

```yaml
---
id: page-slug
title: "Page Title"
sidebar_label: "Short Label"
sidebar_position: 1
description: "One-line description for SEO and AI summaries."
keywords: ["keyword1", "keyword2", "keyword3"]
tags: ["tag1", "tag2"]
hide_table_of_contents: false
last_update:
  date: "2025-03-03"
  author: "CoreDAO"
custom_edit_url: null
pagination_next: null
pagination_prev: null
---
```

## 🔗 Links

- [Live Docs](https://docs.coredao.org)
- [Core Blockchain](https://coredao.org)
- [Whitepaper](https://whitepaper.coredao.org)
- [GitHub](https://github.com/coredao-org)
