import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.scss']
})
export class CardPricingComponent {
  @Input() gamePricing: string = "R$ 399,90"
  @Input() gameType: string = 'Digital PS4'
}
