import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'playing-card-component',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
})
export class PlayingCardComponent implements OnInit {
  @Input()
  public suit!: string;

  @Input()
  public card!: string;

  constructor() {}

  ngOnInit(): void {}
}
