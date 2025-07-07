import { Component } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
/**
 * Representa el componente de registro del cliente
 */
@Component({
  standalone: true,
  selector: 'app-registro-cliente',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './registro-cliente.component.html',
  styleUrl: './registro-cliente.component.css'
})
/**
 * Representa la clase que se encarga del formulario del registro
 */
export class RegistroClienteComponent {
  
/** Estructura del formulario */
  registroForm: FormGroup; 
  /** Flag para inidicar si las contaseñas no coinciden*/
  noCoincide = false;
  /** Flag para saber su el formaulario fue enviado*/
  submitted = false;
  /** Variable para guardar el nombre de usuario*/
  nombreUsuario: string = '';

  /** constructo */
  constructor(private fb: FormBuilder) {
    /** Expresiones regulares para validar contraseñas */
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,18}$/;

    /** Expresiones regulares para validar correos electrónicos */
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    /** Definición del formulario y sus validadores */
    this.registroForm = this.fb.group({

      nombreCompleto: ['', [Validators.required, Validators.minLength(2)]],
      nombreUsuario: ['', [Validators.required, Validators.minLength(5)]],
      correo: ['', [Validators.required, Validators.minLength(10), Validators.pattern(emailRegex)]],
      fechaNacimiento: ['', [Validators.required, this.edadMinimaValidator(13)]],
      direccionDespacho: [''],
      contrasena: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      repetirContrasena: ['', Validators.required],

    }, {
      /** Validador personalizado a nivel de formulario para validar que las contraseñas coincidan */
      validators: this.passwordsIguales
    });
  }

  /** 
   * Validador a nivel de formulario que verifica si las contraseñas coinciden 
   */
  passwordsIguales(form: FormGroup): ValidationErrors | null {

    /** campo de formulario */
    const password = form.get('contrasena');
    /** campo de formulario */
    const confirmPassword = form.get('repetirContrasena');
    /** No se puede validar si alguno no existe */
    if (!password || !confirmPassword) {
      return null;
    }
    /** Las contraseñas coinciden -> no hay error */
    if (password.value === confirmPassword.value) {
      return null;
    } else {
      /** Las contraseñas coinciden -> no hay error */
      return { passwordsNoCoinciden: true };
    }
  }


/**
 * Validador de edad mínima: verifica que el usuario tenga al menos `edadMinima` años
 */
  edadMinimaValidator(edadMinima: number) {
    /** Retorna resultado validación edad minima  */
    
    return (control: AbstractControl): ValidationErrors | null => {

      /** Si no hay valor en el campo, no validamos, lo maneja required */
      if (!control.value) {
        return null; // El campo está vacío ->lo maneja el validador 'required'
      }

      /** Convertir el texto del input a una fecha */
      const fechaNacimiento = new Date(control.value);
      /** variable fecha del dia actual */
      const fechaHoy = new Date();

      /** alcular la edad básica,solo años */
      let edad = fechaHoy.getFullYear() - fechaNacimiento.getFullYear();

      /** Verificar si ya cumplió años este año */
      const mesNacimiento = fechaNacimiento.getMonth();
      /** Mes actual */
      const mesActual = fechaHoy.getMonth();
      /** dia de nacimiento */
      const diaNacimiento = fechaNacimiento.getDate();
      /** día actual */
      const diaActual = fechaHoy.getDate();

      /** mes actual es menos que mes nacimiento */
      if (mesActual < mesNacimiento) {
        edad = edad - 1;
      }

      /** Ajustar edad si no ha cumplido años aún este año */
      if (mesActual === mesNacimiento && diaActual < diaNacimiento) {
        edad = edad - 1; // restar un año
      }

      /** Validar contra la edad mínima requerida */
      if (edad >= edadMinima) {
        return null;
      } else {
        return { edadMinima: true }; // Hay error
      }
    };
  }


  /**
   * Método que se ejecuta al enviar el formulario
   */
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


  /**
   * Método para limpiar (resetear) el formulario
   */
  onReset() {
    if (confirm('¿Estás seguro de que quieres limpiar el formulario?')) {
      this.registroForm.reset();
      this.submitted = false;
    }
  }



}

