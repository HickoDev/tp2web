import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne.model';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() personne!: Personne;
  @Output() selectedPersonne = new EventEmitter<Personne>();

  selectPersonne() {
    this.selectedPersonne.emit(this.personne);
  }
}
