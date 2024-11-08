import { Component } from "@angular/core";
import { TodoListItem } from "../todo-list-item/todo-list-item.component";

@Component({
  standalone: true,
  selector: 'todo-list',
  imports: [TodoListItem],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoList {}
