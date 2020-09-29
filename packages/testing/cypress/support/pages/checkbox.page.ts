import { CheckboxAccessor } from '../../../src/checkbox.accessor'
import { dataTestSelector } from '../../../src/selectors'

export class CheckboxPage {
  normalCheckboxElement = CheckboxAccessor(dataTestSelector('checkbox-normal'))
  disabledCheckboxElement = CheckboxAccessor(dataTestSelector('checkbox-disabled'))

  open() {
    cy.visit('/components/checkbox')
  }

}
