import { Component, inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { ListeCvEmbaucheComponent } from '../cv/liste-cv-embauche/liste-cv-embauche.component';
import { Personne } from '../model/personne.model';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv',
  imports: [CvCardComponent, ListeCvComponent, ListeCvEmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne: Personne | null = null;
  embauches: Personne[] = [];

  private cvService = inject(CvService);
  private embaucheService = inject(EmbaucheService);
  private toastr = inject(ToastrService);

ngOnInit(): void {
  this.cvService.getCvs().subscribe({
    next: (cvData) => {
      console.log('📥 Raw API data:', cvData);
      
      this.personnes = cvData.map((cv, index) => {
        // Handle different ID formats from API
        let id: number;
        
        if (typeof cv.id === 'number') {
          id = cv.id;
        } else if (cv.id && typeof cv.id === 'object') {
          // MongoDB ObjectId - use CIN instead or generate from index
          id = cv.cin || (index + 1);
        } else {
          // No ID - generate from index
          id = index + 1;
        }
        
        return new Personne(
          id,
          cv.firstname || cv.firstName || '',
          cv.name || cv.lastName || '',
          cv.age,
          cv.cin,
          cv.job,
          cv.picture || cv.path || ''
        );
      });
      
      console.log('✅ CVs chargés avec succès:', this.personnes.length, 'CVs');
      console.log('📋 Personnes array:', this.personnes);
    },
    error: (err) => {
      console.error('❌ Erreur lors du chargement des CVs:', err);
    }
  });
  
  this.embauches = this.embaucheService.getEmbauches();
}

  showPersonneDetails(personne: Personne): void {
    this.selectedPersonne = personne;
  }

  embaucherPersonne(personne: Personne): void {
    const success = this.embaucheService.addEmbauche(personne);

    if (success) {
      this.embauches = this.embaucheService.getEmbauches();

      
    }
  }

  removeFromHired(personne: Personne): void {
    const success = this.embaucheService.removeEmbauche(personne.id);

    if (success) {
      this.embauches = this.embaucheService.getEmbauches();

    }
  }
}
