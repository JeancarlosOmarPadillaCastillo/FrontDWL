import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormFieldModule, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatIcon} from '@angular/material/icon';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-solicitud-habitacion',
  standalone: true,
  imports: [
    MatCardContent,
    MatLabel,
    MatSelect,
    MatOption,
    MatIcon,
    MatCard,
    MatDatepickerToggle,
    MatDatepicker,
    MatInput,
    MatSuffix,
    MatDatepickerInput,MatFormFieldModule,
    MatInputModule,MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './solicitud-habitacion.component.html',
  styleUrl: './solicitud-habitacion.component.css'
})
export class SolicitudHabitacionComponent {
  date = new FormControl(new Date());
}
