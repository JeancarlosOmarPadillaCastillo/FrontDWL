import {Component, inject} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BusquedaAvanzadaComponent} from '../busqueda-avanzada/busqueda-avanzada.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-reporte-habilitacion-agente-supervisado-component',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatCardModule,
    MatFormFieldModule,
    CommonModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule
  ],
  templateUrl: './reporte-habilitacion-agente.component.html',
  styleUrl: './reporte-habilitacion-agente.component.css'
})
export class ReporteHabilitacionAgenteComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
}
