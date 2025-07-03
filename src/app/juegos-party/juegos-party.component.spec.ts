import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JuegosPartyComponent } from './juegos-party.component';

describe('JuegosPartyComponent', () => {
  let component: JuegosPartyComponent;
  let fixture: ComponentFixture<JuegosPartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosPartyComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
