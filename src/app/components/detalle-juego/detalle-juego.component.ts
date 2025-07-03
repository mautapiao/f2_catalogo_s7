import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { Juego } from '../../interfaces/juego';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-detalle-juego',
  imports: [CommonModule],
  templateUrl: './detalle-juego.component.html',
  styleUrl: './detalle-juego.component.css'
})
export class DetalleJuegoComponent {

  juego?: Juego; //  ? = puede ser undefined y evita errores

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private catalogoService: CatalogoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.juego = this.catalogoService.getJuegoPorId(id);
  }

  goBack(): void {
    this.location.back();
  }
}
