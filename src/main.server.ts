import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

/** Define una función que inicializa la aplicación con el componente raíz y la configuración especificada */
const bootstrap = () => bootstrapApplication(AppComponent, config);

/** Exporta la función bootstrap como valor por defecto para ser utilizada en otro archivo */
export default bootstrap;
