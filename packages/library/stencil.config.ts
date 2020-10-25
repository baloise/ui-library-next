import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target'

/**
 * Vue Component Models
 */
const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['bal-checkbox'],
    event: 'balChange',
    targetAttr: 'checked',
  },
  {
    elements: ['bal-input'],
    event: 'balChange',
    targetAttr: 'value',
  },
]

/**
 * Stencil Configurations
 */
export const config: Config = {
  namespace: 'ui-library-next',
  globalStyle: 'src/styles/ui-library.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: '**/*.html',
        },
        {
          src: 'components.d.ts',
        },
      ],
    },
    vueOutputTarget({
      componentCorePackage: '@baloise/ui-library-next',
      proxiesFile: '../library-vue/src/components.ts',
      componentModels: vueComponentModels,
    }),
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
    sass(),
  ],
}
