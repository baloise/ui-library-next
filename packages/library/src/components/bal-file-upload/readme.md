# bal-file-upload

The `bal-file-upload` is all in one component. It supports drag&drop and the normal file upload dialog of the browser.


<!-- Auto Generated Below -->


## Properties

| Property        | Attribute         | Description                                      | Type      | Default                      |
| --------------- | ----------------- | ------------------------------------------------ | --------- | ---------------------------- |
| `accept`        | `accept`          | Accepted MIME-Types like `image/png,image/jpeg`. | `string`  | `''`                         |
| `disabled`      | `disabled`        | If `true` the button is disabled                 | `boolean` | `undefined`                  |
| `label`         | `label`           | Label of the drop area.                          | `string`  | `'Choose or drop a file...'` |
| `maxBundleSize` | `max-bundle-size` | Allowed max bundle size in bytes.                | `number`  | `undefined`                  |
| `maxFileSize`   | `max-file-size`   | Allowed max file size in bytes.                  | `number`  | `undefined`                  |
| `maxFiles`      | `max-files`       | Allowed number of files in the bundle.           | `number`  | `undefined`                  |
| `multiple`      | `multiple`        | If `true` multiple file upload is possible.      | `boolean` | `true`                       |


## Events

| Event             | Description                                                              | Type                                  |
| ----------------- | ------------------------------------------------------------------------ | ------------------------------------- |
| `balChange`       | Triggers when a file is added or removed.                                | `CustomEvent<File[]>`                 |
| `balRejectedFile` | Triggers when a file is rejected due to not allowed MIME-Type and so on. | `CustomEvent<FileUploadRejectedFile>` |


## Dependencies

### Depends on

- [bal-icon](../bal-icon)
- [bal-list](../bal-list)
- [bal-list-item](../bal-list-item)
- [bal-list-item-icon](../bal-list-item-icon)
- [bal-list-item-content](../bal-list-item-content)
- [bal-list-item-title](../bal-list-item-title)
- [bal-list-item-subtitle](../bal-list-item-subtitle)

### Graph
```mermaid
graph TD;
  bal-file-upload --> bal-icon
  bal-file-upload --> bal-list
  bal-file-upload --> bal-list-item
  bal-file-upload --> bal-list-item-icon
  bal-file-upload --> bal-list-item-content
  bal-file-upload --> bal-list-item-title
  bal-file-upload --> bal-list-item-subtitle
  style bal-file-upload fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
