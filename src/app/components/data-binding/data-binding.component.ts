import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass'],
})
export class DataBindingComponent implements OnInit {
  name = 'Jack';
  cursoAngular = true;
  urlImage = 'http://lorempixel.com.br/500/400/?1';

  getValor(): number {
    return 1;
  }

  getCurtirCurso(): boolean {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
