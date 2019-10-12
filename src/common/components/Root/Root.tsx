import React from 'react';
import store from '../../store/redux';
import { Provider } from 'react-redux';
import App from '../App/App';

const Root: React.FC<{}> = () => (
  <Provider store={store}>
    <App title="Stephen" />
  </Provider>
);

export { store };
export default Root;
