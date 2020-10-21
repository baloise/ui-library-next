import { Component, h, Host, Prop, Element } from '@stencil/core'

@Component({
  tag: 'bal-field',
  styleUrl: 'field.scss',
  shadow: false,
  scoped: true,
})
export class Field {
  @Element() element!: HTMLElement

  /**
   * Label text
   */
  @Prop() label: string = ''

  /**
   * If `true` a asterix (*) is added to the label text
   */
  @Prop() required: boolean = false

  /**
   * Validation message text
   */
  @Prop() validationMessage: string = ''

  /**
   * Baloise icon for the right side of the input
   */
  @Prop() iconRight: string = ''

  /**
   * Baloise icon for the left side of the input
   */
  @Prop() iconLeft: string = ''

  /**
   * If `true` the field can be used on blue background.
   */
  @Prop() inverted: boolean = false
  @Prop() loading: boolean = false

  get buildIconLeftTemplate() {
    if (this.iconLeft) {
      return <bal-icon name={this.iconLeft} isLeft={true} size="medium" />
    }
    return ''
  }

  get buildIconRightTemplate() {
    if (this.iconRight) {
      return <bal-icon name={this.iconRight} isRight={true} size="medium" />
    }
    return ''
  }

  render() {
    return (
      <Host>
        <div class={['form', this.inverted ? 'is-inverted' : ''].join(' ')}>
          <label class="label" htmlFor={this.findInputId()}>
            {this.label}
            {this.required === true ? '*' : ''}
            <slot name="hint" />
          </label>
          <div
            class={{
              'control': true,
              'has-icons-left': !!this.iconLeft,
              'has-icons-right': !!this.iconRight,
              'is-loading': this.loading,
            }}>
            <slot></slot>
            {this.buildIconLeftTemplate}
            {this.buildIconRightTemplate}
          </div>
          <p class="help is-danger">{this.validationMessage}</p>
        </div>
      </Host>
    )
  }

  private findInputId(): string {
    const inputElement = this.element.querySelector('input.input')
    return inputElement && inputElement.id ? inputElement.id : ''
  }
}
