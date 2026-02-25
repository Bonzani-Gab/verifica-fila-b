import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common'; // Importa il modulo CommonModule per poter utilizzare le direttive Angular di base come *ngIf, *ngFor
import { Quartocomponent } from './quartocomponent/quartocomponent'; // Importa il componente "Quarto" per poterlo usare nel template HTML
import { Secondocomponent } from './secondocomponent/secondocomponent';// Importa il componente "Secondo" per poterlo usare nel template HTML
import { Terzocomponent } from './terzocomponent/terzocomponent';// Importa il componente "Terzo" per poterlo usare nel template HTML

@Component({
  selector: 'app-root', // selector: nome del tag HTML del componente principale
  imports: [RouterOutlet, // Permette l'uso di <router-outlet>
     CommonModule,// Direttive Angular di base
      Quartocomponent,  // Permette l'uso di <app-quarto>
       Secondocomponent,  // Permette l'uso di <app-secondo>
        Terzocomponent], // Permette l'uso di <app-terzo>
  templateUrl: './app.html',  // Indica il file HTML associato a questo componente
  styleUrl: './app.css'   // Indica il file CSS associato a questo componente
})
export class App {
  protected readonly title = signal('bonzani-gabriele-fila-b');
    // variabile di tipo stringa e le assegna il valore "app", che sarà usata nel HTML per mostrare il nome del componente
}