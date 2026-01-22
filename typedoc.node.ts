import type {TypeDocOptions} from 'typedoc';
import type {PluginOptions} from 'typedoc-plugin-markdown';
// @ts-ignore
import type {Sidebar} from 'typedoc-vitepress-theme/dist/types';

type TypedocConfig = TypeDocOptions & PluginOptions & { docsRoot?: string, sidebar?: Sidebar };

export default {
    tsconfig: "packages/node/tsconfig.json",
    entryPoints: ["packages/node/src/index.ts"],
    out: "docs/api/node",
    excludePrivate: true,
    excludeProtected: true,
    excludeInternal: true,
    readme: "none",
    theme: "markdown",
    commentStyle: "jsdoc",
    groupOrder: ['Variables', 'Functions', 'Class'],
    categoryOrder: ['*', 'Other'],
    sort: ['source-order'],
    plugin: ["typedoc-plugin-markdown", "typedoc-vitepress-theme"],

    // typedoc-plugin-markdown options
    // ref: https://typedoc-plugin-markdown.org/docs/options
    entryFileName: 'index',
    hidePageTitle: false,
    useCodeBlocks: true,
    disableSources: true,
    indexFormat: 'table',
    parametersFormat: 'table',
    interfacePropertiesFormat: 'table',
    classPropertiesFormat: 'table',
    propertyMembersFormat: 'table',
    typeAliasPropertiesFormat: 'table',
    enumMembersFormat: 'table',

    // typedoc-vitepress-theme options
    // ref: https://typedoc-plugin-markdown.org/plugins/vitepress/options
    docsRoot: "./docs",
    sidebar: {
        pretty: true,
        collapsed: false
    }
} satisfies TypedocConfig;
