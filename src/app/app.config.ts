// MAIN
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

//ROUTES
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

// ICONS
import { provideIcons } from '@ng-icons/core';
import {
  matHexagonOutline,
  matWbSunnyOutline,
} from '@ng-icons/material-icons/outline';

// STORE
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons({ matHexagonOutline, matWbSunnyOutline }),
    provideStore(),
  ],
};
