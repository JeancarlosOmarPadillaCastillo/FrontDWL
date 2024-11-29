import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {HttpClient} from '@angular/common/http';
export interface PeriodicElement {
  name: string;
  position: string;

}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
export interface PeriodicElement {
  position: string;
  name: string;
}
@Component({
  selector: 'app-maestro-asignaciones-epp',
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
    MatOption,
    MatRow,
    MatRowDef,
    MatSelect,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './maestro-asignaciones-epp.component.html',
  styleUrl: './maestro-asignaciones-epp.component.css'
})
export class MaestroAsignacionesEppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const url = 'http://localhost:8091/sge-consulta-maestras-api/sge/epp/asignaciones/trabajador';
    this.http.get<any>(url).subscribe(
      (response) => {
        // Procesa los datos para adaptarlos a la tabla
        const data = response.map((item: any) => ({
          position: item.tipoEpp.descripcion, // tipo de EPP
          name: '1' // cantidad asignada como string
        }));
        this.dataSource.data = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
