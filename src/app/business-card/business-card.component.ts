import { UserProfileComponent } from '../user-profile/user-profile.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-business-card',
  standalone: true,
  imports: [CommonModule, FormsModule, UserProfileComponent],  
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.css'],
})
export class BusinessCardComponent implements OnInit {
  profile = {
    nom: 'Sellaouti',
    prenom: 'aymen',
    job: 'Enseignant',
    imageCover: 'assets/images/rotating_card_thumb3.png',
    imageProfile: 'assets/images/rotating_card_profile.png',
    citation: "tant qu’il y a de la vie il y a de l’espoir",
    description: 'J’enseigne aux étudiants les technos du Web',
    motsCles: 'HTML CSS JS PHP Symfony Angular',
    followers: 235,
    following: 114,
    projects: 35,
    motto: 'To be or not to be, this is my awesome motto!',
  };

  ngOnInit() {
 
  }
}