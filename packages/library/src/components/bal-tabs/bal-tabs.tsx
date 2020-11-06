import { Component, Host, h, Element, State, Event, EventEmitter, Method, Prop, Listen } from '@stencil/core'
import { BalTabOption } from './bal-tab.type'

@Component({
  tag: 'bal-tabs',
  styleUrl: 'bal-tabs.scss',
  scoped: true,
  shadow: false,
})
export class Tabs {
  @Element() element!: HTMLElement

  @State() tabsOptions: BalTabOption[] = []

  /**
   * If `true` the field expands over the whole width.
   */
  @Prop() expanded = false

  /**
   * If `true` the the padding gets reduced.
   */
  @Prop() dense = false

  /**
   * If you want the rounded tab style.
   */
  @Prop() rounded = false

  /**
   * If `true` a acation button is added to the right
   */
  @Prop() action = false

  /**
   * Label for the action button
   */
  @Prop() actionLabel = ''

  /**
   * Emitted when the changes has finished.
   */
  @Event({ eventName: 'balTabsChange' }) tabsDidChange: EventEmitter<BalTabOption>

  /**
   * Emitted when the action button has clicked
   */
  @Event({ eventName: 'balTabsActionClick' }) actionHasClicked: EventEmitter<MouseEvent>

  /**
   * Dropdown a tab by the value of the tab item.
   */
  @Method()
  async select(value: string) {
    this.tabs.forEach(t => t.setActive(t.value === value))
    this.readTabItems()
  }

  componentWillLoad() {
    this.readTabItems()
  }

  @Listen('balTabChange')
  tabChanged() {
    this.readTabItems()
  }

  private readTabItems() {
    Promise.all(this.tabs.map(value => value.getOptions())).then(tabsOptions => {
      this.tabsOptions = tabsOptions
    })
  }

  private get tabs(): HTMLBalTabItemElement[] {
    return Array.from(this.element.querySelectorAll('bal-tab-item'))
  }

  private async onSelectTab(tab: BalTabOption) {
    if (!tab.disabled) {
      await this.select(tab.value)
      this.tabsDidChange.emit(tab)
    }
  }

  render() {
    return (
      <Host>
        <div
          class={[
            'tabs',
            this.rounded ? 'is-rounded' : '',
            this.dense ? 'is-dense' : '',
            this.expanded ? 'is-fullwidth' : '',
          ].join(' ')}>
          <ul>
            {this.tabsOptions.map(tab => (
              <li class={[tab.active ? 'is-active' : '', tab.disabled ? 'is-disabled' : ''].join(' ')}>
                <a onClick={() => this.onSelectTab(tab)}>{tab.label}</a>
                <span class="bubble" style={!tab.hasBubble && { display: 'none' }}></span>
              </li>
            ))}
            <li class="is-right" style={{ display: this.action ? 'block' : 'none' }}>
              <bal-button onClick={e => this.actionHasClicked.emit(e)}>{this.actionLabel}</bal-button>
            </li>
          </ul>
        </div>
        <slot />
      </Host>
    )
  }
}
