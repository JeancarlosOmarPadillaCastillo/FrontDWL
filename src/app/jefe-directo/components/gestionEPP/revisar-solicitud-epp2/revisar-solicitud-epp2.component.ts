import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatDatepicker, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {DateAdapter, MatNativeDateModule, MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {RouterLink} from '@angular/router';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatDialog} from '@angular/material/dialog';
import {RechazoEppComponent} from '../rechazo-epp/rechazo-epp.component';
import {SolicitarService} from '../../../../services/solicitar.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';


export interface DetalleSolicitud {
  idDetalle: number;
  estadoProceso: string;
  idMotivoSolicitudEpp: string;
  motivoDescripcion: string;
  idTipoEpp: number;
  tipoEppDescripcion: string;
  nuevaActividad: string | null;
  cantidadSolicitada: number | null;
  cantidadAprobada: number;
  cantidadEntregada: number;
  eppAsignado: string | null;
  estadoSolicitud: string;
  comentario?: string;
}

@Component({
  selector: 'app-revisar-solicitud-epp2',
  providers: [
    // Esto asegura que haya un proveedor de DateAdapter.
    { provide: DateAdapter, useClass: MatNativeDateModule }
  ],
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatFabButton,
    MatIcon,
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
    MatPaginator,
    RouterLink,
    MatCheckbox,
  ],
  templateUrl: './revisar-solicitud-epp2.component.html',
  styleUrl: './revisar-solicitud-epp2.component.css'
})
export class RevisarSolicitudEPP2Component implements OnInit {
  displayedColumns: string[] = [
    'position',
    'tipoEppDescripcion',
    'cantidadAprobada',
    'motivoDescripcion',
    'nuevaActividad',
    'estadoSolicitud',
  ];
  dataSource = new MatTableDataSource<DetalleSolicitud>([]);
  datosRecibidos: any;
  selectedRows = new Set<DetalleSolicitud>();

  private endpoint = 'http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/accion';

  constructor(
    private solicitarService: SolicitarService,
    private servicioFavorito: EnvioDeDatosService,
    private dialog: MatDialog,
    private http: HttpClient // Inyectar HttpClient
  ) {
  }

  ngOnInit(): void {
    this.servicioFavorito.data$.subscribe((data) => {
      this.datosRecibidos = data;
      if (this.datosRecibidos?.idSolicitud) {
        this.cargarDetallesSolicitud(this.datosRecibidos.idSolicitud);
      }
    });
  }

  cargarDetallesSolicitud(idSolicitud: string): void {
    this.solicitarService.obtenerDetallesSolicitud(idSolicitud).subscribe(
      (response) => {
        console.log('Detalles de la solicitud:', response);
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Error al obtener detalles de la solicitud:', error);
      }
    );
  }

  toggleSelection(row: DetalleSolicitud): void {
    // Solo modificar si no está en estado Aprobado, Aprobado Parcialmente o Rechazado
    if (row.estadoSolicitud !== 'Aprobado' && row.estadoSolicitud !== 'Aprobado parcialmente' && row.estadoSolicitud !== 'Rechazado') {
      if (this.selectedRows.has(row)) {
        this.selectedRows.delete(row);
      } else {
        this.selectedRows.add(row);
      }
    }
  }

  toggleAll(event: any): void {
    if (event.checked) {
      // Seleccionar todos los registros si no están en estado Aprobado, Aprobado Parcialmente o Rechazado
      this.dataSource.data.forEach((row) => {
        if (row.estadoSolicitud !== 'Aprobado' && row.estadoSolicitud !== 'Aprobado parcialmente' && row.estadoSolicitud !== 'Rechazado') {
          this.selectedRows.add(row);
        }
      });
    } else {
      this.selectedRows.clear();
    }
  }


  isAllSelected(): boolean {
    const numSelected = this.selectedRows.size;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  isSomeSelected(): boolean {
    const numSelected = this.selectedRows.size;
    const numRows = this.dataSource.data.length;
    return numSelected > 0 && numSelected < numRows;
  }

  isSelected(row: DetalleSolicitud): boolean {
    return this.selectedRows.has(row);
  }

  openDialogRechazo(): void {
    const dialogRef = this.dialog.open(RechazoEppComponent, {
      width: '500px', // Puedes ajustar el tamaño
      data: { detalleSolicitud: this.selectedRows }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí actualizas el estado y el comentario de las filas seleccionadas
        this.rechazarSolicitud(result.comentario);
      }
    });
  }


