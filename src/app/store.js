import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import reducer from './reducers/reducer';

export default createStore(
  combineReducers({reducer}),
  applyMiddleware(createLogger())
);
