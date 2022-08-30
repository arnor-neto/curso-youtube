import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-directives',
  templateUrl: './first-directives.component.html',
  styleUrls: ['./first-directives.component.css'],
})
export class FirstDirectivesComponent implements OnInit {
  size = 40;
  color = 'green';

  classes = ['blue-text', 'underline'];

  constructor() {}

  ngOnInit(): void {}
}
