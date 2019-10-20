import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Action } from '@ngrx/store';
import { INCREMENT, DECREMENT } from 'src/app/reducers/counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  stateActual$: any;
  constructor(private store: Store<State>) {
    this.stateActual$ = this.store.select('counter');
  }

  ngOnInit() {}

  addClick() {
    const action: Action = {
      type: INCREMENT
    };
    this.store.dispatch(action);
    console.log(INCREMENT);
  }

  subsClick() {
    const action: Action = {
      type: DECREMENT
    };
    this.store.dispatch(action);
    console.log(DECREMENT);
  }

}
