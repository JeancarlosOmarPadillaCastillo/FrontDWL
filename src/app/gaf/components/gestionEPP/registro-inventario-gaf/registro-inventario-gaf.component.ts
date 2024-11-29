import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {
  MatDatepicker, MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from "@angular/material/datepicker";
import {MatFabButton} from "@angular/material/button";
import {MatFormField, MatHint, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption, provideNativeDateAdapter} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;  // Nueva propiedad: País
  provincia: string;
  accion:string;
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Bloqueador solar' , name: '100', weight: 'L-2024-B',provincia:'15/11/2024', accion:''},
  { position:'Orejeras' , name: '50', weight: 'LOT ZUI',provincia:'--', accion:''},

];
@Component({
  selector: 'app-registro-inventario-gaf',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatFabButton,
    MatFormField,
    MatHint,
    MatIcon,
    MatInput,
    MatOption,
    MatSelect,
    MatStartDate,
    MatSuffix,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    RouterLink
  ],
  templateUrl: './registro-inventario-gaf.component.html',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,

  styleUrl: './registro-inventario-gaf.component.css'
})
export class RegistroInventarioGafComponent {
  displayedColumns: string[] = ['position', 'name', 'weight','provincia','accion'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
