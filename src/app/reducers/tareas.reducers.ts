import {  } from '@ngrx/store';
import { Tarea } from './tareas.model';
import { ADDTAREA, AllActions } from './tareas.actions';


export const tareasReducer =
    (state: Array<Tarea> = [], action: AllActions) => {
        switch (action.type) {
            case ADDTAREA:
                return [...state,
                        action.payload];
            default:
                return state;
        }
};
