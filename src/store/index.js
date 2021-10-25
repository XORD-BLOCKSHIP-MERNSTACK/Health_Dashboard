// ----Configuration of store---//

// import reducer index.js
import reducer from './reducers/index';

// import createStore form redux znd applymiddleware is a method to apply middleware
import { createStore, compose, applyMiddleware } from 'redux';

// import thunk
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// passed reducer(initial store) in createStore method which is imported from redux
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
