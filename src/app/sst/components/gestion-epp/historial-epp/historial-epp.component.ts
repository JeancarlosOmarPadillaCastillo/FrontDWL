import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {MatOption} from '@angular/material/core';
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
import {MatIcon} from '@angular/material/icon';
import {HttpClient} from '@angular/common/http';
export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;  // Nueva propiedad: País
  distrito: string;
  estado: string; //
}

// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: PeriodicElement[] = [

];
@Component({
  selector: 'app-historial-epp',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInput,
    MatOption,
    MatSelect,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './historial-epp.component.html',
  styleUrl: './historial-epp.component.css'
})
export class HistorialEppComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'distrito'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  estadoFiltro: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getData();
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      if (!filter) {
        return true;
      }
      return data.estado.toLowerCase().includes(filter);
    };
  }

  applyFilter() {
    this.dataSource.filter = this.estadoFiltro.trim().toLowerCase();
  }

  getData() {
    this.http.get('http://localhost:8091/sge-consulta-maestras-api/sge/epp/asignaciones/historial/trabajador/17030', {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe((response: any) => {
      // Procesar los datos del JSON y mapearlos al formato adecuado
      const data = response.map((item: any) => ({
        position: item.estado ? '29/12/24' : '25/11/24', // Ejemplo de fecha fija; ajusta según lo necesario
        name: item.tipoEpp.descripcion,
        weight: '1', // Ajusta si es necesario
        distrito: item.provincia, // Puedes ajustar esto como desees
        estado: item.estado ? 'Vigente' : 'Vencido'
      }));

      this.dataSource.data = data;
    }, error => {
      console.error('Error al obtener los datos:', error);
    });
  }
}
