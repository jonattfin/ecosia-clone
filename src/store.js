import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(...[thunk]),
  // other store enhancers if any
));
