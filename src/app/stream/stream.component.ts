import { Component, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common'; // Required for | async
import { Observable, interval, map, startWith} from 'rxjs';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css'
})
export class StreamComponent {
  @Input() size = 150; 
  @Input() speed = 1000; // milliseconds
  @Input() images: string[] = [
    "assets/images/rotating_card_profile.png",
    "assets/images/rotating_card_profile2.png",
    "assets/images/rotating_card_profile3.png"
  ];

  imageStream$!: Observable<string>;
  ngOnInit() {
    // 1. interval emits 0, 1, 2, 3... every [speed] ms
    this.imageStream$ = interval(this.speed).pipe(
      startWith(this.images.length - 1), // Emit immediately on subscription
      map(i => this.images[i % this.images.length])

    );
  }
}