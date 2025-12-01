import { Component, OnInit } from '@angular/core';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { Personne } from '../model/personne.model';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv',
  imports: [DetailCvComponent,ListeCvComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne: Personne | null = null;

  constructor(private cvService: CvService) { }
  

  ngOnInit() {
    const cvData = this.cvService.getCvs();
    this.personnes = cvData.map(cv => 
      new Personne(cv.id, cv.firstName, cv.lastName, cv.age, cv.cin, cv.job, cv.path)
    );
  }

  showPersonneDetails(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
