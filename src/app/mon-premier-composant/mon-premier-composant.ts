import { Component, Input, Output ,EventEmitter} from '@angular/core';
@Component({
  selector: 'app-mon-premier-composant',
  imports: [],
  templateUrl: './mon-premier-composant.html',
  styleUrl: './mon-premier-composant.css',
})
export class MonPremierComposant 
{
  @Input() NomProduit:string = '';

  @Output() produitChoisi = new EventEmitter<string>();
  envoyerParentMessage(){
    this.produitChoisi.emit(this.NomProduit);
  }
}
