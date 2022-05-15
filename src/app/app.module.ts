import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuitColorizedPipe } from './pipes/suit-colorized.pipe';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@NgModule({
  declarations: [AppComponent, SuitColorizedPipe, PlayingCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
