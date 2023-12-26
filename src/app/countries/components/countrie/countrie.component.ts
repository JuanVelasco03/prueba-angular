import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Countrie } from '../../interfaces/countrie';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-countrie',
  templateUrl: './countrie.component.html',
  styleUrls: ['./countrie.component.css']
})
export class CountrieComponent {
  @Input() countrie!: Countrie;
  @Output() deleteCountrie = new EventEmitter<string>()

  constructor() {}

  onDelete(id: string) {
    this.deleteCountrie.emit(id)
  }
}
