import { Todo } from './todo/model/todo.model';
import { ActionReducerMap } from '@ngrx/store';

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';

import { ValidFilters } from './filter/filter.actions';


export interface AppState {
    todos: Todo[];
    filter: ValidFilters;
}

export const AppReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filter: fromFilter.filterReducer
}