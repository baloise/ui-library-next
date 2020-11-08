import { Component, h, Host, Method, Prop, State, Watch, Event, EventEmitter } from '@stencil/core'
import { BalCardStepOption } from './bal-card-step.type'

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
  @Watch('label')
  async labelHandler() {
    this.labelDidChange.emit(await this.getOptions())
  }

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
   * Tell's if the step is active and the content is visible.
   */
  @Prop() active: boolean = false
  @Watch('active')
  activatedHandler(newActive: boolean) {
    this.isContentHidden = !newActive
  }

  /**
   * Emitted when the label of the step has changed
   */
  @Event({ eventName: 'balCardStepLabelChange' }) labelDidChange: EventEmitter<BalCardStepOption>

  get options(): BalCardStepOption {
    return {
      value: this.value,
      label: this.label,
      active: this.active,
      done: this.done,
      disabled: this.disabled,
      hidden: this.hidden,
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
    if (this.active) {
      this.labelHandler()
    }
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
