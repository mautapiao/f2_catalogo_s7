import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardJuegoComponent } from '../components/card-juego/card-juego.component';
import { Juego } from '../interfaces/juego';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-juegos-cooperativos',
  imports: [CardJuegoComponent, CommonModule],
  templateUrl: './juegos-cooperativos.component.html',
  styleUrl: './juegos-cooperativos.component.css'
})
export class JuegosCooperativosComponent {

  juegos: Juego[] = [];

  constructor(private http: HttpClient) { }

  /** Es un metodo eventos de angular se ejecuta cuando se levanta la aplicación  */
  ngOnInit(): void {
    
    const categioriaPermitidas = ['cooperativos'];
    this.http.get<Juego[]>('assets/juegos.json').subscribe(data => {
      //console.log('Datos:',data);
      this.juegos = data.filter(juego => categioriaPermitidas.includes(juego.categoria)
      );
    });
  }
}
