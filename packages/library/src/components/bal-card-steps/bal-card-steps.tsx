import { Component, Element, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core'
import { BalCardStepOption } from '../bal-card-step/bal-card-step.type'

@Component({
  tag: 'bal-card-steps',
  styleUrl: 'bal-card-steps.scss',
  shadow: false,
  scoped: true,
})
export class CardSteps {
  @Element() element!: HTMLElement

  @State() stepOptions: BalCardStepOption[] = []

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
   * If `true` the navigation is handled by the component
   */
  @Prop() navigation: boolean = false

  /**
   * Label for back button
   */
  @Prop() backLabel: string = ''

  /**
   * Hides the navigation circles and adds the step label instead
   */
  @Prop() showLabel: boolean = false

  /**
   * Emitted when the changes has finished.
   */
  @Event({ eventName: 'balCardStepsChange' }) balChange: EventEmitter<BalCardStepOption>

  /**
   * Emitted when the back button is clicked.
   */
  @Event({ eventName: 'balCardStepsBackClick' }) balBackClick: EventEmitter<void>

  /**
   * Emitted when the step circle is clicked.
   */
  @Event({ eventName: 'balCardStepsStepClick' }) balStepClick: EventEmitter<BalCardStepOption>

  /**
   * Select a step.
   */
  @Method()
  async select(step: BalCardStepOption): Promise<void> {
    this.steps.forEach(t => t.setActive(t.value === step.value))
    this.readSteps()
    this.balChange.emit(step)
  }

  componentWillLoad(): void {
    this.readSteps()
  }

  render() {
    return (
      <Host>
        <div class={['card-steps-wrapper', this.inverted ? 'is-inverted' : ''].join(' ')}>
          <div class={['left-side', !this.hasBack ? 'is-hidden' : ''].join(' ')}>
            <a role="button" onClick={() => this.onBackButtonClick()}>
              <bal-icon
                class="nav-go-left"
                name="nav-go-large"
                size="medium"
                color={this.inverted ? 'white' : 'blue'}></bal-icon>
              <span class="nav-go-left-label">{this.backLabel}</span>
            </a>
          </div>
          <h3
            style={{ display: this.showLabel ? 'block' : 'none' }}
            class={['tab-title title is-size-3', this.inverted ? 'is-inverted' : ''].join(' ')}>
            {this.getActiveStep()?.label}
          </h3>
          <div
            style={{ display: this.showLabel ? 'none' : 'block' }}
            class={['tabs', this.inverted ? 'is-inverted' : '', this.hidden ? 'is-hidden' : ''].join(' ')}>
            <ul>
              {this.stepOptions
                .filter(step => !step.hidden && !this.hidden && !this.showLabel)
                .map((step, index) => (
                  <li
                    class={[
                      step.active ? 'is-active' : '',
                      step.disabled ? 'is-disabled' : '',
                      step.done ? 'is-done' : '',
                    ].join(' ')}>
                    <a onClick={() => this.onClickStepCircle(step)} title={step.label}>
                      <span class="step-index">
                        <span>{index + 1}</span>
                      </span>
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div class={['right-side', !this.hasBack ? 'is-hidden' : ''].join(' ')}></div>
        </div>
        <slot />
      </Host>
    )
  }

  private get steps(): HTMLBalCardStepElement[] {
    return Array.from(this.element.querySelectorAll('bal-card-step'))
  }

  private readSteps() {
    Promise.all(this.steps.map(value => value.getOptions())).then(stepOptions => {
      this.stepOptions = stepOptions
    })
  }

  private async onClickStepCircle(step: BalCardStepOption): Promise<void> {
    if (this.navigation && !step.disabled) {
      await this.select(step)
    }
    this.balStepClick.emit(step)
  }

  private async onBackButtonClick() {
    if (this.navigation) {
      let previousStepIndex = this.getPreviousStepIndex()
      let previousStep = this.stepOptions[previousStepIndex]
      if (previousStepIndex >= 0 && previousStep && !previousStep.disabled) {
        await this.select(previousStep)
      }
    }
    this.balBackClick.emit()
  }

  private getPreviousStepIndex() {
    let activeStepIndex = this.stepOptions.findIndex(el => el.active === true)
    return activeStepIndex - 1
  }

  private getActiveStep() {
    return this.stepOptions.find(el => el.active === true)
  }
}
