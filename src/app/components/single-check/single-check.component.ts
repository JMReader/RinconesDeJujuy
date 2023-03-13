import { Component,
  Input,
  ViewChild,
  OnInit,
  HostListener, } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Persona } from 'src/app/models/persona';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-single-check',
  templateUrl: './single-check.component.html',
  styleUrls: ['./single-check.component.css']
})
export class SingleCheckComponent implements OnInit {
  @Input() pData: any;
  
  @ViewChild('sigPad') sigPad: any;
  sigPadElement: any;
  context: any;
  isDrawing = false;
  img: any;

  acomp: Array<Persona> = [];
  reserva: Array<Reserva> = [];

  constructor(private router: Router, private modalService: NgbModal) {
    this.asig();
  }

  //dentro del constructor va un (id:string)

  ngOnInit(): void {
  }

  async asig(){
    await new Promise(f => setTimeout(f, 10));
    this.acomp = this.pData.acompanantes;
    console.log(this.acomp, 'acompanantes');
  }

  firmarReserva(reserva: Reserva): void {
    this.router.navigate(['sign', reserva._id]);
    console.log(reserva._id)
    this.modalService.dismissAll(SingleCheckComponent);
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
