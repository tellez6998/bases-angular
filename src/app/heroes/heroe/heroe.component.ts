import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class  HeroeComponent {
    nombre: string = 'Iron Man';
    edad: number = 45;

    get nombrecapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`
    }

    CambiarNombre():void{
        this.nombre='Spider Man'
    }

    CambiarEdad():void{
        this.edad = 30;
    }
}