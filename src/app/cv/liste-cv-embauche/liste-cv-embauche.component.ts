import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne } from '../../model/personne.model';

@Component({
  selector: 'app-liste-cv-embauche',
  imports: [CommonModule],
  templateUrl: './liste-cv-embauche.component.html',
  styleUrl: './liste-cv-embauche.component.css'
})
export class ListeCvEmbaucheComponent {
  
  @Input() embauches: Personne[] = [];
  
  @Output() selectedEmbauche = new EventEmitter<Personne>();
  
  @Output() removeEmbauche = new EventEmitter<Personne>();

  selectEmbauche(personne: Personne) {
    this.selectedEmbauche.emit(personne);
  }

  removeFromHired(personne: Personne) {
    this.removeEmbauche.emit(personne);
  }
}