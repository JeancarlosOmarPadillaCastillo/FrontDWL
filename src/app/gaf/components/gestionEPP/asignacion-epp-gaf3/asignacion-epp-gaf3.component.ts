import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {SolicitarService} from '../../../../services/solicitar.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
import {MatDialog} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatIcon} from '@angular/material/icon';
import {MatFabButton} from '@angular/material/button';
import {MatInput} from '@angular/material/input';
import {RouterLink} from '@angular/router';
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
  idEstadoProceso?: number;
  comentario?: string;
  disabled?: boolean; // Nueva propiedad para el estado
}

export interface Data {
  name: string;
  position: string;
  cantidad: string;
}
// Los datos que se mostrarán en la tabla, incluyendo las nuevas columnas
const ELEMENT_DATA: DetalleSolicitud[] = [];
@Component({
  selector: 'app-asignacion-epp-gaf3',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatIcon,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFabButton,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatInput,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    MatHeaderCellDef
  ],
  templateUrl: './asignacion-epp-gaf3.component.html',
  styleUrl: './asignacion-epp-gaf3.component.css'
})
export class AsignacionEppGaf3Component implements OnInit{
  displayedColumns: string[] = ['position', 'name','cantidad','stock','entrega','vida'];
  displayedColumns1: string[] = ['position', 'name','cantidad'];
  datasource = new MatTableDataSource<DetalleSolicitud>([]);
  datosRecibidos: any;
  selectedRows = new Set<DetalleSolicitud>();

  private endpoint = 'http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/accion';

  constructor(
    private solicitarService: SolicitarService,
    private servicioFavorito: EnvioDeDatosService,
    private dialog: MatDialog,
    private http: HttpClient
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
      (response: DetalleSolicitud[]) => {
        console.log('Detalles de la solicitud:', response);

        // Asigna los datos directamente al datasource
        this.datasource.data = response;
      },
      (error) => {
        console.error('Error al obtener detalles de la solicitud:', error);
      }
    );
  }


  aprobar(): void {
    // Convierte las filas seleccionadas en un array
    const selectedRowsArray = Array.from(this.selectedRows);

    // Mapea los ids de las filas seleccionadas
    const detalleSeleccionado = selectedRowsArray.map((row: DetalleSolicitud) => row.idDetalle);

    // Calcula la cantidad total de idDetalle seleccionados
    const cantidadTotalDetalles = detalleSeleccionado.length;

    // Calcula cuántos elementos en la columna Estado tienen 'Pendiente', restando 1 al total


    // Imprime información para verificar los cálculos
    console.log('Cantidad total de idDetalle seleccionados:', cantidadTotalDetalles);
    console.log('Cantidad de idDetalle en estado pendiente (con ajuste -1):');
    const totalEpp=0;

    // Prepara el payload para enviar al servicio
    const payload = {
      idSolicitud: this.datosRecibidos?.idSolicitud,
      idEmpleado: this.datosRecibidos?.idEmpleado,
      companiaSocio: "01000000",
      detalle: detalleSeleccionado,
      estado: '1',
      comentario: '',
      bandeja: 1,
      totalEpp: totalEpp, // Propiedad global actualizada
      pendienteEpp: '', // Propiedad global actualizada
    };

    // Llama al servicio para realizar la acción
    this.solicitarService.rechazarSolicitud(payload).subscribe(response => {
      console.log('Registro exitoso:',totalEpp);
      this.actualizarTabla(); // Refresca la tabla después de la operación
    }, error => {
      console.error('Error al registrar:', error);
    });
  }


  rechazarSolicitud(comentario: string): void {
    const idsDetalle = Array.from(this.selectedRows).map(row => row.idDetalle);
    const totalEpp=0;

    const requestPayload = {
      idSolicitud: this.datosRecibidos.idSolicitud,
      idEmpleado: this.datosRecibidos.idEmpleado,
      companiaSocio: "01000000",
      detalle: idsDetalle,
      estado: 2, // Estado de rechazado
      comentario: comentario,
      bandeja: 1,
      totalEpp: totalEpp,
      pendienteEpp: '',
    };

    this.solicitarService.asignar(requestPayload).subscribe(response => {
      console.log('Rechazo exitoso:', response);
      alert('Solicitud rechazada correctamente.');
      this.actualizarTabla('Rechazado');
    }, error => {
      console.error('Error al rechazar:', error);
      alert('Ocurrió un error al intentar rechazar la solicitud.');
    });
  }

  actualizarTabla(nuevoEstado?: string): void {


  }






}
