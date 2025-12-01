import { Injectable } from '@angular/core';
import { Personne } from '../model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauches: Personne[] = [];

  constructor() { }

  getEmbauches(): Personne[] {
    return this.embauches;
  }

  getEmbaucheById(id: number): Personne | undefined {
    return this.embauches.find(personne => personne.id === id);
  }

  addEmbauche(personne: Personne): boolean {
    const alreadyHired = this.embauches.find(p => p.id === personne.id);
    
    if (alreadyHired) {
      console.warn(`${personne.firstname} est déjà embauché(e)`);
      return false;
    }
    
    this.embauches.push(personne);
    console.log(`${personne.firstname} a été embauché(e)`);
    return true;
  }

  removeEmbauche(id: number): boolean {
    const index = this.embauches.findIndex(p => p.id === id);
    
    if (index > -1) {
      this.embauches.splice(index, 1);
      console.log(`Embauche supprimée pour l'ID: ${id}`);
      return true;
    }
    
    console.warn(`Aucun embauche trouvé pour l'ID: ${id}`);
    return false;
  }

  isEmbauche(id: number): boolean {
    return this.embauches.some(p => p.id === id);
  }

  getEmbaucheCount(): number {
    return this.embauches.length;
  }

  clearAllEmbauches(): void {
    this.embauches = [];
    console.log('Tous les embauches ont été supprimés');
  }
}