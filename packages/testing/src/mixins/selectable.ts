/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface Selectable<T> {
  select(indexes: number[] | number | string): T
  assertIsSelected(indexes: number[] | number | string): T
}

export const SelectableMixin: Mixin = ({ element, creator }) => ({
  select: (index: number) => {
    element.eq(index)
    return creator()
  },
  assertIsSelected: (index: number) => {
    element.eq(index)
    return creator()
  },
})
