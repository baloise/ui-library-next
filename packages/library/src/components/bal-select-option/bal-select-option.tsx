import { Component, Element, h, Host, Prop, Event, EventEmitter, Listen } from '@stencil/core'
import { BalOptionValue } from './bal-select-option.type'

@Component({
  tag: 'bal-select-option',
  styleUrl: 'bal-select-option.scss',
  shadow: false,
  scoped: true,
})
export class SelectOption {
  @Element() element!: HTMLElement

  @Prop({ mutable: true }) hidden = false

  /**
   * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
   */
  @Prop() value: BalOptionValue<any>

  /**
   * Baloise icon as a prefix
   */
  @Prop() icon = ''

  /**
   * TODO: add description
   */
  @Prop() checkbox = false

  /**
   * If `true` the option is focused
   */
  @Prop() focused = false

  /**
   * If `true` the option is selected
   */
  @Prop() selected = false

  @Event() balOptionSelect: EventEmitter<string | boolean | number | any>

  @Listen('balSelectChanged')
  async selectChanged(event: CustomEvent<BalOptionValue<any> | null>) {
    event.preventDefault()
    event.stopPropagation()
    this.selected = event.detail === null ? false : this.value.value === event.detail.value
  }

  @Listen('balSelectInput')
  async selectInput(event: CustomEvent<string>) {
    event.preventDefault()
    event.stopPropagation()
    const searchValue = event.detail
    const index = this.value.text.toLowerCase().indexOf(searchValue.toLowerCase())
    this.hidden = index < 0
  }

  async onClick() {
    this.balOptionSelect.emit(this.value)
  }

  render() {
    return (
      <Host>
        <button
          class={[
            'dropdown-item',
            this.selected ? 'is-selected' : '',
            this.hidden ? 'is-hidden' : '',
            this.focused ? 'is-focused' : '',
            this.icon ? 'has-icon' : '',
          ].join(' ')}
          tabIndex={-1}
          onClick={this.onClick.bind(this)}>
          {this.value.render ? (
            <span innerHTML={this.value.render(this.value)}></span>
          ) : (
            <bal-text class="title">{this.value.text}</bal-text>
          )}
        </button>
      </Host>
    )
  }
}
