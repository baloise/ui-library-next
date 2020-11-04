import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'
import { ComponentModelConfig, vueOutputTarget } from '@stencil/vue-output-target'
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target'

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
    elements: ['bal-select'],
    event: 'balChange',
    targetAttr: 'value',
  },
  {
    elements: ['bal-input'],
    event: 'balInput',
    targetAttr: 'value',
  },
]

/**
 * Angular Component Models
 */
const angularValueAccessorBindings: ValueAccessorConfig[] = [
  {
    elementSelectors: ['bal-checkbox'],
    event: 'balChange',
    targetAttr: 'checked',
    type: 'boolean',
  },
  {
    elementSelectors: ['bal-select'],
    event: 'balChange',
    targetAttr: 'value',
    type: 'select',
  },
  {
    elementSelectors: ['bal-input'],
    event: 'balInput',
    targetAttr: 'value',
    type: 'text',
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
      proxiesFile: '../vue/src/components.ts',
      componentModels: vueComponentModels,
    }),
    angularOutputTarget({
      componentCorePackage: '@baloise/ui-library-next',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
      directivesArrayFile: '../angular/src/directives/proxies-list.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
    sass(),
  ],
}
