import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Joaquim';
  userDataParent = {
    email: 'Joaqui@email.com',
    role: 'Administrador',
  };
  title = 'moments';
}
