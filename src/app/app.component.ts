import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [TodoService]
})
export class AppComponent {
}
