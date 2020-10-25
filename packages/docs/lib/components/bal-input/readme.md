# bal-input



<!-- Auto Generated Examples -->

## Examples
<div class="bal-app">
<h2 class="title is-size-2">Basic</h2>
<bal-input id="bal-input-1" value="Tony Stark" name="firstName" placeholder="Enter your firstname"></bal-input>
<bal-input id="bal-input-1-preview" value="Tony Stark" disabled placeholder="Enter your firstname"></bal-input>
</div>

```html
<h2 class="title is-size-2">Basic</h2>
<bal-input id="bal-input-1" value="Tony Stark" name="firstName" placeholder="Enter your firstname"></bal-input>
<bal-input id="bal-input-1-preview" value="Tony Stark" disabled placeholder="Enter your firstname"></bal-input>
```

```javascript
var input1 = document.getElementById('bal-input-1')
var input1Preview = document.getElementById('bal-input-1-preview')
setTimeout(() => input1.setFocus(), 0)
input1.addEventListener('balInput', function (event) {
  input1Preview.value = event.detail
})
```

<div class="bal-app">
<h2 class="title is-size-2">Inverted</h2>
<div class="has-background-info is-padded">
  <bal-input inverted name="firstName" placeholder="Enter your firstname"></bal-input>
  <bal-input inverted name="firstName" placeholder="Enter your firstname" disabled></bal-input>
</div>
</div>

```html
<h2 class="title is-size-2">Inverted</h2>
<div class="has-background-info is-padded">
  <bal-input inverted name="firstName" placeholder="Enter your firstname"></bal-input>
  <bal-input inverted name="firstName" placeholder="Enter your firstname" disabled></bal-input>
</div>
```

<script type="text/javascript">
var input1 = document.getElementById('bal-input-1')
var input1Preview = document.getElementById('bal-input-1-preview')
setTimeout(() => input1.setFocus(), 0)
input1.addEventListener('balInput', function (event) {
  input1Preview.value = event.detail
})
</script>

## API

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                     | Type      | Default        |
| ------------- | ------------- | --------------------------------------------------------------- | --------- | -------------- |
| `clickable`   | `clickable`   |                                                                 | `boolean` | `false`        |
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
