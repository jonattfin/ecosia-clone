// /* eslint-env node, browser */
// // This file merely configures the store for hot reloading.
// // This boilerplate file is likely to be the same for each project that uses Redux.
// // With Redux, the actual stores are in /reducers.

// import { applyMiddleware, createStore, compose } from 'redux';
// // import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import rootReducer from '../src/rootReducer';

// export default function configureStore(initialState) {

//   const composeEnhancers = composeWithDevTools({
//     // Specify name here, actionsBlacklist, actionsCreators and other options if needed
//   });

//   const store = createStore(rootReducer, initialState, composeEnhancers(
//     applyMiddleware(...[thunk]),
//     // other store enhancers if any
//   ));

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept(rootReducer, () => {
//       const nextReducer = require(rootReducer).default; // eslint-disable-line global-require
//       store.replaceReducer(nextReducer);
//     });
//   }

//   return store;
// }
