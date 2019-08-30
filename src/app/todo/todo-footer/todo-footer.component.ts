import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFilter from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';
import { AppState } from 'src/app/app.reducers';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  actives: number;

  validFilters: fromFilter.ValidFilters[] = ['All', 'Active', 'Completed'];
  currentFilter: fromFilter.ValidFilters;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe((state) => {
      this.countActives(state.todos);
      this.currentFilter = state.filter;
    });
  }

  changeFilter(newFilter: fromFilter.ValidFilters) {
    const action = new fromFilter.SetFilterAction(newFilter);
    this.store.dispatch(action);
  }

  countActives(todos: Todo[]) {
    this.actives = todos.filter(todo => !todo.completed).length;
  }

  deleteAll() {
    const action = new fromTodo.DeleteAllAction();
    this.store.dispatch(action);
  }
}
