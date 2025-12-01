import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { ListeCvEmbaucheComponent } from '../cv/liste-cv-embauche/liste-cv-embauche.component';
import { Personne } from '../model/personne.model';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv',
  imports: [DetailCvComponent, ListeCvComponent, ListeCvEmbaucheComponent],
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
    const cvData = this.cvService.getCvs();
    this.personnes = cvData.map(cv => 
      new Personne(cv.id, cv.name, cv.firstName, cv.age, cv.cin, cv.job, cv.path)
    );
    
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
