import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Direccion } from 'src/app/models/direccion';
import { Empleado } from 'src/app/models/empleado';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-root-view',
  templateUrl: './root-view.component.html',
  styleUrls: ['./root-view.component.css']
})
export class RootViewComponent implements OnInit {

  empleado!:Persona;
  user!:Empleado;
  direccionEmpleado!:Direccion;
  empleadoNuevo = {}; 
  
  constructor(private personaService: PersonaService) {
    this.empleado = new Persona();
    this.empleado.titular = false;
    this.direccionEmpleado = new Direccion();
    this.user = new Empleado();
  }

  ngOnInit(): void {
  }

  obtenerEmpleados() {
    this.personaService.getEmpleados().subscribe(
      (result) => {
        console.log(result, "Empleados");
      },
      error => { alert("Error en la petición"); }
    )
  }

  guardarEmpleado(){
    //this.personaService.createEmpleado(this.empleado).subscribe()
    this.empleadoNuevo = {"Persona": this.empleado, "Direccion": this.direccionEmpleado, "Empleado": this.user}
    console.log(this.empleadoNuevo,"empleado nuevo")
    this.personaService.createEmpleado(this.empleadoNuevo).subscribe((data: any)=>{
            console.log(data);
          })
  }

}
