import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input()todo : Todo | any; 
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
  }
  update(todo: Todo){
    this.todoUpdate.emit(todo);
  }
}
