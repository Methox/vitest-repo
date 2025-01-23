import { describe, it, expect } from 'vitest'
import { capitalize, truncate, reverseString } from '../string'

// This test file shows how to test utility functions
describe('String Helper Functions', () => {
  // Tests for capitalize function
  describe('capitalize', () => {
    it('capitalizes the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello')
    })

    it('converts rest of string to lowercase', () => {
      expect(capitalize('hELLo')).toBe('Hello')
    })

    it('handles empty string', () => {
      expect(capitalize('')).toBe('')
    })
  })

  // Tests for truncate function
  describe('truncate', () => {
    it('truncates string if longer than specified length', () => {
      expect(truncate('Hello World', 5)).toBe('Hello...')
    })

    it('does not truncate if string is shorter than length', () => {
      expect(truncate('Hello', 10)).toBe('Hello')
    })
  })

  // Tests for reverseString function
  describe('reverseString', () => {
    it('reverses a string', () => {
      expect(reverseString('hello')).toBe('olleh')
    })

    it('handles empty string', () => {
      expect(reverseString('')).toBe('')
    })
  })
})