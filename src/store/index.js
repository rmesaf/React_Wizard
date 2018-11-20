// DEPENDENCIES
import { createStore, combineReducers } from 'redux';
import { reducer as FORM_reducer} from 'redux-form';
// REDUCER
import { LOAD_reducer, NEXT_reducer, WIZARD_reducer } from '../reducers';

const reducer = combineReducers({
    form: FORM_reducer,
    load: LOAD_reducer,
    current: NEXT_reducer,
    wizard: WIZARD_reducer
});

const store = (
    window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore
)(reducer);

export default store;