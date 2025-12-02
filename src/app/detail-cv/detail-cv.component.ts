import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Personne } from '../model/personne.model';
import { CommonModule } from '@angular/common';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-detail-cv',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-cv.component.html',
  styleUrl: './detail-cv.component.css'
})
export class DetailCvComponent implements OnInit {
  personne: Personne | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    // Get the ID from route parameters
    const id = this.route.snapshot.params['id'];
    
    // Fetch the CV data from service
    const cvData = this.cvService.getCvById(+id);
    
    if (cvData) {
      this.personne = new Personne(
        cvData.id,
        cvData.name,
        cvData.firstName,
        cvData.age,
        cvData.cin,
        cvData.job,
        cvData.path
      );
    }
  }

  deleteCV(): void {
    if (this.personne && confirm(`Are you sure you want to delete ${this.personne.firstname} ${this.personne.name}?`)) {
      this.cvService.deleteCv(this.personne.id);
      // Navigate back to CV list
      this.router.navigate(['/cv']);
    }
  }
}
