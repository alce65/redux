import { Action } from '@ngrx/store';
import {PlusAction, INCREMENT, DECREMENT, PLUS, RESET } from './counter.actions';

/* const countReducer: Reducer<number>  =
(state = 0, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'PLUS':
                return state + (action as PlusAction).payload;
        default:
            return state;
    }
}; */

export function counterReducer(state = 0, action: Action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case PLUS:
                return state + (action as PlusAction).payload;
        case RESET:
            return 0;
        default:
            return state;
    }
}
