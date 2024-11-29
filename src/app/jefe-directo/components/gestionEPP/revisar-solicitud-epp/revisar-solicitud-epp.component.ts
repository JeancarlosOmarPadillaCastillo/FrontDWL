import {AfterViewInit, ChangeDetectionStrategy, Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {BusquedaAvanzadaComponent} from '../../busqueda-avanzada/busqueda-avanzada.component';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepicker, MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {DateAdapter, MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import {RouterLink} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RevisarSolicitudService} from '../../../../services/revisar-solicitud.service';
import {Empleado} from '../../../../sst/components/gestion-epp/solicitar-epp-sst/solicitar-epp-sst.component';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

export interface DATA {
  name: string;
  position: string;
  weight: string;
  symbol: string;
  age: string;       // Nueva propiedad: Edad
  address: string;    // Nueva propiedad: Teléfono
  country: string;
}

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-revisar-solicitud-epp',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatExpansionModule, MatDialogModule, MatDatepicker, MatDatepickerToggle, RouterLink,
    MatDatepickerModule,MatAutocompleteModule,
    MatNativeDateModule, ReactiveFormsModule, MatPaginator],
  providers: [
    provideNativeDateAdapter()// Asegúrate de esta línea
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl:'./revisar-solicitud-epp.component.html',
  styleUrl: './revisar-solicitud-epp.component.css',
})
export class RevisarSolicitudEPPComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  estadoFilter = new FormControl('');
  public firstOptionSelected = 'Option 1'
  definitionCell = [

    'docType',
    'docNro',
    'lnamePat',
    'lnameMat',
    'nombre',
    'estado',
    'fecha',
    'action'
  ]
  definitionCellExpanded = [
    'names',
  ]
  expandedElement: DATA | null | undefined
  dataSource = new MatTableDataSource<Empleado>([]);

  // Controles para filtros
  tipoDocumentoFilter = new FormControl('');
  numeroDocumentoFilter = new FormControl('');

  constructor(private revisarSolicitudService: RevisarSolicitudService, private servicioFavorito:EnvioDeDatosService) {}

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  campaignOne = new FormGroup({
    start: new FormControl(null),
    end: new FormControl(null)
  });
  fechaInicioFilter = new FormControl<Date | null>(null);
  fechaFinFilter = new FormControl<Date | null>(null);



  ngOnInit(): void {
    this.cargarDatos();
    this.dataSource.filter = '';

    this.dataSource.filterPredicate = (data: Empleado, filter: string): boolean => {
      const [tipoDocumento, numeroDocumento, estado, fechaInicio, fechaFin] = filter.split('||');

      const matchesTipoDocumento = tipoDocumento
        ? data.tipoDocumento.toLowerCase().includes(tipoDocumento)
        : true;

      const matchesNumeroDocumento = numeroDocumento
        ? data.documento.toLowerCase().includes(numeroDocumento)
        : true;

      const matchesEstado = estado
        ? data.estadoProceso.toLowerCase().includes(estado)
        : true;

      const matchesFecha = this.isWithinDateRange(data.fechaSolicitud, fechaInicio, fechaFin);

      return matchesTipoDocumento && matchesNumeroDocumento && matchesEstado && matchesFecha;
    };

    // Suscribir a cambios en los filtros
    this.tipoDocumentoFilter.valueChanges.subscribe(() => this.applyFilter());
    this.numeroDocumentoFilter.valueChanges.subscribe(() => this.applyFilter());
    this.estadoFilter.valueChanges.subscribe(() => this.applyFilter());
    this.campaignOne.get('start')?.valueChanges.subscribe(() => this.applyFilter());
    this.campaignOne.get('end')?.valueChanges.subscribe(() => this.applyFilter());
  }

  applyFilter() {
    const tipoDocumentoValue = this.tipoDocumentoFilter.value || '';
    const numeroDocumentoValue = this.numeroDocumentoFilter.value || '';
    const estadoValue = this.estadoFilter.value || '';

    // Obtén las fechas y verifica su existencia
    const fechaInicioControl = this.campaignOne.get('start')?.value;
    const fechaFinControl = this.campaignOne.get('end')?.value;

    const fechaInicioValue = fechaInicioControl
      ? `${this.formatDate(fechaInicioControl)} 00:00`
      : '';

    const fechaFinValue = fechaFinControl
      ? `${this.formatDate(fechaFinControl)} 23:59`
      : '';

    this.dataSource.filter = `${tipoDocumentoValue.trim().toLowerCase()}||${numeroDocumentoValue.trim().toLowerCase()}||${estadoValue.trim().toLowerCase()}||${fechaInicioValue}||${fechaFinValue}`;
  }


// Función para validar si la fecha está dentro del rango seleccionado
  private isWithinDateRange(fechaSolicitud: string, fechaInicio: string, fechaFin: string): boolean {
    if (!fechaInicio && !fechaFin) return true;

    const solicitudDate = this.convertirFecha(fechaSolicitud);
    const inicioDate = fechaInicio ? this.convertirFecha(fechaInicio) : null;
    const finDate = fechaFin ? this.convertirFecha(fechaFin) : null;

    if (inicioDate && finDate) {
      return solicitudDate >= inicioDate && solicitudDate <= finDate;
    } else if (inicioDate) {
      return solicitudDate >= inicioDate;
    } else if (finDate) {
      return solicitudDate <= finDate;
    }
    return true;
  }

// Convertir una fecha de tipo Date al formato DD/MM/YY
  private formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/${year}`;
  }


  cargarDatos(): void {
    this.revisarSolicitudService.listarSolicutudJefe().subscribe({
      next: (data: Empleado[]) => {
        // Ordenar los datos por fechaSolicitud (más recientes primero)
        data.sort((a, b) => {
          const fechaA = this.convertirFecha(a.fechaSolicitud).getTime();
          const fechaB = this.convertirFecha(b.fechaSolicitud).getTime();

          return fechaB - fechaA; // Orden descendente: más reciente primero
        });

        this.dataSource.data = data;
        console.log('Datos cargados y ordenados por fecha de solicitud (más recientes primero):', this.dataSource.data);
      },
      error: (error) => console.error('Error al obtener datos:', error),
    });
  }

// Función para convertir el formato "DD/MM/YY HH:mm" a un objeto Date
  private convertirFecha(fechaStr: string): Date {
    const [fecha, hora] = fechaStr.split(' '); // Separar fecha y hora
    const [day, month, year] = fecha.split('/').map(Number); // Separar día, mes, año
    const [hours, minutes] = hora.split(':').map(Number); // Separar horas y minutos

    const fullYear = year < 100 ? 2000 + year : year; // Asegurarse de manejar el año correctamente
    return new Date(fullYear, month - 1, day, hours, minutes);
  }

  limpiarFiltros() {
    // Restablece los valores de los filtros
    this.tipoDocumentoFilter.setValue('');
    this.numeroDocumentoFilter.setValue('');
    this.estadoFilter.setValue('');
    this.campaignOne.get('start')?.setValue(null);
    this.campaignOne.get('end')?.setValue(null);

    // Aplica el filtro vacío para refrescar la tabla
    this.applyFilter();
  }



  agregarFavorito(element: any): void {
    this.servicioFavorito.enviarDatos(element);
  }
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
}
