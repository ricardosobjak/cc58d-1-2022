import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
    selector: 'app-meu-primeiro',
    /*template: `<b>Primeiro componente</b>
        <p>Feito por Ricardo Sobjak<p>`,*/
    templateUrl: './meu-primeiro.component.html',
    styles: [ `.destaque { 
                    color: blue; 
                    background-color: yellow;
            }`]
})
export class MeuPrimeiroComponent {
    nome: string =  'Juca';

    hobbies: string[] = [
        "Patinação no gelo",
        "Esquiar nos alpes suíços",
        "Nadar..."
    ];

    destacar: boolean = false;

    public digaOi() {
        alert("Oi " + this.nome);
    }

    public mudarDestaque = () => {
        this.destacar = !this.destacar;
        console.log(this.destacar);
    }
}