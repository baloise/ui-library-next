/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@baloise/ui-library-next';




const customElementTags: string[] = [
 'bal-button',
 'bal-card',
 'bal-card-actions',
 'bal-card-button',
 'bal-card-content',
 'bal-card-heading',
 'bal-card-step',
 'bal-card-steps',
 'bal-card-subtitle',
 'bal-card-title',
 'bal-checkbox',
 'bal-dropdown',
 'bal-field',
 'bal-icon',
 'bal-input',
 'bal-select',
 'bal-select-option',
 'bal-spinner',
 'bal-text',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const BalButton = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.BalButton['type']>,
    size: {} as PropOptions<Components.BalButton['size']>,
    isSquare: {} as PropOptions<Components.BalButton['isSquare']>,
    disabled: {} as PropOptions<Components.BalButton['disabled']>,
    light: {} as PropOptions<Components.BalButton['light']>,
    isActive: {} as PropOptions<Components.BalButton['isActive']>,
    expanded: {} as PropOptions<Components.BalButton['expanded']>,
    outlined: {} as PropOptions<Components.BalButton['outlined']>,
    inverted: {} as PropOptions<Components.BalButton['inverted']>,
    dense: {} as PropOptions<Components.BalButton['dense']>,
    loading: {} as PropOptions<Components.BalButton['loading']>,
    bottomRounded: {} as PropOptions<Components.BalButton['bottomRounded']>,
    icon: {} as PropOptions<Components.BalButton['icon']>,
    iconRight: {} as PropOptions<Components.BalButton['iconRight']>,
  },


  render: createCommonRender('bal-button', []),
});


export const BalCard = /*@__PURE__*/ Vue.extend({

  props: {
    border: {} as PropOptions<Components.BalCard['border']>,
    flat: {} as PropOptions<Components.BalCard['flat']>,
    square: {} as PropOptions<Components.BalCard['square']>,
    inverted: {} as PropOptions<Components.BalCard['inverted']>,
    teaser: {} as PropOptions<Components.BalCard['teaser']>,
  },


  render: createCommonRender('bal-card', []),
});


export const BalCardActions = /*@__PURE__*/ Vue.extend({

  props: {
    right: {} as PropOptions<Components.BalCardActions['right']>,
  },


  render: createCommonRender('bal-card-actions', []),
});


export const BalCardButton = /*@__PURE__*/ Vue.extend({

  props: {
    icon: {} as PropOptions<Components.BalCardButton['icon']>,
  },


  render: createCommonRender('bal-card-button', []),
});


export const BalCardContent = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardContent['inverted']>,
  },


  render: createCommonRender('bal-card-content', []),
});


export const BalCardHeading = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-card-heading', []),
});


export const BalCardStep = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalCardStep['value']>,
    label: {} as PropOptions<Components.BalCardStep['label']>,
    hidden: {} as PropOptions<Components.BalCardStep['hidden']>,
    disabled: {} as PropOptions<Components.BalCardStep['disabled']>,
    done: {} as PropOptions<Components.BalCardStep['done']>,
    active: {} as PropOptions<Components.BalCardStep['active']>,
  },


  methods: {
    getOptions: createCommonMethod('getOptions') as Components.BalCardStep['getOptions'],
    setActive: createCommonMethod('setActive') as Components.BalCardStep['setActive'],
  },
  render: createCommonRender('bal-card-step', []),
});


export const BalCardSteps = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardSteps['inverted']>,
    hidden: {} as PropOptions<Components.BalCardSteps['hidden']>,
    hasBack: {} as PropOptions<Components.BalCardSteps['hasBack']>,
    navigation: {} as PropOptions<Components.BalCardSteps['navigation']>,
    backLabel: {} as PropOptions<Components.BalCardSteps['backLabel']>,
    showLabel: {} as PropOptions<Components.BalCardSteps['showLabel']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalCardSteps['select'],
    sync: createCommonMethod('sync') as Components.BalCardSteps['sync'],
  },
  render: createCommonRender('bal-card-steps', ['balCardStepChange', 'balBackClick', 'balCardStepClick']),
});


export const BalCardSubtitle = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardSubtitle['inverted']>,
  },


  render: createCommonRender('bal-card-subtitle', []),
});


export const BalCardTitle = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardTitle['inverted']>,
  },


  render: createCommonRender('bal-card-title', []),
});


export const BalCheckbox = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalCheckbox['name']>,
    label: {} as PropOptions<Components.BalCheckbox['label']>,
    value: {} as PropOptions<Components.BalCheckbox['value']>,
    checked: {} as PropOptions<Components.BalCheckbox['checked']>,
    disabled: {} as PropOptions<Components.BalCheckbox['disabled']>,
    inverted: {} as PropOptions<Components.BalCheckbox['inverted']>,
  },

  model: {
    prop: 'checked',
    event: 'balChange'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalCheckbox['setFocus'],
  },
  render: createCommonRender('bal-checkbox', ['balChange', 'balFocus', 'balBlur']),
});


