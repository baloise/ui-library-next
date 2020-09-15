import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { postcss } from '@stencil/postcss'
import autoprefixer from 'autoprefixer'
import { vueOutputTarget } from '@stencil/vue-output-target'

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
          src: '**/*.md',
        },
        {
          src: 'docs/**/*.css',
        },
        {
          src: 'docs/assets/**/*.svg',
        },
        {
          src: 'docs/assets/**/*.png',
        },
        {
          src: 'docs/assets/**/*.ico',
        },
        {
          src: 'docs/**/*.js',
        },
        {
          src: 'components.d.ts',
        },
      ],
    },
    vueOutputTarget({
      componentCorePackage: '@baloise/ui-library-next',
      proxiesFile: '../ui-library-next-vue/src/components.ts',
    }),
  ],
  plugins: [
    postcss({
      plugins: [autoprefixer()],
    }),
    sass(),
  ],
}
