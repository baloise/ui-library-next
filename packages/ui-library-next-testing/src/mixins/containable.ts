/// <reference types="cypress" />

import { Mixin } from './mixins'

export interface Containable<T> {
  contains(content: string | number | RegExp): T
}

export const ContainableMixin: Mixin = ({ element, creator }) => ({
  contains: (content: string | number | RegExp) => {
    element.contains(content)
    return creator()
  },
})
