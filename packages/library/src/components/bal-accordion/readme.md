# bal-accordion

Accordion is a easy way to toggle things.


<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                    | Type                        | Default        |
| ------------ | ------------- | ---------------------------------------------- | --------------------------- | -------------- |
| `closeIcon`  | `close-icon`  | Bal-Icon of the close trigger button           | `string`                    | `'minus'`      |
| `closeLabel` | `close-label` | Label of the close trigger button              | `string`                    | `''`           |
| `collapsed`  | `collapsed`   | Controls if the accordion is collapsed or not  | `boolean`                   | `true`         |
| `openIcon`   | `open-icon`   | Bal-Icon of the open trigger button            | `string`                    | `'plus'`       |
| `openLabel`  | `open-label`  | Label of the open trigger button               | `string`                    | `''`           |
| `type`       | `type`        | Type defines the theme of the accordion toggle | `"is-info" \| "is-primary"` | `'is-primary'` |


## Events

| Event                | Description                            | Type                   |
| -------------------- | -------------------------------------- | ---------------------- |
| `balAccordionChange` | Emmited when the accordion has changed | `CustomEvent<boolean>` |


## Methods

### `close() => Promise<void>`

Close the accordion

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Open the accordion

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Triggers the accordion

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bal-button](../bal-button)
- [bal-icon](../bal-icon)

### Graph
```mermaid
graph TD;
  bal-accordion --> bal-button
  bal-accordion --> bal-icon
  bal-button --> bal-spinner
  bal-button --> bal-icon
  bal-button --> bal-text
  style bal-accordion fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
