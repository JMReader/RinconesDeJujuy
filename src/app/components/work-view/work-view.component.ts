import { Component, OnInit } from '@angular/core';
import { CheckIN } from 'src/app/models/check-in';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingleCheckComponent } from '../single-check/single-check.component';

@Component({
  selector: 'app-work-view',
  templateUrl: './work-view.component.html',
  styleUrls: ['./work-view.component.css']
})
export class WorkViewComponent implements OnInit {
  Registros: CheckIN[] = new Array();
   muestra: CheckIN[] = new Array();
  constructor(private modalService: NgbModal) { 
    
  }

  ngOnInit(): void {
    
    let auxiliar: CheckIN = new CheckIN;
    auxiliar.DNI= 446485369;
    auxiliar.FechaLLegada = new Date();
    auxiliar.FechaSalida = new Date();
    auxiliar.FotoDni= 'https://cdn3.vectorstock.com/i/1000x1000/30/97/flat-business-man-user-profile-avatar-icon-vector-4333097.jpg';
    auxiliar.apellido= "coro";
    auxiliar.nombre="juan";
    auxiliar.email="juanmcoro2003@gmail.com";
    auxiliar.notas="lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor sit amet, consectetur adipiscing"; 
    for ( let index = 0; index < 25; index++) {
      this.Registros.push(auxiliar);
    }
    this.muestra = this.Registros.slice(0,7);
    console.log(this.muestra);
  }
  open() {
		const modalRef = this.modalService.open(SingleCheckComponent);
		modalRef.componentInstance.name = 'World';
	}
}
