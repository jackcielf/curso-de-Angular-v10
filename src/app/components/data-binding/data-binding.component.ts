import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.sass'],
})
export class DataBindingComponent implements OnInit {
  name: string = 'Jack';
  cursoAngular: boolean = true;
  urlImage: string = 'http://lorempixel.com.br/500/400/?1';

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  constructor() {}

  ngOnInit(): void {}
}
