import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrls: ['./pipe-operator.component.css'],
})
export class PipeOperatorComponent implements OnInit {
  today = new Date();
  credit = 55.78;
  constructor() {}

  ngOnInit(): void {}
}
