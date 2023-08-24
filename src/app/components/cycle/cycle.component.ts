import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.sass'],
})
export class CycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() valorInicial: number = 20;

  log = (v: any) => console.log(v);


  constructor() {}

  ngOnChanges() {
    this.log('ngOnChanges');
  }
  ngOnInit() {
    this.log('ngOnInit');
  }
  ngDoCheck() {
    this.log('ngOnChanges');
  }
  AfterContentInit() {
    this.log('AfterContentInit');
  }
  AfterContentChecked() {
    this.log('AfterContentChecked');
  }
  AfterViewInit() {
    this.log('AfterViewInit');
  }
  OnDestroy() {
    this.log('OnDestroy');
  }
}
