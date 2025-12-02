import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css'
})
export class CvCardComponent {
  private cvService = inject(CvService);
  private embaucheService = inject(EmbaucheService);
  private router = inject(Router);

  personne = this.cvService.selectedPersonne;

  hireCV() {
    const currentPersonne = this.personne();
    if (currentPersonne) {
      this.embaucheService.addEmbauche(currentPersonne);
    }
  }

  goToDetails() {
    const currentPersonne = this.personne();
    if (currentPersonne) {
      this.router.navigate(['/cv', currentPersonne.id]);
    }
  }
}