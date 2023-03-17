import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { PersonaService } from 'src/app/services/persona.service';
import { Reserva } from 'src/app/models/reserva';
import { Persona } from 'src/app/models/persona';
import { Direccion } from 'src/app/models/direccion';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Vehiculo } from 'src/app/models/vehiculo';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit { 
  mostrar:boolean = false;
  band: boolean = false;
  bandera1 = false;  
  res: boolean=false; 
  status!: number;
  tab: number = 0;
  cont = 0; 
  bases: Array<string> = []
  i=0;
  dnibase64!: string;
  base64!: string;
  reserva = new Reserva;
  titular = new Persona; 
  vehiculo!:Vehiculo;
  checkin = {}; 
  checkin1!: string; 
  acompanante = new Persona; 
  direccionTitular= new Direccion;
  persona = new Persona; 
  acompanantes: Array<Persona> = []; 


  constructor(private reservaService: ReservaService, private route: ActivatedRoute, private loginS:LoginService, private router: Router) {
    this.vehiculo = new Vehiculo();
    this.reserva = new Reserva();
    this.reserva.acompaniantes = new Array<Persona>();
    this.titular = new Persona(); 
    this.titular.titular = true; 
    this.direccionTitular = new Direccion(); 
    this.persona = new Persona();
    this.acompanante = new Persona();  
    this.route.params.subscribe(params =>{
      this.status = params['status']; 
    })
    if(this.status==1){
      if(loginS.userLoggedIn()==false){
        this.router.navigate(['login']);
      }
    }
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
    this.reserva.nroAcompanantes = this.tab;
    this.acompanantes.length = this.tab;
    for(this.i=0; this.i < this.tab; this.i++)
    {
      this.acompanante = {nombre:"", apellido: "", documento: "", documentacion:"", email:"", 
        telefono:"", titular: false, direccion:{calle:"",numero:0, ciudad:"",region:"", cpp:0, pais:""}}
      this.acompanantes[this.i] = this.acompanante; 
      this.acompanante.direccion = new Direccion();
      if(this.i == this.tab-1){
        this.bandera1 = true; 
      } else {
        this.bandera1 = false; 
      }
    }
    this.reserva.acompaniantes = this.acompanantes; 
  }

  guardarReserva(){console.log(this.reserva.horaLLegada);
    this.titular.documentacion = this.dnibase64;
    this.checkin = {"Persona": this.titular, "Vehiculo": this.vehiculo, "Reserva": this.reserva, "Direccion": this.direccionTitular}
    console.log(this.checkin)
    this.reservaService.createReserva(this.checkin).subscribe((data: any)=>{
            console.log(data);
            this.checkin1 = data.msg})
    this.band = true; 
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

  cargarDocumentacion(event: any){
    this.cont ++; 
    console.log(this.cont)
    switch (this.acompanantes.length) {
      case 1:
         this.bases[0] = event[0].base64
       break;
      case 2:
        if(this.cont == 1)
        {
          this.bases[0] = event[0].base64
          Object.freeze(this.bases[0])
          console.log(this.bases[0])
        }
        this.bases[1] = event[0].base64
        this.cont = 0; 
      break;
      case 3:
        if(this.cont == 1)
        {
          this.bases[0] = event[0].base64
          Object.freeze(this.bases[0])
          console.log(this.bases[0])
        }else if (this.cont == 2){
          this.bases[1] = event[0].base64
          Object.freeze(this.bases[1])
          console.log(this.bases[1])
        }
        this.bases[2] = event[0].base64
        this.cont = 0; 
      break;
      case 4:
        if(this.cont == 1)
        {
          this.bases[0] = event[0].base64
          Object.freeze(this.bases[0])
          console.log(this.bases[0])
        }else if (this.cont == 2){
          this.bases[1] = event[0].base64
          Object.freeze(this.bases[1])
          console.log(this.bases[1])
        }else if (this.cont == 3){
          this.bases[2] = event[0].base64
          Object.freeze(this.bases[2])
        }
        this.bases[3] = event[0].base64
        this.cont = 0; 
      break;
      case 5:
        if(this.cont == 1)
        {
          this.bases[0] = event[0].base64
          Object.freeze(this.bases[0])
          console.log(this.bases[0])
        }else if (this.cont == 2){
          this.bases[1] = event[0].base64
          Object.freeze(this.bases[1])
          console.log(this.bases[1])
        }else if (this.cont == 3){
          this.bases[2] = event[0].base64
          Object.freeze(this.bases[2])
        }else if (this.cont == 4){
          this.bases[3] = event[0].base64
          Object.freeze(this.bases[3])
        }
        this.bases[4] = event[0].base64
        this.cont = 0; 
      break;
    }
    // for(this.i=0; this.i < this.tab; this.i++)
    // {
    //   console.log(this.bases[this.i]); 
    // }
  }

  guardarAcompanantes(){
    console.log(this.bases)
    for(this.i=0; this.i < this.tab; this.i++)
    {
      this.reserva.acompaniantes[this.i].documentacion = this.bases[this.i]; 
      console.log(this.reserva.acompaniantes); 
    }
    this.res = true;              
  }

  async firmar (){
    this.titular.documentacion = this.dnibase64;
    this.checkin = {"Persona": this.titular, "Vehiculo": this.vehiculo, "Reserva": this.reserva, "Direccion": this.direccionTitular}
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

  recargar(){
    window.location.reload()
  }
  
}