  aprobar(): void {
    const detalleSeleccionado = Array.from(this.selectedRows).map((row) => row.idDetalle);
    const totalEpp = this.dataSource.data.length;
    const pendienteEpp = totalEpp - detalleSeleccionado.length;

    const payload = {
      idSolicitud: this.datosRecibidos?.idSolicitud,
      idEmpleado: this.datosRecibidos?.idEmpleado,
      companiaSocio: "01000000",
      detalle: detalleSeleccionado,
      estado: '1', // Cambiar estado a 3 si todos fueron aprobados
      comentario: '',
      bandeja: 1,
      totalEpp: totalEpp,
      pendienteEpp: pendienteEpp,
    };

    console.log('Payload enviado al backend:', payload);

    const headers = new HttpHeaders({
      'ip-client': '127.0.0.1',
    });

    this.http.put(this.endpoint, payload, { headers }).subscribe({
      next: (response) => {
        console.log('Aprobación exitosa:', response);

        // Actualizar estados y mantener los registros en la tabla
        this.dataSource.data.forEach((row) => {
          if (detalleSeleccionado.includes(row.idDetalle)) {
            row.estadoSolicitud = payload.estado === '3' ? 'Aprobado' : 'Aprobado parcialmente';
          }
        });

        // Limpiar las filas seleccionadas
        this.selectedRows.clear();

        // Refrescar la tabla para que se actualicen los checkboxes
        this.dataSource._updateChangeSubscription();
      },
      error: (error) => {
        console.error('Error al aprobar:', error);
      },
    });
  }

// Verificar si un registro está pendiente
  isPending(row: DetalleSolicitud): boolean {
    return row.estadoSolicitud === 'Pendiente';
  }

// Deshabilitar checkbox si el estado es aprobado o aprobado parcialmente
  isCheckboxDisabled(row: DetalleSolicitud): boolean {
    return row.estadoSolicitud === 'Aprobado' || row.estadoSolicitud === 'Aprobado parcialmente';
  }

// Marcar el checkbox si el estado es aprobado o aprobado parcialmente
  isCheckboxChecked(row: DetalleSolicitud): boolean {
    return row.estadoSolicitud === 'Aprobado' || row.estadoSolicitud === 'Aprobado parcialmente';
  }

// Verificar si hay algún pendiente en la solicitud
  hasPending(): boolean {
    return this.dataSource.data.some((row) => this.isPending(row));
  }


  // Agregar esta función en tu componente
  rechazarSolicitud(comentario: string): void {
    // Verifica si hay algún detalle en estado "PENDIENTE"
    const tienePendientes = this.dataSource.data.some(row => row.estadoSolicitud === 'Pendiente');

    if (tienePendientes) {
      console.warn('No se puede enviar la solicitud porque hay detalles con estado PENDIENTE.');
      alert('Aún existen detalles en estado PENDIENTE. Por favor, revisa.');
      return; // Detenemos el proceso
    }

    // Si no hay pendientes, procedemos a construir el payload y enviar la solicitud
    const idsDetalle = Array.from(this.selectedRows).map(row => row.idDetalle);
    const totalEpp = this.dataSource.data.length; // Total de EPP en general
    const pendienteEpp = 0; // Ningún EPP pendiente porque la validación anterior lo asegura

    const requestPayload = {
      idSolicitud: this.datosRecibidos.idSolicitud,
      idEmpleado: this.datosRecibidos.idEmpleado,
      companiaSocio: this.datosRecibidos.companiaSocio,
      detalle: idsDetalle,
      estado: 2, // Estado de "Rechazado"
      comentario: comentario,
      bandeja: 1, // Bandeja correspondiente
      totalEpp: totalEpp,
      pendienteEpp: pendienteEpp
    };

    this.solicitarService.rechazarSolicitud(requestPayload).subscribe(response => {
      console.log('Rechazo exitoso:', response);
      alert('Solicitud rechazada correctamente.');
      this.actualizarTabla(); // Actualiza la tabla para reflejar cambios
    }, error => {
      console.error('Error al rechazar:', error);
      alert('Ocurrió un error al intentar rechazar la solicitud.');
    });
  }
  actualizarTabla(): void {
    this.cargarDetallesSolicitud(this.datosRecibidos.idSolicitud); // Vuelve a cargar los datos del backend
  }

}
