import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnChanges {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @Output() todoUpdate: EventEmitter<Todo[]> = new EventEmitter();
  @Input() updateTodo?: Todo;
  static isEdit: boolean = false;
  todos?: Todo[];
  loacalItem?: string | null;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.addTodoForm.controls.title.setValue(this.updateTodo?.title);
    this.addTodoForm.controls.desc.setValue(this.updateTodo?.desc);
  }

  addTodoForm = new FormGroup({
    title: new FormControl('', [
      Validators.required
    ]),
    desc: new FormControl('', [
      Validators.required
    ])
  })

  onSubmit(submit: any) {
    this.loacalItem = localStorage.getItem('todos');
    if (this.loacalItem === null) {
      this.todos = [];
    } else
      this.todos = JSON.parse(this.loacalItem);
    //==============================Update todo=========================  
    if (AddTodoComponent.isEdit) {
       this.todos = this.todos?.map(obj => {
        if (obj.sno === this.updateTodo?.sno) {
          return { ...obj, title: this.addTodoForm.controls.title.value, desc: this.addTodoForm.controls.desc.value }
        }
        return obj;
      })
      this.todoUpdate.emit(this.todos);
      submit.reset();
    } 
  //============================Add todos========================
    else {
      const todo = {
        sno: this.todos?.length,
        title: this.addTodoForm.controls.title.value,
        desc: this.addTodoForm.controls.desc.value,
        active: true
      }
      this.todoAdd.emit(todo);
      submit.reset();
    }
  }
}