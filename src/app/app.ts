import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MonPremierComposant } from './mon-premier-composant/mon-premier-composant';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MonPremierComposant],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Test_Angular');
  prenom: string = 'John';
  monAppareil : string = 'Telephones';

  recoitProduit(produit:string){
    alert('Vous avez sélectionné : ' + produit);
  }
}
