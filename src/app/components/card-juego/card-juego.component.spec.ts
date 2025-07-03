import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CardJuegoComponent } from './card-juego.component';

describe('CardJuegoComponent', () => {
  let component: CardJuegoComponent;
  let fixture: ComponentFixture<CardJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardJuegoComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
