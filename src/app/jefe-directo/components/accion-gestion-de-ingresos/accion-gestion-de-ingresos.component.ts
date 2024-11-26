import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatOption, MatSelect} from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  position: string;
  // Nueva propiedad: País
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Requisito1' , name: 'Ver documento'},
  { position:'Requisito2' , name: 'Ver documento'},
  { position:'Requisito3' , name: 'Ver documento'},
];
@Component({
  selector: 'app-accion-gestion-de-ingresos',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatSelect,
    MatOption,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './accion-gestion-de-ingresos.component.html',
  styleUrl: './accion-gestion-de-ingresos.component.css'
})
export class AccionGestionDeIngresosComponent {
  displayedColumns: string[] = ['position', 'name'];

  datasource = new MatTableDataSource(ELEMENT_DATA);
}
