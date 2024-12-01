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
export interface PeriodicElement {
  name: string;
  position: string;

}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Casco de seguridad' , name: '1'},
  { position:'Botín dieléctricos' , name: '1'},
  { position:'Bloqueador Solar' , name: '1'},
  { position:'Botas de cuero caña alta' , name: '2'},

];
@Component({
  selector: 'app-maestro-asignaciones-epp',
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
    MatHeaderCellDef
  ],
  templateUrl: './maestro-asignaciones-epp.component.html',
  styleUrl: './maestro-asignaciones-epp.component.css'
})
export class MaestroAsignacionesEppComponent {
  displayedColumns: string[] = ['position', 'name'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);
}
