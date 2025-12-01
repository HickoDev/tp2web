import { Component, OnInit } from '@angular/core';
import { DetailCvComponent } from '../detail-cv/detail-cv.component';
import { ListeCvComponent } from '../liste-cv/liste-cv.component';
import { Personne } from '../model/personne.model';

@Component({
  selector: 'app-cv',
  imports: [DetailCvComponent,ListeCvComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent implements OnInit {
  personnes: Personne[] = [];
  selectedPersonne: Personne | null = null;
  

  ngOnInit() {
    this.personnes = [
      new Personne(1, 'aymen', 'chahed', 38, "12345678", 'Teacher', 'assets/images/rotating_card_profile.png'),
      new Personne(2, 'Doe', 'John', 40, "87654321", 'Developer', 'assets/images/rotating_card_profile2.png')
    ];
  }

  showPersonneDetails(personne: Personne) {
    this.selectedPersonne = personne;
  }
}
