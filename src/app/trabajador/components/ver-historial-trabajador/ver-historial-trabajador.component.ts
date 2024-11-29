import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from '@angular/material/datepicker';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardContent} from '@angular/material/card';
import {MatFormField} from '@angular/material/select';
import {MatLabel} from '@angular/material/input';
import {MatFabButton, MatIconButton} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatHint, MatSuffix} from '@angular/material/form-field';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {HttpClient} from '@angular/common/http';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {Empleado} from '../../../sst/components/gestion-epp/solicitar-epp-sst/solicitar-epp-sst.component';
import {RevisarSolicitudService} from '../../../services/revisar-solicitud.service';

@Component({
  selector: 'app-ver-historial-trabajador',
  standalone: true,
  imports: [
    MatIcon,
    MatCard,
    MatCardContent,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatFabButton,
    MatDatepickerToggle,
    MatHint,
    MatSuffix,
    MatSortModule,
    MatDateRangeInput,
    MatDateRangePicker, MatFormFieldModule, MatDatepickerModule, MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable, MatPaginator, MatHeaderCellDef, MatIconButton
  ],
  providers: [provideNativeDateAdapter()],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './ver-historial-trabajador.component.html',
  styleUrl: './ver-historial-trabajador.component.css'
})
export class VerHistorialTrabajadorComponent implements OnInit {
  definitionCell = [
    'docType',
    'docNro',
    'lnamePat',
    'lnameMat',
    'nombre',
    'estado',
    'fecha',
    'action'
  ];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatSort) sort!: MatSort;
  expandedElement: any | null = null;
  constructor(private revisarSolicitudService: RevisarSolicitudService,private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarDatosHistorial();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  cargarDatosHistorial(): void {
    this.revisarSolicitudService.listarRecepcionTrabajador().subscribe({
      next: (data: Empleado[]) => {
        // Ordenar los datos de lo más reciente a lo más antiguo
        data.sort((a, b) => {
          const fechaA = this.convertToDate(a.fechaSolicitud);
          const fechaB = this.convertToDate(b.fechaSolicitud);
          return fechaB.getTime() - fechaA.getTime(); // Invertir comparación para orden descendente
        });

        // Asignar los datos ordenados al dataSource
        this.dataSource.data = data;
        console.log('Datos cargados y ordenados de lo más reciente a lo más antiguo:', this.dataSource.data);
      },
      error: (error) => console.error('Error al obtener datos:', error),
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

}
