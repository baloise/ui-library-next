import Vue, { PluginObject } from 'vue'

import { defineCustomElements, applyPolyfills } from '@baloise/ui-library-next/loader'

Vue.config.ignoredElements = [/bal-\w*/]

applyPolyfills().then(() => defineCustomElements())

export const UiLibraryPlugin: PluginObject<void> = {
  install(/*VueInstance*/): void {
    // VueInstance.$balUtils = utils
    // VueInstance.prototype.$balUtils = utils
  },
}
