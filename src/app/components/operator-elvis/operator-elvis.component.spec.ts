import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorElvisComponent } from './operator-elvis.component';

describe('OperatorElvisComponent', () => {
  let component: OperatorElvisComponent;
  let fixture: ComponentFixture<OperatorElvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatorElvisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorElvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
