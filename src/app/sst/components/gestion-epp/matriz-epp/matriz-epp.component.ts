import { Component } from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatCard, MatCardContent} from '@angular/material/card';
export interface PeriodicElement {
  name: string;
  position: string;

}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'DNI' , name: '74200697'},
  { position:'DNI' , name: '74200697'},

];
@Component({
  selector: 'app-matriz-epp',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatOption,
    MatRow,
    MatRowDef,
    MatSelect,
    MatTable,
    MatCard,
    MatCardContent,
    MatHeaderCellDef
  ],
  templateUrl: './matriz-epp.component.html',
  styleUrl: './matriz-epp.component.css'
})
export class MatrizEppComponent {
  displayedColumns: string[] = ['position', 'name'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
