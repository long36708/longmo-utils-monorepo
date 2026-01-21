import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { getLocalStorage, setLocalStorage, removeLocalStorage } from '../src/storage'

describe('Storage Utils', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('LocalStorage', () => {
    it('should set and get values', () => {
      setLocalStorage('key', 'value')
      expect(getLocalStorage('key')).toBe('value')
    })

    it('should handle objects', () => {
      const data = { nested: { value: 123 } }
      setLocalStorage('obj', data)
      expect(getLocalStorage('obj')).toEqual(data)
    })

    it('should return null for non-existent keys', () => {
      expect(getLocalStorage('nonexistent')).toBeNull()
    })

    it('should remove values', () => {
      setLocalStorage('key', 'value')
      removeLocalStorage('key')
      expect(getLocalStorage('key')).toBeNull()
    })

    it('should handle arrays', () => {
      const arr = [1, 2, 3]
      setLocalStorage('arr', arr)
      expect(getLocalStorage('arr')).toEqual(arr)
    })
  })
})
