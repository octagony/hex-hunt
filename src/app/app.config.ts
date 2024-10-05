// MAIN
import {
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';

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
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { hexReducer } from '../store/reducers/hex.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideIcons({ matHexagonOutline, matWbSunnyOutline, simpleSharp }),
    provideStore({
      hexData: hexReducer,
    }),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 3,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectInZone: true,
    }),
  ],
};
