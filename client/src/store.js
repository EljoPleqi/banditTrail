import { combineReducers, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from './features/product';
import loginReducer from './features/login';
import userDataReducer from './features/userData';
import cartReducer from './features/cart';
import notificationReducer from './features/notifications';
import subscriptionReducer from './features/subscription';

const config = {
  key: 'main-root',
  storage,
};

const reducer = combineReducers({
  products: productReducer,
  login: loginReducer,
  userData: userDataReducer,
  cart: cartReducer,
  notification: notificationReducer,
  subscription: subscriptionReducer,
});

const persistedReducer = persistReducer(config, reducer);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { persistor };

export default store;
