import { Component, h, Host, Prop, Element, Watch, EventEmitter, Event, Method } from '@stencil/core'

@Component({
  tag: 'bal-input',
  styleUrl: 'bal-input.scss',
  shadow: false,
  scoped: true,
})
export class Input {
  private inputId = `bal-in-${InputIds++}`
  private inputEl?: HTMLInputElement

  @Element() el!: HTMLElement

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId
  @Prop() type: string = 'text'
  @Prop() placeholder = ''
  @Prop() maxLength: number | undefined = undefined
  @Prop() minLength: number | undefined = undefined
  @Prop() inverted = false
  @Prop() readonly = false
  @Prop() disabled = false
  @Prop() clickable = false
  @Prop() numberKeyboard = false
  @Prop() onlyNumbers = false

  /**
   * The value of the control.
   */
  @Prop({ mutable: true }) value: string = ''
  @Watch('value')
  protected valueChanged() {
    this.updateInputValue()
  }

  @Event({ eventName: 'balInput' }) balInput!: EventEmitter<string>
  private onInput = (event: { target: { value: string } }) => {
    let val = event.target && event.target?.value
    
    if (this.onlyNumbers) {
      val = this.filterNumbers(val)
    }

    if (this.value !== val) {
      this.value = val
      this.balInput.emit(this.value)
    } else {
      this.updateInputValue()
    }
  }

  @Event({ eventName: 'balInputBlur' }) balBlur!: EventEmitter<FocusEvent>
  @Event({ eventName: 'balInputClick' }) balClick!: EventEmitter<MouseEvent>
  @Event({ eventName: 'balInputKeyDown' }) balKeyDown!: EventEmitter<KeyboardEvent>
  @Event({ eventName: 'balInputKeyPress' }) balKeyPress!: EventEmitter<KeyboardEvent>
  @Event({ eventName: 'balInputKeyUp' }) balKeyUp!: EventEmitter<KeyboardEvent>
  @Event({ eventName: 'balInputFocus' }) balFocus!: EventEmitter<FocusEvent>

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
          pattern={this.numberKeyboard ? '[0-9]*' : ''}
          maxLength={this.maxLength}
          minLength={this.minLength}
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

  private updateInputValue() {
    if (this.inputEl.value !== this.value) {
      this.inputEl.value = this.value
    }
  }

  private filterNumbers(val: string) {
    if (val && typeof val === 'string') {
      val = val.replace(/[^\d]/g, '')
    }
    return val
  }
}

let InputIds = 0
