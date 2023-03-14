import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from 'src/app/models/reserva';
import { ReservaService } from 'src/app/services/reserva.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-reserva-details',
  templateUrl: './reserva-details.component.html',
  styleUrls: ['./reserva-details.component.css']
})
export class ReservaDetailsComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, reservaServices: ReservaService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.url.join('/'));
    this.route.params.subscribe(params =>{
      console.log(params['id'])
    })
  }
  

}
