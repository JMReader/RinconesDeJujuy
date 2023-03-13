import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Reserva } from 'src/app/models/reserva';
import { Persona } from 'src/app/models/persona';
import { Direccion } from 'src/app/models/direccion';

@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit { 

  URL!:string;

  mostrar:boolean = false;
  tab: number = 0;
  i=0;
  reserva = new Reserva;
  titular = new Persona; 
  checkin = {}; 
  acompanante = new Persona; 
  direccionTitular= new Direccion;
  persona = new Persona; 
  acompanantes: Array<Persona> = []; 

  constructor(private reservaService: ReservaService) {
    this.reserva = new Reserva();
    this.reserva.acompaniantes = new Array<Persona>();
    this.titular = new Persona(); 
    this.titular.titular = true; 
    this.direccionTitular = new Direccion(); 
    this.persona = new Persona();
    this.acompanante = new Persona();
  }

  ngOnInit(): void {
  }

  ocultar(): void {
    this.mostrar = false;
  }

  mostrarContenedor(): void{
    this.mostrar = true;
  }

  mostrarAcompanantes(){ 
    this.acompanantes.length = this.tab;
    for(this.i=0; this.i < this.tab; this.i++)
    {
      this.acompanantes[this.i] = this.acompanante; 
      this.acompanante = {nombre:"", apellido: "", documento: "", documentacion:"", email:"", 
        telefono:"", titular: false, direccion:{calle:"",numero:0, ciudad:"",region:"", cpp:0, pais:""}}
      this.acompanante.direccion = new Direccion();
    }
    this.reserva.acompaniantes = this.acompanantes; 

    console.log(this.acompanantes)
  }

  guardarReserva(){
    // this.reserva.titular = this.titular; 
    this.checkin = {"Persona": this.titular, "Reserva": this.reserva, "Direccion": this.direccionTitular}
    console.log(this.checkin)
    this.reservaService.createReserva(this.checkin).subscribe((data: any)=>{
            console.log(data);})
    console.log(this.reserva); 
  }

  // copiarRuta() {
  //   this.URL = window.location.href;
  //   //this.reservaService.actualizarDatosCompartidos(this.URL);
  //   this.reservaService.establecerValor(this.URL);
  //   console.log(this.URL, "copiarRuta");
  // }

  // getAbsolutePath() {
  //   var loc = window.location;
  //   var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
  //   return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
  // } //incluye el pathname y el dominio

}
