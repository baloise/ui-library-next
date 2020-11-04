import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isChecked = true

  onChange(event: CustomEvent<boolean>) {
    console.log('on change', event.detail)
  }
}
