import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.sass'],
})
export class CycleComponent implements OnInit {
  @Input() valorInicial = 20;

  log = (v: any) => console.log(v);

  constructor() {}

  ngOnInit(): void {
    this.log('ngOnInit');
  }
  /*
  AfterContentInit(): void {
    this.log('AfterContentInit');
  }
  AfterContentChecked(): void {
    this.log('AfterContentChecked');
  }
  AfterViewInit(): void {
    this.log('AfterViewInit');
  }
  OnDestroy(): void {
    this.log('OnDestroy');
  }
  */
}
