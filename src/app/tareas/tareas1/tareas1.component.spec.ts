import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tareas1Component } from './tareas1.component';

describe('Tareas1Component', () => {
  let component: Tareas1Component;
  let fixture: ComponentFixture<Tareas1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tareas1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tareas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
