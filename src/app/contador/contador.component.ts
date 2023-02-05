
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

        <h1> {{ title }} </h1>
        <h3>La base es: {{base}} </h3> <br>
        <button (click)=" acumular(base)"> + 5 </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(-base)"> - 5 </button>

    `
})

export class ContadorComponent{
    public title:string = 'Contador App';

    numero: number = 10;
  
    base: number = 5;
  
    acumular( valor: number){
  
      this.numero += valor;
  
    }
    
}