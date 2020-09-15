import 'babel-polyfill'

import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@baloise/ui-library-next/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/bal-\w*/]
applyPolyfills().then(() => {
  defineCustomElements().then(() => {
  })
})

new Vue({
  render: h => h(App),
}).$mount('#app')
