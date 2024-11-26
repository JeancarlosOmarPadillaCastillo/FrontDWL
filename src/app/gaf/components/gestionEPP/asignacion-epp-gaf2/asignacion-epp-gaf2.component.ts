import {Component, inject} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {HistorialEppComponent} from '../../../../sst/components/gestion-epp/historial-epp/historial-epp.component';
import {MatrizEppComponent} from '../../../../sst/components/gestion-epp/matriz-epp/matriz-epp.component';
import {
  MaestroAsignacionesEppComponent
} from '../../../../sst/components/gestion-epp/maestro-asignaciones-epp/maestro-asignaciones-epp.component';
import {DateAdapter, MatNativeDateModule, MatOption} from '@angular/material/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatDatepicker, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {MatSelect} from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatAccordion, MatExpansionModule, MatExpansionPanel, MatExpansionPanelTitle} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export interface PeriodicElement {
  name: string;
  position: string;
  cantidad:string;
  stock:string;
  entrega:string;
  vida:string;
  // Nueva propiedad: País
}
export interface Data {
  name: string;
  position: string;
  cantidad: string;
}
// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'Nuevo trabajador' , name: 'Casco de seguridad', cantidad:'1' , stock: '50', entrega:'Requisito1' , vida: '--'},
  { position:'Nueva actividad' , name: 'Botiquín de seguridad', cantidad:'1' , stock: '30', entrega:'Requisito1' , vida: '1 año'},
  { position:'Desgaste de EPP' , name: 'Pantalón de stock', cantidad:'1' , stock: '20', entrega:'Requisito1' , vida: '--'},
];
const ELEMENT_DATA1: Data[] = [
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1' },
  { position:'Requisito2' , name: 'Ver documento', cantidad:'Requisito1' },
  { position:'Requisito3' , name: 'Ver documento', cantidad:'Requisito1'},
];
@Component({
  selector: 'app-asignacion-epp-gaf2',
  standalone: true,
  providers: [
    // Esto asegura que haya un proveedor de DateAdapter.
    { provide: DateAdapter, useClass: MatNativeDateModule }
  ],
  imports: [
    MatCard,
    MatCardContent,
    MatDatepicker,
    MatDatepickerToggle,
    MatFabButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
    MatSuffix,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatButton,
    MatPaginator,
    RouterLink,
    MatCheckbox,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
  ],

  templateUrl: './asignacion-epp-gaf2.component.html',
  styleUrl: './asignacion-epp-gaf2.component.css'
})
export class AsignacionEppGaf2Component {
  displayedColumns: string[] = ['position', 'name','cantidad','stock','entrega','vida'];
  displayedColumns1: string[] = ['position', 'name','cantidad'];
  datasource = new MatTableDataSource(ELEMENT_DATA);
  dataSource = new MatTableDataSource(ELEMENT_DATA1);
  readonly dialog = inject(MatDialog);
  historialEpp() {
    this.dialog.open(HistorialEppComponent);
  }
  matrizEpp() {
    this.dialog.open(MatrizEppComponent);
  }
  maestroAsignacionesEpp() {
    this.dialog.open(MaestroAsignacionesEppComponent);
  }
  activeIndex: number | null = null; // Indica qué sección está activa

  toggleAccordion(index: number): void {
    // Si se selecciona el mismo índice, cierra el acordeón
    if (this.activeIndex === index) {
      this.activeIndex = null;
    } else {
      this.activeIndex = index; // Activa el nuevo índice
    }
  }
}
