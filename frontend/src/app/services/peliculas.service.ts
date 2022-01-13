import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private URL = "http://localhost:3000/api/peliculas/";
  private headers = new HttpHeaders({
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGxpY2F0aW9uTmFtZSI6Im1vdmllT24iLCJpYXQiOjE2NDIwMzM2NTN9.lHBjxU5FppaigWBk1c8ftyWlb-5CjSP-N0VAp5YLYNE'
  }); 
  constructor(private httpClient:HttpClient) {}

  getPeliculas() {   
    
    return this.httpClient.get<Pelicula[]>(this.URL, { headers: this.headers });
  }

  getPelicula(id: string ){
    return this.httpClient.get<Pelicula>(`${ this.URL }/${ id }`,  { headers: this.headers });
  }

  agregarPelicula(pelicula: Pelicula){
    return this.httpClient.post(this.URL, pelicula, { headers: this.headers });
  }

  modificarPelicula(pelicula: Pelicula, id: string ){
    return this.httpClient.put(`${ this.URL }/${ id }`, pelicula, { headers: this.headers });
  }

  borrarPelicula(id: string){
    return this.httpClient.delete(`${ this.URL }/${ id }`, { headers: this.headers });
  }
}


export interface Pelicula{
  id: string,
  titulo: string,
  director: string,
  anio: string,
  fechaEstreno: string,
  reparto: string,
  sinopsis: string,
  img: string,
  precio: number
}