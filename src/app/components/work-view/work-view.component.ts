import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SingleCheckComponent } from '../single-check/single-check.component';
import { ReservaService } from 'src/app/services/reserva.service';
import { Reserva } from 'src/app/models/reserva';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-work-view',
  templateUrl: './work-view.component.html',
  styleUrls: ['./work-view.component.css']
})
export class WorkViewComponent implements OnInit {

  URL:string = "http://localhost:4200/check-in";

  constructor(private modalService: NgbModal, private reservaService: ReservaService, private _snackBar: MatSnackBar) { 
    // this.URL = this.reservaService.url;
    // console.log(this.URL, "url de los datos");
  }

  ngOnInit(): void {
  }

  tablaSeleccion(reserva: Reserva): void {
    console.log(reserva, "tablaSeleccion");
    const modalRef = this.modalService.open(SingleCheckComponent);
    modalRef.componentInstance.pData = reserva;
  }

  openSnackBar(){
    const config = new MatSnackBarConfig();
    config.duration = 1500; // duración en milisegundos
    this._snackBar.open('Link copiado con éxito', '', config );
  }

  

}
