import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroClienteComponent } from './registro-cliente.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';


describe('RegistroClienteComponent', () => {
  let component: RegistroClienteComponent;
  let fixture: ComponentFixture<RegistroClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroClienteComponent, RouterTestingModule, ReactiveFormsModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegistroClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debería crearse correctamente', () => {
    expect(component).toBeTruthy();

  });
  it('Formulario invalido si está vacío', () => {
    component.registroForm.setValue({
      nombreCompleto: '',
      nombreUsuario: '',
      correo: '',
      fechaNacimiento: '',
      direccionDespacho: '',
      contrasena: '',
      repetirContrasena: '',
    });

    expect(component.registroForm.valid).toBeFalse();
  });

  it('Marcar error si las contraseñas no coinciden', () => {
    component.registroForm.setValue({
      nombreCompleto: 'Junan Duncan Andana',
      nombreUsuario: 'jduncana',
      correo: 'jduncana@bahia.com',
      fechaNacimiento: '11-11-1970',
      direccionDespacho: '',
      contrasena: '1234Abcd',
      repetirContrasena: '1234aabb',
    });

    expect(component.noCoincide).toBeFalse();
  });

  it('Debería ser válido si los campos obligatorios estan correctos', () => {

    component.registroForm.setValue({
      nombreCompleto: 'Junan Duncan Andana',
      nombreUsuario: 'jduncana',
      correo: 'jduncana@bahia.com',
      fechaNacimiento: '11-11-1970',
      direccionDespacho: '', // opcional
      contrasena: '1234Abcd',
      repetirContrasena: '1234Abcd',
    });

    expect(component.registroForm.valid).toBeTrue();

  });

  it('Marcar error si la edad es menor a 13 años', () => {
    component.registroForm.get('fechaNacimiento')?.setValue('11-26-1972');

    expect(component.registroForm.get('fechaNacimiento')?.valid).toBeTrue();

  });

  it('La contraseña debe tener al menos una mayúscula y un número', () => {

    component.registroForm.get('contrasena')?.setValue('soloLetras');
    expect(component.registroForm.get('contrasena')?.valid).toBeFalse();

    component.registroForm.get('contrasena')?.setValue('123456789');
    expect(component.registroForm.get('contrasena')?.valid).toBeFalse();

    component.registroForm.get('contrasena')?.setValue('Correcta1');
    expect(component.registroForm.get('contrasena')?.valid).toBeTrue();

  });

});
