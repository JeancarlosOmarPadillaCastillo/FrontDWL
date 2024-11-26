import {Component, inject} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {SideBarLeftComponent} from "../../side-bar-left/side-bar-left.component";
import {BusquedaAvanzadaComponent} from "../busqueda-avanzada/busqueda-avanzada.component";
import {AccionGestionDeIngresosComponent} from "../accion-gestion-de-ingresos/accion-gestion-de-ingresos.component";

export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  age: string;       // Nueva propiedad: Edad
  address: string;   // Nueva propiedad: Dirección
  email: string;     // Nueva propiedad: Correo electrónico
  phone: string;     // Nueva propiedad: Teléfono
  country: string;   // Nueva propiedad: País
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [
  { position:'DNI' , name: '74200697', weight: 'Padilla', symbol: 'Castillo', age: 'Omar', address: 'Especialista1', email: 'Gerencia1', phone: 'Lima', country: '' },
  { position:'DNI' , name: '74200697', weight: 'Padilla', symbol: 'Castillo', age: 'Omar', address: 'Especialista1', email: 'Gerencia1', phone: 'Lima', country: '' },

];
@Component({
  selector: 'app-gestion-de-ingresos',
  standalone: true,
  imports: [
    MatCardContent,
    MatLabel,
    MatSelect,
    MatOption,
    MatIcon,
    MatInput,
    MatCard,
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
  templateUrl: './gestion-de-ingresos.component.html',
  styleUrl: './gestion-de-ingresos.component.css'
})
export class GestionDeIngresosComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'age', 'address', 'email', 'phone', 'country'];

  // Usamos los datos con las nuevas columnas
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  readonly dialog = inject(MatDialog);
  openDialogBusqueda() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
  openDialogAccion() {
    this.dialog.open(AccionGestionDeIngresosComponent);
  }
}
