import { Component, OnInit } from '@angular/core';
import 'zone.js';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  show: boolean = false;

  showMessage(): void {
    this.show = !this.show;
  }
}
