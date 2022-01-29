import { LOAD_PELICULAS, LOAD_PELICULAS_SUCCESS, LOAD_PELICULAS_FAIL } from '../actions/pelicula.action';
import { Pelicula } from '../../services/peliculas.service';
import { createReducer, on, Action } from '@ngrx/store';



export interface PeliculaState {
    peliculas: Pelicula[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: PeliculaState = {
    peliculas: [],
    loaded: false,
    loading: false,
    error: null
}


const _peliculasReducer = createReducer(initialState,
    on(LOAD_PELICULAS, state => ({ ...state, loading: true })),
    on(LOAD_PELICULAS_SUCCESS, (state, { peliculas})  => ({...state, loading: false, loaded: true, peliculas: [...peliculas], error: null })),
    on(LOAD_PELICULAS_FAIL, (state, { payload }) =>  ({...state, loading: false, loaded: false, error: { url: payload.url, name: payload.name, message: payload.message }}))  
  );


  export function peliculasReducer(state = initialState, action: Action){
      return _peliculasReducer(state, action)
  }