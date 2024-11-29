import {Component, Inject, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatCard, MatCardContent} from '@angular/material/card';
import {HttpClient} from '@angular/common/http';
export interface EppItem {
  tipoEpp?: {
    descripcion: string;
  };
  puestoEmpresa?: {
    descripcion: string;
  };
  cantidad: number;
}

export interface PeriodicElement {
  tipoEppDescripcion: string; // Descripción del EPP
  cantidad: number;           // Cantidad
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas

@Component({
  selector: 'app-matriz-epp',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatCard,
    MatCardContent,
    MatHeaderCellDef
  ],
  templateUrl: './matriz-epp.component.html',
  styleUrl: './matriz-epp.component.css'
})
export class MatrizEppComponent{
  displayedColumns: string[] = ['tipoEppDescripcion', 'cantidad']; // Columnas de la tabla
  dataSource = [
    { descripcion: 'Botín dieléctricos', cantidad: 1 },
    { descripcion: 'Camisa de trabajo', cantidad: 1 },
    { descripcion: 'Chaleco Osinergmin', cantidad: 1 },
    { descripcion: 'Bloqueador Solar', cantidad: 2 }
  ]; // Fuente de datos para la tabla

  constructor(@Inject(MAT_DIALOG_DATA) public data: { datosRecibidos: EppItem[]; puesto: string }) {}

}
