import { Component, Element, h, Host, Prop } from '@stencil/core'
import { BalOptionValue } from './bal-select-option.type'

@Component({
  tag: 'bal-select-option',
  styleUrl: 'bal-select-option.scss',
  shadow: false,
  scoped: true,
})
export class SelectOption {
  private inputId = `bal-selopt-${selectOptionIds++}`
  private parent!: HTMLBalSelectElement

  @Element() element!: HTMLElement

  /**
   * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
   */
  @Prop() value: string

  /**
   * Label will be shown in the input element when it got selected
   */
  @Prop() label: string

  /**
   * If `true` the option is hidden
   */
  @Prop() hidden = false

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

  get option(): BalOptionValue<any> {
    return {
      value: this.value,
      label: this.label,
    }
  }

  connectedCallback() {
    this.parent = this.element.closest('bal-select')
    this.parent.sync()
  }

  disconnectedCallback() {
    this.parent.sync()
  }

  private onClick() {
    this.parent.select(this.option)
  }

  render() {
    return (
      <Host role="option" id={this.inputId} onClick={() => this.onClick()}>
        <button
          class={[
            'dropdown-item',
            this.selected ? 'is-selected' : '',
            this.hidden ? 'is-hidden' : '',
            this.focused ? 'is-focused' : '',
            this.icon ? 'has-icon' : '',
          ].join(' ')}
          tabIndex={-1}>
          <slot />
        </button>
      </Host>
    )
  }
}

let selectOptionIds = 0
