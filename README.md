# react-cartesian

React Cartesian Product component. This will render all possible prop
combinations for a component and is useful in conjunction with storybook.
https://www.npmjs.com/package/react-cartesian

## Features

Can copy JSX of component with a single click.

## Getting started
```bash
npm install --save react-cartesian
```

```bash
yarn add react-cartesian
```

### Usage
```js
import React from 'react';
import Cartesian from 'react-cartesian';

const ExampleCartesian = () => {
  return (
    <Cartesian
      cols={3}
      component={Component}
      showProps={false}
      props={{
        color: ['red', 'green', 'blue'],
        children: ['Text 1', 'Text 2', 'Text 3']
      }}
    />
  )
};
```

## Publishing to NPM
Here's how to publish this package to NPM.

### Automated
Run this script on a **clean branch** and enter two factor code.

```bash
npm run deploy
```

### Manually
You can also publish manually by running these steps.

```bash
# Run unit tests.
npm run test

# Build module.
npm run build

# Bump patch version.
npm version patch

# Publish package to npm with two factor code.
npm publish
```
