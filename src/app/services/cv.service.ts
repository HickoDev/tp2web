import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvService {

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

  constructor() { }
  getCvs() {
    return this.cvs;
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
