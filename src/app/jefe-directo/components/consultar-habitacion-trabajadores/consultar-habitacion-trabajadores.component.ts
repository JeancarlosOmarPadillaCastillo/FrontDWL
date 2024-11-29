import {Component, inject} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BusquedaAvanzadaComponent} from '../busqueda-avanzada/busqueda-avanzada.component';

export interface DATA {
  agente: string;
  docType: string;
  docNro: string;
  lnamePat: string;
  lnameMat: string;
  names: string;
  state: string;
  req: string;
}
@Component({
  selector: 'app-consultar-habitacion-trabajadores',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatExpansionModule, MatDialogModule],
  templateUrl: './consultar-habitacion-trabajadores.component.html',
  styleUrl: './consultar-habitacion-trabajadores.component.css'
})
export class ConsultarHabitacionTrabajadoresComponent {


  public firstOptionSelected = 'Option 1'
  definitionCell = [
    'agente',
    'docType',
    'docNro',
    'lnamePat',
    'lnameMat',
    'action'
  ]
  definitionCellExpanded = [
    'names',
  ]
  expandedElement: DATA | null | undefined

  ELEMENT_DATA: DATA[] = [
    { agente: 'Bioenergía del Chira S.A', docType: 'DNI', docNro: '07418745', lnameMat: 'Pérez', lnamePat: 'Gonzales', names: 'Juan Luis', state: 'EP', req: 'Requisito 1' },
    { agente: 'Bioenergía del Chira S.A', docType: 'DNI', docNro: '07418745', lnameMat: 'Pérez', lnamePat: 'Gonzales', names: 'Juan Luis', state: 'A', req: 'Requisito 1' },
    { agente: 'Bioenergía del Chira S.A', docType: 'DNI', docNro: '07418745', lnameMat: 'Pérez', lnamePat: 'Gonzales', names: 'Juan Luis', state: 'I', req: 'Requisito 1' },
    { agente: 'Bioenergía del Chira S.A', docType: 'DNI', docNro: '07418745', lnameMat: 'Pérez', lnamePat: 'Gonzales', names: 'Juan Luis', state: 'P', req: 'Requisito 1' },
    { agente: 'Bioenergía del Chira S.A', docType: 'DNI', docNro: '07418745', lnameMat: 'Pérez', lnamePat: 'Gonzales', names: 'Juan Luis', state: 'P', req: 'Requisito 1' }
  ];
  datasource = this.ELEMENT_DATA
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
}
