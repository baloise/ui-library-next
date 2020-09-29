/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface NthSelectable<T> {
  selectNth(index: number): T
}

export const NthSelectableMixin: Mixin = ({ element, creator }) => ({
  selectNth: (index: number) => {
    element.eq(index)
    return creator()
  },
})
