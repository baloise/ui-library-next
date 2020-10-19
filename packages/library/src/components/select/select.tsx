import { Component, h, Host, Element, Event, EventEmitter, Prop, Listen, State, Watch } from '@stencil/core'
import { BalOptionValue } from '../select-option/select-option.type'

@Component({
  tag: 'bal-select',
  styleUrl: 'select.scss',
  shadow: false,
  scoped: true,
})
export class Select {
  @Element() element!: HTMLElement
  inputElement!: HTMLInputElement
  dropdownElement!: HTMLBalDropdownElement

  @State() label = ''

  @Prop({ mutable: true }) value: BalOptionValue<any>

  @Prop() options: BalOptionValue<any>[] = []
  @Watch('options')
  optionsChanged() {
    if (this.options.length === 0) {
      this.dropdownElement.close()
    }
  }

  @Prop() remote = false
  @Prop() disabled = false
  @Prop() typeahead = false
  @Prop() loading = false
  @Prop() placeholder = ''

  @Event() balChange!: EventEmitter<any>

  /**
   * Emitted when containing input field raises an input event.
   */
  @Event() balInput!: EventEmitter<string>

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() balBlur!: EventEmitter<void>

  /**
   * Emitted when the toggle has focus..
   */
  @Event() balFocus!: EventEmitter<void>

  @Listen('balOptionSelect')
  async optionSelect(event: CustomEvent<BalOptionValue<any>>) {
    event.preventDefault()
    event.stopPropagation()
    this.value = { ...event.detail }
    this.balChange.emit(event.detail)
    await this.dropdownElement?.toggle()
    this.dispatchEventToOptions(this.buildCustomEvent('balSelectChanged', this.value))
    this.inputElement.value = this.value?.text
  }

  async onInputClick() {
    if (!this.typeahead) {
      await this.dropdownElement?.toggle()
    }
  }

  onInputFocus() {
    this.balFocus.emit()
  }

  onInputBlur() {
    this.balBlur.emit()
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

  render() {
    return (
      <Host>
        <bal-dropdown scrollable ref={el => (this.dropdownElement = el as HTMLBalDropdownElement)}>
          <div class="control has-icons-right" slot="trigger">
            <input
              class="input clickable"
              readonly={!this.typeahead}
              disabled={this.disabled}
              placeholder={this.placeholder}
              autoComplete="off"
              value={this.value?.text}
              onInput={this.onInput.bind(this)}
              onClick={this.onInputClick.bind(this)}
              onBlur={this.onInputBlur.bind(this)}
              onFocus={this.onInputFocus.bind(this)}
              ref={el => (this.inputElement = el as HTMLInputElement)}
            />
            <bal-icon
              size="medium"
              rotate={this.loading}
              name={this.loading ? 'refresh' : this.typeahead ? 'search' : 'caret-down'}
              is-right
            />
          </div>
          {this.options.map(o => (
            <bal-select-option value={o}></bal-select-option>
          ))}
        </bal-dropdown>
      </Host>
    )
  }

  private dispatchEventToOptions(event: CustomEvent) {
    const options = this.element.querySelectorAll('bal-select-option')
    options.forEach(o => o.dispatchEvent(event))
  }

  private buildCustomEvent(typeArg: string, detail: any) {
    return new CustomEvent<any>(typeArg, { detail })
  }
}
