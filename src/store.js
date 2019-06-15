import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnchancer(
  applyMiddleware(thunk),
);

const store = createStore(rootReducer, middleware);

export default store;
