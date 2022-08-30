import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operators',
  templateUrl: './pipe-operators.component.html',
  styleUrls: ['./pipe-operators.component.css'],
})
export class PipeOperatorsComponent implements OnInit {
  someText = 'This is a text';
  today = new Date();

  constructor() {}

  ngOnInit(): void {}
}
