# bal-card-steps

The steps list is useful for tracking progress in multi steps forms or wizards.


<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                           | Type      | Default |
| ----------- | ------------ | ----------------------------------------------------- | --------- | ------- |
| `backLabel` | `back-label` | Label for back button                                 | `string`  | `''`    |
| `hasBack`   | `has-back`   | If `true` the steps navigation has back button.       | `boolean` | `false` |
| `hidden`    | `hidden`     | If `true` the steps navigation is hidden.             | `boolean` | `false` |
| `inverted`  | `inverted`   | If `true` a the style is ready for a dark background. | `boolean` | `false` |


## Events

| Event                   | Description                              | Type                             |
| ----------------------- | ---------------------------------------- | -------------------------------- |
| `balCardStepsBackClick` | Emitted when the back button is clicked. | `CustomEvent<void>`              |
| `balCardStepsChange`    | Emitted when the changes has finished.   | `CustomEvent<BalCardStepOption>` |
| `balCardStepsStepClick` | Emitted when the step circle is clicked. | `CustomEvent<BalCardStepOption>` |


## Methods

### `select(step: BalCardStepOption) => Promise<void>`

Select a step.

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bal-icon](../bal-icon)

### Graph
```mermaid
graph TD;
  bal-card-steps --> bal-icon
  style bal-card-steps fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
