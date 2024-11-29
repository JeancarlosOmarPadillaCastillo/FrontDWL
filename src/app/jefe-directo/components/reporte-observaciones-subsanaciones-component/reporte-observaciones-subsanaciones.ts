import {Component, inject} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatFormField, MatOption, MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatInput} from '@angular/material/input';
import {MatLabel} from '@angular/material/form-field';
import {MatDialog} from '@angular/material/dialog';
import {BusquedaAvanzadaComponent} from '../busqueda-avanzada/busqueda-avanzada.component';
@Component({
  selector: 'app-reporte-observaciones-subsanaciones-component',
  standalone: true,
  providers: [ provideNativeDateAdapter() ],
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule, MatButtonModule, MatFormField, MatInput, MatLabel, MatOption, MatSelectModule, MatDatepickerModule],
  templateUrl: './reporte-observaciones-subsanaciones.html',
  styleUrl: './reporte-observaciones-subsanaciones.css'
})
export class ReporteObservacionesSubsanaciones {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
}
