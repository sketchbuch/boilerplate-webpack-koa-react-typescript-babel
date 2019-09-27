import React from 'react';
import App, { AppProps } from './App';
import renderWithRedux from '../../tests/renderWithRedux';

describe('<App />', () => {
  const props: AppProps = {
    title: 'A headline',
  };

  test('Renders without crashing', () => {
    const res = renderWithRedux(<App {...props} />, {});
    console.log(res);
  });
});
