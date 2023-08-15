import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.sass'],
})
export class TwoWayBindingComponent implements OnInit {
  nome: string = 'Jack';

  pessoa: any = {
    nome: 'Jack',
    idade: '18',
  };

  constructor() {}

  ngOnInit(): void {}
}
