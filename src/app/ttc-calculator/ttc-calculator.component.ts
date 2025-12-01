import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ttc-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ttc-calculator.component.html',
  styleUrls: ['./ttc-calculator.component.css'],
})
export class TtcCalculatorComponent {
  // valeurs par défaut
  priceHt = 0;   // prix HT
  quantity = 1;  // quantité
  tva = 18;      // TVA en %

  // calcul prix unitaire TTC
  get unitTtc(): number {
    const coef = 1 + this.tva / 100;
    return this.priceHt * coef;
  }

  // calcul du total TTC avant remise
  get totalTtcBeforeDiscount(): number {
    return this.unitTtc * this.quantity;
  }

  // remise suivant la quantité
  get discountRate(): number {
    if (this.quantity >= 10 && this.quantity <= 15) {
      return 0.2; // 20%
    } else if (this.quantity > 15) {
      return 0.3; // 30%
    }
    return 0;
  }

  get discountAmount(): number {
    return this.totalTtcBeforeDiscount * this.discountRate;
  }

  // total TTC après remise
  get totalTtc(): number {
    return this.totalTtcBeforeDiscount - this.discountAmount;
  }
}