export const BalDropdown = /*@__PURE__*/ Vue.extend({

  props: {
    scrollable: {} as PropOptions<Components.BalDropdown['scrollable']>,
    expanded: {} as PropOptions<Components.BalDropdown['expanded']>,
    isActive: {} as PropOptions<Components.BalDropdown['isActive']>,
  },

  model: {
    prop: 'is-active',
    event: 'balCollapsed'
  },

  methods: {
    open: createCommonMethod('open') as Components.BalDropdown['open'],
    close: createCommonMethod('close') as Components.BalDropdown['close'],
    toggle: createCommonMethod('toggle') as Components.BalDropdown['toggle'],
    getMenuElement: createCommonMethod('getMenuElement') as Components.BalDropdown['getMenuElement'],
    getContentElement: createCommonMethod('getContentElement') as Components.BalDropdown['getContentElement'],
  },
  render: createCommonRender('bal-dropdown', ['balCollapse']),
});


export const BalField = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalField['label']>,
    required: {} as PropOptions<Components.BalField['required']>,
    disabled: {} as PropOptions<Components.BalField['disabled']>,
    validationMessage: {} as PropOptions<Components.BalField['validationMessage']>,
    iconRight: {} as PropOptions<Components.BalField['iconRight']>,
    iconLeft: {} as PropOptions<Components.BalField['iconLeft']>,
    inverted: {} as PropOptions<Components.BalField['inverted']>,
    loading: {} as PropOptions<Components.BalField['loading']>,
  },


  render: createCommonRender('bal-field', []),
});


export const BalIcon = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalIcon['name']>,
    size: {} as PropOptions<Components.BalIcon['size']>,
    isRight: {} as PropOptions<Components.BalIcon['isRight']>,
    isLeft: {} as PropOptions<Components.BalIcon['isLeft']>,
    rotate: {} as PropOptions<Components.BalIcon['rotate']>,
    turn: {} as PropOptions<Components.BalIcon['turn']>,
    color: {} as PropOptions<Components.BalIcon['color']>,
  },


  render: createCommonRender('bal-icon', []),
});


export const BalInput = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalInput['name']>,
    type: {} as PropOptions<Components.BalInput['type']>,
    placeholder: {} as PropOptions<Components.BalInput['placeholder']>,
    maxLength: {} as PropOptions<Components.BalInput['maxLength']>,
    minLength: {} as PropOptions<Components.BalInput['minLength']>,
    inverted: {} as PropOptions<Components.BalInput['inverted']>,
    readonly: {} as PropOptions<Components.BalInput['readonly']>,
    disabled: {} as PropOptions<Components.BalInput['disabled']>,
    clickable: {} as PropOptions<Components.BalInput['clickable']>,
    autoComplete: {} as PropOptions<Components.BalInput['autoComplete']>,
    numberKeyboard: {} as PropOptions<Components.BalInput['numberKeyboard']>,
    onlyNumbers: {} as PropOptions<Components.BalInput['onlyNumbers']>,
    value: {} as PropOptions<Components.BalInput['value']>,
  },

  model: {
    prop: 'value',
    event: 'balInput'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalInput['setFocus'],
  },
  render: createCommonRender('bal-input', ['balInput', 'balBlur', 'balClick', 'balKeyPress', 'balFocus']),
});


export const BalSelect = /*@__PURE__*/ Vue.extend({

  props: {
    remote: {} as PropOptions<Components.BalSelect['remote']>,
    expanded: {} as PropOptions<Components.BalSelect['expanded']>,
    inverted: {} as PropOptions<Components.BalSelect['inverted']>,
    disabled: {} as PropOptions<Components.BalSelect['disabled']>,
    typeahead: {} as PropOptions<Components.BalSelect['typeahead']>,
    loading: {} as PropOptions<Components.BalSelect['loading']>,
    placeholder: {} as PropOptions<Components.BalSelect['placeholder']>,
    scrollable: {} as PropOptions<Components.BalSelect['scrollable']>,
    value: {} as PropOptions<Components.BalSelect['value']>,
  },

  model: {
    prop: 'value',
    event: 'balChange'
  },

  methods: {
    open: createCommonMethod('open') as Components.BalSelect['open'],
    close: createCommonMethod('close') as Components.BalSelect['close'],
    select: createCommonMethod('select') as Components.BalSelect['select'],
    clear: createCommonMethod('clear') as Components.BalSelect['clear'],
    setFocus: createCommonMethod('setFocus') as Components.BalSelect['setFocus'],
    sync: createCommonMethod('sync') as Components.BalSelect['sync'],
  },
  render: createCommonRender('bal-select', ['balChange', 'balInput', 'balBlur', 'balFocus', 'balClick', 'balKeyPress', 'balCancel']),
});


export const BalSelectOption = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalSelectOption['value']>,
    label: {} as PropOptions<Components.BalSelectOption['label']>,
    hidden: {} as PropOptions<Components.BalSelectOption['hidden']>,
    icon: {} as PropOptions<Components.BalSelectOption['icon']>,
    focused: {} as PropOptions<Components.BalSelectOption['focused']>,
    selected: {} as PropOptions<Components.BalSelectOption['selected']>,
  },


  methods: {
    getOption: createCommonMethod('getOption') as Components.BalSelectOption['getOption'],
  },
  render: createCommonRender('bal-select-option', []),
});


export const BalSpinner = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalSpinner['inverted']>,
    small: {} as PropOptions<Components.BalSpinner['small']>,
  },


  render: createCommonRender('bal-spinner', []),
});


export const BalText = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-text', []),
});

