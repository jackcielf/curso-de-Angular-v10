import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.sass'],
})
export class FilhoComponent implements OnInit {
  @Input('nome') nomeDoCurso: string = '';
  @Input() professora: string = '';

  constructor() {}

  ngOnInit(): void {}
}
