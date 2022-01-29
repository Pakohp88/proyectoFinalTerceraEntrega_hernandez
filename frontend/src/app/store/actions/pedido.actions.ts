import {  createAction, props } from "@ngrx/store";
import { Pedido } from '../../models/pedido.model';


//Cargar pelicuas
export const LOAD_PEDIDOS = createAction('[Pedidos] carga de pedidos');
export const LOAD_PEDIDOS_SUCCESS = createAction('[Pedidos] carga de pedidos exitosa', props<{ pedidos: Pedido[]}>());
export const LOAD_PEDIDOS_FAIL = createAction('[Pedidos] carga de pedidos erronea', props<{ payload: any }>());