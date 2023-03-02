import {
  Component,
  Input,
  ViewChild,
  OnInit,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  @Input() name: string;
  @ViewChild('sigPad') sigPad: any;
  desp = false; 
  conf = false; 
  sigPadElement: any;
  context: any;
  isDrawing = false;
  img: any;
  i: number; 
  router: any;
  constructor() { this.name = '', this.i=0}

  ngOnInit() {

  }

  firmar(){
    this.sigPadElement = this.sigPad.nativeElement;
    this.context = this.sigPadElement.getContext('2d');
    this.context.strokeStyle = '#3742fa';
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(e: any) {
    this.firmar(); 
    this.isDrawing = false;
  }

  onMouseDown(e: any) {
    this.firmar(); 
    this.isDrawing = true;
    const coords = this.relativeCoords(e);
    this.context.moveTo(coords.x, coords.y);
  }

  onMouseMove(e: any) {
    this.firmar(); 
    if (this.isDrawing) {
      const coords = this.relativeCoords(e);
      this.context.lineTo(coords.x, coords.y);
      this.context.stroke();
    }
  }

  private relativeCoords(event: any) {
    const bounds = event.target.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    return { x: x, y: y };
  }

  clear() {
    this.context.clearRect(
      0,
      0,
      this.sigPadElement.width,
      this.sigPadElement.height
    );
    this.context.beginPath();
  }

  save() {
    this.desp = true; 
    this.img = this.sigPadElement.toDataURL('image/png');
    console.log(this.img);
    this.conf=true; 
  }

}
