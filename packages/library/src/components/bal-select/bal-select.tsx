import { Component, h, Host, Element, Prop, State, Method, EventEmitter, Event } from '@stencil/core'
import { isEnterKey, isEscapeKey, isArrowDownKey, isArrowUpKey } from '../../utils/key.util'
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
  @State() labelToScrollTo: string = ''
  @State() focusIndex: number = 0

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
  @Prop({ mutable: true }) value: string = ''

  /**
   * Emitted when a option got selected.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<string>

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

  /**
   * Emitted when the input got clicked.
   */
  @Event({ eventName: 'balClick' }) balClick!: EventEmitter<MouseEvent>

  /**
   * Emitted when the input has focus and key from the keyboard go hit.
   */
  @Event({ eventName: 'balKeyPress' }) balKeyPress!: EventEmitter<KeyboardEvent>

  /**
   * Emitted when the user cancels the input.
   */
  @Event({ eventName: 'balCancel' }) balCancel!: EventEmitter<KeyboardEvent>

  /**
   * Opens the dropdown
   */
  @Method()
  async open(): Promise<void> {
    if (this.disabled) {
      return undefined
    }
    this.dropdownElement.open()
  }

  /**
   * Closes the dropdown
   */
  @Method()
  async close(): Promise<void> {
    if (this.disabled) {
      return undefined
    }
    this.dropdownElement.close()
  }

  /**
   * Selects an option
   */
  @Method()
  async select(option: BalOptionValue<any>) {
    this.focusIndex = this.childOptions.findIndex(el => el.value === option.value)
    this.value = option.value
    this.balChange.emit(this.value)
    this.inputElement.value = option?.label
    await this.dropdownElement?.close()
    this.updateOptionProps()
  }

  /**
   * Sets the value to null and resets the value of the input.
   */
  @Method()
  async clear() {
    this.value = ''
    this.inputElement.value = ''
    this.focusIndex = 0
    this.clearFocus()
    this.updateOptionProps()
  }

  /**
   * Sets the focus on the input element
   */
  @Method()
  async setFocus() {
    if (this.inputElement) {
      this.inputElement.focus()
    }
  }

  /**
   * *Internal* - Used to update option changes
   */
  @Method()
  async sync() {
    this.updateOptionProps()
  }

  private get childOptions(): HTMLBalSelectOptionElement[] {
    return Array.from(this.element.querySelectorAll('bal-select-option'))
  }

  private get hasChildren(): boolean {
    return this.childOptions.length > 0
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
    this.value = ''
    this.balChange.emit(this.value)
    this.balInput.emit(inputValue)
    this.updateOptionProps()

    if (this.typeahead && inputValue.length === 0) {
      this.dropdownElement.close()
    }
    if (this.typeahead && inputValue.length > 0) {
      this.dropdownElement.open()
    }
  }

  private async updateOptionProps() {
    const inputValue = this.inputElement.value
    this.clearFocus()
    this.childOptions.forEach((option, index) => {
      if (!this.remote && this.typeahead) {
        const didMatch = this.compareForFilter(`${option.label}` || '', `${inputValue}`)
        option.setAttribute('hidden', `${!didMatch}`)
      }

      const isSelected = !!this.value && this.value === option.value
      option.setAttribute('selected', `${isSelected}`)

      const isFocused = this.focusIndex === index
      option.setAttribute('focused', `${isFocused}`)
    })
    this.moveFocus()
  }

  private async moveFocus() {
    const focusedElement = this.childOptions.find(el => el.focused)
    if (focusedElement) {
      const dropdownContentElement = await this.dropdownElement.getContentElement()

      // up
      const topOfOption = focusedElement.offsetTop
      const topOfDropdownContent = dropdownContentElement.scrollTop
      if (topOfOption < topOfDropdownContent) {
        dropdownContentElement.scrollTop = topOfOption
      }

      // down
      const bottomOfOption = focusedElement.offsetTop + focusedElement.clientHeight
      const bottomOfDropdownContent = dropdownContentElement.scrollTop + dropdownContentElement.clientHeight
      if (bottomOfOption > bottomOfDropdownContent) {
        dropdownContentElement.scrollTop = dropdownContentElement.scrollTop + focusedElement.clientHeight
      }
    }
  }

  private compareForFilter(text: string, input: string): boolean {
    text = text.toLocaleLowerCase()
    input = input.toLocaleLowerCase()
    return text.indexOf(input) >= 0
  }

  private startsWithForFilter(text: string, input: string): boolean {
    text = text.toLocaleLowerCase()
    input = input.toLocaleLowerCase()
    return text.startsWith(input)
  }

  private onKeyUp(event: KeyboardEvent) {
    if (isEscapeKey(event)) {
      this.cancel()
    }
    if (this.hasChildren) {
      if (this.isDropdownOpen && (isArrowDownKey(event) || isArrowUpKey(event))) {
        event.preventDefault()
        this.navigateWithArrowKey(event)
      }
    }
  }

  private navigateWithArrowKey(event: KeyboardEvent) {
    const indexOfFocusedElement = this.childOptions.findIndex(el => el.focused)
    if (indexOfFocusedElement < 0) {
      this.childOptions[0].focused = true
    } else {
      if (isArrowDownKey(event)) {
        this.navigateOneOptionDown(indexOfFocusedElement)
      } else {
        this.navigateOneOptionUp(indexOfFocusedElement)
      }
    }
  }

  private clearFocus() {
    this.childOptions.forEach(el => (el.focused = false))
  }

  private navigateOneOptionDown(indexOfFocusedElement: number) {
    const lastIndex = this.childOptions.length - 1
    const nextIndex = indexOfFocusedElement + 1
    this.focusIndex = nextIndex <= lastIndex ? nextIndex : indexOfFocusedElement
    this.updateOptionProps()
  }

  private navigateOneOptionUp(indexOfFocusedElement: number) {
    const nextIndex = indexOfFocusedElement - 1
    this.focusIndex = nextIndex >= 0 ? nextIndex : indexOfFocusedElement
    this.updateOptionProps()
  }

  private onKeyPress(event: KeyboardEvent) {
    this.balKeyPress.emit(event)
    if (!this.typeahead && event.key.length === 1) {
      this.focusOptionByLabel(event.key)
    }
    if (isEnterKey(event)) {
      this.selectFocused()
    }
  }

  private async cancel() {
    this.balCancel.emit()
    this.close()
    this.labelToScrollTo = ''
    this.unfocusAllOptions()
    await this.scrollTo(0)
  }

  private async selectFocused() {
    const focusedElement: HTMLBalSelectOptionElement = this.childOptions.find(o => o.focused)
    if (focusedElement) {
      const option = await focusedElement.getOption()
      this.select(option)
    }
  }

  private focusOptionByLabel(key: string) {
    this.labelToScrollTo = this.labelToScrollTo + key
    clearTimeout(this.clearScrollToValue)
    this.clearScrollToValue = setTimeout(() => {
      this.scrollToLabel(this.labelToScrollTo)
    }, 600)
  }

  private async scrollToLabel(label: string) {
    const optionElement = this.childOptions.find(o => this.startsWithForFilter(o.label, label))
    if (optionElement) {
      this.focusOptionElement(optionElement)
      await this.scrollTo(optionElement.offsetTop)
    }
    this.labelToScrollTo = ''
  }

  private async scrollTo(scrollTop: number) {
    const dropdownContentElement = await this.dropdownElement.getContentElement()
    dropdownContentElement.scrollTop = scrollTop
  }

  private unfocusAllOptions() {
    this.childOptions.find(o => (o.focused = false))
  }

  private focusOptionElement(optionElement: HTMLBalSelectOptionElement) {
    this.unfocusAllOptions()
    optionElement.focused = true
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
              onInput={e => this.onInput(e as any)}
              onClick={e => this.onInputClick(e)}
              onKeyPress={e => this.onKeyPress(e)}
              onKeyUp={e => this.onKeyUp(e)}
              onBlur={e => this.balBlur.emit(e)}
              onFocus={e => this.balFocus.emit(e)}
              ref={el => (this.inputElement = el as HTMLInputElement)}
            />
            <bal-icon
              class={{ 'is-hidden': this.loading }}
              size="medium"
              is-right
              turn={!this.loading && !this.typeahead && this.isDropdownOpen}
              color={this.inverted ? 'white' : 'blue'}
              name={this.typeahead ? 'search' : 'caret-down'}
            />
          </div>
          <slot></slot>
        </bal-dropdown>
      </Host>
    )
  }
}
