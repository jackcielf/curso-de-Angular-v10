import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-filho',
  templateUrl: './output-filho.component.html',
  styleUrls: ['./output-filho.component.sass'],
})
export class OutputFilhoComponent implements OnInit {
  @Input() valor = 0;
  @Output() mudouValor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  incrementa = () => {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  };

  decrementa = () => {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  };
}
