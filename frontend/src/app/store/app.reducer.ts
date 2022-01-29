import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/pelicula.reducer';
import * as reducerPedido from  './reducers/pedido.reducer';


export interface AppState{
    peliculas: reducers.PeliculaState;
    pedidos: reducerPedido.PedidoState;
}


export const appReducers: ActionReducerMap<AppState> = {
    peliculas: reducers.peliculasReducer,
    pedidos: reducerPedido.pedidosReducer
}