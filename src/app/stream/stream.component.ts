import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [AsyncPipe, FormsModule], 
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css'
})
export class StreamComponent implements OnInit {
  
  @Input() size = 150; 
  @Input() speed = 1000; 
  
  @Input() images: string[] = [
    'assets/images/rotating_card_profile.png',
    'assets/images/rotating_card_profile2.png',
    'assets/images/rotating_card_profile3.png',
    'assets/images/rotating_card_thumb.png'
  ];

  colorStream$!: Observable<string>;

  ngOnInit() {
    this.startStream();
  }

  startStream() {
    this.colorStream$ = interval(this.speed).pipe(
      startWith(this.images.length - 1),
      map(i => this.images[i % this.images.length])
    );
  }

  onSpeedChange() {
    this.startStream();
  }
}