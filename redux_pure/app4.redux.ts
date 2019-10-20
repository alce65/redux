// implementamos la librería redux
// y el patron subscribe

import { Action, Reducer, createStore, Store } from 'redux';

// extiendo el interface Action para que exija un playload
// ya de un tipo concreto

interface PlusAction extends Action {
    payload: number;
}

const countReducer: Reducer<number>  =
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
};

const incrementAction: Action = {
    type: 'INCREMENT'
};

const decrementAction: Action = {
    type: 'DECREMENT'
};

const plusAction: PlusAction = {
    type: 'PLUS',
    payload : 10
};

const store: Store<number> = createStore<number, null, null, null>(countReducer);

console.log('Estado inicial', store.getState());
store.subscribe( () => console.log('Estado nuevo', store.getState())
);
store.dispatch(plusAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
