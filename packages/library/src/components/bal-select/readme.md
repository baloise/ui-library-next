# bal-select

Select fields components are used for collecting user provided information from a list of options.

> Two-way binding with `v-model` or `ng-model` is available.

## Option interface

```typescript
export interface BalOptionValue<T> {
  value: string
  label: string
  data?: T
}
```

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                     | Type      | Default |
| ------------- | ------------- | ------------------------------------------------------------------------------- | --------- | ------- |
| `disabled`    | `disabled`    | If `true` the component is diabled.                                             | `boolean` | `false` |
| `expanded`    | `expanded`    | If `true` the component uses the whole width.                                   | `boolean` | `false` |
| `inverted`    | `inverted`    | Set this to `true` when the component is placed on a dark background.           | `boolean` | `false` |
| `loading`     | `loading`     | If `true` the component shows a loading spinner and sets the input to readonly. | `boolean` | `false` |
| `placeholder` | `placeholder` | Defines the placeholder of the input element.                                   | `string`  | `''`    |
| `remote`      | `remote`      | If `true` the filtering of the options is done outside of the component.        | `boolean` | `false` |
| `scrollable`  | `scrollable`  | Defines the height of the dropdown list.                                        | `number`  | `250`   |
| `typeahead`   | `typeahead`   | If `true` the user can search by typing into the input field.                   | `boolean` | `false` |
| `value`       | `value`       | Selected option value.                                                          | `string`  | `''`    |


## Events

| Event         | Description                                                        | Type                         |
| ------------- | ------------------------------------------------------------------ | ---------------------------- |
| `balBlur`     | Emitted when the input loses focus.                                | `CustomEvent<FocusEvent>`    |
| `balCancel`   | Emitted when the user cancels the input.                           | `CustomEvent<KeyboardEvent>` |
| `balChange`   | Emitted when a option got selected.                                | `CustomEvent<string>`        |
| `balClick`    | Emitted when the input got clicked.                                | `CustomEvent<MouseEvent>`    |
| `balFocus`    | Emitted when the input has focus.                                  | `CustomEvent<FocusEvent>`    |
| `balInput`    | Emitted when a keyboard input occurred.                            | `CustomEvent<string>`        |
| `balKeyPress` | Emitted when the input has focus and key from the keyboard go hit. | `CustomEvent<KeyboardEvent>` |


## Methods

### `clear() => Promise<void>`

Sets the value to null and resets the value of the input.

#### Returns

Type: `Promise<void>`



### `close() => Promise<void>`

Closes the dropdown

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Opens the dropdown

#### Returns

Type: `Promise<void>`



### `select(option: BalOptionValue<any>) => Promise<void>`

Selects an option

#### Returns

Type: `Promise<void>`



### `setFocus() => Promise<void>`

Sets the focus on the input element

#### Returns

Type: `Promise<void>`



### `sync() => Promise<void>`

*Internal* - Used to update option changes

#### Returns

Type: `Promise<void>`




## Dependencies

### Depends on

- [bal-dropdown](../bal-dropdown)
- [bal-icon](../bal-icon)

### Graph
```mermaid
graph TD;
  bal-select --> bal-dropdown
  bal-select --> bal-icon
  style bal-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
