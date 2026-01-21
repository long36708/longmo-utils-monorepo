/**
 * Process utilities
 */

/**
 * Gets the current working directory
 */
export function getCwd(): string {
  return process.cwd()
}

/**
 * Gets the process ID
 */
export function getPid(): number {
  return process.pid
}

/**
 * Gets the platform (win32, darwin, linux)
 */
export function getPlatform(): NodeJS.Platform {
  return process.platform
}

/**
 * Checks if the platform is Windows
 */
export function isWindows(): boolean {
  return process.platform === 'win32'
}

/**
 * Checks if the platform is macOS
 */
export function isMac(): boolean {
  return process.platform === 'darwin'
}

/**
 * Checks if the platform is Linux
 */
export function isLinux(): boolean {
  return process.platform === 'linux'
}

/**
 * Gets the Node.js version
 */
export function getNodeVersion(): string {
  return process.version
}

/**
 * Exits the process
 */
export function exit(code: number = 0): never {
  process.exit(code)
}

/**
 * Gets the memory usage information
 */
export function getMemoryUsage(): NodeJS.MemoryUsage {
  return process.memoryUsage()
}

/**
 * Gets the uptime in seconds
 */
export function getUptime(): number {
  return process.uptime()
}
