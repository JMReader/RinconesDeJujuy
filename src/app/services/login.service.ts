import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }
  getToken():string{
    if(sessionStorage.getItem("token")!=null){
      return sessionStorage.getItem("token")!;
    }else {
      return "";
    }
  }
  postLogin(user:string, passw:string): Observable<any>{
    const datos = {
      "usuario":user,
      "password": passw
    }
    const options = {
      method: "POST",
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      })
    }
    return this._http.post('http://localhost:3000/Persona/login', datos, options);
  }
  public userLoggedIn(){ 
    var resultado = false;
     var usuario = sessionStorage.getItem("_id"); 
     if(usuario!=null){ 
      resultado = true; 
    }
      return resultado }
  public logOut(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("id");
  }
}
