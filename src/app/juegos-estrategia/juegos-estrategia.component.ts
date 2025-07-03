import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { Juego } from '../interfaces/juego';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-juegos-estrategia',
  imports: [CardJuegoComponent, CommonModule],
  templateUrl: './juegos-estrategia.component.html',
  styleUrl: './juegos-estrategia.component.css'
})
export class JuegosEstrategiaComponent {

  juegos: Juego[] = [];

  constructor(private http: HttpClient) { }

  /** Es un metodo eventos de angular se ejecuta cuando se levanta la aplicación  */
  ngOnInit(): void {
    const categioriaPermitidas = ['estrategia'];
    this.http.get<Juego[]>('assets/juegos.json').subscribe(data => {
      this.juegos = data.filter(juego => categioriaPermitidas.includes(juego.categoria)
      );
    });
  }

}
