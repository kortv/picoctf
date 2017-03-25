import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import MainLayout from './MainLayout';
import './index.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <MainLayout />
  </Provider>,
  document.getElementById('root')
);
