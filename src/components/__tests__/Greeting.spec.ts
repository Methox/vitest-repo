import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Greeting from '../Greeting.vue'

// This test file shows how to test component props
describe('Greeting', () => {
  // Test if the component renders the provided name
  it('renders the provided name', () => {
    const name = 'John'
    const wrapper = mount(Greeting, {
      props: { name }
    })
    
    expect(wrapper.text()).toContain('Hello, John!')
  })

  // Test if the component updates when props change
  it('updates when name prop changes', async () => {
    const wrapper = mount(Greeting, {
      props: { name: 'John' }
    })
    
    // Update the name prop
    await wrapper.setProps({ name: 'Jane' })
    
    expect(wrapper.text()).toContain('Hello, Jane!')
  })
})