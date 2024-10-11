import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  color = 'red';
  font = 'Arial';

  style = ['green-title', 'small-title', 'underline-title'];

  constructor() {}

  ngOnInit(): void {}
}
