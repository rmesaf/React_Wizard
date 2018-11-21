import { LOAD, NEXT, SAVE, RESET } from '../constants';

export const LOAD_reducer = (state = {}, action) => {
    switch (action.type){
        case LOAD:
            return {
                ...state,
                data: action.data
            };
        case RESET:
            return {}
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
        case RESET:
            return {
                data: "WELCOME"
            }
        default:
            return state;
    }
}

export const WIZARD_reducer = (state = {}, action) => {
    switch (action.type){
        case SAVE:
            return Object.assign(state, action.data)
        case RESET:
            return {}
        default:
            return state;
    }
}