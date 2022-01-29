import { LOAD_PEDIDOS, LOAD_PEDIDOS_SUCCESS, LOAD_PEDIDOS_FAIL } from '../actions/pedido.actions';
import { Pedido } from '../../models/pedido.model';
import { createReducer, on, Action } from '@ngrx/store';



export interface PedidoState {
    pedidos: Pedido[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: PedidoState = {
    pedidos: [],
    loaded: false,
    loading: false,
    error: null
}


const _pedidosReducer = createReducer(initialState,
    on(LOAD_PEDIDOS, state => ({ ...state, loading: true })),
    on(LOAD_PEDIDOS_SUCCESS, (state, { pedidos})  => ({...state, loading: false, loaded: true, pedidos: [...pedidos], error: null })),
    on(LOAD_PEDIDOS_FAIL, (state, { payload }) =>  ({...state, loading: false, loaded: false, error: { url: payload.url, name: payload.name, message: payload.message }}))  
  );


  export function pedidosReducer(state = initialState, action: Action){
      return _pedidosReducer(state, action)
  }