import { Component, Element, h, Host, Prop } from '@stencil/core'
import { BalOptionValue } from './bal-select-option.type'

@Component({
  tag: 'bal-select-option',
  styleUrl: 'bal-select-option.scss',
  shadow: false,
  scoped: true,
})
export class SelectOption {
  private inputId = `ion-selopt-${selectOptionIds++}`

  @Element() element!: HTMLElement

  /**
   * The value of the dropdown item. This value will be returned by the parent <bal-dropdown> element.
   */
  @Prop() value: BalOptionValue<any>

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

  get parent(): HTMLBalSelectElement {
    return this.element.closest('bal-select')
  }

  private onClick() {
    this.parent.select(this.value)
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

let selectOptionIds = 0