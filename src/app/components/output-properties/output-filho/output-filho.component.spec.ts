import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputFilhoComponent } from './output-filho.component';

describe('OutputFilhoComponent', () => {
  let component: OutputFilhoComponent;
  let fixture: ComponentFixture<OutputFilhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputFilhoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputFilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
