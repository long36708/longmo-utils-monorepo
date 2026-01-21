import { describe, it, expect } from 'vitest'
import { unique, groupBy, chunk, shuffle, range } from '../src/array'

describe('Array Utils', () => {
  describe('unique', () => {
    it('should remove duplicate values', () => {
      expect(unique([1, 2, 2, 3, 3, 4])).toEqual([1, 2, 3, 4])
    })

    it('should work with strings', () => {
      expect(unique(['a', 'b', 'a', 'c'])).toEqual(['a', 'b', 'c'])
    })

    it('should return empty array for empty input', () => {
      expect(unique([])).toEqual([])
    })
  })

  describe('groupBy', () => {
    it('should group array elements by key', () => {
      const users = [
        { name: 'Alice', role: 'admin' },
        { name: 'Bob', role: 'user' },
        { name: 'Charlie', role: 'admin' }
      ]
      const result = groupBy(users, (user) => user.role)
      expect(result.admin).toHaveLength(2)
      expect(result.user).toHaveLength(1)
    })
  })

  describe('chunk', () => {
    it('should split array into chunks', () => {
      expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    })

    it('should return single chunk for small arrays', () => {
      expect(chunk([1, 2], 5)).toEqual([[1, 2]])
    })
  })

  describe('shuffle', () => {
    it('should shuffle array', () => {
      const arr = [1, 2, 3, 4, 5]
      const result = shuffle(arr)
      expect(result).toHaveLength(5)
      expect(result).toContain(1)
      expect(result).toContain(5)
    })

    it('should not mutate original array', () => {
      const arr = [1, 2, 3]
      const result = shuffle(arr)
      expect(arr).toEqual([1, 2, 3])
    })
  })

  describe('range', () => {
    it('should create range from 0 to n', () => {
      expect(range(5)).toEqual([0, 1, 2, 3, 4])
    })

    it('should create range with start and end', () => {
      expect(range(2, 5)).toEqual([2, 3, 4])
    })

    it('should support custom step', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8])
    })
  })
})
