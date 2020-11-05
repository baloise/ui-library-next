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
   * Label for back button
   */
  @Prop() backLabel: string = ''

  /**
   * Emitted when the changes has finished.
   */
  @Event({ bubbles: false }) balChange: EventEmitter<BalCardStepOption>

  /**
   * Emitted when the back button is clicked.
   */
  @Event({ bubbles: false }) balBackClick: EventEmitter<void>

  /**
   * Emitted when the step circle is clicked.
   */
  @Event({ bubbles: false }) balStepClick: EventEmitter<BalCardStepOption>

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
        <div class="card-steps-wrapper">
          <div class={['left-side', !this.hasBack ? 'is-hidden' : ''].join(' ')}>
            <a role="button" onClick={() => this.onBackButtonClick()}>
              <bal-icon class="nav-go-left" name="nav-go-large" size="medium" color="white"></bal-icon>
              <span class="nav-go-left-label">{this.backLabel}</span>
            </a>
          </div>
          <div class={['tabs', this.inverted ? 'is-inverted' : '', this.hidden ? 'is-hidden' : ''].join(' ')}>
            <ul>
              {this.stepOptions
                .filter(step => !step.hidden && !this.hidden)
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
    if (!step.disabled) {
      await this.select(step)
    }
    this.balStepClick.emit(step)
  }

  private async onBackButtonClick() {
    let previousStepIndex = this.getPreviousStepIndex()
    let previousStep = this.stepOptions[previousStepIndex]
    if (previousStepIndex >= 0 && previousStep && !previousStep.disabled) {
      await this.select(previousStep)
    }
    this.balBackClick.emit()
  }

  private getPreviousStepIndex() {
    let activeStepIndex = this.stepOptions.findIndex(el => el.active === true)
    return activeStepIndex - 1
  }
}
