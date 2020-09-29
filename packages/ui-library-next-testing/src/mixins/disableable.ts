/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface Disableable<T> {
  assertIsDisabled(): T
  assertIsEnabled(): T
}

export const DisableableMixin: Mixin = ({ element, creator }) => ({
  assertIsDisabled: () => {
    element.should('be.disabled')
    return creator()
  },
  assertIsEnabled: () => {
    element.should('not.be.disabled')
    return creator()
  },
})
