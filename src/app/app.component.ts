import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

/**
 * Componente raíz (root) de la aplicación Angular standalone.
 * Es el punto de entrada visual y lógico de la app.
 */
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   /** Título o nombre de la aplicación, usado típicamente en el template */
  title = 'tienda-carioca';
}
