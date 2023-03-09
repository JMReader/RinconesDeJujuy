import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  displayedColumns: string[] = ['DNI', 'Llegada', 'Salida', 'NomApe', "acciones"];
  dataSource = new MatTableDataSource<Reserva>([]);

  reservas: Array<Reserva> = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(private reservaService:ReservaService,
    private router: Router) {
      this.obtenerReservas();
     }

  ngOnInit(): void {
    this.dataSource.data = this.reservas;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

   getRecord()
  {
    alert("Pasa la info");
  }

  obtenerReservas() {
    this.reservaService.getReservas().subscribe(
      (result) => {
        console.log(result);
        this.reservas = result;
        console.log(this.reservas, 'pasajes cargados')
      },
      error => { alert("Error en la petición"); }
    )
  }

}
