import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewListComponent } from './view-list/view-list.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
{ path: '', redirectTo: '/users' , pathMatch: 'full' },
  { path: 'users', component: ListComponent },
  { path: 'users/:id', component: ViewListComponent},
  { path: '**', component: ErrorComponent}
];
