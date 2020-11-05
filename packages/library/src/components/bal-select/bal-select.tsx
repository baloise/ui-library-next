import { Component, h, Host, Element, Event, EventEmitter, Prop, Listen, State, Watch, Method } from '@stencil/core'
import { BalOptionValue } from '../bal-select-option/bal-select-option.type'

@Component({
  tag: 'bal-select',
  styleUrl: 'bal-select.scss',
  shadow: false,
  scoped: true,
})
export class Select {
  @Element() element!: HTMLElement
  inputElement!: HTMLInputElement
  dropdownElement!: HTMLBalDropdownElement
  optionElements = new Map<string, HTMLBalSelectOptionElement>()

  clearScrollToValue: NodeJS.Timeout

  @State() isDropdownOpen: boolean = false
  @State() textToScrollTo: string = ''
  @State() label = ''

  /**
   * If `true` the filtering of the options is done outside of the component.
   */
  @Prop() remote = false

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
   * If `true` the user can search by typing into the input field.
   */
  @Prop() typeahead = false

  /**
   * If `true` the component shows a loading spinner and sets the input to readonly.
   */
  @Prop() loading = false

  /**
   * Defines the placeholder of the input element.
   */
  @Prop() placeholder = ''

  /**
   * Defines the height of the dropdown list.
   */
  @Prop() scrollable: number = 250

  /**
   * Selected option value.
   */
  @Prop({ mutable: true }) value: BalOptionValue<any>

  /**
   * List of the options.
   */
  @Prop() options: BalOptionValue<any>[] = []
  @Watch('options')
  optionsChanged() {
    if (this.options.length === 0) {
      this.dropdownElement.close()
    }
  }

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'balSelectChange' }) balChange!: EventEmitter<BalOptionValue<any>>

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'balSelectInput' }) balInput!: EventEmitter<string>

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'balSelectBlur' }) balBlur!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'balSelectFocus' }) balFocus!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input got clicked.
   */
  @Event({ eventName: 'balSelectClick' }) balClick!: EventEmitter<MouseEvent>

  /**
   * Emitted when the input has focus and key from the keyboard go hit.
   */
  @Event({ eventName: 'balSelectKeyPress' }) balKeyPress!: EventEmitter<KeyboardEvent>

  @Listen('balSelectOptionClick')
  async optionSelect(event: CustomEvent<BalOptionValue<any>>) {
    event.preventDefault()
    event.stopPropagation()
    this.value = { ...event.detail }
    this.balChange.emit(event.detail)
    await this.dropdownElement?.toggle()
    this.dispatchEventToOptions(this.buildCustomEvent('balSelectChanged', this.value))
    this.inputElement.value = this.value?.text
  }

  /**
   * Sets the value to null and resets the value of the input.
   */
  @Method()
  async clear() {
    this.value = null
    this.inputElement.value = ''
    this.dispatchEventToOptions(this.buildCustomEvent('balSelectChanged', this.value))
  }

  async onInputClick(event: MouseEvent) {
    this.balClick.emit(event)
    if (!this.typeahead) {
      await this.dropdownElement?.toggle()
    }
  }

  onDropdownChange(event: CustomEvent<boolean>) {
    this.isDropdownOpen = event.detail
    event.stopPropagation()
    event.preventDefault()
  }

  onInput(event: InputEvent) {
    const inputValue = (event.target as HTMLInputElement).value
    this.balInput.emit(inputValue)
    if (!this.remote) {
      this.dispatchEventToOptions(this.buildCustomEvent('balSelectInput', inputValue))
    }
    if (this.options.length > 0) {
      this.dropdownElement.open()
    }
  }

  onKeyPress(event: KeyboardEvent) {
    this.balKeyPress.emit(event)
    if (!this.typeahead) {
      this.textToScrollTo = this.textToScrollTo + event.key

      clearTimeout(this.clearScrollToValue)
      this.clearScrollToValue = setTimeout(() => {
        this.scrollToText(this.textToScrollTo)
        this.textToScrollTo = ''
      }, 600)
    }
  }

  render() {
    this.optionElements.clear()
    return (
      <Host>
        <bal-dropdown
          expanded={this.expanded}
          scrollable={this.scrollable}
          onBalDropdownChange={e => this.onDropdownChange(e)}
          ref={el => (this.dropdownElement = el as HTMLBalDropdownElement)}>
          <div class="control has-icons-right" slot="trigger">
            <input
              class={{
                'input': true,
                'clickable': true,
                'is-inverted': this.inverted,
              }}
              readonly={!this.typeahead || this.loading}
              disabled={this.disabled}
              placeholder={this.placeholder}
              autoComplete="off"
              value={this.value?.text}
              onInput={e => this.onInput(e as any)}
              onBlur={e => this.balBlur.emit(e)}
              onClick={e => this.onInputClick(e)}
              onKeyPress={e => this.onKeyPress(e)}
              onFocus={e => this.balFocus.emit(e)}
              ref={el => (this.inputElement = el as HTMLInputElement)}
            />
            <bal-icon
              size="medium"
              turn={!this.loading && !this.typeahead && this.isDropdownOpen}
              rotate={this.loading}
              color={this.inverted ? 'white' : 'blue'}
              name={this.loading ? 'refresh' : this.typeahead ? 'search' : 'caret-down'}
              is-right
            />
          </div>
          {this.options.map(option => (
            <bal-select-option ref={el => this.optionElements.set(option.value, el)} value={option}></bal-select-option>
          ))}
        </bal-dropdown>
      </Host>
    )
  }

  private async scrollToText(text: string) {
    const dropdownContentElement = await this.dropdownElement.getContentElement()
    const option = this.options.find(option => option.text.startsWith(text))
    if (option) {
      const optionElement = this.optionElements.get(option.value)
      dropdownContentElement.scrollTop = optionElement.offsetTop
    }
  }

  private dispatchEventToOptions(event: CustomEvent) {
    const options = this.element.querySelectorAll('bal-select-option')
    options.forEach(o => o.dispatchEvent(event))
  }

  private buildCustomEvent(typeArg: string, detail: any) {
    return new CustomEvent<any>(typeArg, { detail })
  }
}
