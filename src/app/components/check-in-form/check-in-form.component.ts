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
  mostrar:boolean = false;
  tab: number = 0;
  i=0;
  reserva = new Reserva;
  titular = new Persona; 
  acompanante = new Persona; 
  direccionTitular= new Direccion;
  persona = new Persona; 
  acompanantes: Array<Persona> = []; 

  constructor(private reservaService: ReservaService) {
    this.reserva = new Reserva();
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
    }
    this.reserva.acompanantes = this.acompanantes; 

    console.log(this.acompanantes)
  }

  guardarReserva(){
    this.titular.direccion = this.direccionTitular; 
    this.reserva.titular = this.titular; 
    this.reservaService.createReserva(this.reserva).subscribe((data: any)=>{
            console.log(data);})
    console.log(this.reserva); 
  }
}
