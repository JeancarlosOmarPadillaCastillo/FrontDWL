import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MatCard, MatCardContent} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable, MatTableDataSource
} from '@angular/material/table';
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from '@angular/material/datepicker';
import {MatButton, MatFabButton, MatIconButton} from '@angular/material/button';
import {MatFormField} from '@angular/material/select';
import {MatHint, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatLabel} from '@angular/material/input';
import {MatPaginator} from '@angular/material/paginator';
import {FormsModule} from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatDialog, MatDialogContent} from '@angular/material/dialog';
import {provideNativeDateAdapter} from '@angular/material/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-historial-decisiones',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatFabButton,
    MatFormField,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatHint,
    MatIcon,
    MatIconButton,
    MatLabel,
    MatPaginator,
    MatRow,
    MatRowDef,
    MatStartDate,
    MatSuffix,
    MatTable,
    MatHeaderCellDef,
    FormsModule,
    MatCheckbox,
    MatDialogContent,
    MatButton,
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
  templateUrl: './historial-decisiones.component.html',
  styleUrl: './historial-decisiones.component.css'
})
export class HistorialDecisionesComponent implements OnInit {
  @ViewChild('exportModal') exportModal!: TemplateRef<any>; // Referencia a la plantilla

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
  definitionCellExpanded = ['names'];
  dataSource = new MatTableDataSource<any>();
  expandedElement: any | null = null;


  startDate: Date | null = null;
  endDate: Date | null = null;

  exportPdf: boolean = false; // Estado del checkbox de PDF
  exportCsv: boolean = false; // Estado del checkbox de CSV


  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.cargarDatosHistorial();
  }

  // Método para abrir el modal de exportación
  openExportModal(): void {
    this.dialog.open(this.exportModal);
  }
  onStartDateChange(event: any): void {
    this.startDate = event.value;
  }

  onEndDateChange(event: any): void {
    this.endDate = event.value;
  }

  // Método para cerrar el modal de exportación
  closeExportModal(): void {
    this.dialog.closeAll();
  }
  descargar(): void {
    if (this.exportPdf) {
      this.descargarArchivo('PDF');
    }
    if (this.exportCsv) {
      this.descargarArchivo('CSV');
    }
  }

  private descargarArchivo(tipo: string): void {
    // Implementa la lógica para descargar el archivo aquí
    console.log(`Descargando archivo de tipo: ${tipo}`);

    // Aquí se podría implementar una llamada HTTP para obtener el archivo o usar una URL de descarga
    // Ejemplo de descarga directa:
    const url = `http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/descargar?tipo=${tipo}`;
    const link = document.createElement('a');
    link.href = url;
    link.download = `archivo.${tipo.toLowerCase()}`;
    link.click();
  }
  // Método para cargar los datos del historial con el rango de fechas
  cargarDatosHistorial(): void {
    if (!this.startDate || !this.endDate) {
      console.error('Por favor, seleccione un rango de fechas válido.');
      return;
    }

    const startDateFormatted = this.formatDate(this.startDate);
    const endDateFormatted = this.formatDate(this.endDate);
    const url = `http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/historial/decisiones?idEmpleadoJefe=588&fechaInicio=${startDateFormatted}&fechaFin=${endDateFormatted}`;

    this.http.get<any[]>(url).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        console.log('Datos recibidos:', data);
      },
      error: (err) => {
        console.error('Error al cargar datos del endpoint:', err);
      }
    });
  }

  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

}
