// DEPENDENCIES
import { createStore, combineReducers } from 'redux';
// REDUCER
import { LOAD_reducer, NEXT_reducer } from '../reducers';

const reducer = combineReducers({
    load: LOAD_reducer,
    current: NEXT_reducer
});

const store = (
    window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
)(reducer);

export default store;