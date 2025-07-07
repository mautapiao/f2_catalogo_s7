import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { Juego } from '../../interfaces/juego';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

/**
 * Componente Angular standalone que muestra el detalle de un juego específico.
 * Se carga normalmente al navegar a una ruta con un ID (por ejemplo: /juegos/3).
 */
@Component({
  standalone: true,
  selector: 'app-detalle-juego',
  imports: [CommonModule],
  templateUrl: './detalle-juego.component.html',
  styleUrl: './detalle-juego.component.css'
})
export class DetalleJuegoComponent {
  /** Objeto del juego que se mostrará en el detalle.
   * El signo ? indica que puede ser undefined inicialmente.
   */
  juego?: Juego; //  ? = puede ser undefined y evita errores

  /**
  * Constructor: obtiene el ID desde la ruta, consulta el servicio y carga el juego correspondiente.
  * @param route Accede a los parámetros de la ruta activa (ActivatedRoute)
  * @param location Permite navegar hacia atrás en el historial (Location)
  * @param catalogoService Servicio que maneja los datos del catálogo de juegos
  */
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogoService: CatalogoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.juego = this.catalogoService.getJuegoPorId(id);
  }
  /**
   * Vuelve a la página anterior en el historial del navegador
   */
  goBack(): void {
    this.location.back();
  }
}
