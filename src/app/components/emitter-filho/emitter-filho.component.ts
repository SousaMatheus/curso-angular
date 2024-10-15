import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emitter-filho',
  templateUrl: './emitter-filho.component.html',
  styleUrls: ['./emitter-filho.component.css'],
})
export class EmitterFilhoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() enviarMensagem: EventEmitter<string> = new EventEmitter<string>();

  eventEmitter() {
    this.enviarMensagem.emit('Olá Pai');
  }
}
