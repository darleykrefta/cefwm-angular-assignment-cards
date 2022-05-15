import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title correctly in the morning', () => {
      const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    Date.prototype.getHours = () => 15
    expect(app.title).toEqual('Good evening');
  });

  it('should render title correctly in the evening', () => {
      const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    Date.prototype.getHours = () => 9
    expect(app.title).toEqual('Good morning');
  });

});
