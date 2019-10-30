import { createAction, props } from '@ngrx/store';
import { Tarea } from './tareas.model';

// Ya no es necesario un tipo ampliado para las acciones complejas
// import { Action } from '@ngrx/store';
/* export interface AddTareaAction extends Action {
    payload: Tarea;
} */

// creamos una serie de constantes con los nombres de las acciones
// es buena práctica colocar [] con el dominio de las acciones

const ADDTAREA = '[Tareas] add tarea';

// Creamos las clases que acuaran como creadoras de acciones

/* export class AddTareaAcction implements AddTareaAction {
    readonly type = ADDTAREA;
    constructor(public payload: Tarea) {
    }
} */

export const AddTareaAcction = createAction(ADDTAREA, props<{payload: Tarea}>());

// export type AllActions = AddTareaAction;
