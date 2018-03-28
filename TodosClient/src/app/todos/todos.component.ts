import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { Todo } from './todo';
import * as uuidv4 from 'uuid/v4';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {

  newTodo: Todo;
  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.newTodo = this.todosService.newTodo();
  }

  get todos() {
    return this.todosService.getTodos();
  }

  get completeTodos() {
    return this.todosService.getCompleteTodos();
  }

  addTodo() {
    this.todosService.addTodo(this.newTodo);
    this.newTodo = this.todosService.newTodo();
  }

}
