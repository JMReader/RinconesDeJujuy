import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona'; 

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private baseURL: string = "http://localhost:3000/api/persona";
  constructor(private _http: HttpClient) { }

  createPersona(persona: Persona): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(persona);

    return this._http.post(this.baseURL + '/post', datos, options)
  }

  createEmpleado(persona: Persona): Observable<any>{
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }

    const datos = JSON.stringify(persona);

    return this._http.post(this.baseURL + '/post/empleado', datos, options)
  }
}
