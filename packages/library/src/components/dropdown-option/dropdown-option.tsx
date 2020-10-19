import { Component, Element, h, Host, Prop, Event, EventEmitter, Listen } from '@stencil/core'

@Component({
  tag: 'bal-dropdown-option',
  styleUrl: 'dropdown-option.scss',
  shadow: false,
  scoped: true,
})
export class DropdownOption {
  @Element() element!: HTMLElement
  labelElement!: HTMLSpanElement

  /**
   * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
   */
  @Prop() value: string | boolean | number | any = false

  /**
   * Baloise icon as a prefix
   */
  @Prop() icon = ''

  /**
   * If `true` the option is focused
   */
  @Prop() focused = false

  /**
   * If `true` the option is selected
   */
  @Prop() selected = false

  @Event() balDropdownOptionSelect: EventEmitter<string | boolean | number | any>

  @Listen('balDropdownChanged')
  async dropdownChanged(event: CustomEvent<any>) {
    event.preventDefault()
    event.stopPropagation()
    this.selected = this.value === event.detail
  }

  async onClick() {
    this.balDropdownOptionSelect.emit(this.value)
  }

  render() {
    return (
      <Host>
        <button
          class={[
            'dropdown-item',
            this.selected ? 'is-selected' : '',
            this.focused ? 'is-focused' : '',
            this.icon ? 'has-icon' : '',
          ].join(' ')}
          tabIndex={-1}
          onClick={this.onClick.bind(this)}>
          <span class="icon" style={{ display: this.icon.length === 0 ? 'none' : 'flex' }}>
            <bal-icon name={this.icon} size="medium"></bal-icon>
          </span>
          <bal-text class="title" ref={el => (this.labelElement = el as HTMLSpanElement)}>
            <slot />
          </bal-text>
        </button>
      </Host>
    )
  }
}
