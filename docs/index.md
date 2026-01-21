---
home: true
heroText: Longmoo Utils
tagline: High-quality TypeScript utility library
actionText: Get Started →
actionLink: /guide/
features:
  - title: Fully Typed
    details: Built with TypeScript for excellent type inference and autocompletion
  - title: Zero Dependencies
    details: No external runtime dependencies for faster load times
  - title: Tree-shakeable
    details: Only bundle what you use with ES modules
  - title: Platform-specific
    details: Optimized packages for Common, Browser, and Node.js environments
  - title: Well Tested
    details: Comprehensive test coverage with Vitest
  - title: Easy to Use
    details: Simple and intuitive API design
footer: MIT License | Copyright © 2025 Longmoo
---

## Quick Start

### Installation

```bash
# Install the package you need
pnpm add @longmo-utils/common
# or
pnpm add @longmo-utils/browser
# or
pnpm add @longmo-utils/node
```

### Usage

```typescript
import { unique, debounce, camelCase } from '@longmo-utils/common'

// Array utilities
const uniqueArray = unique([1, 2, 2, 3, 3, 4])

// Function utilities
const debouncedFn = debounce(() => console.log('Hello'), 300)

// String utilities
const result = camelCase('hello-world')
```

## Documentation

- [Guide](/guide/) - Get started with the library
- [API Reference - Common](/api/common/) - Common utilities API
- [API Reference - Browser](/api/browser/) - Browser utilities API
- [API Reference - Node](/api/node/) - Node.js utilities API
