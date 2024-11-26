import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {DialogEliminarComponent} from '../dialogs/dialog-eliminar/dialog-eliminar.component';
import {DialogModificarComponent} from '../dialogs/dialog-modificar/dialog-modificar.component';
import {
  DialogInformacionVisitante2Component
} from '../../../medico/components/dialogs/dialog-informacion-visitante2/dialog-informacion-visitante2.component';
import {
  DialogInformacionVisitanteComponent
} from '../dialogs/dialog-informacion-visitante/dialog-informacion-visitante.component';
import {MatFabButton} from '@angular/material/button';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;  // Nueva propiedad: País
  provincia: string;
  distrito: string;
  fecha: string;
  accion:string;
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'DNI' , name: '74200697', weight: 'Padilla',provincia:'Cañete',distrito:'Imperial',fecha:'12/11/2024', accion:''},
  { position:'DNI' , name: '74200697', weight: 'Padilla',provincia:'Cañete',distrito:'Imperial',fecha:'12/11/2024', accion:''},

];
@Component({
  selector: 'app-mantenimiento-agente-supervisado',
  standalone: true,
  imports: [MatCard,
    MatCardContent,
    MatLabel,
    MatOption,
    MatSelect,
    MatTable,
    MatDatepicker,
    MatDatepickerToggle,
    MatDatepickerInput,
    ReactiveFormsModule,
    MatInput,
    MatIcon,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatHeaderCellDef, MatFormFieldModule,
    MatInputModule, MatFabButton],
  templateUrl: './mantenimiento-agente-supervisado.component.html',
  styleUrl: './mantenimiento-agente-supervisado.component.css'
})
export class MantenimientoAgenteSupervisadoComponent {
  displayedColumns: string[] = ['position', 'name', 'weight','provincia','distrito','fecha','accion'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  readonly dialog = inject(MatDialog);
  openDialogEliminar() {
    this.dialog.open(DialogEliminarComponent);
  }
  openDialog1() {
    this.dialog.open(DialogInformacionVisitanteComponent);
  }
}
