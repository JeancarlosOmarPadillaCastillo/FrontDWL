import { Component, inject, OnInit } from '@angular/core';
import { MatButton, MatButtonModule, MatFabButton } from "@angular/material/button";
import { MatCard, MatCardContent, MatCardModule } from "@angular/material/card";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule
} from "@angular/material/table";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInput, MatInputModule } from "@angular/material/input";
import { MatOption } from "@angular/material/core";
import { MatSelect, MatSelectModule } from "@angular/material/select";
import { RouterLink } from "@angular/router";
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
  BusquedaAvanzadaComponent
} from '../../../../jefe-directo/components/busqueda-avanzada/busqueda-avanzada.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepicker, MatDatepickerToggle } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import {
  GenerarSolicitudTrabajadorComponent
} from '../dialog-generarSolicitudTrabajador/generar-solicitud-trabajador.component';
import { AdjuntarDesgasteEppComponent } from '../adjuntar-desgaste-epp/adjuntar-desgaste-epp.component';
import { SolicitarService } from '../../../../services/solicitar.service';
import { EnvioDeDatosService } from '../../../../services/envio-de-datos.service';
import { HistorialEppComponent } from '../../../../sst/components/gestion-epp/historial-epp/historial-epp.component';
import { EnvioDatosAdjuntarService } from '../../../../services/envio-datos-adjuntar.service';
import { VerEvidenciasComponent } from '../ver-evidencias/ver-evidencias.component';

export interface PeriodicElement {
  position: string; // Tipo de EPP
  name: string; // Cantidad
  weight: string; // Motivo
  symbol: string; // Actividad
  age: string; // Evidencia
}

