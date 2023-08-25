import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.sass'],
})
export class ArrayComponent implements OnInit {
  curso = 'Angular v10';

  cursos = ['Java', 'Angular', 'JavaScript', 'HTML/CSS'];

  constructor() {}

  ngOnInit(): void {}
}
