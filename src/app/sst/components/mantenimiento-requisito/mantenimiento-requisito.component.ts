import {Component, inject} from '@angular/core';
import {DialogEliminarComponent} from '../dialogs/dialog-eliminar/dialog-eliminar.component';
import {
  AccionGestionIngresosComponent
} from '../dialogs/accion-gestion-ingresos/accion-gestion-ingresos.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatFabButton} from '@angular/material/button';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;  // Nueva propiedad: País
  accion:string;
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'DNI' , name: '74200697', weight: 'Padilla', accion:''},
  { position:'DNI' , name: '74200697', weight: 'Padilla', accion:''},

];
@Component({
  selector: 'app-mantenimiento-requisito',
  standalone: true,
  imports: [
    MatCardContent,
    MatIcon,
    MatInput,
    MatCard,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef, MatFormFieldModule,
    MatInputModule, MatFabButton
  ],
  templateUrl: './mantenimiento-requisito.component.html',
  styleUrl: './mantenimiento-requisito.component.css'
})
export class MantenimientoRequisitoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight','accion'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  readonly dialog = inject(MatDialog);
  openDialogEliminar() {
    this.dialog.open(DialogEliminarComponent);
  }
  openDialog1() {
    this.dialog.open(AccionGestionIngresosComponent);
  }
}
