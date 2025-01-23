import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Counter from '../Counter.vue'

// This test file shows how to test a component with user interactions
describe('Counter', () => {
  // Test if the component renders with initial count of 0
  it('renders with initial count of 0', () => {
    const wrapper = mount(Counter)
    expect(wrapper.text()).toContain('Counter: 0')
  })

  // Test the increment button
  it('increments count when + button is clicked', async () => {
    const wrapper = mount(Counter)
    
    // Find the increment button and click it
    const incrementButton = wrapper.find('.increment')
    await incrementButton.trigger('click')
    
    // Check if the count increased
    expect(wrapper.text()).toContain('Counter: 1')
  })

  // Test the decrement button
  it('decrements count when - button is clicked', async () => {
    const wrapper = mount(Counter)
    
    // Find the decrement button and click it
    const decrementButton = wrapper.find('.decrement')
    await decrementButton.trigger('click')
    
    // Check if the count decreased
    expect(wrapper.text()).toContain('Counter: -1')
  })
})