import 'babel-polyfill'

import '@baloise/ui-library-next/dist/ui-library-next/ui-library-next.css'

import Vue from 'vue'
import App from './App.vue'
import { UiLibraryPlugin } from '@baloise/ui-library-next-vue'

Vue.config.productionTip = false

Vue.use(UiLibraryPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
