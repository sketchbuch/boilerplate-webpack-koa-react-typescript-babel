import { RenderResult } from '@testing-library/react';
import { Store as ReduxStore } from 'redux';
import { State } from './state.interface';

export interface RenderWithReduxOptions {
  initialState?: Partial<State>;
  store?: ReduxStore;
}

export interface RenderWithRedux extends RenderResult {
  store: ReduxStore;
}
