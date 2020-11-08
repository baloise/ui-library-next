import { Component, Host, h, Prop, Method, State, Watch, Event, EventEmitter } from '@stencil/core'
import { BalTabOption } from '../bal-tabs/bal-tab.type'

@Component({
  tag: 'bal-tab-item',
  styleUrl: 'bal-tab-item.scss',
  scoped: true,
  shadow: false,
})
export class TabItem {
  @State() isContentHidden = true

  /**
   * This is the key of the tab.
   */
  @Prop() value: string = ''

  /**
   * Label for the tab.
   */
  @Prop() label: string = ''

  /**
   * If `true` a small red bubble is added to the tab.
   */
  @Prop() bubble: boolean = false

  /**
   * If `true` the tab is disabled.
   */
  @Prop() disabled: boolean = false

  /**
   * Tell's if the tab is active and the content is visible.
   */
  @Prop() active: boolean = false

  @Watch('active')
  activatedHandler(newActive: boolean) {
    this.isContentHidden = !newActive
  }

  /**
   * Emitted when the tabs get rendered.
   */
  @Event({ eventName: 'balChange' }) tabChanged: EventEmitter

  get options() {
    return {
      value: this.value,
      label: this.label,
      active: this.active,
      disabled: this.disabled,
      hasBubble: this.bubble,
    }
  }

  /**
   * Options of the tab like label, value etc.
   */
  @Method()
  async getOptions(): Promise<BalTabOption> {
    return this.options
  }

  /**
   * Sets the tab active.
   */
  @Method()
  async setActive(active: boolean): Promise<void> {
    this.active = active
  }

  componentWillLoad() {
    this.isContentHidden = !this.active
  }

  render() {
    this.tabChanged.emit(this.options)
    return (
      <Host>
        <div style={this.isContentHidden && { display: 'none' }}>
          <slot />
        </div>
      </Host>
    )
  }
}
