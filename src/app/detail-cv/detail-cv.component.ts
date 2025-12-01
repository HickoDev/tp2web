import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personne } from '../model/personne.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent {
  @Input() personne: Personne | null = null;

  @Output() embauchePersonne = new EventEmitter<Personne>();

  hireCV() {
    if (this.personne) {
      this.embauchePersonne.emit(this.personne);
    }
  }
}
