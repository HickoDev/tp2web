import { Component, OnInit, inject } from '@angular/core';
import { CvCardComponent } from '../cv-card/cv-card.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { ListeCvEmbaucheComponent } from './liste-cv-embauche/liste-cv-embauche.component';
import { CvService, Personne } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CvCardComponent, ListeCvComponent, ListeCvEmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {

  personnes: Personne[] = [];
  embauches: Personne[] = [];

  private cvService = inject(CvService);
  private embaucheService = inject(EmbaucheService);

  ngOnInit(): void {
    this.cvService.getCvs().subscribe({
      next: (cvData) => {
        this.personnes = cvData.map((cv: any) => ({
          id: cv.id,
          firstName: cv.firstname || cv.firstName || '',
          lastName: cv.lastname || cv.lastName || '',
          name: cv.name || cv.lastName || '',
          age: cv.age,
          cin: cv.cin,
          job: cv.job,
          path: cv.picture || cv.path || '',
          description: cv.description || ''
        }));
        
        console.log('CVs loaded:', this.personnes.length);
      },
      error: (err) => {
        console.error('Error loading CVs:', err);
      }
    });
    
    this.embauches = this.embaucheService.getEmbauches();
  }
}