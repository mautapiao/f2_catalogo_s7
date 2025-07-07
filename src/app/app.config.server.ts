import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { provideServerRouting } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

/**
 * Configuración específica para el servidor en Angular Universal.
 * Define los providers necesarios para el renderizado del lado servidor y el ruteo.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideServerRouting(serverRoutes)
  ]
};

/**
 * Combina la configuración general de la aplicación con la configuración específica del servidor.
 * Esto permite reutilizar providers comunes y agregar los del servidor sin conflictos.
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);
