import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-component',
  templateUrl: './if-component.component.html',
  styleUrls: ['./if-component.component.css'],
})
export class IfComponentComponent implements OnInit {
  canShow: boolean = true;
  name = 'Matheus';
  constructor() {}

  ngOnInit(): void {}
}
