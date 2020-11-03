import 'babel-polyfill'

import '@baloise/ui-library-next/dist/ui-library-next/ui-library-next.css'

import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@baloise/ui-library-next/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/bal-\w*/]
console.log('start')
applyPolyfills().then(() => {
  console.log('applyPolyfills')
  defineCustomElements().then(() => {
    console.log('defineCustomElements')
  })
})


new Vue({
  render: h => h(App),
}).$mount('#app')
