/**
 * longmo-utils
 * Universal utility library combining browser, common, and node utilities
 *
 * Usage:
 * - Common utilities are available in all environments
 * - Browser utilities require DOM/BOM APIs
 * - Node utilities require Node.js environment
 *
 * Tree-shaking ensures only used code is included in your bundle
 */

// Export common utilities (available in all environments)
export * from '@longmo-utils/common'

// Export browser utilities (DOM/BOM APIs)
export * from '@longmo-utils/browser'

// Export node utilities (Node.js APIs)
export * from '@longmo-utils/node'
