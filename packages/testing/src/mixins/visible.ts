/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface Visible<T> {
  assertVisible(): T
  assertNotVisible(): T
}

export const VisibleMixin: Mixin = ({ element, creator }) => ({
  assertVisible: () => {
    element.should('be.visible')
    return creator()
  },
  assertNotVisible: () => {
    element.should('not.be.visible')
    return creator()
  },
})
