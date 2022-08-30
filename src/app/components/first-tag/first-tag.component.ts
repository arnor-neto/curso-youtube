import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-tag',
  templateUrl: './first-tag.component.html',
  styleUrls: ['./first-tag.component.css'],
})
export class FirstTagComponent implements OnInit {
  name: string = 'Arnor';
  age: number = 22;
  job: string = 'Desenvolvedor';
  hobbies: string[] = ['Jogar', 'Programar', 'Assistir'];
  car = { name: 'kwid', year: 2019, color: 'preto' };

  constructor() {}

  ngOnInit(): void {}
}
