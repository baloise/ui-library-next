import { Component, h, Host, Listen, Method, Prop, Element, Event, EventEmitter } from '@stencil/core'

@Component({
  tag: 'bal-dropdown',
  styleUrl: 'bal-dropdown.scss',
  shadow: false,
  scoped: true,
})
export class Dropdown {
  @Element() element!: HTMLElement
  contentElement!: HTMLDivElement
  menuElement!: HTMLDivElement

  /**
   * Limit the height of the dropdown content. Pass the amount of pixel.
   */
  @Prop() scrollable: number = 0

  /**
   * If `true` the field spans over the whole width.
   */
  @Prop() expanded: boolean = false

  /**
   * If `true` the dropdown content is open.
   */
  @Prop({ mutable: true, reflect: true }) isActive = false

  /**
   * Open the dropdown menu.
   */
  @Method()
  async open() {
    this.isActive = true
    this.balChange.emit(this.isActive)
  }

  /**
   * Closes the dropdown menu.
   */
  @Method()
  async close() {
    this.isActive = false
    this.balChange.emit(this.isActive)
  }

  /**
   * Open or closes the dropdown.
   */
  @Method()
  async toggle() {
    this.isActive = !this.isActive
    this.balChange.emit(this.isActive)
  }

  /**
   * Returns the `HTMLDivElement` of the menu element
   */
  @Method()
  async getMenuElement(): Promise<HTMLDivElement> {
    return this.menuElement
  }

  /**
   * Returns the `HTMLDivElement` of the content element
   */
  @Method()
  async getContentElement(): Promise<HTMLDivElement> {
    return this.contentElement
  }

  /**
   * Listen when the dropdown opens or closes. Returns the current `isActive` value.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<boolean>

  @Listen('keyup', { target: 'document' })
  async tabOutside(event: KeyboardEvent) {
    if (event.key === 'Tab' && !this.element.contains(document.activeElement) && this.isActive) {
      await this.toggle()
    }
  }

  @Listen('click', { target: 'document' })
  async clickOnOutside(event: UIEvent) {
    if (!this.element.contains(event.target as any) && this.isActive) {
      await this.toggle()
    }
  }

  get contentStyle() {
    if (this.scrollable === 0) {
      return {}
    } else {
      const maxHeight = `${this.scrollable}px`
      return {
        'max-height': maxHeight,
        'overflow': 'auto',
      }
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'dropdown': true,
            'is-active': this.isActive,
            'is-expanded': this.expanded,
          }}>
          <div class="dropdown-trigger">
            <slot name="trigger" />
          </div>
          <div
            class="dropdown-menu"
            id="dropdown-menu"
            role="menu"
            ref={el => (this.menuElement = el as HTMLDivElement)}>
            <div
              class="dropdown-content"
              style={this.contentStyle}
              ref={el => (this.contentElement = el as HTMLDivElement)}>
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    )
  }
}
