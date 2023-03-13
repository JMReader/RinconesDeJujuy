import {
  Component,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import { ReservaService } from 'src/app/services/reserva.service';


@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent {
  title = 'prueba';
  signatureImg!: string;
  @ViewChild(SignaturePad) signaturePad!: SignaturePad;
  conf = false; 

  signaturePadOptions: Object = { 
    'minWidth': 2,
    'canvasWidth': 350,
    'canvasHeight': 200
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private reservaService: ReservaService) { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); 
    this.signaturePad.clear(); 
  }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params =>{
    //   this.reservaService.getReserva(params['id']).subscribe(
    //     (result) => {
    //       // this.pasaje = new Pasaje();
    //       // Object.assign(this.pasaje, element)
    //       console.log(result, "resultado y element");
    //   }
    //   )
    // })
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    this.conf=true; 
  }

}
