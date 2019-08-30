import { Action } from '@ngrx/store';

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum TodoActionTypes {
    AddTodo = '[Todo] AddTodo',
    ToggleTodo = '[Todo] ToggleTodo',
    EditTodo = '[Todo] EditTodo',
    DeleteTodo = '[Todo] DeleteTodo',
    ToggleAll = '[Todo] ToggleAll',
    DeleteAll = '[Todo] DeleteAll'
};

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful 
 * type checking in reducer functions.
 */
export class AddTodoAction implements Action {
    readonly type = TodoActionTypes.AddTodo;

    constructor(public text: string) { }
}

export class ToggleTodoAction implements Action {
    readonly type = TodoActionTypes.ToggleTodo;

    constructor(public id: number) { }
}

export class EditTodoAction implements Action {
    readonly type = TodoActionTypes.EditTodo;

    constructor(public id: number, public text: string) { }
}

export class DeleteTodoAction implements Action {
    readonly type = TodoActionTypes.DeleteTodo;

    constructor(public id: number) { }
}

export class ToggleAllAction implements Action {
    readonly type = TodoActionTypes.ToggleAll;

    constructor(public completed: boolean) { }
}

export class DeleteAllAction implements Action {
    readonly type = TodoActionTypes.DeleteAll;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type TodoActions = AddTodoAction
    | ToggleTodoAction
    | EditTodoAction
    | DeleteTodoAction
    | ToggleAllAction
    | DeleteAllAction;
