import { Component, h, Host, Prop, Element, Watch, EventEmitter, Event } from '@stencil/core'

@Component({
  tag: 'bal-input',
  styleUrl: 'input.scss',
  shadow: false,
  scoped: true,
})
export class Input {
  private inputId = `bal-in-${checkboxIds++}`
  private inputEl?: HTMLInputElement

  @Element() el!: HTMLElement

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId

  /**
   * The label of the control.
   */
  @Prop() label: string = ''

  /**
   * The value of the control.
   */
  @Prop({ mutable: true }) value: string = ''
  @Watch('value')
  protected checkedChanged() {
    if (this.inputEl.value !== this.value) {
      this.inputEl.value = this.value
    }
  }

  /**
   * Emitted when the checked property has changed.
   */
  @Event() balChange!: EventEmitter<string>

  private onInput = (ev: any) => {
    console.log('onInput', ev.target.value)
    let val = ev.target && ev.target.value
    this.value = val
    this.balChange.emit(this.value)
  }

  render() {
    const { inputId, label } = this
    return (
      <Host>
        <input
          type="text"
          id={inputId}
          name={this.name}
          value={this.value}
          onInput={this.onInput}
          ref={inputEl => (this.inputEl = inputEl)}
        />
        <label htmlFor={inputId}>{label}</label>
      </Host>
    )
  }
}

let checkboxIds = 0
