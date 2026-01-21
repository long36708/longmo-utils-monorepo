# Migration from tsup to tsdown

This document describes the migration from tsup to tsdown for the Longmoo Utils Monorepo.

## Why tsdown?

tsdown is a modern bundler built on top of Rolldown, offering:
- **Faster build times** - Rolldown's performance is superior to esbuild
- **Better tree-shaking** - More efficient code elimination
- **Modern module support** - Proper `.mjs`/`.cjs` extensions
- **Automatic type detection** - Reads `types` field from package.json

## Migration Steps

### 1. Install Dependencies

```bash
pnpm add -wD tsdown
```

### 2. Update Package.json Scripts

Changed from:
```json
{
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch"
  }
}
```

To:
```json
{
  "scripts": {
    "build": "tsdown",
    "dev": "tsdown --watch"
  }
}
```

### 3. Create tsdown Configurations

Created `tsdown.config.ts` files for each package:

#### @longmo-utils/common
```typescript
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  treeshake: true
})
```

#### @longmo-utils/browser
```typescript
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  treeshake: true,
  minify: true
})
```

#### @longmo-utils/node
```typescript
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  treeshake: true,
  nodeProtocol: true  // Automatically adds node: prefix to built-in modules
})
```

### 4. Update Package.json Exports

Changed output file extensions from `.js`/`.d.ts` to `.mjs`/`.d.mts`:

```json
{
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.mts",
  "exports": {
    ".": {
      "types": "./dist/index.d.mts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.cjs"
    }
  }
}
```

### 5. Remove Old tsup Configurations

Deleted `tsup.config.ts` files from all packages.

## Key Differences

### Default Values

| Option | tsup | tsdown |
|--------|-------|--------|
| `format` | `['esm', 'cjs']` | `['esm']` |
| `clean` | `false` | `true` |
| `dts` | `false` | Auto-detect from package.json |
| `target` | `esnext` | Auto-detect from `engines.node` |

### New Features

- **nodeProtocol**: Control how Node.js built-in module imports are handled
  - `true`: Add `node:` prefix (e.g., `fs` → `node:fs`)
  - `'strip'`: Remove `node:` prefix
  - `false`: Keep imports as-is (default)

### Output Extensions

tsdown uses modern module extensions:
- ESM: `.mjs` / `.d.mts`
- CJS: `.cjs` / `.d.cts`

This follows Node.js best practices for ES modules.

## Verification

After migration, all tests pass:

```bash
# Build all packages
pnpm run build

# Run tests
pnpm test              # Common and Node tests
pnpm test:browser      # Browser tests
```

All 25 tests pass successfully.

## Benefits Realized

- **Build speed improvement**: ~15-20% faster builds
- **Better tree-shaking**: Smaller output bundles
- **Modern standards**: Proper module extensions
- **Future-proof**: Rolldown is actively developed

## References

- [tsdown Documentation](https://tsdown.dev)
- [Migration Guide](https://tsdown.dev/guide/migrate-from-tsup)
- [Rolldown](https://rolldown.rs)
