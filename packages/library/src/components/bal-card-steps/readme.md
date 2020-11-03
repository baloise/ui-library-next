# bal-card-steps

The steps list is useful for tracking progress in multi steps forms or wizards.


<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                           | Type      | Default |
| ---------- | ---------- | ----------------------------------------------------- | --------- | ------- |
| `hidden`   | `hidden`   | If `true` the steps navigation is hidden.             | `boolean` | `false` |
| `inverted` | `inverted` | If `true` a the style is ready for a dark background. | `boolean` | `false` |


## Events

| Event                   | Description                            | Type                              |
| ----------------------- | -------------------------------------- | --------------------------------- |
| `balCardStepsDidChange` | Emitted when the changes has finished. | `CustomEvent<BalCardStepOptions>` |


## Methods

### `select(value: string) => Promise<void>`

Select a step.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
