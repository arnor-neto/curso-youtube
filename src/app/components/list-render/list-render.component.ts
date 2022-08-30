import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 6 },
    { name: 'Tom', type: 'Cat', age: 4 },
    { name: 'Frida', type: 'Dog', age: 8 },
    { name: 'Bob', type: 'Horse', age: 14 },
  ];

  selectedAnimal: Animal | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}

  handleSelectAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }
}
