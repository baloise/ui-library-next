import { Component, h, Host, Prop, Element, Watch, EventEmitter, Event, Method } from '@stencil/core'

@Component({
  tag: 'bal-input',
  styleUrl: 'bal-input.scss',
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
  @Prop() type: string = 'text'
  @Prop() placeholder = ''
  @Prop() inverted = false
  @Prop() readonly = false
  @Prop() disabled = false
  @Prop() clickable = false

  /**
   * The value of the control.
   */
  @Prop({ mutable: true }) value: string = ''
  @Watch('value')
  protected valueChanged() {
    if (this.inputEl.value !== this.value) {
      this.inputEl.value = this.value
    }
  }

  @Event() balInput!: EventEmitter<string>
  private onInput = (event: { target: { value: string } }) => {
    let val = event.target && event.target?.value
    this.value = val
    this.balInput.emit(this.value)
  }

  @Event() balBlur!: EventEmitter<FocusEvent>
  @Event() balClick!: EventEmitter<MouseEvent>
  @Event() balKeyDown!: EventEmitter<KeyboardEvent>
  @Event() balKeyPress!: EventEmitter<KeyboardEvent>
  @Event() balKeyUp!: EventEmitter<KeyboardEvent>
  @Event() balFocus!: EventEmitter<FocusEvent>

  @Method()
  async setFocus(): Promise<void> {
    this.inputEl.focus()
  }

  render() {
    return (
      <Host>
        <input
          class={{
            'input': true,
            'is-inverted': this.inverted,
            'clickable': this.clickable,
          }}
          id={this.inputId}
          type={this.type}
          placeholder={this.placeholder}
          name={this.name}
          value={this.value}
          disabled={this.disabled}
          readonly={this.readonly}
          onInput={e => this.onInput(e as any)}
          onBlur={e => this.balBlur.emit(e)}
          onClick={e => this.balClick.emit(e)}
          onKeyDown={e => this.balKeyDown.emit(e)}
          onKeyPress={e => this.balKeyPress.emit(e)}
          onKeyUp={e => this.balKeyUp.emit(e)}
          onFocus={e => this.balFocus.emit(e)}
          ref={inputEl => (this.inputEl = inputEl)}
        />
      </Host>
    )
  }
}

let checkboxIds = 0
