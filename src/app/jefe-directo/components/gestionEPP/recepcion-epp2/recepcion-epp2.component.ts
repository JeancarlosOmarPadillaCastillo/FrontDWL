import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from '@angular/material/button';
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
import {MatCheckbox} from '@angular/material/checkbox';
export interface PeriodicElement {
  name: string;
  position: string;
  cantidad:string;
  accion:string;
  tipo:string;
  observacion:string;
  // Nueva propiedad: País
}
// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1',tipo:'',observacion:'' ,accion:''},
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1',tipo:'',observacion:'' ,accion:''},
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1',tipo:'',observacion:'' ,accion:''},
];
@Component({
  selector: 'app-recepcion-epp2',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    MatHeaderCellDef,
    MatCheckbox,
    MatFabButton
  ],
  templateUrl: './recepcion-epp2.component.html',
  styleUrl: './recepcion-epp2.component.css'
})
export class RecepcionEPP2Component {
  displayedColumns: string[] = ['position', 'name','cantidad','accion','tipo','observacion'];
  datasource = new MatTableDataSource(ELEMENT_DATA);

}
