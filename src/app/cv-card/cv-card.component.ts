import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personne } from '../model/personne.model';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css'
})
export class CvCardComponent {
  @Input() personne: Personne | null = null;
  @Output() embauchePersonne = new EventEmitter<Personne>();

  constructor(private router: Router) {}

  hireCV() {
    if (this.personne) {
      this.embauchePersonne.emit(this.personne);
    }
  }

  goToDetails() {
    if (this.personne) {
      console.log('🔍 Navigating to details for:', this.personne);
      console.log('📌 ID being used:', this.personne.id);
      this.router.navigate(['/cv', this.personne.id]);
    }
  }
}
