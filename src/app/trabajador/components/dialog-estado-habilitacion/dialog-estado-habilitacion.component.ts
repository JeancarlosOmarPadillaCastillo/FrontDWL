import {Component, inject} from '@angular/core';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {
  DialogSubsanarConfirmacionComponent
} from '../dialog-subsanar-confirmacion/dialog-subsanar-confirmacion.component';
import {MatCard, MatCardContent} from '@angular/material/card';

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
  selector: 'app-dialog-estado-habilitacion',
  standalone: true,
  imports: [
    MatTable,
    MatDialogActions,
    MatDialogContent,
    MatCard,
    MatCardContent,
    MatDialogClose,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef
  ],
  templateUrl: './dialog-estado-habilitacion.component.html',
  styleUrl: './dialog-estado-habilitacion.component.css'
})
export class DialogEstadoHabilitacionComponent {
  displayedColumns: string[] = ['position', 'name', 'weight','accion'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogSubsanarConfirmacionComponent);
  }
}
