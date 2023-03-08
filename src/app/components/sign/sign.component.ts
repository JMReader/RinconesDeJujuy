import {
  Component,
  ViewChild,
} from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';


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

  constructor() { }

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 2); 
    this.signaturePad.clear(); 
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
