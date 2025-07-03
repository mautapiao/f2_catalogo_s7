import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// importaciones necesarioas para currency chile
import { registerLocaleData } from '@angular/common';
import localeCl from '@angular/common/locales/es-CL';
import { provideHttpClient } from '@angular/common/http';

// registrar los datos para localizacion
registerLocaleData(localeCl);

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),

    { provide: LOCALE_ID, useValue: 'es-CL' }
  ]
};
