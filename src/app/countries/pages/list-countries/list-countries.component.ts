import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Countrie } from '../../interfaces/countrie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.css'],
})
export class ListCountriesComponent implements OnInit {
  countries: Countrie[] = [];
  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc
      .getCountries()
      .subscribe((res: Countrie[]) => (this.countries = res));
  }

  onDeleteCountrie(id: string) {
    Swal.fire({
      title: 'Estás seguro?',
      text: "Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataSvc.deleteCountrie(id).subscribe(() =>
          this.ngOnInit()
        );
      }
    });
  }
}
