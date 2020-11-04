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

  @State() textToScrollTo: string = ''
  @State() label = ''

  @Prop() remote = false
  @Prop() expanded = false
  @Prop() inverted = false
  @Prop() disabled = false
  @Prop() typeahead = false
  @Prop() loading = false
  @Prop() placeholder = ''
  @Prop() scrollable: number = 250
  @Prop({ mutable: true }) value: BalOptionValue<any>
  @Prop() options: BalOptionValue<any>[] = []
  @Watch('options')
  optionsChanged() {
    if (this.options.length === 0) {
      this.dropdownElement.close()
    }
  }

  @Event() balChange!: EventEmitter<BalOptionValue<any>>
  @Event() balInput!: EventEmitter<string>
  @Event() balBlur!: EventEmitter<FocusEvent>
  @Event() balFocus!: EventEmitter<FocusEvent>
  @Event() balClick!: EventEmitter<MouseEvent>
  @Event() balKeyDown!: EventEmitter<KeyboardEvent>
  @Event() balKeyPress!: EventEmitter<KeyboardEvent>
  @Event() balKeyUp!: EventEmitter<KeyboardEvent>

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
          ref={el => (this.dropdownElement = el as HTMLBalDropdownElement)}>
          <div class="control has-icons-right" slot="trigger">
            <input
              class={{
                'input': true,
                'clickable': true,
                'is-inverted': this.inverted,
              }}
              readonly={!this.typeahead}
              disabled={this.disabled}
              placeholder={this.placeholder}
              autoComplete="off"
              value={this.value?.text}
              onInput={e => this.onInput(e as any)}
              onBlur={e => this.balBlur.emit(e)}
              onClick={e => this.onInputClick(e)}
              onKeyDown={e => this.balKeyDown.emit(e)}
              onKeyPress={e => this.onKeyPress(e)}
              onKeyUp={e => this.balKeyUp.emit(e)}
              onFocus={e => this.balFocus.emit(e)}
              ref={el => (this.inputElement = el as HTMLInputElement)}
            />
            <bal-icon
              size="medium"
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
    const optionElement = this.optionElements.get(option.value)
    dropdownContentElement.scrollTop = optionElement.offsetTop
  }

  private dispatchEventToOptions(event: CustomEvent) {
    const options = this.element.querySelectorAll('bal-select-option')
    options.forEach(o => o.dispatchEvent(event))
  }

  private buildCustomEvent(typeArg: string, detail: any) {
    return new CustomEvent<any>(typeArg, { detail })
  }
}
