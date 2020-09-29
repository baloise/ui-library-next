/// <reference types="cypress" />
import { Checkable } from './mixins/checkable'
import { Clickable } from './mixins/clickable'
import { Containable } from './mixins/containable'
import { Disableable } from './mixins/disableable'
import { Existable, ExistableMixin } from './mixins/existable'
import { Accessor, createAccessor, Mixin, MixinContext } from './mixins/mixins'
import { NthSelectable, NthSelectableMixin } from './mixins/nthSelectable'
import { Shouldable, ShouldableMixin } from './mixins/shouldable'
import { Visible, VisibleMixin } from './mixins/visible'

interface CheckboxAccessorType
  extends Clickable<CheckboxAccessorType>,
    Disableable<CheckboxAccessorType>,
    Checkable<CheckboxAccessorType>,
    Containable<CheckboxAccessorType>,
    Existable<CheckboxAccessorType>,
    Visible<CheckboxAccessorType>,
    NthSelectable<CheckboxAccessorType>,
    Shouldable<CheckboxAccessorType> {}

export const CheckboxClickableMixin: Mixin = <T>({ element, creator }: MixinContext<T>) => ({
  click: (options?: Partial<Cypress.ClickOptions>) => {
    const checkbox = element.find('label')
    checkbox.click(options)
    return creator()
  },
  check: (options?: Partial<Cypress.CheckOptions>) => {
    const checkbox = element.find('label')
    checkbox.click(options)
    return creator()
  },
  assertIsChecked: (shouldBeChecked: boolean = true) => {
    const checkbox = element.find('input')
    checkbox.should('have.attr', 'aria-checked', `${shouldBeChecked}`)
    return creator()
  },
  assertIsDisabled: () => {
    const checkbox = element.find('input')
    checkbox.should('have.attr', 'aria-disabled', `true`)
    return creator()
  },
  assertIsEnabled: () => {
    const checkbox = element.find('input')
    checkbox.should('have.attr', 'aria-disabled', `false`)
    return creator()
  },
})

export const CheckboxContainableMixin: Mixin = <T>({ element, creator }: MixinContext<T>) => ({
  contains: (content: string) => {
    const item = element.find('label bal-text')
    item.contains(content)
    return creator()
  },
})

export const CheckboxAccessor: Accessor<CheckboxAccessorType> = createAccessor<CheckboxAccessorType>(
  CheckboxClickableMixin,
  CheckboxContainableMixin,
  ExistableMixin,
  VisibleMixin,
  NthSelectableMixin,
  ShouldableMixin,
)