import {describe, expect, it} from 'vitest'
import {chunk, groupBy, unique} from '../src/array'

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
        {name: 'Alice', role: 'admin'},
        {name: 'Bob', role: 'user'},
        {name: 'Charlie', role: 'admin'}
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

    it('should return single chunk for single element', () => {
      expect(chunk([1, 2], 1)).toEqual([[1], [2]])
    })

    it('should return empty array for zero size', () => {
      expect(chunk([1, 2], 0)).toEqual([[1], [2]])
    })
  })

})
