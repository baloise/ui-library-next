# Quick Start

## Installation

This project is published to the npm registry. Just run the below command inside of your repository the install it.

```bash
npm install @baloise/ui-library --save
```

### Vue.js

After installing the core library `@baloise/ui-library` install the vue wrapper library.

```bash
npm install @baloise/ui-library-vue --save
```

#### Configure

Add the css styles, apply polyfills and define the custom web components.

```typescript
// main.ts
import 'babel-polyfill'
import '@baloise/ui-library-next/dist/ui-library-next/ui-library-next.css'

import Vue from 'vue'
import App from './App.vue'
import { applyPolyfills, defineCustomElements } from '@baloise/ui-library-next/loader'

Vue.config.productionTip = false

Vue.config.ignoredElements = [/bal-\w*/]
applyPolyfills().then(() => {
  defineCustomElements()
})

new Vue({
  render: h => h(App),
}).$mount('#app')
```

#### Usage

Just import the bal-components and use it in your templates.

```vue
<template>
  <div id="app">
    <BalCheckbox v-model="checkbox"></BalCheckbox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { BalCheckbox } from '@baloise/ui-library-vue'

export default Vue.extend({
  name: 'App',
  components: { BalCheckbox },
  data() {
    const checkbox = true
    return { checkbox }
  },
})
</script>
```

### Angular

Follow this [Guide](https://stenciljs.com/docs/angular)

### Styles

Just put the below import into your main sass file.

```scss
@import 'node_modules/ui-library/src/styles/ui-library.scss';
```

> Use the variables of the UI-Library for your own project components by using the `node_modules/ui-library/src/styles/ui-library.utilities.scss` file.
