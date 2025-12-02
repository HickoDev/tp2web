import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCvComponent } from '../item-cv/item-cv.component';
// Update path to point to Service Interface
import { Personne } from '../services/cv.service'; 

@Component({
  selector: 'app-liste-cv',
  standalone: true,
  imports: [ItemCvComponent, CommonModule],
  templateUrl: './liste-cv.component.html',
  styleUrl: './liste-cv.component.css'
})
export class ListeCvComponent {
  
  @Input() personnes: Personne[] = [];
}