import { LOAD, NEXT, SAVE, RESET } from '../constants';

export const load_action = (data) => ({
    type: LOAD,
    data: data
});

export const next_action = (data) => ({
    type: NEXT,
    data: data
});

export const save_action = (data) => ({
    type: SAVE,
    data: data
});

export const reset_action = (data) => ({
    type: RESET,
    data: data
});