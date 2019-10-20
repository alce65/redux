import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tareas2Component } from './tareas2.component';

describe('Tareas2Component', () => {
  let component: Tareas2Component;
  let fixture: ComponentFixture<Tareas2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tareas2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tareas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
