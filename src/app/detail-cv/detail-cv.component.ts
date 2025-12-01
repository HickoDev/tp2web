import { Component, Input } from '@angular/core';
import { Personne } from '../model/personne.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent {
  @Input() personne: Personne | null = null;
}
