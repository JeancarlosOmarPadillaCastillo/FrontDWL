import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatFabButton} from '@angular/material/button';
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
import {MatCheckbox} from '@angular/material/checkbox';
import {SolicitarService} from '../../../../services/solicitar.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {RechazoEppComponent} from '../rechazo-epp/rechazo-epp.component';
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
  selector: 'app-recepcion-epp2',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    RouterLink,
    MatHeaderCellDef,
    MatCheckbox,
    MatFabButton
  ],
  templateUrl: './recepcion-epp2.component.html',
  styleUrl: './recepcion-epp2.component.css'
})
export class RecepcionEPP2Component  implements OnInit{
  displayedColumns: string[] = ['position', 'name','cantidad','tipo','observacion'];
  dataSource = new MatTableDataSource<DetalleSolicitud>([]);
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
      console.log('Valor de datosRecibidos:', this.datosRecibidos); // Aquí imprimes el valor recibido
      if (this.datosRecibidos?.id) {
        this.cargarDetallesSolicitud(this.datosRecibidos.id);
      }
    });
  }

  cargarDetallesSolicitud(idSolicitud: string): void {
    this.solicitarService.obtenerDetallesSolicitud(idSolicitud).subscribe(
      (response) => {
        console.log('Detalles de la solicitud:', response);
        this.dataSource.data = response.map((row: DetalleSolicitud) => ({
          ...row,
          disabled: row.estadoProceso !== 'Pendiente', // Deshabilitar si no está en Pendiente
        }));
      },
      (error) => {
        console.error('Error al obtener detalles de la solicitud:', error);
      }
    );
  }


  toggleSelection(row: DetalleSolicitud): void {
    if (row.estadoSolicitud !== 'Aprobado' && row.estadoSolicitud !== 'Rechazado') {
      if (this.selectedRows.has(row)) {
        this.selectedRows.delete(row);
      } else {
        this.selectedRows.add(row);
      }
    }
  }

  toggleAll(event: any): void {
    if (event.checked) {
      this.dataSource.data.forEach((row) => {
        this.selectedRows.add(row);
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
      width: '400px',
      data: { comentario: '' }, // Puedes pasar más datos si lo necesitas
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Si se cierra con datos (comentario ingresado), procesa el rechazo
        const detalleSeleccionado = Array.from(this.selectedRows)
          .filter((row: DetalleSolicitud) => row.estadoProceso === 'Pendiente')
          .map((row: DetalleSolicitud) => row.idDetalle);

        if (detalleSeleccionado.length > 0) {
          this.rechazar(detalleSeleccionado, result.comentario);
        } else {
          console.warn('No hay elementos pendientes seleccionados para rechazar.');
        }
      }
    });
  }


  aprobar(): void {
    const cantidadPendientes = this.dataSource.data.filter((row: DetalleSolicitud) => row.estadoProceso === 'Pendiente').length;
    const totalEpp = this.dataSource.data.length;
    const detalleSeleccionado = Array.from(this.selectedRows)
      .filter((row: DetalleSolicitud) => row.estadoProceso === 'Pendiente')
      .map((row: DetalleSolicitud) => row.idDetalle);

    if (detalleSeleccionado.length > 0) {
      const payload = {
        idSolicitud: this.datosRecibidos?.idSolicitud,
        idEmpleado: this.datosRecibidos?.idEmpleado,
        companiaSocio: "01000000",
        detalle: detalleSeleccionado,
        estado: 7, // Estado de aprobado
        bandeja: 4,
        totalEpp: totalEpp,
        pendienteEpp: cantidadPendientes,
      };
      console.log('Aprobación exitosa: total de EPP:',totalEpp+'Pendiente', cantidadPendientes);
      this.solicitarService.rechazarSolicitud(payload).subscribe(response => {

        // Actualiza el estado de los elementos seleccionados a 'Aprobado' y desactiva los checkboxes
        this.dataSource.data = this.dataSource.data.map(row => {
          if (detalleSeleccionado.includes(row.idDetalle)) {
            return {
              ...row,
              estadoProceso: 'Aprobado', // Cambia a Aprobado
              disabled: true,            // Desactiva el checkbox
            };
          }
          return row; // Devuelve las demás filas sin cambios
        });

        // Mantiene los elementos seleccionados y deshabilitados
        this.selectedRows.forEach(row => {
          if (detalleSeleccionado.includes(row.idDetalle)) {
            row.estadoProceso = 'Aprobado';
            row.disabled = true;
          }
        });
      }, error => {
        console.error('Error al aprobar:', error);
      });
    } else {
      console.warn('No hay elementos pendientes seleccionados para aprobar.');
    }
  }


  rechazar(detalleSeleccionado: number[], comentario: string): void {
    const cantidadPendientes = this.dataSource.data.filter((row: DetalleSolicitud) => row.estadoProceso === 'Pendiente').length;
    const totalEpp = this.dataSource.data.length;
    const payload = {
      idSolicitud: this.datosRecibidos?.idSolicitud,
      idEmpleado: this.datosRecibidos?.idEmpleado,
      companiaSocio: "01000000",
      detalle: detalleSeleccionado,
      estado: 2, // Estado de rechazado
      comentario: comentario,
      bandeja: 1,
      totalEpp: totalEpp,
      pendienteEpp: cantidadPendientes,
    };
    console.log('Aprobación exitosa: total de EPP:',totalEpp+'Pendiente', cantidadPendientes);
    this.solicitarService.rechazarSolicitud(payload).subscribe(response => {

      // Actualiza el estado de los elementos seleccionados a 'Rechazado' y desactiva los checkboxes
      this.dataSource.data = this.dataSource.data.map(row => {
        if (detalleSeleccionado.includes(row.idDetalle)) {
          return {
            ...row,
            estadoProceso: 'Rechazado', // Cambia a Rechazado
            disabled: true,             // Desactiva el checkbox
            comentario: comentario,     // Guarda el comentario en la fila
          };
        }
        return row; // Devuelve las demás filas sin cambios
      });

      // Mantiene los elementos seleccionados y deshabilitados
      this.selectedRows.forEach(row => {
        if (detalleSeleccionado.includes(row.idDetalle)) {
          row.estadoProceso = 'Rechazado';
          row.disabled = true;
        }
      });
    }, error => {
      console.error('Error al rechazar:', error);
    });
  }



  actualizarTabla(nuevoEstado?: string): void {
    this.dataSource.data = this.dataSource.data.map((row: DetalleSolicitud) => {
      if (this.selectedRows.has(row)) {
        // Actualiza el estadoProceso solo para las filas seleccionadas
        const updatedRow = {
          ...row,
          estadoProceso: nuevoEstado || row.estadoProceso, // Actualiza con el nuevo estado
        };

        // Si se aprueba o rechaza, selecciona y deshabilita el checkbox
        if (updatedRow.estadoProceso === 'Aprobado' || updatedRow.estadoProceso === 'Rechazado') {
          this.selectedRows.add(updatedRow); // Asegura que se mantenga seleccionado
        }
        return updatedRow;
      }
      return row;
    });

    // Limpia las filas seleccionadas que ya no son editables
    this.selectedRows = new Set(
      this.dataSource.data.filter((row) => row.estadoProceso === 'Aprobado' || row.estadoProceso === 'Rechazado')
    );
  }



}
