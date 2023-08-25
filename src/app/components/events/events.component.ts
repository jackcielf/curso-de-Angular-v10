import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.sass'],
})
export class EventsComponent implements OnInit {
  valorAtual: any;
  valorSalvo: any;
  isMouseOver = false;

  btnClicked(): void {
    alert('Botão clicado!');
  }

  onKeyUp(e: any): void {
    // alert(e.target.value);
    console.log(e.target.value as HTMLInputElement);
    this.valorAtual = e.target.value as HTMLInputElement;
  }

  salvarValor(value: any): void {
    this.valorSalvo = value;
  }

  onMouseOverOut(): void {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() {}

  ngOnInit(): void {}
}
