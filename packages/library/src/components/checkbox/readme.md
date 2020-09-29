# Checkbox

## Usage

```html
<bal-checkbox label="Label"></bal-checkbox>
```

## Checked

```html
<bal-checkbox label="Label" checked></bal-checkbox>
```

### Inverted

```html
<div class="has-background-info is-padded">
  <bal-checkbox label="Label" inverted></bal-checkbox>
  <br />
  <bal-checkbox label="Label" inverted checked></bal-checkbox>
  <br />
  <bal-checkbox label="Label" inverted checked disabled></bal-checkbox>
</div>
```

## Disabled

```html
<bal-checkbox label="Label" disabled></bal-checkbox>
```

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description                                                     | Type      | Default        |
| ---------- | ---------- | --------------------------------------------------------------- | --------- | -------------- |
| `checked`  | `checked`  | If `true`, the checkbox is selected.                            | `boolean` | `false`        |
| `disabled` | `disabled` | If `true`, the user cannot interact with the checkbox.          | `boolean` | `false`        |
| `inverted` | `inverted` | If `true`, the control works on dark background.                | `boolean` | `false`        |
| `label`    | `label`    | The label of the control.                                       | `string`  | `''`           |
| `name`     | `name`     | The name of the control, which is submitted with the form data. | `string`  | `this.inputId` |
| `value`    | `value`    | The value of the control.                                       | `string`  | `'on'`         |


## Events

| Event       | Description                                    | Type                   |
| ----------- | ---------------------------------------------- | ---------------------- |
| `balBlur`   | Emitted when the toggle loses focus.           | `CustomEvent<void>`    |
| `balChange` | Emitted when the checked property has changed. | `CustomEvent<boolean>` |
| `balFocus`  | Emitted when the toggle has focus.             | `CustomEvent<void>`    |


## Methods

### `setFocus() => Promise<void>`



#### Returns

Type: `Promise<void>`




----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
