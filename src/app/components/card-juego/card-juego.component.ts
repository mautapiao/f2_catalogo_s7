import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Juego } from '../../interfaces/juego';

/**
 * Componente Angular standalone que representa una tarjeta visual para mostrar
 * la información resumida de un juego (imagen, título, precio, etc.).
 * Se utiliza típicamente dentro de un listado o catálogo.
 */
@Component({
  standalone: true,
  selector: 'app-card-juego',
  imports: [CommonModule, RouterLink ],
  templateUrl: './card-juego.component.html',
  styleUrl: './card-juego.component.css'
})
export class CardJuegoComponent {

  /** Identificador único del juego, útil para navegar o seleccionar */
  @Input() id!: number;

  /** Título o nombre del juego a mostrar */
  @Input() titulo!: string;

  /** Categoría del juego (ej: estrategia, acción, etc.) */
  @Input() categoria!: string;

  /** Descripción breve o resumen del juego */
  @Input() descripcion!: string;

  /** URL o ruta de la imagen asociada al juego */
  @Input() imagen!: string;

  /** Precio actual del juego, posiblemente con descuento aplicado */
  @Input() precioActual!: number;

  /** Precio original del juego antes del descuento */
  @Input() precioOriginal!: number;

  /** Porcentaje de descuento aplicado sobre el precio original */
  @Input() descuento!: number;

/**
   * Alternativa recomendada si deseas pasar todo el objeto juego como un solo @Input:
   * Esto permite manejar la tarjeta con mayor flexibilidad y menos bindings individuales.
   */
 // otra opcion 
 // @Input() juego!: Juego; 

}
