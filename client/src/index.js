import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import productReducer from './features/product';
import loginReducer from './features/login';
import userDataReducer from './features/userData';
import modalReducer from './features/searchModal';

const store = configureStore({
  reducer: {
    products: productReducer,
    login: loginReducer,
    userData: userDataReducer,
    openSearch: modalReducer,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
