import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `<app-user-list></app-user-list>`
})
export class AppComponent {
  title = 'angular-task';
}