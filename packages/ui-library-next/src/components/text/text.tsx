import { Component, h } from '@stencil/core';

@Component({
  tag: 'bal-text',
  styleUrl: 'text.scss',
  shadow: false,
  scoped: true,
})
export class Text {
  render() {
    return (
      <span>
        <slot />
      </span>
    );
  }
}
