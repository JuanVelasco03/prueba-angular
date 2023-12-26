import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  { path: 'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) },
  { path: '', redirectTo: 'countries', pathMatch: "full"},
  { path: 'error', component:  ErrorComponent},
  { path: '**', redirectTo: "error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
