# bal-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                     | Type      | Default        |
| ---------------- | ----------------- | --------------------------------------------------------------- | --------- | -------------- |
| `clickable`      | `clickable`       |                                                                 | `boolean` | `false`        |
| `disabled`       | `disabled`        |                                                                 | `boolean` | `false`        |
| `inverted`       | `inverted`        |                                                                 | `boolean` | `false`        |
| `maxLength`      | `max-length`      |                                                                 | `number`  | `undefined`    |
| `minLength`      | `min-length`      |                                                                 | `number`  | `undefined`    |
| `name`           | `name`            | The name of the control, which is submitted with the form data. | `string`  | `this.inputId` |
| `numberKeyboard` | `number-keyboard` |                                                                 | `boolean` | `false`        |
| `onlyNumbers`    | `only-numbers`    |                                                                 | `boolean` | `false`        |
| `placeholder`    | `placeholder`     |                                                                 | `string`  | `''`           |
| `readonly`       | `readonly`        |                                                                 | `boolean` | `false`        |
| `type`           | `type`            |                                                                 | `string`  | `'text'`       |
| `value`          | `value`           | The value of the control.                                       | `string`  | `''`           |


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
