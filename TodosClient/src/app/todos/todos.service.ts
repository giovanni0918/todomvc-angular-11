import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  todos: Todo[];

  constructor() {
    const todosStore = localStorage.getItem("todos-collection");
    this.todos = JSON.parse(todosStore || "[]");
  }

  public newTodo(): Todo {
    return {
      uuid: uuidv4(),
      task: '',
      complete: false,
      createDate: null
    };
  }

  public getAllTodos(): Todo[] {
    return this.todos;
  }

  public getTodos(): Todo[] {
    return this.todos.filter((todo) => todo.complete === false);
  }

  public getTodoById(uuid: string): Todo | undefined {
    return this.todos.find((todo) => todo.uuid === uuid);
  }

  public getCompleteTodos(): Todo[] {
    return this.todos.filter((todo) => todo.complete === true);
  }

  public addTodo(todo: Todo): Todo {
    todo.createDate = new Date();
    this.todos.push(todo);
    localStorage.setItem("todos-collection", JSON.stringify(this.todos));
    return todo;
  }

  public updateTodo(todo: Todo, index: number): Todo {
    todo.updateDate = new Date();
    this.todos[index] = todo;
    localStorage.setItem("todos-collection", JSON.stringify(this.todos));

    return todo;
  }

  public deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}
