import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Pelicula } from './peliculas.service';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartPeliculasList : Pelicula[] =[]
  public peliculastList = new BehaviorSubject<any>([]);
  private URL = "http://localhost:3000/api/pedidos";
  private headers = new HttpHeaders({  
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aW9uTmFtZSI6Im1vdmllT24iLCJpYXQiOjE2NDIwMjY1NzB9.UCIV7VUgpNVgDSjXoCve1m2YhRMum1vPCvBZXqEOvdY'
  }); 
  
  constructor(private httpClient: HttpClient) { }


  agregarPedido(pedido: Pedido){
    //console.log(pedido);    
    return this.httpClient.post( this.URL, pedido, { headers: this.headers});
  }
  
  modificarPedido(pedido: Pedido, id: string){
    return this.httpClient.put( `${ this.URL }/${ id }`, pedido, { headers: this.headers});
  }

  obtenerPedidos(){
    return this.httpClient.get<Pedido[]>( this.URL, { headers: this.headers } );
  }

  obtenerPedido( id: string ){
    return this.httpClient.get<Pedido>(`${ this.URL }/${ id }`, { headers: this.headers });
  }


  borrarPedido( id: string){
    return this.httpClient.delete(`${ this.URL }/${ id }`, { headers: this.headers });
  }

  getPeliculas(){
    return this.peliculastList.asObservable();
  }

  agregarPelicula(pelicula : Pelicula){
    this.cartPeliculasList.push(pelicula);
    this.peliculastList.next(this.cartPeliculasList);
    this.getPrecioTotal();    
  }

  getPrecioTotal() : number{
    let Total = 0;
    this.cartPeliculasList.map((a:any)=>{
      Total += a.precio;
    })
    return Total;
  }

  borraraPelicula(pelicula: Pelicula){    
    this.cartPeliculasList.map((a:any, index:any)=>{
      if(pelicula.id=== a.id){
        this.cartPeliculasList.splice(index,1);
      }
    })
    this.peliculastList.next(this.cartPeliculasList);
  }

  borrarCarrito(){
    this.cartPeliculasList = []
    this.peliculastList.next(this.cartPeliculasList);
  }
}


