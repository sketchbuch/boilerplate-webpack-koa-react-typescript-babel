import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import reducers from '../reducers';
import {
  RenderWithRedux,
  RenderWithReduxOptions,
} from '../types/redux/renderWithRedux.interface';

const renderWithRedux = (
  comp: React.ReactNode,
  {
    initialState = {},
    store = createStore(reducers, initialState),
  }: RenderWithReduxOptions = {}
): RenderWithRedux => {
  return {
    ...render(<Provider store={store}>{comp}</Provider>),
    store,
  };
};

export default renderWithRedux;
