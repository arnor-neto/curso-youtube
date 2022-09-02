import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css'],
})
export class ExercisesComponent implements OnInit {
  userData = {
    name: 'John',
    email: 'john@doe.com',
    role: 'admin',
  };

  constructor() {}

  ngOnInit(): void {}
}
