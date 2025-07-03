import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-registro-cliente',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css'
})
export class RegistroClienteComponent {

  registroForm: FormGroup;
  noCoincide = false;
  submitted = false;
  nombreUsuario: string = '';

  constructor(private fb: FormBuilder) {

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    this.registroForm = this.fb.group({

      nombreCompleto: ['', [Validators.required, Validators.minLength(2)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.minLength(10), Validators.pattern(emailRegex)]],
      fechaNacimiento: ['', [Validators.required, this.edadMinimaValidator(13)]],
      direccionDespacho: [''],
      contrasena: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      repetirContrasena: ['', Validators.required],

    }, { validators: this.passwordsIguales });
  }

  // Validar contraseña
  passwordsIguales(form: FormGroup): ValidationErrors | null {
    const password = form.get('contrasena');
    const confirmPassword = form.get('repetirContrasena');

    if (!password || !confirmPassword) {
      return null; // si los campos no existen
    }

    if (password.value === confirmPassword.value) {
      return null; // ok, no hay error
    } else {
      return { passwordsNoCoinciden: true }; // Las contraseñas no coinciden
    }
  }

  // Función para validar que la persona tenga al menos la edad mínima 13 años
  edadMinimaValidator(edadMinima: number) {
    return (control: AbstractControl): ValidationErrors | null => {

      // Si no hay valor en el campo, no validamos, lo maneja required
      if (!control.value) {
        return null;
      }

      // Convertir el texto del input a una fecha
      const fechaNacimiento = new Date(control.value);
      const fechaHoy = new Date();

      // Calcular la edad básica,solo años
      let edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

      // Verificar si ya cumplió años este año
      const mesNacimiento = fechaNacimiento.getMonth();
      const mesActual = fechaHoy.getMonth();
      const diaNacimiento = fechaNacimiento.getDate();
      const diaActual = fechaHoy.getDate();

      // Si aún no ha llegado su mes de cumpleaños
      if (mesActual < mesNacimiento) {
        edad = edad - 1; // restar un año
      }

      // Si estamos en su mes pero aún no llega el día
      if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
        edad = edad - 1; // restar un año
      }

      // Verificar si cumple con la edad mínima
      if (edad >= edadMinima) {
        return null; // No hay error
      } else {
        return { edadMinima: true }; // Hay error
      }
    };
  }
  // Verifica que registroForm existe
  ngOnInit() {
   // console.log('🔍 registroForm existe?', this.registroForm);
   // console.log('🔍 registroForm válido?', this.registroForm?.valid);
  }

  // prueba
  testClick() {
    console.log('🧪 Test click funciona');
  }

  onSubmit() {
    console.log('🔥 onSubmit() se ejecutó');
    this.submitted = true;
    this.registroForm.markAllAsTouched();

    if (this.registroForm.invalid) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }

    alert('Formulario enviado con éxito');
    console.log(this.registroForm.value);
  }

  onReset() {
    if (confirm('¿Estás seguro de que quieres limpiar el formulario?')) {
      this.registroForm.reset();
      this.submitted = false;
    }
  }

}

