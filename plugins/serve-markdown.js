/**
 * serve-markdown.js
 * Docusaurus plugin: serve raw markdown at [page-url].md
 * 
 * Enables AI agents to fetch clean markdown by appending .md to any docs URL.
 * Example: https://docs.coredao.org/docs/02-staking/overview.md
 * 
 * This matches the pattern used by NEAR Protocol (docs.near.org/path/to/page.md)
 */

const fs   = require("fs");
const path = require("path");

module.exports = function serveMarkdownPlugin(context) {
  return {
    name: "serve-markdown-plugin",

    configureWebpack(config, isServer) {
      if (isServer) return {};
      return {};
    },

    // Inject middleware into the dev server (yarn start)
    configureDevServer(app, server) {
      app.use((req, res, next) => {
        if (!req.path.endsWith(".md")) return next();

        // Strip .md to get the doc path
        const docPath = req.path
          .replace(/^\/docs\//, "")
          .replace(/\.md$/, "");

        const mdFile = path.join(context.siteDir, "docs", docPath + ".md");

        if (fs.existsSync(mdFile)) {
          res.setHeader("Content-Type", "text/markdown; charset=utf-8");
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.send(fs.readFileSync(mdFile, "utf-8"));
        } else {
          next();
        }
      });
    },

    // For production: generate static .md files alongside HTML
    async postBuild({ siteDir, outDir }) {
      const docsDir  = path.join(siteDir, "docs");
      const buildDir = path.join(outDir, "docs");

      function processDir(srcDir, buildBase) {
        if (!fs.existsSync(srcDir)) return;
        const entries = fs.readdirSync(srcDir, { withFileTypes: true });
        for (const entry of entries) {
          if (entry.isDirectory()) {
            processDir(path.join(srcDir, entry.name), path.join(buildBase, entry.name));
          } else if (entry.name.endsWith(".md")) {
            const targetDir  = buildBase;
            const targetFile = path.join(targetDir, entry.name);
            if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
            fs.copyFileSync(path.join(srcDir, entry.name), targetFile);
          }
        }
      }

      processDir(docsDir, buildDir);
      console.log("✅ Raw .md files copied to build output for AI agent consumption");
    },
  };
};
