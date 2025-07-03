import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JuegosFamiliaresComponent } from './juegos-familiares.component';

describe('JuegosFamiliaresComponent', () => {
  let component: JuegosFamiliaresComponent;
  let fixture: ComponentFixture<JuegosFamiliaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosFamiliaresComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosFamiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
