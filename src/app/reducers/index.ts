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

export const reducers = {
  counter: counterReducer
};

/* export const reducers: ActionReducerMap<State> = {

}; */


/* export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : []; */
