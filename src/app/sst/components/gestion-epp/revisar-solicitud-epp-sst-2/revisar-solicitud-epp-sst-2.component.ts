import {Component, inject, OnInit} from '@angular/core';
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
import {
  BusquedaAvanzadaComponent
} from '../../../../jefe-directo/components/busqueda-avanzada/busqueda-avanzada.component';
import {HistorialEppComponent} from '../historial-epp/historial-epp.component';
import {MatrizEppComponent} from '../matriz-epp/matriz-epp.component';
import {MaestroAsignacionesEppComponent} from '../maestro-asignaciones-epp/maestro-asignaciones-epp.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgIf} from '@angular/common';
import {RechazoEppComponent} from '../../../../jefe-directo/components/gestionEPP/rechazo-epp/rechazo-epp.component';
import {SolicitarService} from '../../../../services/solicitar.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
import {forkJoin, map} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {DATA} from '../revisar-solicitud-epp-sst/revisar-solicitud-epp-sst.component';
import {
  ModalItemsConfirmacionComponent
} from '../../../../jefeDirecto/components/modal-items-confirmacion/modal-items-confirmacion.component';
import {
  ModalItemsRechazarComponent
} from '../../../../jefeDirecto/components/modal-items-rechazar/modal-items-rechazar.component';


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
  disabled?: boolean;
}

@Component({
  selector: 'app-revisar-solicitud-epp2',
  providers: [
    { provide: DateAdapter, useClass: MatNativeDateModule }
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
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
    MatButton,
    NgIf,
  ],
  templateUrl: './revisar-solicitud-epp-sst-2.component.html',
  styleUrl: './revisar-solicitud-epp-sst-2.component.css'
})
export class RevisarSolicitudEppSst2Component implements OnInit {
  definitionCell = [
    'position',
    'tipoEppDescripcion',
    'cantidadAprobada',
    'motivoDescripcion',
    'nuevaActividad',
    'evidencia',
    'stock',
    'estadoSolicitud',
    'action'
  ]
  definitionCellExpanded = [
    'names',
  ]
  expandedElement: DATA | null | undefined
  dataSource = new MatTableDataSource<DetalleSolicitud>([]);
  datosRecibidos: any;
  selectedRows = new Set<DetalleSolicitud>();

  private endpoint = 'http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/accion';

  constructor(
    private solicitarService: SolicitarService,
    private servicioFavorito: EnvioDeDatosService,
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
        estado: 3, // Estado de aprobado
        bandeja: 2,
        totalEpp: totalEpp,
        pendienteEpp: cantidadPendientes,
      };

      const dialogRef = this.dialog.open(ModalItemsConfirmacionComponent, {
        width: '600px',
        data: { message: '¿Está seguro de aprobar los elementos seleccionados?' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {  // Si el usuario confirma la aprobación
          console.log('Aprobación exitosa: total de EPP:', totalEpp + ' Pendiente', cantidadPendientes);
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
              return row;
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
          console.log('Aprobación cancelada');
        }
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
      estado: 4, // Estado de rechazado
      comentario: comentario,
      bandeja: 2,
      totalEpp: totalEpp,
      pendienteEpp: cantidadPendientes,
    };

    const dialogRef = this.dialog.open(ModalItemsRechazarComponent, {
      width: '600px',
      data: { message: '¿Está seguro de rechazar los elementos seleccionados?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {  // Si el usuario confirma el rechazo
        console.log('Rechazo exitoso: total de EPP:', totalEpp + ' Pendiente', cantidadPendientes);
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
      } else {
        console.log('Rechazo cancelado');
      }
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



  // Método para abrir el modal con el valor recibido
  matrizEpp(puesto: string) {
    const datosRecibidos = { puesto }; // Crea un objeto con la propiedad "puesto"
    this.dialog.open(MatrizEppComponent, {
      data: { datosRecibidos } // Pasa el valor al modal
    });
  }

  readonly dialog = inject(MatDialog);
  historialEpp() {
    this.dialog.open(HistorialEppComponent);
  }

  maestroAsignacionesEpp() {
    this.dialog.open(MaestroAsignacionesEppComponent);
  }
}
