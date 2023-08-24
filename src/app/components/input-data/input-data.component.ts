import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.sass'],
})
export class InputDataComponent implements OnInit {
  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa = () => {
    this.campoValorInput.nativeElement.value++;
  };

  decrementa = () => {
    this.campoValorInput.nativeElement.value--;
  };

  constructor() {}

  ngOnInit(): void {}
}
