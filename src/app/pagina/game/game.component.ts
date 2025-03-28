import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  games = [
    {
      id: 1,
      name: 'Fifa 2025',
    },
    {
      id: 2,
      name: 'Motos locas',
    },
    {
      id: 3,
      name: 'Carros',
    },
  ];

  counter = 0;

  restar() {
    this.counter--;
  }

  sumar() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
  }
}
