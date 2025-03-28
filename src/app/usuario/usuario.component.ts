import { Component, inject } from '@angular/core';
import { GameComponent } from '../pagina/game/game.component';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-usuario',
  imports: [GameComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent {
  storageService = inject(StorageService);
  userName = 'Jimmy';
  greet() {
    alert('!!! Hola');
  }
}
