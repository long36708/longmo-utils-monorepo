# Getting Started

This guide will help you get started with Longmoo Utils.

## Installation

Choose the package that fits your needs:

```bash
# For universal utilities (works everywhere)
pnpm add @longmo-utils/common

# For browser-specific utilities
pnpm add @longmo-utils/browser

# For Node.js-specific utilities
pnpm add @longmo-utils/node
```

## Importing

```typescript
// Named imports (recommended for tree-shaking)
import { unique, debounce, camelCase } from '@longmo-utils/common'

// Namespace import
import * as utils from '@longmo-utils/common'
```

## Example Usage

### Array Utilities

```typescript
import { unique, chunk, groupBy, range, shuffle } from '@longmo-utils/common'

// Remove duplicates
const uniqueArray = unique([1, 2, 2, 3, 3, 4])
// => [1, 2, 3, 4]

// Chunk array
const chunked = chunk([1, 2, 3, 4, 5, 6], 2)
// => [[1, 2], [3, 4], [5, 6]]

// Group by key
const grouped = groupBy(
  [
    { name: 'Alice', type: 'user' },
    { name: 'Bob', type: 'admin' },
    { name: 'Charlie', type: 'user' }
  ],
  (item) => item.type
)
// => { user: [{ name: 'Alice', type: 'user' }, { name: 'Charlie', type: 'user' }], admin: [{ name: 'Bob', type: 'admin' }] }

// Create range
const numbers = range(1, 10, 2)
// => [1, 3, 5, 7, 9]

// Shuffle array
const shuffled = shuffle([1, 2, 3, 4, 5])
// => [3, 1, 5, 2, 4] (random)
```

### Object Utilities

```typescript
import { deepMerge, deepClone, deepEqual, get, set } from '@longmo-utils/common'

// Deep merge objects
const merged = deepMerge(
  { a: 1, b: { c: 2 } },
  { b: { d: 3 }, e: 4 }
)
// => { a: 1, b: { c: 2, d: 3 }, e: 4 }

// Deep clone
const cloned = deepMerge({ a: { b: { c: 1 } } })
// => { a: { b: { c: 1 } } }

// Deep equality check
const isEqual = deepEqual({ a: 1 }, { a: 1 })
// => true

// Get nested value
const value = get({ user: { profile: { name: 'Alice' } } }, 'user.profile.name')
// => 'Alice'

// Set nested value
const obj = {}
set(obj, 'user.profile.name', 'Alice')
// => { user: { profile: { name: 'Alice' } } }
```

### Function Utilities

```typescript
import { debounce, throttle, memoize, partial } from '@longmo-utils/common'

// Debounce
const debouncedSearch = debounce((query: string) => {
  console.log('Searching:', query)
}, 300)

debouncedSearch('hello')
debouncedSearch('hello world') // Only this one will execute

// Throttle
const throttledScroll = throttle(() => {
  console.log('Scrolled')
}, 100)

window.addEventListener('scroll', throttledScroll)

// Memoize
const memoizedFib = memoize((n: number): number => {
  return n <= 1 ? n : memoizedFib(n - 1) + memoizedFib(n - 2)
})

memoizedFib(10) // Calculated once

// Partial application
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`
const sayHello = partial(greet, 'Hello')
sayHello('World') // => 'Hello, World!'
```

### String Utilities

```typescript
import { camelCase, kebabCase, snakeCase, truncate, capitalize, isEmpty, random } from '@longmo-utils/common'

// Case conversion
camelCase('hello-world') // => 'helloWorld'
kebabCase('helloWorld') // => 'hello-world'
snakeCase('helloWorld') // => 'hello_world'

// Truncate
truncate('Long string that needs truncating', 10)
// => 'Long strin...'

// Capitalize
capitalize('hello') // => 'Hello'

// Check empty
isEmpty('   ') // => true
isEmpty('text') // => false

// Random string
random(8) // => 'xK7pN2mQ'
```

## Next Steps

- Explore the [API Reference](/api/common/) for detailed documentation
- Check out examples for your specific platform
- Learn best practices for using these utilities
