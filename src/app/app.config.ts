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
import { simpleSharp } from '@ng-icons/simple-icons';

// STORE
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { hexReducer } from '../store/hex/hex.reducers';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons({ matHexagonOutline, matWbSunnyOutline, simpleSharp }),
    provideStore({
      hexStore: hexReducer,
    }),
    provideEffects(),
  ],
};
