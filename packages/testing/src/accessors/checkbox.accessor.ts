/// <reference types="cypress" />
import {
  Accessor,
  createAccessor,
  Mixin,
  MixinContext,
  Checkable,
  Clickable,
  Containable,
  Disableable,
  Existable,
  ExistableMixin,
  NthSelectable,
  NthSelectableMixin,
  Shouldable,
  ShouldableMixin,
  Visible,
  VisibleMixin,
} from '../mixins'

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
