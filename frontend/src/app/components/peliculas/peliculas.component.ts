import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../services/peliculas.service';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { LOAD_PELICULAS } from '../../store/actions/pelicula.action';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculaArray: Pelicula[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>,
              private carritoService: CartService ) { }

  ngOnInit(): void {
     this.store.select('peliculas').subscribe(({ peliculas, loading, error }) => {
        this.loading = loading;
        this.error = error;
        this.peliculaArray = peliculas;
     });

     this.store.dispatch(LOAD_PELICULAS());
  }

  agregarAlCarrito(pelicula: Pelicula){
    this.carritoService.agregarPelicula(pelicula);
    Swal.fire({ allowOutsideClick: false, icon: 'success',  text: 'Película agregada al carrito exitosamente', timer: 1600});
    Swal.showLoading();
  }

}


