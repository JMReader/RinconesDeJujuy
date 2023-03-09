import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { SingleCheckComponent } from '../single-check/single-check.component';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  displayedColumns: string[] = ['Titular', 'NomApe', 'fechaLlegada', 'fechaSalida', "acciones"];
  dataSource = new MatTableDataSource<Reserva>([]);

  reservas: Array<Reserva> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  searchKey!: string;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private reservaService: ReservaService,
    private router: Router, private modalService: NgbModal) {

  }

  ngOnInit(): void {
    this.obtenerReservas();
    //  console.log(this.reservas, "reservas");
    //  this.dataSource.data = this.reservas;
    //  console.log(this.dataSource.data, "data");

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    
    console.log(this.dataSource.data, "filter")
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }


  open() {
		const modalRef = this.modalService.open(SingleCheckComponent);
		modalRef.componentInstance.name = 'World';
	}

  async obtenerReservas() {
    await new Promise(f => setTimeout(f, 10));
    this.reservaService.getReservas().subscribe(
      (result) => {
        this.reservas = result.msg;
        this.dataSource.data = this.reservas;
        console.log(this.dataSource.data, "data");
      },
      error => { alert("Error en la petición"); }
    )
  }

}
