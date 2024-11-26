import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCard, MatCardContent} from '@angular/material/card';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import {MatFabButton} from '@angular/material/button';
import {MatFormField, MatHint, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatNativeDateModule, MatOption, provideNativeDateAdapter} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();


export interface PeriodicElement {
  name: string;
  position: string;
  cantidad:string;
  stock:string;
  entrega:string;
  vida:string;
  // Nueva propiedad: País
}
// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Tapones auditivos' , name: 'L-2024-A', cantidad:'25' , stock: '11/11/24', entrega:'--' , vida: 'Vencido'},
  { position:'Botiquín de seguridad' , name: 'LOT XRD', cantidad:'30' , stock: '12/11/24', entrega:'--' , vida: 'Vigente'},
  { position:'Botiquín de seguridad' , name: 'LOT QWE', cantidad:'100' , stock: '13/11/24', entrega:'--' , vida: 'Vigente'},
];

@Component({
  selector: 'app-gestionar-inventario',
  standalone: true,
  providers: [
    { useClass: MatNativeDateModule,provide:provideNativeDateAdapter()} // Asegúrate de esta línea
  ],
  imports: [
    FormsModule,
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
    ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule, MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatHeaderCellDef, RouterLink
  ],
  templateUrl: './gestionar-inventario-2.component.html',
  styleUrl: './gestionar-inventario-2.component.css'
})
export class GestionarInventario2Component {
  displayedColumns: string[] = ['position', 'name','cantidad','stock','entrega','vida'];
  datasource = new MatTableDataSource(ELEMENT_DATA);
  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
