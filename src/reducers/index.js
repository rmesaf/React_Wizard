import { LOAD, NEXT, SAVE } from '../constants';
import Wizard from './../components/molecules/wizard/index';

export const LOAD_reducer = (state = {}, action) => {
    switch (action.type){
        case LOAD:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}

export const NEXT_reducer = (state = {data: "WELCOME"}, action) => {
    switch (action.type){
        case NEXT:
            return {
                ...state,
                data: action.data
            };
        default:
            return state;
    }
}

export const WIZARD_reducer = (state = {}, action) => {
    switch (action.type){
        case SAVE:
            return Object.assign(state, action.data)
        default:
            return state;
    }
}