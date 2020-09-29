/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface Existable<T> {
  assertExists(): T
  assertNotExists(): T
}

export const ExistableMixin: Mixin = ({ element, creator }) => ({
  assertExists: () => {
    element.should('exist')
    return creator()
  },
  assertNotExists: () => {
    element.should('not.exist')
    return creator()
  },
})
