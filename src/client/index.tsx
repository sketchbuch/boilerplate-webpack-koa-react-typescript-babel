import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from '../common/components/App/App';
import store from '../common/store/redux';

ReactDOM.render(
  <Provider store={store}>
    <App title="Stephen" />
  </Provider>,
  document.getElementById('root')
);
