import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store} from '@ngrx/store'
import { Tarea } from 'src/app/reducers/tareas.model';
import { AppState } from 'src/app/reducers';
import { AddTareaAcction } from 'src/app/reducers/tareas.actions';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent implements OnInit {

  tarea: Tarea;
  newTarea: FormControl;
  constructor(private store: Store<AppState>) { 
    // Si quisiera el array de tareas
    this.store.select('tareas')
  }

  ngOnInit() {
    this.newTarea = new FormControl('', [Validators.required]);
    this.newTarea.valueChanges.subscribe(
      data => this.tarea = {nombre: data, isComplete: false});
  }

  addTarea() {
    console.log(this.tarea);
    const action = AddTareaAcction({payload: this.tarea });
    this.store.dispatch(action);
    this.newTarea.setValue('');
  }

}
