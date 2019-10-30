import { Action, createReducer, on } from '@ngrx/store';
import { Tarea } from './tareas.model';
import { AddTareaAcction } from './tareas.actions';

/* export const tareasReducer =
    (state: Array<Tarea> = [], action: AllActions) => {
        switch (action.type) {
            case ADDTAREA:
                return [...state,
                        action.payload];
            default:
                return state;
        }
}; */


const reducer = createReducer<Array<Tarea>, Action>(
    [],
    on(AddTareaAcction,
        (state: Array<Tarea>, {payload}) => [...state, payload])
);

// The exported reducer function is necessary
// as function calls are not supported by the AOT compile

export function tareasReducer(state: Array<Tarea> = [], action: Action) {
    return reducer(state, action);
}
