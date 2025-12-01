import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessCardComponent } from './business-card/business-card.component';
import { TtcCalculatorComponent } from './ttc-calculator/ttc-calculator.component';
import {CvComponent} from './cv/cv.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ColorChangerComponent ,BusinessCardComponent, TtcCalculatorComponent, CvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tp2web';
}
