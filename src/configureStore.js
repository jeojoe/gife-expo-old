import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Impore reducers
import { ExploreReducers } from 'modules/Explore';

const middlewares = [thunk, logger];
const reducers = combineReducers({
  ...ExploreReducers,
});

export default (initialState) => {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);

  return store;
};
