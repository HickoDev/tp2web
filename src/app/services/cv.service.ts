import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
export interface Personne {
  id: number;
  name: string;
  firstName: string; // Note: case sensitive (firstName vs firstname)
  lastName: string;
  age: number;
  cin: string;
  job: string;
  path: string;
  description: string;
  exams?: any[];
}
@Injectable({
  providedIn: 'root'
})


export class CvService {
  private API_URL = 'https://apilb.tridevs.net/api/personnes';

  private selectedPersonneSignal = signal<Personne | null>(null);
  readonly selectedPersonne = this.selectedPersonneSignal.asReadonly();
  
  private cvs: Personne[] = [
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

    selectPersonne(personne: Personne) {
    this.selectedPersonneSignal.set(personne);
  }

  getCvs(): Observable<any[]> {
  return this.http.get<any[]>(this.API_URL).pipe(
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
