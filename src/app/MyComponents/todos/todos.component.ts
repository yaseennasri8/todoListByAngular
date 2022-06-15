import { Component } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
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

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo) {
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  updateTodo(todo: Todo) {
    console.log("this should update:::", todo);
  }
}
