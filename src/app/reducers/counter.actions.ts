import { Action } from '@ngrx/store';

// extiendo el interface Action para que exija un playload
// ya de un tipo concreto

export interface PlusAction extends Action {
    payload: number;
}

// creamos una serie de constantes con los nombres de las acciones
// es buena práctica colocar [] con el dominio de las acciones

export const INCREMENT = '[Counter] increment';
export const DECREMENT = '[Counter] decrement';
export const PLUS = '[Counter] plus';
export const RESET = '[Counter] reset';


const incrementAction: Action = {
    type: INCREMENT
};

const decrementAction: Action = {
    type: DECREMENT
};

const plusAction: PlusAction = {
    type: PLUS,
    payload : 10
};
