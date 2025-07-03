import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Juego } from '../../interfaces/juego';

@Component({
  standalone: true,
  selector: 'app-card-juego',
  imports: [CommonModule, RouterLink ],
  templateUrl: './card-juego.component.html',
  styleUrl: './card-juego.component.css'
})
export class CardJuegoComponent {

  @Input() id!:number;
  @Input() titulo!: string;
  @Input() categoria!: string;
  @Input() descripcion!: string;
  @Input() imagen!: string;
  @Input() precioActual!: number;
  @Input() precioOriginal!: number;
  @Input() descuento!: number;


// otra opcion 

 // @Input() juego!: Juego; 

}
