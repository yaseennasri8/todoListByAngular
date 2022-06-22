import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnChanges, OnInit {
  // updateTodoIndex?: number;
  taskToUpdate?:Todo 
  todos: Todo [];
  localItem: string | null; //remove and check error
  constructor() {
    this.localItem = localStorage.getItem("todos"); 
    if(this.localItem == null) {
      this.todos= [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  shouldUpdateTodo(todo: Todo) {
    // this.updateTodoIndex = this.todos.indexOf(todo); 
    this.taskToUpdate = todo;
  }

  updateTodo(todos: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
    this.localItem = localStorage.getItem("todos"); 
    if(this.localItem == null) {
      this.todos= [];
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

}
