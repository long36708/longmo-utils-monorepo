# Longmoo Utils Monorepo

A high-quality TypeScript utility library with platform-specific packages, built with [tsdown](https://tsdown.dev) - a fast and modern bundler powered by Rolldown.

## 📚 Documentation

- **[📖 完整文档站点](./docs/)** - 在线文档和 API 参考
- **[🚀 快速开始](./DOCS_QUICKSTART.md)** - 文档系统快速开始指南
- **[⚙️ 配置方案](./DOCS_SETUP.md)** - VitePress + TypeDoc 完整配置文档
- **[📋 文档索引](./DOCUMENTATION.md)** - 文档系统总览

## 📦 Packages

| Package | Description | Environment |
|---------|-------------|------------|
| `@longmo-utils/common` | Universal utility functions without platform dependencies | Universal |
| `@longmo-utils/browser` | Browser-specific utilities with DOM/BOM dependencies | Browser |
| `@longmo-utils/node` | Node.js-specific utilities with file system dependencies | Node.js |

## 🚀 Installation

```bash
# Install the unified package (recommended for quick start)
npm install longmo-utils

# Or install individual packages
npm install @longmo-utils/common
npm install @longmo-utils/browser
npm install @longmo-utils/node
```

## 📖 Usage

### Unified Package (All-in-One)

```typescript
import { deepMerge, debounce, unique } from 'longmo-utils'
import { getLocalStorage, $, copyToClipboard } from 'longmo-utils'
import { readJson, getEnv, ensureDir } from 'longmo-utils'

// All utilities are available from a single package
const merged = deepMerge({ a: 1 }, { b: 2 })
const data = getLocalStorage('key')
const config = await readJson('./config.json')
```

**Benefits**: One installation, access to all utilities, full TypeScript support, tree-shaking for optimal bundle size.

### Common (Universal)

```typescript
import { deepMerge, debounce, unique } from '@longmo-utils/common'

// Deep merge objects
const merged = deepMerge({ a: 1 }, { b: 2 })

// Debounce function
const debouncedFn = debounce(() => console.log('Hello'), 300)

// Unique array
const uniqueArray = unique([1, 2, 2, 3, 3, 4])
```

### Browser

```typescript
import { getLocalStorage, $, copyToClipboard } from '@longmo-utils/browser'

// LocalStorage
const data = getLocalStorage('key')
setLocalStorage('key', { value: 123 })

// DOM
const element = $('.my-element')

// Clipboard
await copyToClipboard('Hello, World!')
```

### Node.js

```typescript
import { readJson, getEnv, ensureDir } from '@longmo-utils/node'

// File system
const data = await readJson('./config.json')

// Environment variables
const apiKey = getEnv('API_KEY')

// Directory operations
await ensureDir('./output')
```

## 🛠 Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Build specific package
pnpm build:common
pnpm build:browser
pnpm build:node

# Run tests
pnpm test              # Run common and node tests
pnpm test:browser      # Run browser tests

# Lint code
pnpm lint

# Generate API documentation
pnpm docs:api

# Start documentation dev server
pnpm docs:dev

# Build documentation site
pnpm docs
```

## 📁 Project Structure

```
longmoo-utils-monorepo/
├── packages/
│   ├── longmo-utils/                    # 🆕 Unified package (all utilities)
│   │   ├── src/
│   │   │   └── index.ts                 # Re-exports all packages
│   │   ├── dist/                        # Build output (ESM + CJS + Types)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── README.md
│   │
│   ├── common/                          # Universal utilities
│   │   ├── src/
│   │   │   ├── array/                  # Array utilities
│   │   │   │   └── index.ts            # unique, groupBy, chunk, shuffle, range
│   │   │   ├── object/                 # Object utilities
│   │   │   │   └── index.ts            # deepMerge, deepClone, deepEqual, get, set
│   │   │   ├── function/               # Function utilities
│   │   │   │   └── index.ts            # debounce, throttle, memoize, partial
│   │   │   ├── string/                 # String utilities
│   │   │   │   └── index.ts            # camelCase, kebabCase, snakeCase, etc.
│   │   │   └── index.ts                # Main entry point
│   │   ├── test/
│   │   │   └── array.test.ts           # Test cases
│   │   ├── dist/                        # Build output (ESM + CJS + Types)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsup.config.ts
│   │   └── .npmignore
│   │
│   ├── browser/                         # Browser-specific utilities
│   │   ├── src/
│   │   │   ├── storage/                # Storage utilities
│   │   │   │   └── index.ts            # get/set/remove localStorage & sessionStorage
│   │   │   ├── dom/                    # DOM utilities
│   │   │   │   └── index.ts            # $, $$, createElement, class manipulation
│   │   │   ├── network/                # Network utilities
│   │   │   │   └── index.ts            # fetch, clipboard, online status
│   │   │   └── index.ts                # Main entry point
│   │   ├── test/
│   │   │   ├── storage.test.ts         # Test cases (happy-dom)
│   │   │   └── vitest.config.ts        # Browser test configuration
│   │   ├── dist/                        # Build output (ESM + Types)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsup.config.ts
│   │   └── .npmignore
│   │
│   └── node/                            # Node.js-specific utilities
│       ├── src/
│       │   ├── fs/                     # File system utilities
│       │   │   └── index.ts            # readJson, writeJson, ensureDir, copy, etc.
│       │   ├── env/                    # Environment utilities
│       │   │   └── index.ts            # getEnv, getEnvBool, isDevelopment, etc.
│       │   ├── process/                # Process utilities
│       │   │   └── index.ts            # getCwd, getPid, getPlatform, etc.
│       │   └── index.ts                # Main entry point
│       ├── test/
│       │   └── env.test.ts             # Test cases
│       ├── dist/                        # Build output (ESM + CJS + Types)
│       ├── package.json
│       ├── tsconfig.json
│       ├── tsup.config.ts
│       └── .npmignore
│
├── scripts/
│   ├── setup.sh                         # Linux/macOS setup script
│   └── setup.ps1                        # Windows setup script
│
├── vitest.config.ts                     # Common and Node test configuration
├── vitest.browser.config.ts             # Browser test configuration
├── tsconfig.json                        # Root TypeScript configuration
├── pnpm-workspace.yaml                  # Monorepo workspace configuration
├── package.json                         # Root package configuration
├── .gitignore                           # Git ignore rules
├── .npmrc                               # npm/pnpm configuration
├── eslint.config.js                     # ESLint configuration
└── README.md                            # This file
```

### Package Details

#### longmo-utils (Unified)
- **Build Output**: ESM (`*.mjs`) + CJS (`*.cjs`) + TypeScript definitions (`*.d.mts`)
- **Dependencies**: @longmo-utils/common, @longmo-utils/browser, @longmo-utils/node
- **Tree-shaking**: Fully supported (only used code is bundled)
- **Build Tool**: tsdown
- **Best for**: Quick prototyping, projects needing utilities from multiple packages

#### @longmo-utils/common
- **Build Output**: ESM (`*.mjs`) + CJS (`*.cjs`) + TypeScript definitions (`*.d.mts`, `*.d.cts`)
- **Dependencies**: None (pure JavaScript/TypeScript)
- **Test Environment**: Node.js
- **Build Tool**: tsdown

#### @longmo-utils/browser
- **Build Output**: ESM (`*.mjs`) + TypeScript definitions (`*.d.mts`) - minified
- **Dependencies**: Browser APIs (DOM, BOM, Fetch, Clipboard)
- **Test Environment**: happy-dom
- **Build Tool**: tsdown

#### @longmo-utils/node
- **Build Output**: ESM (`*.mjs`) + CJS (`*.cjs`) + TypeScript definitions (`*.d.mts`, `*.d.cts`)
- **Dependencies**: Node.js built-in modules (fs, path, process)
- **Test Environment**: Node.js
- **Build Tool**: tsdown

## 🏗 Build System

This project uses [tsdown](https://tsdown.dev), a modern bundler built on top of Rolldown, for fast and efficient builds. Migration from tsup was completed successfully with the following benefits:

- **Faster build times** thanks to Rolldown's performance
- **Better tree-shaking** and code splitting
- **Automatic type definition generation** based on package.json configuration
- **Modern module output** with proper `.mjs`/`.cjs` extensions

## 📄 License

MIT
