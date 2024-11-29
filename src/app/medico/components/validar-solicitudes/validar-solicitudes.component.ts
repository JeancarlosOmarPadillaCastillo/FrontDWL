import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {
  BusquedaAvanzadaComponent
} from '../../../jefe-directo/components/busqueda-avanzada/busqueda-avanzada.component';
import {DialogSolicitudComponent} from '../dialogs/dialog-solicitud/dialog-solicitud.component';
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
export interface DATA {
  docType: string;
  docNro: string;
  lnamePat: string;
  lnameMat: string;
  names: string;
  cargo: string;
  agente: string;
  sector: string;
}

const ELEMENT_DATA: DATA[] = [
  { docType: 'DNI', docNro: '07428745', lnamePat: 'Pérez', lnameMat: 'Gonzales', names: 'Juan Luis', cargo: 'Auditor', agente: 'Bioenergía del Chira S.A', sector: 'Costa' },
  { docType: 'DNI', docNro: '72348759', lnamePat: 'Mendoza', lnameMat: 'Suarez', names: 'Rosa', cargo: 'Puesto 3', agente: 'Shell GNL Perú S.A.C', sector: 'Costa' },
  { docType: 'DNI', docNro: '47829073', lnamePat: 'Ramos', lnameMat: 'Sosa', names: 'Luis', cargo: 'Puesto 2', agente: 'Agente 2', sector: 'Costa' },
]
@Component({
  selector: 'app-validar-solicitudes',
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
  templateUrl: './validar-solicitudes.component.html',
  styleUrl: './validar-solicitudes.component.css'
})
export class ValidarSolicitudesComponent {

  displayedColumns: string[] = [
    'docType', 'docNro', 'lnamePat', 'lnameMat', 'names', 'cargo', 'agente', 'sector', 'action'
  ];
  datasource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
  openDialogSolicitud() {
    this.dialog.open(DialogSolicitudComponent);
  }
}
