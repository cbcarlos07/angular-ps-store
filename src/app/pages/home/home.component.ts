import { Component } from '@angular/core';

export interface Card {
    gameCover: string
    gameLabel: string
    gameType: string
    gamePricing: string
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  cards: Card[] = [
    {
      gameCover: 'assets/bt-1.jpg',
      gameLabel: 'DIGITAL',
      gameType: 'Digital | PS4',
      gamePricing: 'R$ 400,99'
    },
    {
      gameCover: 'assets/bt-4.jpg',
      gameLabel: 'BEST OF YEAR',
      gameType: 'DISC | PS5',
      gamePricing: 'R$ 344,99'
    },
    {
      gameCover: 'assets/ac-cover.jpg',
      gameLabel: 'EXCLUSIVE',
      gameType: 'DISC | PS5',
      gamePricing: 'R$ 454,99'
    },
    {
      gameCover: 'assets/bt-hardline.jpg',
      gameLabel: 'EXCLUSIVE',
      gameType: 'DISC | PS5',
      gamePricing: 'R$ 300,99'
    }
  ]
}
