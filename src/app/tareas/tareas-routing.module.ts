import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TareasComponent } from './tareas.component';
import { Tareas1Component } from './tareas1/tareas1.component';
import { Tareas2Component } from './tareas2/tareas2.component';

const routes: Routes = [
  {
    path: '',
    component: TareasComponent,
    children: [
      { path: 'tareas1', component: Tareas1Component },
      { path: 'tareas2', component: Tareas2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TareasRoutingModule { }
