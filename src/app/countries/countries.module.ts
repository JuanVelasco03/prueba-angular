import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { FormCountrieComponent } from './pages/form-countrie/form-countrie.component';
import { CountriesRoutingModule } from './countries-routing.module';
import { MaterialModule } from '../material/material/material.module';
import { CountrieComponent } from './components/countrie/countrie.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListCountriesComponent,
    FormCountrieComponent,
    CountrieComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule,
    MaterialModule,
    RouterModule,
    FormsModule,

  ]
})
export class CountriesModule { }
