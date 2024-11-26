import {Component, inject} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {
  BusquedaAvanzadaComponent
} from '../../../../jefe-directo/components/busqueda-avanzada/busqueda-avanzada.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {RouterLink} from '@angular/router';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
export interface DATA {
  nombre: string;
  docType: string;
  docNro: string;
  lnamePat: string;
  lnameMat: string;
  names: string;
  estado: string;

  vencido:string;
  fecha: string;
}

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-asignacion-epp-gaf',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatExpansionModule, MatDialogModule, MatDatepicker, MatDatepickerToggle, RouterLink,
    MatDatepickerModule,
    MatNativeDateModule, ReactiveFormsModule],
  providers: [
    { useClass: MatNativeDateModule,provide:provideNativeDateAdapter()} // Asegúrate de esta línea
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './asignacion-epp-gaf.component.html',
  styleUrl: './asignacion-epp-gaf.component.css'
})
export class AsignacionEppGafComponent {

  public firstOptionSelected = 'Option 1'
  definitionCell = [

    'docType',
    'docNro',
    'lnamePat',
    'lnameMat',
    'nombre',
    'estado',
    'fecha',

    'vencido',
    'action'
  ]
  definitionCellExpanded = [
    'names',
  ]
  expandedElement: DATA | null | undefined

  ELEMENT_DATA: DATA[] = [
    { nombre: 'Jeancarlos', docType: 'DNI', docNro: '07418745', lnameMat: 'Pérez', lnamePat: 'Gonzales', names: 'Asistente contable', estado: 'Pendiente', fecha: '13-11-24',vencido:'' },
    { nombre: 'Juana', docType: 'DNI', docNro: '71254865', lnameMat: 'Galvez', lnamePat: 'Sanchez', names: 'Asistente contable', estado: 'Pendiente', fecha: '14-11-24',vencido:'3Vencidos' },
    { nombre: 'Isabel', docType: 'DNI', docNro: '75481236', lnameMat: 'Marcelo', lnamePat: 'Rojas', names: 'Asistente contable', estado: 'Atendido parcialmente', fecha: '14-11-24',vencido:'' },
    { nombre: 'Carlos', docType: 'DNI', docNro: '742589614', lnameMat: 'Munayco', lnamePat: 'Castillo', names: 'Asistente contable', estado: 'Pendiente', fecha: '15-11-24',vencido:'2Vencidos' },
    { nombre: 'Maria', docType: 'DNI', docNro: '74518926', lnameMat: 'Hernandéz', lnamePat: 'Rosas', names: 'Asistente contable', estado: 'Pendiente', fecha: '16-11-24',vencido:'' },

  ];
  datasource = this.ELEMENT_DATA
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });
  readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(year, month, 15)),
    end: new FormControl(new Date(year, month, 19)),
  });
}
