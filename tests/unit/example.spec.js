import { mount } from '@vue/test-utils'
import index from '@/pages/index.vue'

describe('index', () => {
  it('index exists', () => {
    const wrapper = mount(index)
    expect(wrapper.exists()).toBe(true)
  })
})
