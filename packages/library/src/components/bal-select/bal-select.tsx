import { Component, h, Host, Element, Prop, State, Method, EventEmitter, Event, Watch } from '@stencil/core'
import { BalOptionValue } from '../bal-select-option/bal-select-option.type'

@Component({
  tag: 'bal-select',
  styleUrl: 'bal-select.scss',
  shadow: false,
  scoped: true,
})
export class Select {
  private inputElement!: HTMLInputElement
  private dropdownElement!: HTMLBalDropdownElement
  private clearScrollToValue: NodeJS.Timeout

  @Element() element!: HTMLElement

  @State() isDropdownOpen: boolean = false
  @State() textToScrollTo: string = ''

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

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<BalOptionValue<any>>

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event({ eventName: 'balInput' }) balInput!: EventEmitter<string>

  /**
   * Emitted when the selection is cancelled.
   */
  @Event({ eventName: 'balCancel' }) balCancel!: EventEmitter<void>

  /**
   * Emitted when the input loses focus.
   */
  @Event({ eventName: 'balBlur' }) balBlur!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input has focus.
   */
  @Event({ eventName: 'balFocus' }) balFocus!: EventEmitter<FocusEvent>

  /**
   * Emitted when the input got clicked.
   */
  @Event({ eventName: 'balClick' }) balClick!: EventEmitter<MouseEvent>

  /**
   * Emitted when the input has focus and key from the keyboard go hit.
   */
  @Event({ eventName: 'balKeyPress' }) balKeyPress!: EventEmitter<KeyboardEvent>

  @Watch('options')
  optionsChanged() {
    if (this.typeahead && this.remote) {
      if (this.options.length === 0) {
        this.dropdownElement.close()
      } else {
        if (this.inputElement.value.length > 0) {
          this.dropdownElement.open()
        }
      }
    }
  }

  @Method()
  async open(): Promise<void> {
    if (this.disabled) {
      return undefined
    }
    this.dropdownElement.open()
  }

  @Method()
  async close(): Promise<void> {
    if (this.disabled) {
      return undefined
    }
    this.dropdownElement.close()
  }

  /**
   *
   */
  @Method()
  async select(option: BalOptionValue<any>) {
    this.value = option
    this.balChange.emit(this.value)
    this.inputElement.value = this.value?.text
    await this.dropdownElement?.toggle()
    this.updateOptionProps()
  }

  /**
   * Sets the value to null and resets the value of the input.
   */
  @Method()
  async clear() {
    this.value = null
    this.inputElement.value = ''
    this.updateOptionProps()
  }

  @Method()
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus()
    }
  }

  private async onInputClick(event: MouseEvent) {
    if (this.disabled) {
      return undefined
    }

    this.balClick.emit(event)
    if (!this.typeahead) {
      await this.dropdownElement?.toggle()
    }
  }

  private onDropdownChange(event: CustomEvent<boolean>) {
    this.isDropdownOpen = event.detail
    event.stopPropagation()
  }

  private onInput(event: InputEvent) {
    const inputValue = (event.target as HTMLInputElement).value
    this.balInput.emit(inputValue)
    if (!this.remote) {
      this.updateOptionProps()
    }
    if (this.typeahead && inputValue.length === 0) {
      this.dropdownElement.close()
    }
    if (this.typeahead && !this.remote && inputValue.length > 0) {
      this.dropdownElement.open()
    }
  }

  private updateOptionProps() {
    const inputValue = this.inputElement.value
    this.childOptions.forEach(option => {
      if (!this.remote && this.typeahead) {
        const didMatch = this.compareForFilter(`${option.value.text}` || '', `${inputValue}`)
        option.setAttribute('hidden', `${!didMatch}`)
      }

      const isSelected = !!this.value && this.value.value === option.value.value
      option.setAttribute('selected', `${isSelected}`)
    })
  }

  private compareForFilter(text: string, input: string): boolean {
    text = text.toLocaleLowerCase()
    input = input.toLocaleLowerCase()
    return text.indexOf(input) >= 0
  }

  private onKeyPress(event: KeyboardEvent) {
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

  private async scrollToText(input: string) {
    const dropdownContentElement = await this.dropdownElement.getContentElement()
    const optionElement = this.childOptions.find(o => this.compareForFilter(o.value.text, input))
    if (optionElement) {
      dropdownContentElement.scrollTop = optionElement.offsetTop
    }
  }

  private get childOptions() {
    return Array.from(this.element.querySelectorAll('bal-select-option'))
  }

  render() {
    return (
      <Host role="listbox">
        <bal-dropdown
          expanded={this.expanded}
          scrollable={this.scrollable}
          onBalCollapse={e => this.onDropdownChange(e)}
          ref={el => (this.dropdownElement = el as HTMLBalDropdownElement)}>
          <div class="control has-icons-right" slot="trigger">
            <input
              class={{
                'input': true,
                'clickable': true,
                'is-inverted': this.inverted,
              }}
              readonly={!this.typeahead}
              autoComplete="off"
              disabled={this.disabled}
              placeholder={this.placeholder}
              value={this.value?.text}
              onInput={e => this.onInput(e as any)}
              onClick={e => this.onInputClick(e)}
              onKeyPress={e => this.onKeyPress(e)}
              onBlur={e => this.balBlur.emit(e)}
              onFocus={e => this.balFocus.emit(e)}
              ref={el => (this.inputElement = el as HTMLInputElement)}
            />
            <bal-icon
              size="medium"
              is-right
              turn={!this.loading && !this.typeahead && this.isDropdownOpen}
              rotate={this.loading}
              color={this.inverted ? 'white' : 'blue'}
              name={this.loading ? 'refresh' : this.typeahead ? 'search' : 'caret-down'}
            />
          </div>
          {this.options.map(option => (
            <bal-select-option value={option}></bal-select-option>
          ))}
        </bal-dropdown>
      </Host>
    )
  }
}
