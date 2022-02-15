import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import productReducer from './features/product';
import loginReducer from './features/login';
import userDataReducer from './features/userData';

const store = configureStore({
  reducer: {
    products: productReducer,
    login: loginReducer,
    userData: userDataReducer,
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
