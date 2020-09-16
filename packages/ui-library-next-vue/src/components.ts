/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@baloise/ui-library-next';




const customElementTags: string[] = [
 'bal-button',
 'bal-card',
 'bal-card-step',
 'bal-card-steps',
 'bal-dropdown',
 'bal-dropdown-option',
 'bal-field',
 'bal-icon',
 'bal-spinner',
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
  },


  render: createCommonRender('bal-button', []),
});


export const BalCard = /*@__PURE__*/ Vue.extend({

  props: {
    border: {} as PropOptions<Components.BalCard['border']>,
    flat: {} as PropOptions<Components.BalCard['flat']>,
    square: {} as PropOptions<Components.BalCard['square']>,
    inverted: {} as PropOptions<Components.BalCard['inverted']>,
  },


  render: createCommonRender('bal-card', []),
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
  render: createCommonRender('bal-card-step', ['balCardStepChanged']),
});


export const BalCardSteps = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalCardSteps['inverted']>,
    hidden: {} as PropOptions<Components.BalCardSteps['hidden']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalCardSteps['select'],
  },
  render: createCommonRender('bal-card-steps', ['balCardStepsDidChange']),
});


export const BalDropdown = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalDropdown['value']>,
    placeholder: {} as PropOptions<Components.BalDropdown['placeholder']>,
    readonly: {} as PropOptions<Components.BalDropdown['readonly']>,
    disabled: {} as PropOptions<Components.BalDropdown['disabled']>,
    inverted: {} as PropOptions<Components.BalDropdown['inverted']>,
    fixed: {} as PropOptions<Components.BalDropdown['fixed']>,
    expanded: {} as PropOptions<Components.BalDropdown['expanded']>,
    triggerIcon: {} as PropOptions<Components.BalDropdown['triggerIcon']>,
    empty: {} as PropOptions<Components.BalDropdown['empty']>,
    multiSelect: {} as PropOptions<Components.BalDropdown['multiSelect']>,
    typeahead: {} as PropOptions<Components.BalDropdown['typeahead']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalDropdown['select'],
    getSelected: createCommonMethod('getSelected') as Components.BalDropdown['getSelected'],
    toggle: createCommonMethod('toggle') as Components.BalDropdown['toggle'],
    open: createCommonMethod('open') as Components.BalDropdown['open'],
    close: createCommonMethod('close') as Components.BalDropdown['close'],
  },
  render: createCommonRender('bal-dropdown', ['balInput', 'balChange', 'balBlur', 'balFocus']),
});


export const BalDropdownOption = /*@__PURE__*/ Vue.extend({

  props: {
    value: {} as PropOptions<Components.BalDropdownOption['value']>,
    label: {} as PropOptions<Components.BalDropdownOption['label']>,
    icon: {} as PropOptions<Components.BalDropdownOption['icon']>,
    checkbox: {} as PropOptions<Components.BalDropdownOption['checkbox']>,
    focused: {} as PropOptions<Components.BalDropdownOption['focused']>,
    selected: {} as PropOptions<Components.BalDropdownOption['selected']>,
    highlight: {} as PropOptions<Components.BalDropdownOption['highlight']>,
  },


  methods: {
    isHidden: createCommonMethod('isHidden') as Components.BalDropdownOption['isHidden'],
  },
  render: createCommonRender('bal-dropdown-option', []),
});


export const BalField = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalField['label']>,
    required: {} as PropOptions<Components.BalField['required']>,
    validationMessage: {} as PropOptions<Components.BalField['validationMessage']>,
    iconRight: {} as PropOptions<Components.BalField['iconRight']>,
    iconLeft: {} as PropOptions<Components.BalField['iconLeft']>,
    inverted: {} as PropOptions<Components.BalField['inverted']>,
  },


  render: createCommonRender('bal-field', []),
});


export const BalIcon = /*@__PURE__*/ Vue.extend({

  props: {
    name: {} as PropOptions<Components.BalIcon['name']>,
    size: {} as PropOptions<Components.BalIcon['size']>,
    isRight: {} as PropOptions<Components.BalIcon['isRight']>,
    isLeft: {} as PropOptions<Components.BalIcon['isLeft']>,
  },


  render: createCommonRender('bal-icon', []),
});


export const BalSpinner = /*@__PURE__*/ Vue.extend({

  props: {
    inverted: {} as PropOptions<Components.BalSpinner['inverted']>,
    small: {} as PropOptions<Components.BalSpinner['small']>,
  },


  render: createCommonRender('bal-spinner', []),
});

