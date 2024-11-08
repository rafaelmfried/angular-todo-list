import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router'; -> Retirei do import e funcionou, tem haver com o app.config e app.routers ?
import { TodoList } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoList],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-todo-list';
}
