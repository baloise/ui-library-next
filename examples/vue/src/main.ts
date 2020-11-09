import 'babel-polyfill'

import '@baloise/ui-library-next/dist/ui-library-next/ui-library-next.css'

import Vue from 'vue'
import VueComposition from '@vue/composition-api'
import App from './App.vue'
import { BalUiLibraryPlugin } from '@baloise/ui-library-next-vue'

Vue.config.productionTip = false

Vue.use(BalUiLibraryPlugin)
Vue.use(VueComposition)

new Vue({
  render: h => h(App),
}).$mount('#app')
