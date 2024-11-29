import {Component, inject} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialog} from '@angular/material/dialog';
import {BusquedaAvanzadaComponent} from '../busqueda-avanzada/busqueda-avanzada.component';

const PRINT_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9" fill="none" stroke="#005cbf" stroke-width="2"/><path d="M6,18H3.5L2,16.5v-6L3.5,9h17L22,10.5v6L20.5,18H18" fill="none" stroke="#005cbf" stroke-width="2"/><rect x="6" y="14" width="12" height="8" fill="none" stroke="#005cbf" stroke-width="2"/></svg>`;
const DOWNLOAD_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="6 11.5 12 17.5 18 11.5" fill="none" stroke="#005cbf" stroke-width="2" stroke-miterlimit="10"/><line x1="12" y1="17.5" x2="12" y2="2.5" fill="none" stroke="#005cbf" stroke-width="2" stroke-miterlimit="10"/><line x1="3" y1="21" x2="21" y2="21" fill="none" stroke="#005cbf" stroke-width="2" stroke-miterlimit="10"/></svg>`


@Component({
  selector: 'app-reporte-estado-habilitacion-trabajadores',
  standalone: true,
  providers: [ provideNativeDateAdapter() ],
  imports: [MatCardModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatTableModule, CommonModule, MatIconModule, MatButtonModule, MatInput, MatDatepickerModule],
  templateUrl: './reporte-estado-habilitacion-trabajadores.component.html',
  styleUrl: './reporte-estado-habilitacion-trabajadores.component.css'
})
export class ReporteEstadoHabilitacionTrabajadoresComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
}
