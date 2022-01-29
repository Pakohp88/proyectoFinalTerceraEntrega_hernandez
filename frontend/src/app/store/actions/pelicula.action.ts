import {  createAction, props } from "@ngrx/store"
import { Pelicula } from '../../services/peliculas.service';

//Cargar pelicuas
export const LOAD_PELICULAS = createAction('[Peliculas] carga de peliculas');
export const LOAD_PELICULAS_SUCCESS = createAction('[Peliculas] carga de peliculas exitosa', props<{ peliculas: Pelicula[]}>());
export const LOAD_PELICULAS_FAIL = createAction('[Peliculas] carga de peliculas erronea', props<{ payload: any }>());


//Subir pelicula
export const CREATEPELICULA = createAction('[Peliculas] crear pelicula',  props<{ payload: Pelicula }>());
export const CREATEPELICULA_SUCCESS = createAction('[Peliculas] crear pelicula success',  props<{ payload: any }>());
export const CREATEPELICULA_FAIL = createAction('[Peliculas] crear pelicula erronea',  props<{ payload: any }>());


//Modificar Pelicula
export const MODIFICARPELICULA = createAction('[Peliculas] crear pelicula',  props<{ payload: Pelicula, id: string }>());
export const MODIFICARPELICULA_SUCCESS = createAction('[Peliculas] crear pelicula success',  props<{ payload: any }>());
export const MODIFICARPELICULA_FAIL = createAction('[Peliculas] crear pelicula erronea',  props<{ payload: any }>());



