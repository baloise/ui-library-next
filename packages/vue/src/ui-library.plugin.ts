import Vue, { PluginObject } from 'vue'
import { defineCustomElements, applyPolyfills } from '@baloise/ui-library-next/loader'

Vue.config.ignoredElements = [/bal-\w*/]

export type UiLibraryPluginOption = {
  defineCustomeElements: boolean
}

const UiLibraryPluginOptionDefaults: UiLibraryPluginOption = {
  defineCustomeElements: true,
}

export const UiLibraryPlugin: PluginObject<UiLibraryPluginOption> = {
  install(_VueInstance, options): void {
    options = {
      ...UiLibraryPluginOptionDefaults,
      ...options,
    }

    if (options.defineCustomeElements === true) {
      applyPolyfills().then(() => defineCustomElements())
    }

    // VueInstance.$balUtils = utils
    // VueInstance.prototype.$balUtils = utils
  },
}
