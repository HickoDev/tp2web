import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { CvComponent } from './cv/cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'color', component: ColorChangerComponent },
  { path: 'cv', component: CvComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'cv/:id', component: DetailCvComponent }
];
