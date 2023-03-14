import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Reserva } from 'src/app/models/reserva';
import { Persona } from 'src/app/models/persona';
import { Direccion } from 'src/app/models/direccion';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Vehiculo } from 'src/app/models/vehiculo';


@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit { 
  mostrar:boolean = false;
  status!: number;
  tab: number = 0;
  i=0;
  dnibase64!: string;
  reserva = new Reserva;
  titular = new Persona; 
  vehiculo!:Vehiculo;
  checkin = {}; 
  checkin1!: string; 
  acompanante = new Persona; 
  direccionTitular= new Direccion;
  persona = new Persona; 
  acompanantes: Array<Persona> = []; 


  constructor(private reservaService: ReservaService, private route: ActivatedRoute, private router: Router) {
    this.vehiculo = new Vehiculo();
    this.reserva = new Reserva();
    this.reserva.acompaniantes = new Array<Persona>();
    this.titular = new Persona(); 
    this.titular.titular = true; 
    this.direccionTitular = new Direccion(); 
    this.persona = new Persona();

    this.acompanante = new Persona();  

  }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.status = params['status']; 
      console.log(params['status'])
    })
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

  guardarReserva(){console.log(this.reserva.horaLLegada);
    this.titular.documentacion = this.dnibase64;
    this.checkin = {"Persona": this.titular, "Vehiculo": this.vehiculo, "Reserva": this.reserva, "Direccion": this.direccionTitular}
    console.log(this.checkin)
    this.reservaService.createReserva(this.checkin).subscribe((data: any)=>{
            console.log(data);
            this.checkin1 = data.msg})
  }


  onFileChanges(event: any) {
    const file: File = event.target.files[0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.dnibase64 = reader.result as string;
        console.log(this.dnibase64);
      };
    }
  }

  async firmar (){
    this.guardarReserva();
    await new Promise(f => setTimeout(f, 80)); 
    this.reservaService.createReserva(this.checkin).subscribe((data: any)=>{
      this.checkin1 = data.msg
      console.log(this.checkin1);
      this.reservaService.getReserva(this.checkin1).subscribe(
                async (result) => {
                  console.log(this.checkin1);
                   await new Promise(f => setTimeout(f, 100));
                   this.router.navigate(['sign/', this.checkin1]);
              }
              )
    })
  }
}
