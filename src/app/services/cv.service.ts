import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class CvService {
private API_URL = 'https://apilb.tridevs.net/api/personnes';
  private cvs = [
    {
      id: 1,
      name: 'John Doe',
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      cin: '12345678',
      job: 'Angular Developer',
      path: 'assets/images/rotating_card_profile.png',
      description: 'Passionate about web development'
    },
    {
      id: 2,
      name: 'Jane Smith',
      firstName: 'Jane',
      lastName: 'Smith',
      age: 28,
      cin: '87654321',
      job: 'Full Stack Developer',
      path: 'assets/images/rotating_card_profile2.png',
      description: 'Expert in modern web technologies'
    },
    {
      id: 3,
      name: 'Ahmed Ben Ali',
      firstName: 'Ahmed',
      lastName: 'Ben Ali',
      age: 32,
      cin: '11223344',
      job: 'Senior Developer',
      path: 'assets/images/rotating_card_profile3.png',
      description: 'Team lead with expertise in system architecture',
      exams: [
        { name: 'System Design', passed: true },
        { name: 'DevOps Fundamentals', passed: true }
      ]
    }
  ];

constructor(
  private http: HttpClient,
  private toastr: ToastrService
) { }
  getCvs(): Observable<any[]> {
  return this.http.get<any[]>(this.API_URL).pipe(
    tap((apiCvs) => {
      // Store fetched CVs in service for getCvById to work
      console.log('💾 Storing API CVs in service:', apiCvs.length);
      this.cvs = apiCvs.map((cv, index) => ({
        ...cv,
        id: typeof cv.id === 'number' ? cv.id : (cv.cin || index + 1)
      }));
    }),
    catchError((error) => {
      console.error('Erreur lors de la récupération des CVs depuis l\'API:', error);
      
      this.toastr.error(
        'Impossible de récupérer les CVs depuis le serveur. Affichage des données locales.',
        'Erreur de connexion',
        { timeOut: 5000 }
      );
      
      return of(this.cvs);
    })
  );
}


  getCvById(id: number) {
    return this.cvs.find(cv => cv.id === id);
  }

  addCv(cv: any) {
    cv.id = this.cvs.length + 1;
    this.cvs.push(cv);
  }

  deleteCv(id: number) {
    this.cvs = this.cvs.filter(cv => cv.id !== id);
  }

}
