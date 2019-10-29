/* import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment'; */
import { counterReducer } from './counter.reducer';

// cada uno de los elementos del estado
// tendra su reducer (único) y sus actions

export interface State {
  counter: number;
}

// agrupamos todos los reducers de la aplicación en un objeto
// aunque en este caso es solo 1
export const reducers = {
  counter: counterReducer
};

// Mas adelante usaremos el metodo proporcionado por ngrx
// para agrupar todos los reducers de la aplicación en un objeto
/* export const reducers: ActionReducerMap<State> = {

}; */


/* export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; */
