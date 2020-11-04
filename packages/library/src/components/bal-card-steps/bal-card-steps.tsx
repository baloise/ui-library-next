import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core'
import { BalCardStepOptions } from '../bal-card-step/bal-card-step.type'

@Component({
  tag: 'bal-card-steps',
  styleUrl: 'bal-card-steps.scss',
  shadow: false,
  scoped: true,
})
export class CardSteps {
  @Element() element!: HTMLElement

  @State() stepOptions: BalCardStepOptions[] = []

  /**
   * If `true` a the style is ready for a dark background.
   */
  @Prop() inverted: boolean = false

  /**
   * If `true` the steps navigation is hidden.
   */
  @Prop() hidden: boolean = false
  
  /**
   * If `true` the steps navigation has back button.
   */
  @Prop() hasBack: boolean = false

  /**
   * Label for back button
   */
  @Prop() backLabel: string = ''

  /**
   * Emitted when the changes has finished.
   */
  @Event() balStepsChange: EventEmitter<BalCardStepOptions>

  /**
   * Emitted when the back button is clicked.
   */
  @Event() balBackClick: EventEmitter<void>

  /**
   * Emitted when the step circle is clicked.
   */
  @Event() balStepClick: EventEmitter<number>

  /**
   * Select a step.
   */
  @Method()
  async select(value: string): Promise<void> {
    this.steps.forEach((t) => t.setActive(t.value === value))
    this.readSteps()
  }

  componentWillLoad(): void {
    this.readSteps()
  }

  @Listen('balCardStepChanged')
  stepChanged(): void {
    this.readSteps()
  }

  private get steps(): HTMLBalCardStepElement[] {
    return Array.from(this.element.querySelectorAll('bal-card-step'))
  }

  private readSteps() {
    Promise.all(this.steps.map((value) => value.getOptions())).then(
      (stepOptions) => {
        this.stepOptions = stepOptions
      },
    )
  }

  private async onSelectStep(step: BalCardStepOptions, index: number): Promise<void> {
    if (!step.disabled) {
      await this.select(step.value)
      this.balStepsChange.emit(step)
    }
    this.balStepClick.emit(index)
  }

  private getPreviousStepIndex() {
    let activeStepIndex = this.stepOptions.findIndex(el => el.active === true)
    return activeStepIndex - 1
  }
  
  private async onbackButton() {
    let previousStepIndex = this.getPreviousStepIndex()
    let previousStep = this.stepOptions[previousStepIndex]

    if (previousStep && !previousStep.disabled && previousStepIndex >= 0) {
      await this.select(previousStep.value)
    }

    this.balBackClick.emit()
  }

  render() {
    return (
      <Host>
        <div class="card-steps-wrapper">
          <div class={['left-side', !this.hasBack ? 'is-hidden' : ''].join(' ')}>
            <a role="button"
            onClick={() => this.onbackButton()}>
              <bal-icon class="nav-go-left" name="nav-go-large" size="large" color="white"></bal-icon>
            </a>
            <span class="nav-go-left-label">{this.backLabel}</span>
          </div>
          <div class={['tabs', this.inverted ? 'is-inverted' : '', this.hidden ? 'is-hidden' : ''].join(' ')}>
            <ul>
              {this.stepOptions.filter(step => !step.hidden && !this.hidden).map((step, index) => (
                <li
                  class={[
                    step.active ? 'is-active' : '',
                    step.disabled ? 'is-disabled' : '',
                    step.done ? 'is-done' : '',
                  ].join(' ')}
                >
                  <a onClick={() => this.onSelectStep(step, index)}
                    title={step.label}>
                    <span class="step-index"><span>{index + 1}</span></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class={['right-side', !this.hasBack ? 'is-hidden' : ''].join(' ')}></div>
        </div>
        <slot/>
      </Host>
    )
  }
}
