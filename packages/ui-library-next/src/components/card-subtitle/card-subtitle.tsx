import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'bal-card-subtitle',
  shadow: false,
  scoped: false,
})
export class CardSubtitle {
  /**
   * If `true` the card text color becomes white.
   */
  @Prop() inverted: boolean

  render() {
    return (
      <Host class={[
        "bal-card-subtitle",
        this.inverted ? "inverted" : ""
      ].join(" ")} role="heading">
        <slot></slot>
      </Host>
    );
  }

}
