import { LOAD, NEXT } from '../constants';

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