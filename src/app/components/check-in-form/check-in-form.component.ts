import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit {
  mostrar:boolean = false;
  tab: number = 0;

  constructor() {

  }

  ngOnInit(): void {
  }

  ocultar(): void {
    this.mostrar = false;
  }

  mostrarContenedor(): void{
    this.mostrar = true;
  }
}
