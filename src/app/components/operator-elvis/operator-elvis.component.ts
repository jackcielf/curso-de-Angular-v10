import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-elvis',
  templateUrl: './operator-elvis.component.html',
  styleUrls: ['./operator-elvis.component.sass']
})
export class OperatorElvisComponent implements OnInit {

  tarefa = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
