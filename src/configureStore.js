import {
  createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Impore reducers
import * as GlobalReducers from 'Global/redux/reducers';
import { ExploreReducers } from 'Explore';
import { AuthReducers } from 'Auth';
import { ChallengeReducers } from 'Challenge';

const middlewares = [thunk, logger];
const reducers = combineReducers({
  ...GlobalReducers,
  ...ExploreReducers,
  ...AuthReducers,
  ...ChallengeReducers,
});

export default (initialState) => {
  const enhancer = compose(applyMiddleware(...middlewares));
  const store = createStore(reducers, initialState, enhancer);

  return store;
};
