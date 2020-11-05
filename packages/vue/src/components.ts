/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from '@baloise/ui-library-next';




const customElementTags: string[] = [
 'bal-accordion',
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
 'bal-data',
 'bal-data-item',
 'bal-data-label',
 'bal-data-value',
 'bal-dropdown',
 'bal-field',
 'bal-file-upload',
 'bal-hint',
 'bal-hint-text',
 'bal-hint-title',
 'bal-icon',
 'bal-input',
 'bal-select',
 'bal-select-option',
 'bal-spinner',
 'bal-text',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const BalAccordion = /*@__PURE__*/ Vue.extend({

  props: {
    type: {} as PropOptions<Components.BalAccordion['type']>,
    collapsed: {} as PropOptions<Components.BalAccordion['collapsed']>,
    openLabel: {} as PropOptions<Components.BalAccordion['openLabel']>,
    openIcon: {} as PropOptions<Components.BalAccordion['openIcon']>,
    closeLabel: {} as PropOptions<Components.BalAccordion['closeLabel']>,
    closeIcon: {} as PropOptions<Components.BalAccordion['closeIcon']>,
  },

  model: {
    prop: 'collapsed',
    event: 'balAccordionChange'
  },

  methods: {
    open: createCommonMethod('open') as Components.BalAccordion['open'],
    close: createCommonMethod('close') as Components.BalAccordion['close'],
    toggle: createCommonMethod('toggle') as Components.BalAccordion['toggle'],
  },
  render: createCommonRender('bal-accordion', ['balAccordionChange']),
});


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
    backLabel: {} as PropOptions<Components.BalCardSteps['backLabel']>,
  },


  methods: {
    select: createCommonMethod('select') as Components.BalCardSteps['select'],
  },
  render: createCommonRender('bal-card-steps', ['balCardStepsChange', 'balCardStepsBackClick', 'balCardStepsStepClick']),
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
    event: 'balCheckboxChange'
  },

  methods: {
    setFocus: createCommonMethod('setFocus') as Components.BalCheckbox['setFocus'],
  },
  render: createCommonRender('bal-checkbox', ['balCheckboxChange', 'balCheckboxFocus', 'balCheckboxBlur']),
});


export const BalData = /*@__PURE__*/ Vue.extend({

  props: {
    border: {} as PropOptions<Components.BalData['border']>,
    horizontal: {} as PropOptions<Components.BalData['horizontal']>,
  },


  render: createCommonRender('bal-data', []),
});


export const BalDataItem = /*@__PURE__*/ Vue.extend({

  props: {
    disabled: {} as PropOptions<Components.BalDataItem['disabled']>,
  },


  render: createCommonRender('bal-data-item', []),
});


export const BalDataLabel = /*@__PURE__*/ Vue.extend({

  props: {
    required: {} as PropOptions<Components.BalDataLabel['required']>,
  },


  render: createCommonRender('bal-data-label', []),
});


export const BalDataValue = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-data-value', []),
});


export const BalDropdown = /*@__PURE__*/ Vue.extend({

  props: {
    scrollable: {} as PropOptions<Components.BalDropdown['scrollable']>,
    expanded: {} as PropOptions<Components.BalDropdown['expanded']>,
    isActive: {} as PropOptions<Components.BalDropdown['isActive']>,
  },


  methods: {
    open: createCommonMethod('open') as Components.BalDropdown['open'],
    close: createCommonMethod('close') as Components.BalDropdown['close'],
    toggle: createCommonMethod('toggle') as Components.BalDropdown['toggle'],
    getMenuElement: createCommonMethod('getMenuElement') as Components.BalDropdown['getMenuElement'],
    getContentElement: createCommonMethod('getContentElement') as Components.BalDropdown['getContentElement'],
  },
  render: createCommonRender('bal-dropdown', ['balDropdownChange']),
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


export const BalFileUpload = /*@__PURE__*/ Vue.extend({

  props: {
    label: {} as PropOptions<Components.BalFileUpload['label']>,
    multiple: {} as PropOptions<Components.BalFileUpload['multiple']>,
    disabled: {} as PropOptions<Components.BalFileUpload['disabled']>,
    accept: {} as PropOptions<Components.BalFileUpload['accept']>,
    maxFiles: {} as PropOptions<Components.BalFileUpload['maxFiles']>,
    maxFileSize: {} as PropOptions<Components.BalFileUpload['maxFileSize']>,
    maxBundleSize: {} as PropOptions<Components.BalFileUpload['maxBundleSize']>,
  },


  render: createCommonRender('bal-file-upload', ['balFileUploadChange', 'balFileUploadRejectedFile']),
});


export const BalHint = /*@__PURE__*/ Vue.extend({

  props: {
    closeLabel: {} as PropOptions<Components.BalHint['closeLabel']>,
    disabled: {} as PropOptions<Components.BalHint['disabled']>,
  },


  methods: {
    toggle: createCommonMethod('toggle') as Components.BalHint['toggle'],
    open: createCommonMethod('open') as Components.BalHint['open'],
    close: createCommonMethod('close') as Components.BalHint['close'],
  },
  render: createCommonRender('bal-hint', []),
});


export const BalHintText = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-hint-text', []),
});


export const BalHintTitle = /*@__PURE__*/ Vue.extend({



  render: createCommonRender('bal-hint-title', []),
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
  render: createCommonRender('bal-input', ['balInput', 'balInputBlur', 'balInputClick', 'balInputKeyPress', 'balInputFocus']),
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
    options: {} as PropOptions<Components.BalSelect['options']>,
  },

  model: {
    prop: 'value',
    event: 'balSelectChange'
  },

  methods: {
    clear: createCommonMethod('clear') as Components.BalSelect['clear'],
  },
  render: createCommonRender('bal-select', ['balSelectChange', 'balSelectInput', 'balSelectBlur', 'balSelectFocus', 'balSelectClick', 'balSelectKeyPress']),
});


export const BalSelectOption = /*@__PURE__*/ Vue.extend({

  props: {
    hidden: {} as PropOptions<Components.BalSelectOption['hidden']>,
    value: {} as PropOptions<Components.BalSelectOption['value']>,
    icon: {} as PropOptions<Components.BalSelectOption['icon']>,
    focused: {} as PropOptions<Components.BalSelectOption['focused']>,
    selected: {} as PropOptions<Components.BalSelectOption['selected']>,
  },


  render: createCommonRender('bal-select-option', ['balSelectOptionClick']),
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

