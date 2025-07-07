import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { Juego } from '../interfaces/juego';
import { HttpClient } from '@angular/common/http';
/**
 * Representa el componente de juegos colaborativos
 */
@Component({
  standalone: true,
  selector: 'app-juegos-familiares',
  imports: [CardJuegoComponent, CommonModule],
  templateUrl: './juegos-familiares.component.html',
  styleUrl: './juegos-familiares.component.css'
})
/** constructor de la clase */
export class JuegosFamiliaresComponent {
 /** poblamiento de juegos */
  juegos: Juego[] = [];
 /** constructor de la clase */
  constructor(private http: HttpClient) { }

  /**
   * Método del ciclo de vida de Angular que se ejecuta automáticamente
   * cuando el componente ha sido inicializado.   
   */
  ngOnInit(): void {
    /** Definimos un arreglo con las categorías de juegos permitidas */
    const categioriaPermitidas = ['familiares'];
     /** Realizamos una solicitud HTTP GET al archivo local de juegos en formato JSON */
    this.http.get<Juego[]>('assets/juegos.json').subscribe(data => {
      /** Filtramos los juegos que coinciden con las categorías permitidas */
      this.juegos = data.filter(juego => categioriaPermitidas.includes(juego.categoria)
      );
    });
  }

}
