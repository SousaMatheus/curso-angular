import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-pai',
  templateUrl: './host-pai.component.html',
  styleUrls: ['./host-pai.component.css'],
})
export class HostPaiComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  mensagem: string = '';
  escutarMensagem(msg: string) {
    this.mensagem = msg;
  }
}
