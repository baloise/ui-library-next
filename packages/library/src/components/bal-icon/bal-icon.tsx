import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'bal-icon',
  styleUrl: 'bal-icon.scss',
  shadow: false,
  scoped: false,
})
export class Icon {
  /**
   * The name of the icon without the bal-icon prefix.
   */
  @Prop() name = ''

  /**
   * Defines the size of the icon.
   */
  @Prop() size: 'small' | 'medium' | 'large' | '' = ''

  @Prop() isRight = false

  @Prop() isLeft = false

  @Prop() rotate = false

  get sizeCssClass() {
    if (this.size && this.size.length > 0) {
      return `is-${this.size}`
    }
    return ''
  }

  get iconCssClass() {
    return `icon-${this.name}`
  }

  render() {
    return (
      <Host>
        <span
          class={[
            'icon',
            this.rotate ? 'rotate' : '',
            this.isRight ? 'is-right' : '',
            this.isLeft ? 'is-left' : '',
            this.sizeCssClass,
          ].join(' ')}>
          <i class={[this.iconCssClass, 'font'].join(' ')}></i>
        </span>
      </Host>
    )
  }
}
