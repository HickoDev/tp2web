import { Component, OnInit } from '@angular/core';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { ListeCvEmbaucheComponent } from '../cv/liste-cv-embauche/liste-cv-embauche.component';
import { Personne } from '../model/personne.model';
import { CvService } from '../services/cv.service';
import { EmbaucheService } from '../services/embauche.service';


@Component({
  selector: 'app-cv',
  imports: [DetailCvComponent,ListeCvComponent, ListeCvEmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne: Personne | null = null;
  embauches: Personne[] = [];

  constructor(private cvService: CvService, private embaucheService: EmbaucheService) { }
  

  ngOnInit() {
    const cvData = this.cvService.getCvs();
    this.personnes = cvData.map(cv => 
      new Personne(cv.id, cv.firstName, cv.lastName, cv.age, cv.cin, cv.job, cv.path)
    );

    this.embauches = this.embaucheService.getEmbauches();

    //if (this.personnes.length > 0) {
      //this.embauches.push(this.personnes[0]);
   // }
  }

  showPersonneDetails(personne: Personne) {
    this.selectedPersonne = personne;
  }

  embaucherPersonne(personne: Personne): void {
    const success = this.embaucheService.addEmbauche(personne);
    
    if (success) {
      this.embauches = this.embaucheService.getEmbauches();
    } else {
      alert('Cette personne est déjà embauchée!');
    }
  }

  removeFromHired(personne: Personne): void {
    const success = this.embaucheService.removeEmbauche(personne.id);
    
    if (success) {
      this.embauches = this.embaucheService.getEmbauches();
    }
  }
}
