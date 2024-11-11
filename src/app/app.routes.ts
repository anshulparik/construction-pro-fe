import { Routes } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { LogsComponent } from './pages/logs/logs.component';
import { WorkScopeComponent } from './pages/work-scope/work-scope.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/location/location.component').then(
        (m) => m.LocationComponent
      );
    },
  },
  {
    path: 'workscope',
    loadComponent: () => {
      return import('./pages/work-scope/work-scope.component').then(
        (m) => m.WorkScopeComponent
      );
    },
  },
  {
    path: 'logs',
    loadComponent: () => {
      return import('./pages/logs/logs.component').then((m) => m.LogsComponent);
    },
  },
];
