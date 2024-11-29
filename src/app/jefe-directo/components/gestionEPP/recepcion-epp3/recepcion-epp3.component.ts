import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import {HistorialEppComponent} from '../../../../sst/components/gestion-epp/historial-epp/historial-epp.component';
import {MatrizEppComponent} from '../../../../sst/components/gestion-epp/matriz-epp/matriz-epp.component';
import {
  MaestroAsignacionesEppComponent
} from '../../../../sst/components/gestion-epp/maestro-asignaciones-epp/maestro-asignaciones-epp.component';

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
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1' , stock: 'Ver documento', entrega:'Requisito1' , vida: 'Ver documento'},
  { position:'Requisito2' , name: 'Ver documento', cantidad:'Requisito1' , stock: 'Ver documento', entrega:'Requisito1' , vida: 'Ver documento'},
  { position:'Requisito3' , name: 'Ver documento', cantidad:'Requisito1' , stock: 'Ver documento', entrega:'Requisito1' , vida: 'Ver documento'},
];
const ELEMENT_DATA1: Data[] = [
  { position:'Requisito1' , name: 'Ver documento', cantidad:'Requisito1' },
  { position:'Requisito2' , name: 'Ver documento', cantidad:'Requisito1' },
  { position:'Requisito3' , name: 'Ver documento', cantidad:'Requisito1'},
];
@Component({
  selector: 'app-recepcion-epp3',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatIcon,
    MatHeaderCellDef
  ],
  templateUrl: './recepcion-epp3.component.html',
  styleUrl: './recepcion-epp3.component.css'
})
export class RecepcionEPP3Component {

  displayedColumns: string[] = ['position', 'name', 'cantidad', 'stock', 'entrega', 'vida'];
  displayedColumns1: string[] = ['position', 'name', 'cantidad'];
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
