import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvService, Personne } from '../services/cv.service';

@Component({
  selector: 'app-item-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() personne!: Personne;
  
  private cvService = inject(CvService);

  selectPersonne() {
    this.cvService.selectPersonne(this.personne);
  }
}