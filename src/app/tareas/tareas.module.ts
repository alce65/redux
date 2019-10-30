import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms'

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { MenuComponent } from './menu/menu.component';
import { Tareas1Component } from './tareas1/tareas1.component';
import { Tareas2Component } from './tareas2/tareas2.component';
import { NewTareaComponent } from './new-tarea/new-tarea.component';
import { TareaComponent } from './tarea/tarea.component';


@NgModule({
  declarations: [TareasComponent, MenuComponent, Tareas1Component, Tareas2Component, NewTareaComponent, TareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
