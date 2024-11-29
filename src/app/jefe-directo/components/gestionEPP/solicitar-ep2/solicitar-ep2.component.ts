import {Component,OnInit} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatButton, MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatOption} from '@angular/material/core';
import {MatSelect} from '@angular/material/select';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable,
  MatTableDataSource
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SolicitarService} from '../../../../services/solicitar.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
export interface PeriodicElement {
  position: string; // Tipo de EPP
  name: string; // Cantidad
  weight: string; // Motivo
  symbol: string; // Actividad
  age: string; // Evidencia
}
@Component({
  selector: 'app-solicitar-ep2',
  standalone: true,animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [
    MatCard,
    MatCardContent,
    MatFabButton,
    MatIcon,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect,
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
    RouterLink,
    FormsModule,
    NgIf,
    MatButton,
    NgForOf
  ],
  templateUrl: './solicitar-ep2.component.html',
  styleUrl: './solicitar-ep2.component.css'
})
export class SolicitarEP2Component implements OnInit{
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'age', 'actions'];
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  listvideo: Array<any> = []
  motivos: any[] = [];
  tipoEPP: any[] = [];
  tipoEPPNuevo: any[] = []; // Aquí almacenamos los tipos de EPP para un nuevo trabajador
  trabajadores: any[] = [];

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

  constructor(private solicitarService: SolicitarService, private servicioFavorito: EnvioDeDatosService) {
  }

  ngOnInit(): void {
    // Al inicializar el componente, cargamos los datos de la solicitud
    this.loadMotivos();
    this.loadTipoEPP();

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
    if (this.selectedMotivo === '001') {  // "Nuevo Trabajador"
      if (this.isFirstNuevoTrabajador) {
        // Primera vez que seleccionamos "Nuevo Trabajador": cargar datos del endpoint
        this.getDataTipoEPPTrabajdorNuevo();
        this.isFirstNuevoTrabajador = false;  // Cambiar el estado para evitar recargar los datos de nuevo
      } else {
        // Si ya se cargaron los datos previamente y estamos agregando un nuevo elemento:
        const newElement: PeriodicElement = {
          position: this.getTipoEPPDescripcion(this.selectedTipoEPP),
          name: this.cantidad,
          weight: this.getMotivoDescripcion(this.selectedMotivo),
          symbol: this.actividadTexto,
          age: '', // Evidencia
        };
        this.dataSource.data = [...this.dataSource.data, newElement];
      }

      // Limpiar el campo "Motivo de Solicitud" después de agregar los datos
      this.selectedMotivo = '';  // Limpiar el motivo después de agregar
      this.limpiarFormulario();   // Limpiar el formulario
    } else if (this.isEditing && this.editingElementIndex !== null) {
      // Si estamos en modo edición, actualizamos el elemento correspondiente en la tabla
      const element = this.dataSource.data[this.editingElementIndex];
      element.position = this.getTipoEPPDescripcion(this.selectedTipoEPP);
      element.name = this.cantidad;
      element.weight = this.getMotivoDescripcion(this.selectedMotivo);
      element.symbol = this.actividadTexto;
      element.age = ''; // Evidencia vacía

      // Volver a estado normal después de editar
      this.isEditing = false;
      this.editingElementIndex = null;
    } else {
      // Si no estamos en edición y el motivo no es "Nuevo Trabajador", agregamos un nuevo elemento para otros motivos
      const newElement: PeriodicElement = {
        position: this.getTipoEPPDescripcion(this.selectedTipoEPP),
        name: this.cantidad,
        weight: this.getMotivoDescripcion(this.selectedMotivo),
        symbol: this.actividadTexto,
        age: '', // Evidencia
      };
      this.dataSource.data = [...this.dataSource.data, newElement];
      this.limpiarFormulario(); // Limpiar formulario después de agregar
    }
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
          { nombreArchivo: "", archivo: "" },  // Asumimos archivos en base64 (simulados)
          { nombreArchivo: "", archivo: "" }
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

}
