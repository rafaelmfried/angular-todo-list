import { Component } from '@angular/core';
import { TodoService, Todo } from './todo.service';
import { FormsModule } from '@angular/forms';
import { TodoListItem } from '../todo-list-item/todo-list-item.component';

@Component({
  standalone: true,
  selector: 'todo-list',
  imports: [FormsModule, TodoListItem],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoList {
  newTodoTitle = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos();
    }
    console.log(this.todos);
  }

  toggleTodoCompletion(id: number): void {
    this.todoService.toggleTodoCompletion(id);
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
