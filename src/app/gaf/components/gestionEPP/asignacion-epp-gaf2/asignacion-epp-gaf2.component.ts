import {Component, inject, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
import {SolicitarService} from '../../../../services/solicitar.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';



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
  cantidadEntregada: number | null; // Para capturar el valor del input
  eppAsignado: string | null;
  estadoSolicitud: string;
  idEstadoProceso?: number;
  comentario?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-asignacion-epp-gaf2',
  templateUrl: './asignacion-epp-gaf2.component.html',
  standalone: true,
  imports: [
    MatHeaderCell,
    MatColumnDef,
    MatCellDef,
    FormsModule,
    MatCell,
    MatHeaderCellDef,
    MatCard,
    MatCardContent,
    MatIcon,
    MatTable,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatFabButton,
    RouterLink
  ],
  styleUrls: ['./asignacion-epp-gaf2.component.css']
})
export class AsignacionEppGaf2Component implements OnInit {
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
  private endpoint = 'http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/epp/asigna';

  selectedRows = new Set<DetalleSolicitud>();
  constructor(
    private solicitarService: SolicitarService,
    private servicioFavorito: EnvioDeDatosService,
    private http: HttpClient,
    private dialog: MatDialog
  ) {}

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

  aprobaryAsignar(): void {
    console.log('antes')
    this.aprobar();
    console.log('durante')
    this.aprobarAsignacion();
    console.log('despues')
  }

  aprobar(): void {
    const cantidadPendientes = this.dataSource.data.filter((row: DetalleSolicitud) => row.estadoProceso === 'Pendiente').length;
    const totalEpp = this.dataSource.data.length;

    // Se asume que todos los elementos de dataSource deben ser aprobados
    const detalleSeleccionado = this.dataSource.data.map((row: DetalleSolicitud) => row.idDetalle);

    if (detalleSeleccionado.length > 0) {
      const payload = {
        idSolicitud: this.datosRecibidos?.idSolicitud,
        idEmpleado: this.datosRecibidos?.idEmpleado,
        companiaSocio: "01000000",
        detalle: detalleSeleccionado,
        estado: 5, // Estado de aprobado
        bandeja:3,
        totalEpp: totalEpp,
        pendienteEpp: cantidadPendientes,
      };
      console.log('Aprobación exitosa: Payload:', payload);
      console.log('Aprobación exitosa: total de EPP:', totalEpp, 'Pendientes:', cantidadPendientes);

      this.solicitarService.rechazarSolicitud(payload).subscribe(response => {
        // Actualiza el estado de todos los elementos a 'Aprobado' y desactiva los checkboxes
        this.dataSource.data = this.dataSource.data.map(row => ({
          ...row,
          estadoProceso: 'Aprobado',
          disabled: true,
        }));


      }, error => {
        console.error('Error al aprobar:', error);
      });
    } else {
      console.warn('No hay elementos para aprobar.');
    }
  }
  rechazar(comentario: string): void {
    const cantidadPendientes = this.dataSource.data.filter((row: DetalleSolicitud) => row.estadoProceso === 'Pendiente').length;
    const totalEpp = this.dataSource.data.length;

    // Se asume que todos los elementos de dataSource deben ser rechazados
    const detalleSeleccionado = this.dataSource.data.map((row: DetalleSolicitud) => row.idDetalle);

    if (detalleSeleccionado.length > 0) {
      const payload = {
        idSolicitud: this.datosRecibidos?.idSolicitud,
        idEmpleado: this.datosRecibidos?.idEmpleado,
        companiaSocio: "01000000",
        detalle: detalleSeleccionado,
        estado: 6, // Estado de rechazado
        comentario: comentario,
        bandeja: 3,
        totalEpp: totalEpp,
        pendienteEpp: cantidadPendientes,
      };

      console.log('Rechazo exitoso: total de EPP:', totalEpp, 'Pendientes:', cantidadPendientes);

      this.solicitarService.rechazarSolicitud(payload).subscribe(response => {
        // Actualiza el estado de todos los elementos a 'Rechazado' y desactiva los checkboxes
        this.dataSource.data = this.dataSource.data.map(row => ({
          ...row,
          estadoProceso: 'Rechazado',
          disabled: true,
          comentario: comentario, // Guarda el comentario en cada fila
        }));

        // Desactiva los elementos seleccionados y actualiza su estado
        this.selectedRows.forEach(row => {
          if (detalleSeleccionado.includes(row.idDetalle)) {
            row.estadoProceso = 'Rechazado';
            row.disabled = true;
          }
        });
      }, error => {
        console.error('Error al rechazar:', error);
      });
    } else {
      console.warn('No hay elementos para rechazar.');
    }
  }




  aprobarAsignacion(): void {
    // Crear el body para el POST siguiendo el formato requerido
    const body = {
      idEmpleado: this.datosRecibidos?.idEmpleado,
      companiaSocio: "01000000",
      observacion: 'comentario...', // Aquí puedes agregar un comentario más descriptivo si lo deseas
      direccion: "direccion del cargo",
      detalle: this.dataSource.data.map((detalle) => ({
        idDetalleSolicitud: detalle.idDetalle,
        idTipoEpp: detalle.idTipoEpp,
        cantidadEntregada: detalle.cantidadEntregada ?? 0, // Captura el valor ingresado en el input
      }))
    };

    console.log('Body enviado al backend:', body);

    // Configurar los encabezados
    const headers = {
      'Content-Type': 'application/json',

      'ip-client': '127.0.0.1'
    };

    // Realizar la solicitud POST con encabezados personalizados
    this.http.post(this.endpoint, body, { headers }).subscribe(
      (response) => {
        console.log('Asignación aprobada con éxito:', response);
        alert('Asignación aprobada correctamente.');
      },
      (error) => {
        console.error('Error al aprobar asignación:', error);
        alert('Ocurrió un error al aprobar la asignación.');
      }
    );

  }
}
