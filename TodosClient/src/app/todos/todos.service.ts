import { Injectable } from '@angular/core';
import { Todo } from './todo';
import * as uuidv4 from 'uuid/v4';

@Injectable()
export class TodosService {

  todos: Todo[];

  constructor() {
    this.todos = [];
  }

  public newTodo(): Todo {
    return {
      uuid: uuidv4(),
      task: '',
      complete: false,
      createDate: null
    };
  }

  public getTodos(): Todo[] {
    return this.todos.filter((todo) => todo.complete === false);
  }

  public getTodoById(uuid: string): Todo {
    return this.todos.find((todo) => todo.uuid === uuid);
  }

  public getCompleteTodos(): Todo[] {
    return this.todos.filter((todo) => todo.complete === true);
  }

  public addTodo(todo: Todo): Todo {
    todo.createDate = new Date();
    this.todos.push(todo);
    return todo;
  }

  public updateTodo(todo: Todo, index: number): Todo {
    todo.updateDate = new Date();
    this.todos[index] = todo;
    return todo;
  }

  public deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}
