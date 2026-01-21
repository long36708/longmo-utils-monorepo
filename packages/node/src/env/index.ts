/**
 * Environment variables utilities
 */

/**
 * Gets an environment variable
 */
export function getEnv(key: string, defaultValue?: string): string {
  return process.env[key] || defaultValue || ''
}

/**
 * Gets a boolean environment variable
 */
export function getEnvBool(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key]?.toLowerCase()
  if (value === 'true' || value === '1') return true
  if (value === 'false' || value === '0') return false
  return defaultValue
}

/**
 * Gets a number environment variable
 */
export function getEnvNumber(key: string, defaultValue: number = 0): number {
  const value = process.env[key]
  const parsed = value ? parseInt(value, 10) : NaN
  return isNaN(parsed) ? defaultValue : parsed
}

/**
 * Gets the current environment (development, production, test)
 */
export function getEnvMode(): string {
  return process.env.NODE_ENV || 'development'
}

/**
 * Checks if the current environment is development
 */
export function isDevelopment(): boolean {
  return getEnvMode() === 'development'
}

/**
 * Checks if the current environment is production
 */
export function isProduction(): boolean {
  return getEnvMode() === 'production'
}

/**
 * Checks if the current environment is test
 */
export function isTest(): boolean {
  return getEnvMode() === 'test'
}

/**
 * Checks if an environment variable is set
 */
export function hasEnv(key: string): boolean {
  return typeof process.env[key] !== 'undefined'
}
