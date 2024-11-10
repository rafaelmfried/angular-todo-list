import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list/todo.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'todo-list-item',
  imports: [CommonModule], //NgClass
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItem {
  @Input() todo!: Todo;
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onToggleCompletion(): void {
    this.toggle.emit(this.todo.id);
  }

  onRemove(): void {
    this.remove.emit(this.todo.id);
  }
}
