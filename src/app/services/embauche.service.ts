import { Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from './cv.service';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  private embauchesSignal = signal<Personne[]>([]);
  readonly embauches = this.embauchesSignal.asReadonly();

  constructor(private toastr: ToastrService) { }

  addEmbauche(personne: Personne): void {
    const currentList = this.embauchesSignal();
    const index = currentList.findIndex(p => p.id === personne.id);

    if (index >= 0) {
      this.toastr.warning(`${personne.name} est déjà sélectionné`);
    } else {
      this.embauchesSignal.update(list => [...list, personne]);
      this.toastr.success(`${personne.name} a été embauché`);
      console.log('Embauches actuelles:', this.embauchesSignal());
    }
  }
  getEmbauches(): Personne[] {
    return this.embauchesSignal();
  }

  removeEmbauche(personne: Personne) {
     this.embauchesSignal.update(list => list.filter(p => p.id !== personne.id));
  }
}