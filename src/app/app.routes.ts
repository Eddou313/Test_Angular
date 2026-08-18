import { Routes } from '@angular/router';
import { MonPremierComposant } from './mon-premier-composant/mon-premier-composant';

export const routes: Routes = [
  // Route par défaut (quand l'URL est vide)
  { path: '', redirectTo: 'produit', pathMatch: 'full' },

  // Route vers notre composant
  { path: 'produit', component: MonPremierComposant},

];