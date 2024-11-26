import {Component, inject, Input, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardModule} from "@angular/material/card";
import {MatDatepicker, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatButton, MatButtonModule, MatFabButton} from "@angular/material/button";
import {MatFormField, MatFormFieldModule, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule
} from '@angular/material/table';
import {RouterLink} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {CommonModule} from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  BusquedaAvanzadaComponent
} from '../../../../jefe-directo/components/busqueda-avanzada/busqueda-avanzada.component';
import {RevisarSolicitudService} from '../../../../services/revisar-solicitud.service';
import {EnvioDeDatosService} from '../../../../services/envio-de-datos.service';

export interface Empleado {
  tipoDocumento: string;     // Tipo de documento
  documento: string;         // Número de documento
  apellidoPaterno: string;   // Apellido paterno
  apellidoMaterno: string;   // Apellido materno
  nombre: string;            // Nombre
  puesto: string;            // Puesto de trabajo
  estadoProceso: string;     // Estado del proceso
  fechaSolicitud: string;    // Fecha de solicitud
}
@Component({
  selector: 'app-solicitar-ep',
  standalone: true,
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  imports: [CommonModule, MatCardModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatExpansionModule, MatDialogModule, MatDatepicker, MatDatepickerToggle, RouterLink, FormsModule, ReactiveFormsModule],

  templateUrl: './solicitar-epp-sst.component.html',
  styleUrl: './solicitar-epp-sst.component.css'
})
export class SolicitarEppSstComponent implements OnInit{
  @Input() dataEntrante:any;
  displayedColumns: string[] = [
    'tipoDocumento',
    'documento',
    'apellidoPaterno',
    'apellidoMaterno',
    'nombre',
    'puesto',
    'country',
  ];
  dataSource = new MatTableDataSource<Empleado>([]);

  // Controles para filtros
  tipoDocumentoFilter = new FormControl('');
  numeroDocumentoFilter = new FormControl('');

  constructor(private revisarSolicitudService: RevisarSolicitudService, private servicioFavorito:EnvioDeDatosService) {}

  ngOnInit(): void {
    this.cargarDatos();
    this.dataSource.filter = '';

    // Configuración de filtros personalizados
    this.dataSource.filterPredicate = (data: Empleado, filter: string): boolean => {
      const [tipoDocumento, numeroDocumento] = filter.split('||');

      const matchesTipoDocumento = tipoDocumento
        ? data.tipoDocumento.toLowerCase().includes(tipoDocumento)
        : true;

      const matchesNumeroDocumento = numeroDocumento
        ? data.documento.toLowerCase().includes(numeroDocumento)
        : true;

      return matchesTipoDocumento && matchesNumeroDocumento;
    };

    // Suscribir a cambios en los filtros
    this.tipoDocumentoFilter.valueChanges.subscribe(() => this.applyFilter());
    this.numeroDocumentoFilter.valueChanges.subscribe(() => this.applyFilter());
  }

  cargarDatos(): void {
    this.revisarSolicitudService.listarSolicutudJefe().subscribe({
      next: (data: Empleado[]) => {
        this.dataSource.data = data;
        console.log('Datos cargados:', this.dataSource.data);
      },
      error: (error) => console.error('Error al obtener datos:', error),
    });
  }

  applyFilter() {
    const tipoDocumentoValue = this.tipoDocumentoFilter.value || '';
    const numeroDocumentoValue = this.numeroDocumentoFilter.value || '';

    this.dataSource.filter = `${tipoDocumentoValue.trim().toLowerCase()}||${numeroDocumentoValue.trim().toLowerCase()}`;
  }
  agregarFavorito(element: any): void {
    this.servicioFavorito.enviarDatos(element);
  }
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(BusquedaAvanzadaComponent);
  }
}
