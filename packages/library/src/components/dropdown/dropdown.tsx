import { Component, h, Host, Listen, Method, Prop, Element, Event, EventEmitter, Watch } from '@stencil/core'

@Component({
  tag: 'bal-dropdown',
  styleUrl: 'dropdown.scss',
  shadow: false,
  scoped: true,
})
export class Dropdown {
  @Element() element!: HTMLElement
  contentElement!: HTMLDivElement
  menuElement!: HTMLDivElement

  @Prop() scrollable: number = 0

  @Prop({ mutable: true, reflect: true }) isActive = false

  @Prop({ mutable: true }) value: any = undefined
  @Watch('value')
  async valueChanged() {
    const options = this.element.querySelectorAll('bal-dropdown-option')
    options.forEach(o =>
      o.dispatchEvent(
        new CustomEvent<any>('balDropdownChanged', {
          detail: this.value,
        }),
      ),
    )
  }

  /**
   * Open the dropdown menu.
   */
  @Method()
  async open() {
    this.isActive = true
  }

  /**
   * Closes the dropdown menu.
   */
  @Method()
  async close() {
    this.isActive = false
  }

  /**
   * Open or closes the dropdown.
   */
  @Method()
  async toggle() {
    this.isActive = !this.isActive
  }

  @Method()
  async getMenuElement(): Promise<HTMLDivElement> {
    return this.menuElement
  }

  @Method()
  async getContentElement(): Promise<HTMLDivElement> {
    return this.contentElement
  }

  @Event() balChange!: EventEmitter<string>

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

  @Listen('balDropdownOptionSelect')
  async dropdownOptionSelect(event: CustomEvent<any>) {
    event.preventDefault()
    event.stopPropagation()
    this.value = event.detail
    this.balChange.emit(event.detail)
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
