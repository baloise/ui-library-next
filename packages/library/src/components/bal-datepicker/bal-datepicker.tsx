import { Component, Host, h, Element, State, Prop, Event, EventEmitter } from '@stencil/core'
import { i18nDate } from './bal-datepicker.i18n'
import { decreaseYear, now, year } from './bal-datepicker.util'

@Component({
  tag: 'bal-datepicker',
  styleUrl: 'bal-datepicker.scss',
  scoped: true,
  shadow: false,
})
export class Datepicker {
  private inputElement!: HTMLInputElement
  private dropdownElement!: HTMLBalDropdownElement

  @Element() element!: HTMLElement

  @State() isDropdownOpen: boolean = false
  @State() pointerMonth: number = 11
  @State() pointerYear: number = 2020
  @State() pointerDay: number = 1

  /**
   * If `true` the component uses the whole width.
   */
  @Prop() locale: 'en' | 'de' | 'fr' | 'it' = 'en'

  /**
   * If `true` the component uses the whole width.
   */
  @Prop() expanded = false

  /**
   * Set this to `true` when the component is placed on a dark background.
   */
  @Prop() inverted = false

  /**
   * If `true` the component is diabled.
   */
  @Prop() disabled = false

  /**
   * Defines the placeholder of the input element.
   */
  @Prop() placeholder = ''

  /**
   * Selected option value.
   */
  @Prop({ mutable: true }) value: any

  /**
   * Earliest year available for selection
   */
  @Prop({ attribute: 'min-year' }) minYearProp: number | undefined = undefined

  /**
   * Latest year available for selection
   */
  @Prop({ attribute: 'max-year' }) maxYearProp: number | undefined = undefined

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<any>

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'balInput' }) balInput!: EventEmitter<string>

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'balBlur' }) balBlur!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'balFocus' }) balFocus!: EventEmitter<FocusEvent>

  get minYear() {
    return this.minYearProp ? this.minYearProp : decreaseYear(now(), 100)
  }

  get maxYear() {
    return this.maxYearProp ? this.maxYearProp : year(now())
  }

  get years(): number[] {
    return Array.from({ length: this.maxYear - this.minYear + 1 }, (_, index: number) => this.minYear + index)
  }

  get weekDays(): string[] {
    const translations = [...i18nDate[this.locale].weekdaysMin]
    translations.push(translations.shift())
    return translations
  }

  private async onInputClick(event: MouseEvent) {
    this.dropdownElement.toggle()
    event.stopPropagation()
  }

  private onDropdownChange(event: CustomEvent<boolean>) {
    this.isDropdownOpen = event.detail
    event.stopPropagation()
  }

  private onInput(event: InputEvent) {
    const inputValue = (event.target as HTMLInputElement).value
    this.balInput.emit(inputValue)
    event.stopPropagation()
    console.log(this.inputElement)
  }

  private previousMonth() {
    if (this.pointerYear === this.minYear && this.pointerMonth === 0) {
      return
    }
    if (this.pointerMonth === 0) {
      this.pointerYear = this.pointerYear - 1
      this.pointerMonth = 11
    } else {
      this.pointerMonth = this.pointerMonth - 1
    }
  }

  private nextMonth() {
    if (this.pointerYear === this.maxYear && this.pointerMonth === 11) {
      return
    }
    if (this.pointerMonth === 11) {
      this.pointerYear = this.pointerYear + 1
      this.pointerMonth = 0
    } else {
      this.pointerMonth = this.pointerMonth + 1
    }
  }

  private handleMonthSelect(event: InputEvent) {
    const inputValue = (event.target as HTMLInputElement).value
    this.pointerMonth = parseInt(inputValue, 10)
  }

  private handleYearSelect(event: InputEvent) {
    const inputValue = (event.target as HTMLInputElement).value
    this.pointerYear = parseInt(inputValue, 10)
  }

  render() {
    return (
      <Host role="datepicker">
        <bal-dropdown
          expanded={this.expanded}
          onBalCollapse={e => this.onDropdownChange(e)}
          ref={el => (this.dropdownElement = el as HTMLBalDropdownElement)}>
          {this.renderInput()}
          <div class="datepicker-popup">
            {this.renderHeader()}
            {this.renderBody()}
          </div>
        </bal-dropdown>
      </Host>
    )
  }

  renderInput() {
    return (
      <div class="control has-icons-right" slot="trigger">
        <input
          class={{
            'input': true,
            'clickable': true,
            'is-inverted': this.inverted,
          }}
          autoComplete="off"
          disabled={this.disabled}
          placeholder={this.placeholder}
          value={this.value?.text}
          onInput={e => this.onInput(e as any)}
          onClick={e => this.onInputClick(e)}
          onBlur={e => this.balBlur.emit(e)}
          onFocus={e => this.balFocus.emit(e)}
          ref={el => (this.inputElement = el as HTMLInputElement)}
        />
        <bal-icon size="medium" is-right color={this.inverted ? 'white' : 'blue'} name="date" />
      </div>
    )
  }

  renderBody() {
    return (
      <section class="datepicker-table">
        {this.renderWeekDayHeader()}
        <div class="datepicker-body"></div>
      </section>
    )
  }

  renderWeekDayHeader() {
    return (
      <header class="datepicker-header">
        {this.weekDays.map(weekday => (
          <div class="datepicker-cell">{weekday}</div>
        ))}
      </header>
    )
  }

  renderHeader() {
    return (
      <header class="datepicker-header">
        <div class="pagination field is-centered">
          <a role="button" onClick={() => this.previousMonth()} class="pagination-previous">
            <bal-icon name="nav-go-left" size="large" />
          </a>
          <a role="button" onClick={() => this.nextMonth()} class="pagination-next">
            <bal-icon name="nav-go-right" size="large" />
          </a>
          <div class="pagination-list">
            <div class="field has-addons">
              <div class="control month-select">
                <span class="select">
                  <select onInput={e => this.handleMonthSelect(e as InputEvent)}>
                    {i18nDate[this.locale].months.map((month, index) => (
                      <option value={index} selected={this.pointerMonth === index}>
                        {month}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
              <div class="control year-select">
                <span class="select">
                  <select onInput={e => this.handleYearSelect(e as InputEvent)}>
                    {this.years.map(year => (
                      <option value={year} selected={this.pointerYear === year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
