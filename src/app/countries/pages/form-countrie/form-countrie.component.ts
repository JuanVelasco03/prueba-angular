import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-countrie',
  templateUrl: './form-countrie.component.html',
  styleUrls: ['./form-countrie.component.css'],
})
export class FormCountrieComponent {

  constructor (private dataSvc: DataService, private router: Router) {}

  model = {
    id: '',
    countryName: '',
    population: '',
    capital: '',
    continentName: '',
    img: '',
  };

  onSubmit({ value: formData }: NgForm) {
    const data = {
      ...formData,
      id: this.model.countryName
    };

    this.dataSvc.saveCountrie(data).subscribe(() => this.router.navigate(['/countries']))
  }
}
