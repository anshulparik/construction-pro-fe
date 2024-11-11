import { Routes } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { LogsComponent } from './pages/logs/logs.component';
import { WorkScopeComponent } from './pages/work-scope/work-scope.component';

export const routes: Routes = [
  { path: '', redirectTo: '/location', pathMatch: 'full' },
  { path: 'location', component: LocationComponent },
  { path: 'logs', component: LogsComponent },
  { path: 'workscope', component: WorkScopeComponent },
];
