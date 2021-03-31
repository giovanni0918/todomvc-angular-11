import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  newTodo: Todo = {} as Todo;
  TodoText = new FormControl('');
  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.newTodo = this.todosService.newTodo();
    this.TodoText = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(255),
    ]);
  }

  get todos() {
    return this.todosService.getTodos();
  }

  get completeTodos() {
    return this.todosService.getCompleteTodos();
  }

  addTodo() {
    if (this.TodoText.value.trim().length <= 2) {
      return;
    } else {
      this.newTodo.task = this.TodoText.value.trim();
      this.todosService.addTodo(this.newTodo);
      this.TodoText.setValue('');
      this.newTodo = this.todosService.newTodo();
    }
  }

  toggleComplete(todo: Todo) {
    const index = this.todosService
      .getAllTodos()
      .findIndex((record) => record.uuid === todo.uuid);

    todo.complete = !todo.complete;

    if (index !== -1) {
      this.todosService.updateTodo(todo, index);
    }
  }
}
