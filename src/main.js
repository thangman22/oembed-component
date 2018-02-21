// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueCustomElement from 'vue-custom-element'
import 'document-register-element/build/document-register-element'
import 'whatwg-fetch'

import Oembed from '@/components/Oembed'

Vue.use(vueCustomElement)

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.customElement('o-embed', Oembed)
