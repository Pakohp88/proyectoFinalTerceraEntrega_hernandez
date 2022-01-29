import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_PEDIDOS, LOAD_PEDIDOS_SUCCESS, LOAD_PEDIDOS_FAIL } from '../actions/pedido.actions';

import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { CartService } from '../../services/cart.service';


@Injectable()
export class PedidosEffects {

    constructor(
        private action$: Actions,
        private _cartService : CartService) {

    }

    cargarPeliculas$ = createEffect(
        () => this.action$.pipe(
            ofType(LOAD_PEDIDOS),
            mergeMap(
                () => this._cartService.obtenerPedidos()
                .pipe(
                    map( pedidos => LOAD_PEDIDOS_SUCCESS({ pedidos: pedidos })),
                    catchError( err => of( LOAD_PEDIDOS_FAIL({ payload: err }) ))
                )
            )
        )
    );

}
