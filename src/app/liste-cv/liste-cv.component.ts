import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCvComponent } from '../item-cv/item-cv.component';
import { Personne } from '../model/personne.model';
@Component({
  selector: 'app-liste-cv',
  imports: [ItemCvComponent, CommonModule],
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCvComponent {
  @Input() personnes: Personne[] = [];
  @Output() selectedPersonne = new EventEmitter<Personne>();

  ngOnInit() {
    
  }
selectPersonne(selectedPersonne: Personne) {
    this.selectedPersonne.emit(selectedPersonne);
  }
}
