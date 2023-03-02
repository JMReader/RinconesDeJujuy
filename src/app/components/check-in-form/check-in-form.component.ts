import { Component, OnInit } from '@angular/core';
import { CheckIN } from 'src/app/models/check-in';
@Component({
  selector: 'app-check-in-form',
  templateUrl: './check-in-form.component.html',
  styleUrls: ['./check-in-form.component.css']
})
export class CheckInFormComponent implements OnInit {
  check!: CheckIN;
  mostrar:boolean = false;
  
  constructor() {
    this.check = new CheckIN();
  }

  ngOnInit(): void {
  }

  mostrar1(): void {
    this.mostrar = true;
  }

  ocultar(): void {
    this.mostrar = false;
  }
}
