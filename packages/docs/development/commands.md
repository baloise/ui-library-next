# Commands

## Library

All the library (core, vue and angular) are prefixed with `lib:`

### Build

```bash
npm run lib:build
```

### Serve

This will start a dev server on `http://localhost:3333`.

```bash
npm run lib:serve
```

## Testing

To build the component for production.

### Serve

This opens the Cypress Test Runner.

```bash
npm run testing:serve
```

### Run

Runs all the E2E test in the background. Just start your library server with `npm run lib:serve` first.

```bash
npm run testing:run
```

### Build

Builds the testing helper library with the accessors of our components.

```bash
npm run testing:build
```

## Documentation

### Build

This will generate the documentation of the stencil components and copy them to the documentation package. After that the examples (index.html) get included and the sidebar gets updated with the components.

```bash
npm run docs:build
```

> For more details look into the `packages/docs/build/main.build.js` file.

### Serve

This will start a dev server on `http://localhost:3000`.

```bash
npm run docs:serve
```

## Examples

We have examples for the framework `vue` and `angular` available.

### Serve

This will start a dev server on `http://localhost:8080`.

```bash
npm run vue:serve
# or
npm run ng:serve 
```