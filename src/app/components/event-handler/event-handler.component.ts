import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-handler',
  templateUrl: './event-handler.component.html',
  styleUrls: ['./event-handler.component.css'],
})
export class EventHandlerComponent implements OnInit {
  currentNumber: number = -1;

  constructor() {}

  ngOnInit(): void {}

  onChangeNumber(newNumber: number) {
    this.currentNumber = newNumber;
  }
}
