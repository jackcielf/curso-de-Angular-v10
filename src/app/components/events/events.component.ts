import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass'],
})
export class EventsComponent implements OnInit {
  valorAtual: any;
  valorSalvo: any;
  isMouseOver: boolean = false;

  btnClicked() {
    alert('Botão clicado!');
  }

  onKeyUp(e: any) {
    // alert(e.target.value);
    console.log((<HTMLInputElement>e.target).value);
    this.valorAtual = (<HTMLInputElement>e.target).value;
  }

  salvarValor(value: any) {
    this.valorSalvo = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}

  ngOnInit(): void {}
}
