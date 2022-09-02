import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/interfaces/Animal';

@Component({
  selector: 'app-animal-card',
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.css'],
})
export class AnimalCardComponent implements OnInit {
  @Input() animal!: Animal;
  @Output() selectAnimal: EventEmitter<Animal> = new EventEmitter();
  @Output() deleteAnimal: EventEmitter<Animal> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelect() {
    this.selectAnimal.emit(this.animal);
  }

  onDelete(): void {
    this.deleteAnimal.emit(this.animal);
  }
}
