import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Interfaces/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 2 },
    { name: 'Tom', type: 'Cat', age: 10 },
    { name: 'Frida', type: 'Dog', age: 5 },
    { name: 'Bob', type: 'Horse', age: 2 },
  ];

  animalProperties: string = '';
  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalProperties = `O animal ${animal.name} tem ${animal.age} ano(s)`;
  }
}
