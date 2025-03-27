import { Component } from '@angular/core';
import { GameComponent } from '../pagina/game/game.component';

@Component({
  selector: 'app-usuario',
  imports: [GameComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  userName="Jimmy";
  login=false;
  greet(){
    alert("!!! Hola" );    
  }

}
