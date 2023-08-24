import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pai',
  templateUrl: './pai.component.html',
  styleUrls: ['./pai.component.sass'],
})
export class PaiComponent implements OnInit {
  nomeDoCurso: string = 'Angular';
  professora: string = 'Loiane';

  constructor() {}

  ngOnInit(): void {}
}
