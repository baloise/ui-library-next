<!-- docs:child of bal-steps -->

# bal-step

`bal-step` is a child component of `bal-steps`.

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                              | Type      | Default |
| ---------- | ---------- | -------------------------------------------------------- | --------- | ------- |
| `active`   | `active`   | Tell's if the step is active and the content is visible. | `boolean` | `false` |
| `bubble`   | `bubble`   | If `true` a small red bubble is added to the step.       | `boolean` | `false` |
| `disabled` | `disabled` | If `true` the step is disabled.                          | `boolean` | `false` |
| `label`    | `label`    | Label for the step.                                      | `string`  | `''`    |
| `value`    | `value`    | This is the key of the step.                             | `string`  | `''`    |


## Events

| Event           | Description                          | Type               |
| --------------- | ------------------------------------ | ------------------ |
| `balStepChange` | Emitted when the steps get rendered. | `CustomEvent<any>` |


## Methods

### `getOptions() => Promise<StepOptions>`

Options of the step like label, value etc.

#### Returns

Type: `Promise<StepOptions>`



### `setActive(active: boolean) => Promise<void>`

Sets the step active.

#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
