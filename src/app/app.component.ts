import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameComponent } from './pagina/game/game.component';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,UsuarioComponent,GameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hoy';
  autor="Jimmy Sanchez";
  n1:number=320;
  n2:number=0;
  resultadosuma=0;
  resultadoresta=0;
  resultadodivision=0;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.operaciones();
    
  }
  operaciones():void{
    this.resultadosuma=this.n1+this.n2;
    this.resultadoresta=this.n1-this.n2;
    
    if (this.n2!=0)
    {
      this.resultadodivision=this.n1*this.n2;
    } 
    else 
        {
          alert("Division entre 0 no se puede")

        } 
  }

}
