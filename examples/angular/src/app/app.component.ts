import { Component } from '@angular/core'
import { BalOptionValue } from '@baloise/ui-library-next'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isChecked = true
  loading = false
  options: BalOptionValue<number>[] = []

  onChange(event: CustomEvent<boolean>) {
    console.log('on change', event.detail)
  }

  onSelectInput(event: CustomEvent<string>) {
    this.loading = true
    fetch('https://swapi.dev/api/people/?search=' + event.detail)
      .then(res => res.json())
      .then(data => {
        this.options = data.results.map((person: any, index: number) => ({
          value: index,
          text: person.name,
        }))
        this.loading = false
      })
  }
}
