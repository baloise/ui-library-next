import { Component, h, Host, Prop, Element, EventEmitter, Event, Watch } from '@stencil/core'

@Component({
  tag: 'bal-radio-group',
  styleUrl: 'bal-radio-group.scss',
  shadow: false,
  scoped: true,
})
export class RadioGroup {
  @Element() element!: HTMLElement

  /**
   * The value of the control.
   */
  @Prop({ mutable: true }) value: string = ''

  @Watch('value')
  valueChanged(value: string) {
    this.balChange.emit(value)
  }

  /**
   * Emitted when the checked property has changed.
   */
  @Event({ eventName: 'balChange' }) balChange!: EventEmitter<string>

  private onClick = (ev: Event) => {
    const selectedRadio = ev.target && (ev.target as HTMLElement).closest('bal-radio')
    if (selectedRadio) {
      const currentValue = this.value
      const newValue = selectedRadio.value
      if (newValue !== currentValue) {
        this.value = newValue
      }
    }
  }

  render() {
    return (
      <Host role="radiogroup" onClick={this.onClick}>
        <slot></slot>
      </Host>
    )
  }
}
