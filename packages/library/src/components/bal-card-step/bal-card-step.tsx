import { Component, h, Host, Method, Prop, State, Watch } from '@stencil/core'
import { BalCardStepOption } from './bal-card-step.type'

let cardStepIndex = 0

@Component({
  tag: 'bal-card-step',
  styleUrl: 'bal-card-step.scss',
  shadow: false,
  scoped: true,
})
export class CardStep {
  @State() isContentHidden = true

  /**
   * This is the key of the step.
   */
  @Prop() value: string = ''

  /**
   * Label for the step.
   */
  @Prop() label: string = ''

  /**
   * If `true` the step is hidden in the steps navigation.
   */
  @Prop() hidden: boolean = false

  /**
   * If `true` the step is disabled.
   */
  @Prop() disabled: boolean = false

  /**
   * If `true` the step is done.
   */
  @Prop() done: boolean = false

  /**
   * Could helps to figure out the previous or next step
   */
  @Prop() index: number = cardStepIndex++

  /**
   * Tell's if the step is active and the content is visible.
   */
  @Prop() active: boolean = false

  @Watch('active')
  activatedHandler(newActive: boolean) {
    this.isContentHidden = !newActive
  }

  get options(): BalCardStepOption {
    return {
      value: this.value,
      label: this.label,
      active: this.active,
      done: this.done,
      disabled: this.disabled,
      hidden: this.hidden,
      index: this.index,
    }
  }

  /**
   * Options of the step like label, value etc.
   */
  @Method()
  async getOptions(): Promise<BalCardStepOption> {
    return this.options
  }

  /**
   * Sets the step active.
   */
  @Method()
  async setActive(active: boolean): Promise<void> {
    this.active = active
  }

  componentWillLoad() {
    this.isContentHidden = !this.active
  }

  render() {
    return (
      <Host
        class={{
          'is-hidden': this.isContentHidden,
          'card-step-content': true,
        }}>
        <slot />
      </Host>
    )
  }
}
