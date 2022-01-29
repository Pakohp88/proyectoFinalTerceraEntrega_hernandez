import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Pedido } from 'src/app/models/pedido.model';
import { AppState } from 'src/app/store/app.reducer';
import { LOAD_PEDIDOS } from '../../store/actions/pedido.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  pedidos: Pedido[] = [];
  loading: boolean = false;
  error: any;

  constructor(private store: Store<AppState>,) { }

  ngOnInit(): void {
    this.store.select('pedidos').subscribe(({ pedidos, loading, error }) => {
      this.loading = loading;
      this.error = error;
      this.pedidos = pedidos;
   });

   this.store.dispatch(LOAD_PEDIDOS());
  }

}
