import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogEstadoHabilitacionComponent} from '../dialog-estado-habilitacion/dialog-estado-habilitacion.component';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormFieldModule, MatHint, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from '@angular/material/datepicker';
import {
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFabButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
export interface DATA {
  fechaProg: string;
  agente: string;
  sector: string;
  req: string;
  state: string
}

const ELEMENT_DATA: DATA[] = [
  { fechaProg: '01/03/2024', agente: 'Empresa 3', sector: 'Costa', req: '0', state: 'A' },
  { fechaProg: '03/05/2024', agente: 'Empresa 1', sector: 'Costa', req: '0', state: 'I' },
  { fechaProg: '14/10/2024', agente: 'Bioenergía del Chira S.A', sector: 'Costa', req: '1', state: 'EP' },

]
@Component({
  selector: 'app-estado-habilitacion',
  standalone: true,
  imports: [
    MatCardContent,
    MatLabel,
    MatSelect,
    MatOption,
    MatHint,
    MatDatepickerToggle,
    MatDatepicker,
    MatTable,
    MatCard,
    MatDatepickerInput,
    MatInput,
    MatSuffix,
    MatFabButton,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCellDef,
    NgIf,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatIcon,MatDatepickerModule,
    MatNativeDateModule,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './estado-habilitacion.component.html',
  styleUrl: './estado-habilitacion.component.css'
})
export class EstadoHabilitacionComponent {

  displayedColumns: string[] = [
    'fechaProg', 'agente', 'sector', 'req', 'state'
  ];
  datasource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogEstadoHabilitacionComponent);
  }
}
