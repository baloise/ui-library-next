import { Component, Host, h, Prop, State, Watch, Method, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'bal-accordion',
  styleUrl: 'bal-accordion.scss',
  scoped: true,
  shadow: false,
})
export class Accordion {
  @State() isCollapsed: boolean = true

  /**
   * Type defines the theme of the accordion toggle
   */
  @Prop() type: 'is-primary' | 'is-info' = 'is-primary'

  /**
   * Controls if the accordion is collapsed or not
   */
  @Prop() collapsed: boolean = true

  @Watch('collapsed')
  validateCollapsed(newValue: boolean) {
    this.isCollapsed = newValue
    this.balCollapse.emit(this.isCollapsed)
  }

  /**
   * Label of the open trigger button
   */
  @Prop() openLabel = ''

  /**
   * Bal-Icon of the open trigger button
   */
  @Prop() openIcon = 'plus'

  /**
   * Label of the close trigger button
   */
  @Prop() closeLabel = ''

  /**
   * Bal-Icon of the close trigger button
   */
  @Prop() closeIcon = 'minus'

  /**
   * Emmited when the accordion has changed
   */
  @Event({ eventName: 'balCollapse' }) balCollapse!: EventEmitter<boolean>

  /**
   * Open the accordion
   */
  @Method()
  async open() {
    this.isCollapsed = false
    this.balCollapse.emit(this.isCollapsed)
  }

  /**
   * Close the accordion
   */
  @Method()
  async close() {
    this.isCollapsed = true
    this.balCollapse.emit(this.isCollapsed)
  }

  /**
   * Triggers the accordion
   */
  @Method()
  async toggle() {
    this.isCollapsed = !this.isCollapsed
    this.balCollapse.emit(this.isCollapsed)
  }

  componentWillLoad() {
    this.isCollapsed = this.collapsed
  }

  render() {
    return (
      <Host class="accordion">
        <bal-button expanded={true} light={true} inverted={true} type={this.type} onClick={() => this.toggle()}>
          <span class="trigger-label" style={!this.isCollapsed && { display: 'none' }}>
            <bal-icon name={this.openIcon} />
            <span class="label">{this.openLabel}</span>
          </span>
          <span class="trigger-label" style={this.isCollapsed && { display: 'none' }}>
            <bal-icon name={this.closeIcon} />
            <span class="label">{this.closeLabel}</span>
          </span>
        </bal-button>
        <div class={['accordion-content', this.type].join(' ')} style={this.isCollapsed && { display: 'none' }}>
          <slot></slot>
        </div>
      </Host>
    )
  }
}
