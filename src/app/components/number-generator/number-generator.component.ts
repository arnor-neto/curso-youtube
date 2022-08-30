import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.css'],
})
export class NumberGeneratorComponent implements OnInit {
  @Output() changeNumber: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.changeNumber.emit(Math.round(Math.random() * 100));
  }
}
