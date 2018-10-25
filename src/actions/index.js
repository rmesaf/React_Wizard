import { LOAD, NEXT } from '../constants';

export const load_action = (data) => ({
    type: LOAD,
    data: data
});

export const next_action = (data) => ({
    type: NEXT,
    data: data
});