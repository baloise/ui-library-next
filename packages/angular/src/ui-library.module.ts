import { NgModule } from '@angular/core'
import { defineCustomElements } from '@baloise/ui-library-next/loader'

import { DIRECTIVES } from './directives/proxies-list'

defineCustomElements(window)

@NgModule({
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
  imports: [],
  providers: [],
})
export class BalUiLibraryModule {}
