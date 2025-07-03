import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DetalleJuegoComponent } from './detalle-juego.component';

describe('DetalleJuegoComponent', () => {
  let component: DetalleJuegoComponent;
  let fixture: ComponentFixture<DetalleJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleJuegoComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
