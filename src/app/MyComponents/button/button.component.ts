import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddTodoComponent } from '../add-todo/add-todo.component';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() shouldUpdate: EventEmitter<boolean> = new EventEmitter();
  @Input() buttonTitle?: string;
  @Input() controls ?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if(this.buttonTitle === 'Update') AddTodoComponent.isEdit = true;
    else AddTodoComponent.isEdit = false;
  }

}
