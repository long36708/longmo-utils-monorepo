# Longmoo Utils Monorepo

A high-quality TypeScript utility library with platform-specific packages.

## 📦 Packages

| Package | Description | Environment |
|---------|-------------|------------|
| `@longmo-utils/common` | Universal utility functions without platform dependencies | Universal |
| `@longmo-utils/browser` | Browser-specific utilities with DOM/BOM dependencies | Browser |
| `@longmo-utils/node` | Node.js-specific utilities with file system dependencies | Node.js |

## 🚀 Installation

```bash
# Install the universal package
npm install @longmo-utils/common

# Install browser utilities
npm install @longmo-utils/browser

# Install Node.js utilities
npm install @longmo-utils/node
```

## 📖 Usage

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
```

## 📁 Project Structure

```
longmoo-utils-monorepo/
├── packages/
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

#### @longmo-utils/common
- **Build Output**: ESM + CJS + TypeScript definitions
- **Dependencies**: None (pure JavaScript/TypeScript)
- **Test Environment**: Node.js

#### @longmo-utils/browser
- **Build Output**: ESM + TypeScript definitions (minified)
- **Dependencies**: Browser APIs (DOM, BOM, Fetch, Clipboard)
- **Test Environment**: happy-dom

#### @longmo-utils/node
- **Build Output**: ESM + CJS + TypeScript definitions
- **Dependencies**: Node.js built-in modules (fs, path, process)
- **Test Environment**: Node.js

## 📄 License

MIT
