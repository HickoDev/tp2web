import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personne,CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';

@Component({
  selector: 'app-liste-cv-embauche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-cv-embauche.component.html',
  styleUrl: './liste-cv-embauche.component.css'
})
export class ListeCvEmbaucheComponent {
  
  private embaucheService = inject(EmbaucheService);
  private cvService = inject(CvService);

  embauches = this.embaucheService.embauches;

  selectEmbauche(personne: Personne) {
    this.cvService.selectPersonne(personne);
  }

  removeFromHired(personne: Personne) {
    this.embaucheService.removeEmbauche(personne);
  }
}