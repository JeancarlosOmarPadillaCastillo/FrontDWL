import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {
  MatDatepicker, MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatFormField, MatHint, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatOption, provideNativeDateAdapter} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {MatInput} from '@angular/material/input';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';

export interface PeriodicElement {
  id:number;
  name: string;
  position: string;
  cantidad: string;
  accion: string;
}

@Component({
  selector: 'app-recepcion-epp',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFabButton,
    MatFormField,
    MatIcon,
    MatOption,
    MatSelect,
    ReactiveFormsModule,
    RouterLink,
    MatInput,
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
    FormsModule,
    MatLabel
  ],
  templateUrl: './recepcion-epp.component.html',
  styleUrl: './recepcion-epp.component.css',
  providers: [provideNativeDateAdapter()],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecepcionEPPComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'cantidad', 'accion'];
  datasource = new MatTableDataSource<PeriodicElement>();
  estado: string = '';
  vencido: string = '';
  fechaSolicitud: string = '';

  constructor(private http: HttpClient, private servicioFavorito:EnvioDeDatosService) {}
  limpiarFormulario() {
    this.estado = '';
    this.vencido = '';
    this.fechaSolicitud = '';
  }
  ngOnInit() {
    this.listarSolicitudTrabajador().subscribe((data) => {
      // Transformar y ordenar los datos por fecha de lo más reciente a lo más antiguo
      const sortedData = data
        .map((item: any) => ({
          position: item.fechaSolicitud, // Campo fechaSolicitud
          name: item.estadoProceso,      // Campo estado
          cantidad: item.eppVencido,     // Campo eppVencido
          accion: '',
          id: item.idSolicitud,          // ID de la solicitud
        }))
        .sort((a: PeriodicElement, b: PeriodicElement) => {
          const fechaA = this.convertToDate(a.position);
          const fechaB = this.convertToDate(b.position);
          return fechaB.getTime() - fechaA.getTime(); // Orden descendente
        });

      // Asignar los datos ordenados al dataSource
      this.datasource.data = sortedData;
    });
  }

// Función para convertir una fecha en formato 'dd/mm/yy HH:mm' a un objeto Date
  private convertToDate(dateString: string): Date {
    const [date, time] = dateString.split(' ');
    const [day, month, year] = date.split('/');
    const [hours, minutes] = time.split(':');

    // Ajustar el año a 20xx si es de dos dígitos
    const fullYear = parseInt(year, 10) + 2000;

    return new Date(fullYear, parseInt(month, 10) - 1, parseInt(day, 10), parseInt(hours, 10), parseInt(minutes, 10));
  }

  listarSolicitudTrabajador(): Observable<any> {
    return this.http.get(
      `http://localhost:8095/sge-solicitud-epp-api/sge/solicitudes?vencido=1&bandeja=4&idEmpleado=286&fechaFin=2024-12-30&fechaInicio=2024-11-18`
    );
  }

  agregarFavorito(element: any): void {
    this.servicioFavorito.enviarDatos(element);
  }

}
