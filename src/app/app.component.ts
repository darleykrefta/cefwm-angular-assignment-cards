import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public suits = ['♦', '♣', '♥', '♠'];
  public cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K'];

  public selectedSuit = '♦';
  public selectedCard = 'A';

  handleSelectedSuit(suit: string) {
    this.selectedSuit = suit;
  }

  handleSelectedCard(card: string) {
    this.selectedCard = card;
  }
}
