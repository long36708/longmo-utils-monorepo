/** @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').PluginOptions} */
export default {
    $schema: "https://typedoc.org/schema.json",
    tsconfig: "packages/browser/tsconfig.json",
    entryPoints: ["packages/browser/src/index.ts"],
    out: "docs/api/browser",
    excludePrivate: true,
    excludeProtected: true,
    excludeInternal: true,
    readme: "none",
    disableSources: true,
    plugin: ["typedoc-plugin-markdown"],
    theme: "markdown",
    commentStyle: "jsdoc"
};
