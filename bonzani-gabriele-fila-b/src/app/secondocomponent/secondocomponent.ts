import { Component } from '@angular/core';

@Component({
  selector: 'app-secondocomponent',
  imports: [],
  templateUrl: './secondocomponent.html',
  styleUrl: './secondocomponent.css',
})
export class Secondocomponent {
 bonzani: string = 'secondo'; // una variabile di tipo stringa e le assegna il valore "secondo", che sarà usata nel HTML per mostrare il nome del componente  
}
