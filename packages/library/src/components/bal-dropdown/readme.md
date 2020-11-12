# bal-dropdown



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                         | Type      | Default |
| ------------ | ------------ | ------------------------------------------------------------------- | --------- | ------- |
| `expanded`   | `expanded`   | If `true` the field spans over the whole width.                     | `boolean` | `false` |
| `isActive`   | `is-active`  | If `true` the dropdown content is open.                             | `boolean` | `false` |
| `scrollable` | `scrollable` | Limit the height of the dropdown content. Pass the amount of pixel. | `number`  | `0`     |


## Events

| Event         | Description                                                                     | Type                   |
| ------------- | ------------------------------------------------------------------------------- | ---------------------- |
| `balCollapse` | Listen when the dropdown opens or closes. Returns the current `isActive` value. | `CustomEvent<boolean>` |


## Methods

### `close() => Promise<void>`

Closes the dropdown menu.

#### Returns

Type: `Promise<void>`



### `getContentElement() => Promise<HTMLDivElement>`

Returns the `HTMLDivElement` of the content element

#### Returns

Type: `Promise<HTMLDivElement>`



### `getMenuElement() => Promise<HTMLDivElement>`

Returns the `HTMLDivElement` of the menu element

#### Returns

Type: `Promise<HTMLDivElement>`



### `open() => Promise<void>`

Open the dropdown menu.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Open or closes the dropdown.

#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [bal-datepicker](../bal-datepicker)
 - [bal-select](../bal-select)

### Graph
```mermaid
graph TD;
  bal-datepicker --> bal-dropdown
  bal-select --> bal-dropdown
  style bal-dropdown fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
