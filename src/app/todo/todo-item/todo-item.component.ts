import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Todo } from '../model/todo.model';
import { AppState } from 'src/app/app.reducers';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @ViewChild('txtInputForm', { static: true }) txtInputForm: ElementRef;

  checkField: FormControl;
  txtInput: FormControl;
  edited: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.checkField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }

  editing() {
    this.edited = true;

    setTimeout(() => {
      this.txtInputForm.nativeElement.select();
    }, 1);
  }

  endEditing() {
    if (this.txtInput.invalid) {
      return;
    }
    if (this.txtInput.value === this.todo.text) {
      return;
    }
    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
    this.edited = false;
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }

}
