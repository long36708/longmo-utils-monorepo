/**
 * File system utilities
 */

import { promises as fs } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

/**
 * Reads a JSON file
 */
export async function readJson<T = any>(filePath: string): Promise<T> {
  const content = await fs.readFile(filePath, 'utf-8')
  return JSON.parse(content)
}

/**
 * Writes data to a JSON file
 */
export async function writeJson(filePath: string, data: any): Promise<void> {
  const content = JSON.stringify(data, null, 2)
  await fs.writeFile(filePath, content, 'utf-8')
}

/**
 * Ensures a directory exists, creates if it doesn't
 */
export async function ensureDir(dirPath: string): Promise<void> {
  try {
    await fs.access(dirPath)
  } catch {
    await fs.mkdir(dirPath, { recursive: true })
  }
}

/**
 * Removes a file or directory recursively
 */
export async function remove(filePath: string): Promise<void> {
  try {
    const stat = await fs.stat(filePath)
    if (stat.isDirectory()) {
      const files = await fs.readdir(filePath)
      await Promise.all(
        files.map(async (file) => {
          const fullPath = join(filePath, file)
          await remove(fullPath)
        })
      )
      await fs.rmdir(filePath)
    } else {
      await fs.unlink(filePath)
    }
  } catch {
    // File doesn't exist, ignore
  }
}

/**
 * Copies a file or directory recursively
 */
export async function copy(src: string, dest: string): Promise<void> {
  const stat = await fs.stat(src)

  if (stat.isDirectory()) {
    await ensureDir(dest)
    const files = await fs.readdir(src)
    await Promise.all(
      files.map(async (file) => {
        const srcPath = join(src, file)
        const destPath = join(dest, file)
        await copy(srcPath, destPath)
      })
    )
  } else {
    await fs.mkdir(dirname(dest), { recursive: true })
    await fs.copyFile(src, dest)
  }
}

/**
 * Checks if a file or directory exists
 */
export async function exists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

/**
 * Reads a file if it exists, returns default value if it doesn't
 */
export async function readFileOrDefault<T>(
  filePath: string,
  defaultValue: T
): Promise<T> {
  const isExist = await exists(filePath)
  if (!isExist) {
    return defaultValue
  }
  return readJson<T>(filePath)
}

/**
 * Gets all files in a directory recursively
 */
export async function getFiles(
  dirPath: string,
  extensions?: string[]
): Promise<string[]> {
  const files: string[] = []

  async function traverse(currentPath: string) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true })

    for (const entry of entries) {
      const fullPath = join(currentPath, entry.name)

      if (entry.isDirectory()) {
        await traverse(fullPath)
      } else if (entry.isFile()) {
        if (!extensions || extensions.some((ext) => entry.name.endsWith(ext))) {
          files.push(fullPath)
        }
      }
    }
  }

  await traverse(dirPath)
  return files
}

/**
 * Gets the directory name of the current module
 */
export function getDirname(url: string): string {
  return dirname(fileURLToPath(url))
}