@Component({
  selector: 'app-solicitar-epp-trabajador',
  standalone: true, animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFabButton,
    MatFormField,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatInput,
    MatOption,
    MatRow,
    MatRowDef,
    MatSelect,
    MatTable,
    MatHeaderCellDef,
    NgIf,
    FormsModule,
    NgForOf,
    MatLabel
  ],
  templateUrl: './solicitar-epp-trabajador.component.html',
  styleUrl: './solicitar-epp-trabajador.component.css'
})
export class SolicitarEppTrabajadorComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'age', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  listvideo: Array<any> = []
  motivos: any[] = [];
  tipoEPP: any[] = [];
  tipoEPPNuevo: any[] = []; // Aquí almacenamos los tipos de EPP para un nuevo trabajador
  trabajadores: any[] = [];
  evidencias: any[] = [];
  selectedMotivo: string = '';
  selectedTipoEPP: string = '';
  selectedTrabajador: string = '';
  cantidad: string = '';
  actividadTexto: string = '';
  evidenciaAdjunta: boolean = false;
  isFirstNuevoTrabajador: boolean = true;
  isEditing: boolean = false;
  editingElementIndex: number | null = null;
  datosRecibidos: any;
  public listEvidencia: Array<any> = [];
  obtainFileData: any;
  constructor(private solicitarService: SolicitarService, private servicioFavorito: EnvioDatosAdjuntarService, public dialogs: MatDialog) {
  }

  ngOnInit(): void {
    // Al inicializar el componente, cargamos los datos de la solicitud
    this.loadMotivos();
    this.loadTipoEPP();
    this.servicioFavorito.disparadordeFavoritos.subscribe(data => {
      console.log('recibiendo data...', data)
      this.listEvidencia.push(data)
    })
    // Registrar la solicitud automáticamente al inicializar

    this.servicioFavorito.data$.subscribe((data) => {
      this.datosRecibidos = data;

    });
  }

  // Cargar motivos de solicitud
  loadMotivos(): void {
    this.solicitarService.listarMotivos().subscribe((response) => {
      this.motivos = response;
    });
  }

  // Cargar tipos de EPP generales
  loadTipoEPP(): void {
    this.solicitarService.listarTipooEPP().subscribe((response) => {
      this.tipoEPP = response;
    });
  }

  // Cargar EPP para trabajador nuevo
  getDataTipoEPPTrabajdorNuevo(): void {
    this.solicitarService.listarTipoEPPTrabajador().subscribe((resp) => {
      this.tipoEPPNuevo = resp;

      // Precargar datos en la tabla
      this.dataSource.data = [
        ...this.dataSource.data,
        ...this.tipoEPPNuevo.map((epp: any) => ({
          position: epp.tipoEpp.descripcion, // Tipo de EPP (Descripción)
          name: epp.cantidad,                // Cantidad
          weight: this.getMotivoDescripcion('001'), // Descripción del motivo "Nuevo Trabajador"
          symbol: '', // Actividad (vacío por defecto)
          age: '', // Evidencia (vacío por defecto)
        })),
      ];
    });
  }

  // Método que se llama al seleccionar un motivo de solicitud
  onMotivoChange(): void {
    if (this.selectedMotivo === '001' && this.isFirstNuevoTrabajador) {
      this.getDataTipoEPPTrabajdorNuevo();
      this.isFirstNuevoTrabajador = false; // Marcamos que ya se procesó el primer clic
    }
  }

  agregarOEditarEPP(): void {
    const newElement: PeriodicElement = {
      position: this.getTipoEPPDescripcion(this.selectedTipoEPP),
      name: this.cantidad,
      weight: this.getMotivoDescripcion(this.selectedMotivo),
      symbol: this.actividadTexto,
      age: this.evidenciaAdjunta ? this.listEvidencia[0]?.uuId : '',  // Asigna el uuId si hay evidencia
    };

    // Si estamos en edición, actualizamos la fila correspondiente
    if (this.isEditing && this.editingElementIndex !== null) {
      const element = this.dataSource.data[this.editingElementIndex];
      element.position = this.getTipoEPPDescripcion(this.selectedTipoEPP);
      element.name = this.cantidad;
      element.weight = this.getMotivoDescripcion(this.selectedMotivo);
      element.symbol = this.actividadTexto;
      element.age = this.evidenciaAdjunta ? this.listEvidencia[0]?.uuId : ''; // Si hay evidencia, asigna el uuId

      // Actualiza el estado de edición
      this.isEditing = false;
      this.editingElementIndex = null;
    } else {

      // Agrega un nuevo elemento si no estamos en modo edición
      this.dataSource.data = [...this.dataSource.data, newElement];
    }

    this.limpiarFormulario(); // Limpiar el formulario después de agregar
  }

  // Seleccionar EPP para editar
  seleccionarEPPParaEditar(element: PeriodicElement): void {
    this.isEditing = true;
    this.editingElementIndex = this.dataSource.data.indexOf(element);
    this.selectedTipoEPP = this.getTipoEPPId(element.position);
    this.cantidad = element.name;
    this.selectedMotivo = this.getMotivoId(element.weight);
    this.actividadTexto = element.symbol;
  }

  // Eliminar EPP de la tabla
  eliminarEPP(element: PeriodicElement): void {
    this.dataSource.data = this.dataSource.data.filter((item) => item !== element);
  }

  // Limpiar formulario después de agregar o editar
  limpiarFormulario(): void {
    this.selectedTipoEPP = '';
    this.selectedMotivo = '';
    this.cantidad = '';
    this.actividadTexto = '';
    this.evidenciaAdjunta = false;
    this.isEditing = false;
    this.editingElementIndex = null;
  }

  // Métodos para obtener descripciones de EPP y motivos a partir de los ID
  getTipoEPPDescripcion(id: string): string {
    const tipo = this.tipoEPP.find((epp) => epp.id === id);
    return tipo ? tipo.descripcion : '';
  }

  getTipoEPPId(descripcion: string): string {
    const tipo = this.tipoEPP.find((epp) => epp.descripcion === descripcion);
    return tipo ? tipo.id : '';
  }

  getMotivoDescripcion(id: string): string {
    const motivo = this.motivos.find((m) => m.id === id);
    return motivo ? motivo.descripcion : '';
  }

  getMotivoId(descripcion: string): string {
    const motivo = this.motivos.find((m) => m.descripcion === descripcion);
    return motivo ? motivo.id : '';
  }

  // Método para registrar la solicitud de EPP
  registrarSolicitud(): void {
    // Preparar los datos a enviar, adaptando la estructura del formulario a la que el backend espera


    const solicitudData = {
      idEmpleado: 16982,  // ID del empleado (ejemplo fijo, puedes obtenerlo de un formulario o variable)
      idEmpleadoJefe: 286, // ID del jefe (también puede ser dinámico)
      companiaSocio: "01000000",  // Compañía (similar a los anteriores)
      detalle: this.dataSource.data.map(element => ({
        idTipoEpp: this.getTipoEPPId(element.position),  // Asumiendo que 'position' se corresponde con el tipo de EPP
        idMotivoSolicitudEpp: this.getMotivoId(element.weight),  // Asumiendo que 'weight' corresponde con el motivo de la solicitud
        nuevaActividad: element.symbol || "",  // Si hay nueva actividad, se agrega, sino se deja vacío
        cantidadSolicitada: parseInt(element.name, 10),  // Cantidad solicitada, asumiendo que 'name' es la cantidad
        evidencias: element.age ? [
          { nombreArchivo: this.obtainFileData.fileName, archivo: this.obtainFileData.uuId },  // Asumimos archivos en base64 (simulados)
        ] : []  // Si no hay evidencia, se envía un array vacío
      }))
    };

    // Log para ver los datos que se enviarán al backend
    console.log('Datos a enviar:', JSON.stringify(solicitudData, null, 2));

    // Realizamos la llamada al servicio para registrar la solicitud
    this.solicitarService.registrarSolicitud(solicitudData).subscribe(
      response => {
        // Si la solicitud es exitosa, mostramos la respuesta en consola
        console.log('Solicitud registrada con éxito:', response);

        // Limpiar la tabla después del registro exitoso
        this.dataSource.data = [];

        // Mostrar un mensaje de éxito al usuario
        alert('Registro exitoso');
      },
      error => {
        // Si ocurre un error, lo mostramos en la consola
        console.error('Error al registrar la solicitud:', error);
      }
    );

  }

  readonly dialog = inject(MatDialog);

  adjuntarEvidencia(): void {
    const dialogRef = this.dialog.open(AdjuntarDesgasteEppComponent);

    dialogRef.componentInstance.evidenciaGuardada.subscribe((evidencia: any) => {
      console.log("Evidencia recibida:", evidencia);  // Verifica que recibes el archivo correctamente
      this.obtainFileData = evidencia
      this.evidenciaAdjunta = true;
      // Aquí guardamos el uuId y el fileName de la evidencia en el array de evidencias
      this.listEvidencia.push(evidencia);  // Guarda el uuId y el filename

      // Si hay evidencia asociada, actualizar la columna "Evidencia" en la tabla
      const index = this.dataSource.data.findIndex((item: any) => item.position === this.selectedTipoEPP);

      if (index !== -1) {
        // Aquí asignamos el uuId y el filename de la evidencia
        this.dataSource.data[index].age = `${evidencia.fileName}`;
        // Formato: uuId - filename
        console.log('Datos de la tabla para evidencia...', this.dataSource.data);
        // Aquí actualizas correctamente los datos de la tabla
        this.dataSource = new MatTableDataSource<PeriodicElement>(this.dataSource.data);
      }
    });
  }

  verEvidencia(element: PeriodicElement): void {
    const evidenciaId = element.age;  // Aquí obtenemos el `uuId` de la evidencia
    const evidenciaNombre = this.obtainFileData.fileName;  // Si 'age' contiene el `fileName`, lo podemos usar como `fileName`

    // Abriendo el modal y pasando el `uuId` y `fileName` como datos
    const dialogRef = this.dialog.open(VerEvidenciasComponent, {
      data: {
        uuId: evidenciaId,
        fileName: evidenciaNombre
      }  // Pasamos tanto el `uuId` como el `fileName` al modal
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Aquí puedes manejar lo que el modal devuelve si es necesario
        console.log('Evidencia vista:', result);
      }
    });
  }


  onRowClick(element: any): void {
    // Asignar el tipo de EPP seleccionado
    this.selectedTipoEPP = element.position;
  }
}
