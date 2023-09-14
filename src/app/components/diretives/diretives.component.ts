import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretives',
  templateUrl: './diretives.component.html',
  styleUrls: ['./diretives.component.sass'],
})
export class DiretivesComponent implements OnInit {
  cursos: string[] = ['Angular 10', 'Java', 'HTML', 'CSS'];

  mostrarCursos = false;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.cursos.length; i++) {
      const curso = this.cursos[i];
      
    }
  }
}
