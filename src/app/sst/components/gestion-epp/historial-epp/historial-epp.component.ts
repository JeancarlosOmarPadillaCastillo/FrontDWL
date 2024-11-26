import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatIcon} from '@angular/material/icon';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;  // Nueva propiedad: País
  provincia: string;
  distrito: string;
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'DNI' , name: '74200697', weight: 'Padilla',provincia:'Cañete',distrito:'Imperial'},
  { position:'DNI' , name: '74200697', weight: 'Padilla',provincia:'Cañete',distrito:'Imperial'},

];
@Component({
  selector: 'app-historial-epp',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInput,
    MatOption,
    MatSelect,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './historial-epp.component.html',
  styleUrl: './historial-epp.component.css'
})
export class HistorialEppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight','provincia','distrito'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);

}
