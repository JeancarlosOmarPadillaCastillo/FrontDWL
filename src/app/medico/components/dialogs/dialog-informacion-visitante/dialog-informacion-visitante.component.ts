import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {
  DialogInformacionVisitante2Component
} from '../dialog-informacion-visitante2/dialog-informacion-visitante2.component';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput, MatInputModule} from '@angular/material/input';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';
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
  selector: 'app-dialog-informacion-visitante',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatLabel,
    MatSelect,
    MatOption,
    MatInput,
    MatDialogClose,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderCellDef,
    MatCellDef,
    MatCheckbox,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './dialog-informacion-visitante.component.html',
  styleUrl: './dialog-informacion-visitante.component.css'
})
export class DialogInformacionVisitanteComponent {
  displayedColumns: string[] = [
    'fechaProg', 'agente', 'sector'
  ];
  dataSource = ELEMENT_DATA;
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogInformacionVisitante2Component);
  }
}
