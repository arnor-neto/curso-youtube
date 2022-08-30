import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userData = {
    name: 'John',
    email: 'john@doe.com',
    role: 'admin',
  };
  title = 'curso-youtube';
}
