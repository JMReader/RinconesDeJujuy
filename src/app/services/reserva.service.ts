import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../models/reserva'; 

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private baseURL: string = "http://localhost:3000/Reserva"; 
  constructor(private _http: HttpClient) {  }

  createReserva(reserva: Reserva): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(reserva);

    return this._http.post(this.baseURL + '/post', datos, options)
  }

  getReservas(): Observable<any>{
    const options = {
      method: "GET",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.get(this.baseURL + '/traer', options)
  }
}
