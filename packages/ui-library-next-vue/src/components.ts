/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@baloise/ui-library-next';




const customElementTags: string[] = [
 'my-component',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const MyComponent = /*@__PURE__*/ Vue.extend({

  props: {
    first: {} as PropOptions<Components.MyComponent['first']>,
    middle: {} as PropOptions<Components.MyComponent['middle']>,
    last: {} as PropOptions<Components.MyComponent['last']>,
  },


  render: createCommonRender('my-component', []),
});

