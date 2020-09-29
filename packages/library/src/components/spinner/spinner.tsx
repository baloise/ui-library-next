import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'bal-spinner',
  styleUrl: 'spinner.scss',
  shadow: false,
  scoped: true,
})
export class Spinner {

  @Prop()
  inverted = false

  @Prop()
  small = false

  render() {
    return (
      <Host class={{ 'is-inverted': this.inverted, 'is-small': this.small }}>
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </Host>
    )
  }
}
