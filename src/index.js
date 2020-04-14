import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import store from 'store';

import App from 'components/App';
import IconsLibrary from 'components/Icon/IconsLibrary';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/index.scss';

render(
  <Provider store={store}>
    <ToastContainer autoClose={10000} />
    <IconsLibrary />
    <App />
  </Provider>,
  document.getElementById('root'),
);
