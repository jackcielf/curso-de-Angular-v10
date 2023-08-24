import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPaiComponent } from './output-pai.component';

describe('OutputPaiComponent', () => {
  let component: OutputPaiComponent;
  let fixture: ComponentFixture<OutputPaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputPaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputPaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
