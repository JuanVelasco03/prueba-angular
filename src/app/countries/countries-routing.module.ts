import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { FormCountrieComponent } from './pages/form-countrie/form-countrie.component';

const routes: Routes = [
  {path: 'list-countries', component: ListCountriesComponent},
  {path: 'form-countrie', component: FormCountrieComponent},
  {path: '**', redirectTo: 'list-countries', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class CountriesRoutingModule { }
