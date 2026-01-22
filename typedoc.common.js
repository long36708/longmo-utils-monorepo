export default {
  $schema: "https://typedoc.org/schema.json",
  tsconfig: "packages/common/tsconfig.json",
  entryPoints: ["packages/common/src/index.ts"],
  out: "docs/api/common",
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
  sort: ["source-order"],
  kindSortOrder: [
    "Reference",
    "Project",
    "Module",
    "Namespace",
    "Enum",
    "EnumMember",
    "Class",
    "Interface",
    "TypeAlias",
    "Constructor",
    "Property",
    "Method",
    "Function",
    "Variable"
  ],
  commentStyle: "jsdoc"
};
