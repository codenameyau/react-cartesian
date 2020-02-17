# react-cartesian

React Cartesian Product component. This will render all possible prop
combinations for a component and is useful in conjunction with storybook.


### Getting started
```bash
# Install component
npm install --save react-cartesian
```

### Usage
```js
import React from 'react';
import Cartesian from 'react-cartesian';

const ExampleCartesian = () => {
  return (
    <Cartesian
      cols={4}
      component={Component}
      showProps={false}
      props={{
        children: ['Short Text', 'This is very long Text']
      }}
    />
  )
};
```
