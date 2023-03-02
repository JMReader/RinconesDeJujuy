import { Component,
  Input,
  ViewChild,
  OnInit,
  HostListener, } from '@angular/core';

@Component({
  selector: 'app-single-check',
  templateUrl: './single-check.component.html',
  styleUrls: ['./single-check.component.css']
})
export class SingleCheckComponent implements OnInit {
  desp: boolean; 
  @Input() name: string;
  @ViewChild('sigPad') sigPad: any;
  sigPadElement: any;
  context: any;
  isDrawing = false;
  img: any;

  constructor() { this.name = "", this.desp=false; }

  ngOnInit(): void {
  }

  // firma(){
  //   this.desp = true; 
  //   this.sigPadElement = this.sigPad.nativeElement;
  //   this.context = this.sigPadElement.getContext('2d');
  //   this.context.strokeStyle = '#3742fa';
  //   console.log(this.desp)
  // }

  // @HostListener('document:mouseup', ['$event'])
  // onMouseUp(e: any) {
  //   this.isDrawing = false;
  // }

  // onMouseDown(e: any) {
  //   this.isDrawing = true;
  //   const coords = this.relativeCoords(e);
  //   this.context.moveTo(coords.x, coords.y);
  // }

  // onMouseMove(e: any) {
  //   if (this.isDrawing) {
  //     const coords = this.relativeCoords(e);
  //     this.context.lineTo(coords.x, coords.y);
  //     this.context.stroke();
  //   }
  // }

  // private relativeCoords(event: any) {
  //   const bounds = event.target.getBoundingClientRect();
  //   const x = event.clientX - bounds.left;
  //   const y = event.clientY - bounds.top;
  //   return { x: x, y: y };
  // }

  // clear() {
  //   this.context.clearRect(
  //     0,
  //     0,
  //     this.sigPadElement.width,
  //     this.sigPadElement.height
  //   );
  //   this.context.beginPath();
  // }

  // save() {
  //   this.img = this.sigPadElement.toDataURL('image/png');
  //   console.log(this.img);
  // }

}
