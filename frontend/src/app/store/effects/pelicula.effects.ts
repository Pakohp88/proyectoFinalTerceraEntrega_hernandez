import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LOAD_PELICULAS, LOAD_PELICULAS_SUCCESS, LOAD_PELICULAS_FAIL, CREATEPELICULA, CREATEPELICULA_SUCCESS, CREATEPELICULA_FAIL, MODIFICARPELICULA, MODIFICARPELICULA_SUCCESS, MODIFICARPELICULA_FAIL } from '../actions/pelicula.action';

import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { PeliculasService } from '../../services/peliculas.service';


@Injectable()
export class PeliculaEffects {

    constructor(
        private action$: Actions,
        private _peliculaService: PeliculasService) {

    }

    cargarPeliculas$ = createEffect(
        () => this.action$.pipe(
            ofType(LOAD_PELICULAS),
            mergeMap(
                () => this._peliculaService.getPeliculas()            
                .pipe(
                    map( peliculas => LOAD_PELICULAS_SUCCESS({ peliculas: peliculas })),
                    catchError( err => of( LOAD_PELICULAS_FAIL({ payload: err }) ))
                )
            )
        )
    );

    crearPelicula$ = createEffect(
        () => this.action$.pipe(
            ofType(CREATEPELICULA),
            map(action => action.payload),
            mergeMap( pelicula => this._peliculaService.agregarPelicula(pelicula)            
                .pipe(
                    map( res => CREATEPELICULA_SUCCESS({ payload: res })),
                    catchError( err => of( CREATEPELICULA_FAIL({ payload: err }) ))
                )
            )
        )
    );

    ModificarPelicula$ = createEffect(
        () => this.action$.pipe(
            ofType(MODIFICARPELICULA),            
            mergeMap( action => this._peliculaService.modificarPelicula(action.payload, action.id)            
                .pipe(
                    map( res => MODIFICARPELICULA_SUCCESS({ payload: res })),
                    catchError( err => of( MODIFICARPELICULA_FAIL({ payload: err }) ))
                )
            )
        )
    );

}
