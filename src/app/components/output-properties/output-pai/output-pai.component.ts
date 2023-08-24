import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-pai',
  templateUrl: './output-pai.component.html',
  styleUrls: ['./output-pai.component.sass'],
})
export class OutputPaiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onMudouValor(e) {
    console.log(e.novoValor);
  }
}
