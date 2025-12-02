import { Component, OnInit } from '@angular/core';
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

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService,
    private toastr: ToastrService
  ) { }

ngOnInit(): void {
  this.cvService.getCvs().subscribe({
    next: (cvData) => {
      this.personnes = cvData.map(cv => 
        new Personne(
          cv.id,
          cv.firstname || cv.firstName || '',
          cv.name || cv.lastName || '',
          cv.age,
          cv.cin,
          cv.job,
          cv.picture || cv.path || ''
        )
      );
      console.log('CVs chargés avec succès:', this.personnes.length, 'CVs');
    },
    error: (err) => {
      console.error('Erreur lors du chargement des CVs:', err);
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
      setTimeout(() => {
        this.embauches = this.embaucheService.getEmbauches();
      }, 0);
    }
  }

  removeFromHired(personne: Personne): void {
    const success = this.embaucheService.removeEmbauche(personne.id);
    
    if (success) {
      setTimeout(() => {
        this.embauches = this.embaucheService.getEmbauches();
      }, 0);
    }
  }
}
