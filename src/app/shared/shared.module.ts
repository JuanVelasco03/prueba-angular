import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material/material.module';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    ErrorComponent
  ]
})
export class SharedModule { }
