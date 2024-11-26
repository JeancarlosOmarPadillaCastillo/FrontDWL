import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {
  MatDatepicker, MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatFormField, MatHint, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatOption, provideNativeDateAdapter} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: string;
  cantidad:string;
  accion:string;
  // Nueva propiedad: País
}
// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1' ,accion:''},
  { position:'Requisito2' , name: 'Ver documento', cantidad:'Requisito1',accion:'' },
  { position:'Requisito3' , name: 'Ver documento', cantidad:'Requisito1' ,accion:''},
];

@Component({
  selector: 'app-recepcion-epp',
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
    MatOption,
    MatSelect,
    MatStartDate,
    MatSuffix,
    ReactiveFormsModule,
    RouterLink,
    MatDatepicker,
    MatInput,
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
    MatButton
  ],
  templateUrl: './recepcion-epp.component.html',
  styleUrl: './recepcion-epp.component.css',
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecepcionEPPComponent {
  displayedColumns: string[] = ['position', 'name','cantidad','accion'];
  datasource = new MatTableDataSource(ELEMENT_DATA);

}
