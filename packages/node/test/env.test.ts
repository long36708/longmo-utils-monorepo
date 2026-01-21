import { describe, it, expect, beforeEach } from 'vitest'
import { getEnv, getEnvBool, getEnvNumber, isDevelopment, isProduction } from '../src/env'

describe('Env Utils', () => {
  beforeEach(() => {
    // Save original env
    const originalEnv = process.env.NODE_ENV
    delete process.env.NODE_ENV
    process.env.NODE_ENV = originalEnv
  })

  describe('getEnv', () => {
    it('should get environment variable', () => {
      process.env.TEST_VAR = 'test-value'
      expect(getEnv('TEST_VAR')).toBe('test-value')
    })

    it('should return default value when not set', () => {
      expect(getEnv('NONEXISTENT', 'default')).toBe('default')
    })

    it('should return empty string when not set and no default', () => {
      expect(getEnv('NONEXISTENT')).toBe('')
    })
  })

  describe('getEnvBool', () => {
    it('should parse boolean values', () => {
      process.env.BOOL_TRUE = 'true'
      process.env.BOOL_FALSE = 'false'
      process.env.BOOL_ONE = '1'
      process.env.BOOL_ZERO = '0'

      expect(getEnvBool('BOOL_TRUE')).toBe(true)
      expect(getEnvBool('BOOL_FALSE')).toBe(false)
      expect(getEnvBool('BOOL_ONE')).toBe(true)
      expect(getEnvBool('BOOL_ZERO')).toBe(false)
    })

    it('should return default value for invalid input', () => {
      expect(getEnvBool('NONEXISTENT', true)).toBe(true)
    })
  })

  describe('getEnvNumber', () => {
    it('should parse number values', () => {
      process.env.NUMBER = '42'
      expect(getEnvNumber('NUMBER')).toBe(42)
    })

    it('should return default value for invalid input', () => {
      expect(getEnvNumber('NONEXISTENT', 10)).toBe(10)
    })
  })

  describe('Environment checks', () => {
    it('should check development environment', () => {
      process.env.NODE_ENV = 'development'
      expect(isDevelopment()).toBe(true)
      expect(isProduction()).toBe(false)
    })

    it('should check production environment', () => {
      process.env.NODE_ENV = 'production'
      expect(isProduction()).toBe(true)
      expect(isDevelopment()).toBe(false)
    })
  })
})
