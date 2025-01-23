import { describe, it, expect } from 'vitest'
import { add, multiply, isEven } from '../math'

// This test file shows how to test simple math functions
describe('Math Helper Functions', () => {
  // Tests for add function
  describe('add', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5)
    })

    it('handles negative numbers', () => {
      expect(add(-2, 3)).toBe(1)
      expect(add(-2, -3)).toBe(-5)
    })
  })

  // Tests for multiply function
  describe('multiply', () => {
    it('multiplies two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6)
    })

    it('handles zero', () => {
      expect(multiply(5, 0)).toBe(0)
    })

    it('handles negative numbers', () => {
      expect(multiply(-2, 3)).toBe(-6)
      expect(multiply(-2, -3)).toBe(6)
    })
  })

  // Tests for isEven function
  describe('isEven', () => {
    it('returns true for even numbers', () => {
      expect(isEven(2)).toBe(true)
      expect(isEven(0)).toBe(true)
      expect(isEven(-2)).toBe(true)
    })

    it('returns false for odd numbers', () => {
      expect(isEven(1)).toBe(false)
      expect(isEven(-1)).toBe(false)
    })
  })
})