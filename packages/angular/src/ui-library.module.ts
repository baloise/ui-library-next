import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { defineCustomElements } from '@baloise/ui-library-next/loader'

import { DIRECTIVES } from './directives/proxies-list'
import { BooleanValueAccessor } from './directives/boolean-value-accessor'
import { TextValueAccessor } from './directives/text-value-accessor'
import { FormsModule } from '@angular/forms'

defineCustomElements(window)

const DECLARATIONS = [
  // proxies
  ...DIRECTIVES,

  // ngModel accessors
  BooleanValueAccessor,
  TextValueAccessor,
]

@NgModule({
  declarations: [DECLARATIONS],
  exports: [DECLARATIONS],
  imports: [CommonModule, FormsModule],
  providers: [],
})
export class BalUiLibraryModule {}
