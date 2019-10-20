import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { RESET } from 'src/app/reducers/counter.actions';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  private readState() {
    this.store.select('counter');
  }
  onReset() {
    const action: Action = {
      type: RESET
    };

    this.store.dispatch(action);
  }

}
