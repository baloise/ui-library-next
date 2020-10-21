# bal-input



<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                     | Type      | Default        |
| ------------- | ------------- | --------------------------------------------------------------- | --------- | -------------- |
| `disabled`    | `disabled`    |                                                                 | `boolean` | `false`        |
| `inverted`    | `inverted`    |                                                                 | `boolean` | `false`        |
| `name`        | `name`        | The name of the control, which is submitted with the form data. | `string`  | `this.inputId` |
| `placeholder` | `placeholder` |                                                                 | `string`  | `''`           |
| `readonly`    | `readonly`    |                                                                 | `boolean` | `false`        |
| `type`        | `type`        |                                                                 | `string`  | `'text'`       |
| `value`       | `value`       | The value of the control.                                       | `string`  | `''`           |


## Events

| Event         | Description | Type                         |
| ------------- | ----------- | ---------------------------- |
| `balBlur`     |             | `CustomEvent<FocusEvent>`    |
| `balClick`    |             | `CustomEvent<MouseEvent>`    |
| `balFocus`    |             | `CustomEvent<FocusEvent>`    |
| `balInput`    |             | `CustomEvent<string>`        |
| `balKeyDown`  |             | `CustomEvent<KeyboardEvent>` |
| `balKeyPress` |             | `CustomEvent<KeyboardEvent>` |
| `balKeyUp`    |             | `CustomEvent<KeyboardEvent>` |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
