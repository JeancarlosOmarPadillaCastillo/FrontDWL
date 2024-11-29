import {Component, inject} from '@angular/core';
import {AsociarNuevoRequisitoComponent} from '../dialogs/asociar-nuevo-requisito/asociar-nuevo-requisito.component';
import {DialogEliminarComponent} from '../dialogs/dialog-eliminar/dialog-eliminar.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatInput, MatInputModule, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  docSus:string;
  fecha:string;
  estado:string;// Nueva propiedad: País
  accion:string;
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'DNI' , name: '74200697', weight: 'Padilla',docSus:'',fecha:'',estado:'', accion:''},
  { position:'DNI' , name: '74200697', weight: 'Padilla',docSus:'',fecha:'',estado:'', accion:''},

];
@Component({
  selector: 'app-requisitos-agente-supervisado',
  standalone: true,
  imports: [
    MatCardContent,
    MatIcon,
    MatInput,
    MatCard,
    MatLabel,
    MatSelect,
    MatOption,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './requisitos-agente-supervisado.component.html',
  styleUrl: './requisitos-agente-supervisado.component.css'
})
export class RequisitosAgenteSupervisadoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight','docSus','fecha','estado','accion'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  readonly dialog = inject(MatDialog);
  openDialogEliminar() {
    this.dialog.open(DialogEliminarComponent);
  }

  openAsociar() {
    this.dialog.open(AsociarNuevoRequisitoComponent);
  }
}
