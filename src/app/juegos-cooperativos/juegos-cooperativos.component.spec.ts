import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosCooperativosComponent } from './juegos-cooperativos.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('JuegosCooperativosComponent', () => {
  let component: JuegosCooperativosComponent;
  let fixture: ComponentFixture<JuegosCooperativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosCooperativosComponent, RouterTestingModule, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosCooperativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
