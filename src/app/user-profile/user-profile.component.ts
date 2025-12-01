import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personne } from '../model/personne.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  @Input() profile: Personne | any;
}
