import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent{
  todos?: Todo[];
  loacalItem?: string | null;
  sno?: number;
  title?:string;
  desc?:string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
  constructor() {   }

  onSubmit(submit: NgForm) {
    this.loacalItem = localStorage.getItem('todos');
    if(this.loacalItem === null) {
      this.todos = [];
    } else
    this.todos = JSON.parse(this.loacalItem);
    const todo = {
      sno: this.todos?.length,
      title: this.title,
      desc: this.desc,
      active: true
    }

    this.todoAdd.emit(todo);
    submit.reset();
  }

}
