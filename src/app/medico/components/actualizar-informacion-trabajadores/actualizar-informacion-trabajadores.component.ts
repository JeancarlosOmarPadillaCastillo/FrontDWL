import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFabButton} from '@angular/material/button';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {
  BusquedaAvanzadaComponent
} from '../../../jefe-directo/components/busqueda-avanzada/busqueda-avanzada.component';
import {
  DialogInformacionVisitanteComponent
} from '../dialogs/dialog-informacion-visitante/dialog-informacion-visitante.component';
export interface DATA {
  docType: string;
  docNro: string;
  lnamePat: string;
  lnameMat: string;
  names: string;
  gerencia: string;
  cargo: string;
  oficina: string;
}

const ELEMENT_DATA: DATA[] = [
  { docType: 'DNI', docNro: '07438220', lnamePat: 'Pérez', lnameMat: 'Gonzales', names: 'Juan Luis', gerencia: 'Auditor', cargo: 'Gerencia 1', oficina: 'Ica' },
]

@Component({
  selector: 'app-actualizar-informacion-trabajadores',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardContent,
    MatLabel,
    MatSelect,
    MatOption,
    MatInput,
    MatFabButton,
    MatTable,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './actualizar-informacion-trabajadores.component.html',
  styleUrl: './actualizar-informacion-trabajadores.component.css'
})
export class ActualizarInformacionTrabajadoresComponent {

  displayedColumns: string[] = [
    'docType', 'docNro', 'lnamePat', 'lnameMat', 'names', 'gerencia', 'cargo', 'sector', 'oficina', 'action'
  ];
  datasource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
  openDialogSolicitud() {
    this.dialog.open(DialogInformacionVisitanteComponent);
  }
}
