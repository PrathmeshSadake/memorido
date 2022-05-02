import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducers';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
// The store now has the ability to accept thunk functions in `dispatch`
const store = configureStore(
  {
    reducer,
  },
  composedEnhancer
);
export default store;
