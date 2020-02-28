import React from 'react';

import {
  getCartesianProduct,
  getCartesianProps,
  CartesianGrid,
  CartesianGridItem,
  getJSX,
} from './Cartesian';

describe('CartesianGrid', () => {
  it('should render component', () => {
    shallow(<CartesianGrid />);
  });
});

describe('CartesianGridItem', () => {
  it('should render component', () => {
    shallow(<CartesianGridItem />);
  });
});

describe('getCartesianProduct', () => {
  it('should return empty array for empty array input', () => {
    const input = [];
    const output = [];
    expect(getCartesianProduct(input)).toEqual(output);
  });
  it('should return cartesian product', () => {
    const input = [
      [1, 2],
      [10, 20],
      [100, 200, 300],
    ];
    const output = [
      [1, 10, 100],
      [1, 10, 200],
      [1, 10, 300],
      [1, 20, 100],
      [1, 20, 200],
      [1, 20, 300],
      [2, 10, 100],
      [2, 10, 200],
      [2, 10, 300],
      [2, 20, 100],
      [2, 20, 200],
      [2, 20, 300],
    ];
    expect(getCartesianProduct(input)).toEqual(output);
  });
  it('should return cartesian product for arrays', () => {
    const input = [
      [[1], 2],
      [10, 20],
    ];
    const output = [
      [[1], 10],
      [[1], 20],
      [2, 10],
      [2, 20],
    ];
    expect(getCartesianProduct(input)).toEqual(output);
  });
  it('should return cartesian product for props', () => {
    const input = [
      [{ step: 1 }, 2],
      [10, 20],
    ];
    const output = [
      [{ step: 1 }, 10],
      [{ step: 1 }, 20],
      [2, 10],
      [2, 20],
    ];
    expect(getCartesianProduct(input)).toEqual(output);
  });
});

describe('getCartesianProps', () => {
  it('should return empty object for empty props', () => {
    const input = {};
    const output = [];
    expect(getCartesianProps(input)).toEqual(output);
  });

  it('should return cartesian props for literals', () => {
    const input = {
      color: ['red', 'green', 'blue'],
      fontWeight: ['normal', 'bold'],
      fontSize: [12, 16],
    };
    const output = [
      { color: 'red', fontSize: 12, fontWeight: 'normal' },
      { color: 'red', fontSize: 16, fontWeight: 'normal' },
      { color: 'red', fontSize: 12, fontWeight: 'bold' },
      { color: 'red', fontSize: 16, fontWeight: 'bold' },
      { color: 'green', fontSize: 12, fontWeight: 'normal' },
      { color: 'green', fontSize: 16, fontWeight: 'normal' },
      { color: 'green', fontSize: 12, fontWeight: 'bold' },
      { color: 'green', fontSize: 16, fontWeight: 'bold' },
      { color: 'blue', fontSize: 12, fontWeight: 'normal' },
      { color: 'blue', fontSize: 16, fontWeight: 'normal' },
      { color: 'blue', fontSize: 12, fontWeight: 'bold' },
      { color: 'blue', fontSize: 16, fontWeight: 'bold' },
    ];
    expect(getCartesianProps(input)).toEqual(output);
  });

  it('should return cartesian props for arrays', () => {
    const steps = [{ name: 'Introductions' }, { name: 'Financial profile' }];
    const input = {
      steps: [steps],
      completed: [0, 1],
    };
    const output = [
      { steps, completed: 0 },
      { steps, completed: 1 },
    ];
    expect(getCartesianProps(input)).toEqual(output);
  });

  it('should return cartesian props for objects', () => {
    const step = {
      name: 'Introductions',
    };
    const input = {
      currentStep: [step],
      completed: [false, true],
    };
    const output = [
      { currentStep: step, completed: false },
      { currentStep: step, completed: true },
    ];
    expect(getCartesianProps(input)).toEqual(output);
  });
});

describe('getJSX', () => {
  const HelloTag = props => {
    return (
      <div>
        Hello {props.name}
        {props.children}
      </div>
    );
  };

  const Greetings = props => {
    return <div>{props.greetings}</div>;
  };

  it('should handle empty component', () => {
    expect(getJSX(null)).toEqual('');
  });

  it('should handle JSX with no props', () => {
    const component = <HelloTag />;
    expect(getJSX(component)).toEqual(`<HelloTag />`);
  });

  it('should handle JSX with props', () => {
    const component = <HelloTag name="John" />;
    expect(getJSX(component)).toEqual(`<HelloTag name="John"/>`);
  });

  it('should handle JSX with children and no props', () => {
    const component = <HelloTag>Nice to meet you.</HelloTag>;
    expect(getJSX(component)).toEqual(`<HelloTag >Nice to meet you.</HelloTag>`);
  });

  it('should handle JSX with children and props', () => {
    const component = <HelloTag name="John">Nice to meet you.</HelloTag>;
    expect(getJSX(component)).toEqual(
      `<HelloTag name="John">Nice to meet you.</HelloTag>`
    );
  });

  it('should handle JSX with JSX children', () => {
    const component = (
      <HelloTag>
        <Greetings greetings="Nice to meet you." />
      </HelloTag>
    );

    expect(getJSX(component)).toEqual(`<HelloTag >Nice to meet you.</HelloTag>`);
  });

  it('should handle JSX with JSX children and props', () => {
    const component = (
      <HelloTag name="John">
        <Greetings greetings="Nice to meet you." />
      </HelloTag>
    );

    expect(getJSX(component)).toEqual(
      `<HelloTag name="John">Nice to meet you.</HelloTag>`
    );
  });
});
