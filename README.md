# react-cartesian

React Cartesian Product component. This will render all possible prop
combinations for a component and is useful in conjunction with storybook.
https://www.npmjs.com/package/react-cartesian

### Getting started
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
