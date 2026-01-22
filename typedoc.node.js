export default {
  $schema: "https://typedoc.org/schema.json",
  tsconfig: "packages/node/tsconfig.json",
  entryPoints: ["packages/node/src/index.ts"],
  out: "docs/api/node",
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  readme: "none",
  disableSources: true,
  plugin: ["typedoc-plugin-markdown","typedoc-vitepress-theme"],
  theme: "markdown",
  "docsRoot": "./docs",
  sidebar:{
    pretty: true,
    collapsed: false
  },
  commentStyle: "jsdoc"
};
