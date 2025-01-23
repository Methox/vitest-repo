import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TodoItem from '../TodoItem.vue'

// This test file shows how to test component props and events
describe('TodoItem', () => {
  // Test if the component renders the provided text
  it('renders the todo text', () => {
    const wrapper = mount(TodoItem, {
      props: {
        text: 'Buy groceries',
        completed: false
      }
    })
    
    expect(wrapper.text()).toContain('Buy groceries')
  })

  // Test if completed class is applied
  it('applies completed class when completed prop is true', () => {
    const wrapper = mount(TodoItem, {
      props: {
        text: 'Buy groceries',
        completed: true
      }
    })
    
    expect(wrapper.classes()).toContain('completed')
  })

  // Test if toggle event is emitted
  it('emits toggle event when clicked', async () => {
    const wrapper = mount(TodoItem, {
      props: {
        text: 'Buy groceries',
        completed: false
      }
    })
    
    await wrapper.trigger('click')
    
    // Check if the toggle event was emitted
    expect(wrapper.emitted()).toHaveProperty('toggle')
  })
})