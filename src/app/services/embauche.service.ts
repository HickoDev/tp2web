import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauches: Personne[] = [];

  private toastr = inject(ToastrService);

  getEmbauches(): Personne[] {
    return this.embauches;
  }

  getEmbaucheById(id: number): Personne | undefined {
    return this.embauches.find(personne => personne.id === id);
  }

  addEmbauche(personne: Personne): boolean {
    const alreadyHired = this.embauches.find(p => p.id === personne.id);
    
    if (alreadyHired) {
      this.toastr.error(
        `${personne.firstname} ${personne.name} est déjà embauché(e)`,
        'CV Déjà Embauché'
      );
      return false;
    }

    this.embauches.push(personne);
    this.toastr.success(
      `${personne.firstname} ${personne.name} a été embauché(e) avec succès!`,
      'Embauche Réussie'
    );
    return true;
  }

  removeEmbauche(id: number): boolean {
    const personne = this.embauches.find(p => p.id === id);
    const index = this.embauches.findIndex(p => p.id === id);
    
    if (index > -1) {
      this.embauches.splice(index, 1);
      this.toastr.info(
        `${personne?.firstname} ${personne?.name} a été retiré(e) de la liste des embauchés`,
        'CV Retiré'
      );
      return true;
    }
    
    this.toastr.warning(
      'CV non trouvé dans la liste des embauchés',
      'Erreur'
    );
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
    this.toastr.info('Tous les embauchés ont été supprimés', 'Suppression');
  }
}