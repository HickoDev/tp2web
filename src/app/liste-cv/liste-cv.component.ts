import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne.model';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-cv',
  imports: [ItemCvComponent, CommonModule],
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCvComponent {
  
  @Input() personnes: Personne[] = [];
  
  @Output() selectedPersonne = new EventEmitter<Personne>();

  selectPersonne(personne: Personne) {
    this.selectedPersonne.emit(personne);
  }
}