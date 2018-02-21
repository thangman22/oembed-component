import Vue from 'vue'
import Oembed from '@/components/Oembed'
import urlTemplateForTest from './urlTemplateForTest.json'

describe('Oembed.vue', () => {

  it('has a created hook', () => {
    expect(typeof Oembed.created).toBe('function')
  })

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Oembed)
    const props = {
      url: 'http://localhost:8080'
    }
    const vm = new Constructor({ propsData: props }).$mount()
    expect(vm.$el.innerHTML)
      .toEqual('<!----> <div class="__v-oembed-error" style="font-family: -apple-system, system-ui, Roboto, sans-serif; padding: 15px; border-radius: 3px; text-align: center;">Endpoint isn\'t supported</div>')
  })

  it('sets the correct default data', () => {
    expect(typeof Oembed.data).toBe('function')
    const defaultData = Oembed.data()
    expect(defaultData.errorMessage).toBe(null)
  })

  it('setInnerHtml should render correct', () => {
    const Constructor = Vue.extend(Oembed)
    const props = {
      url: 'http://localhost:8080'
    }
    const vm = new Constructor({ propsData: props }).$mount()
    vm.setInnerHtml(vm.$el, '<hr>')
    expect(vm.$el.innerHTML)
      .toEqual('<hr>')
  })

  it('getOembedEnpoint should return correct', () => {
    let notFoundPattern = urlTemplateForTest.filter(url => !Oembed.methods.getOembedEnpoint(url))
    expect(notFoundPattern.length)
      .toEqual(0)
  })
})
