import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() gameCover: string = ""
  @Input() gamePricing: string = "R$ 399,90"
  @Input() gameType: string = 'Digital PS4'
  @Input() gameLabel: string = ''
  
}
