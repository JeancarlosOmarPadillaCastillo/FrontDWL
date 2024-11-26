import {Component, inject} from '@angular/core';
import {
  DialogSolicitudConfirmacionComponent
} from '../dialog-solicitud-confirmacion/dialog-solicitud-confirmacion.component';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatCard, MatCardContent} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
export interface DATA {
  fechaProg: string;
  agente: string;
  sector: string;
}

const ELEMENT_DATA: DATA[] = [
  { fechaProg: '01/03/2024', agente: 'Empresa 3', sector: 'Costa' },
  { fechaProg: '03/05/2024', agente: 'Empresa 1', sector: 'Costa' },
  { fechaProg: '14/10/2024', agente: 'Bioenergía del Chira S.A', sector: 'Costa' },

]
@Component({
  selector: 'app-dialog-solicitud',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatDialogContent,
    MatCard,
    MatCardContent,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatLabel,
    MatSelect,
    MatOption,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-solicitud.component.html',
  styleUrl: './dialog-solicitud.component.css'
})
export class DialogSolicitudComponent {
  displayedColumns: string[] = [
    'fechaProg', 'agente', 'sector'
  ];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogSolicitudConfirmacionComponent);
  }
}
