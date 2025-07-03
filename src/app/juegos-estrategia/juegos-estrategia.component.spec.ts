import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosEstrategiaComponent } from './juegos-estrategia.component';
import { RouterTestingModule } from '@angular/router/testing';


describe('JuegosEstrategiaComponent', () => {
  let component: JuegosEstrategiaComponent;
  let fixture: ComponentFixture<JuegosEstrategiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosEstrategiaComponent, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosEstrategiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });
});
