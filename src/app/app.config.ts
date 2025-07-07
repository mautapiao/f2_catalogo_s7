import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/** importaciones necesarioas para currency chile */
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import { provideHttpClient, withFetch } from '@angular/common/http';

/** Registra los datos de localización para Chile (formato de fecha, moneda, etc.) */
registerLocaleData(localeCl);
/** Configuración global de la aplicación Angular standalone */
export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),

    { provide: LOCALE_ID, useValue: 'es-CL' }
  ]
};
