import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { defineCustomElements } from '@baloise/ui-library-next/loader'

import { DIRECTIVES } from './directives/proxies-list'

defineCustomElements(window)

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  imports: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BalUiLibraryModule {}
