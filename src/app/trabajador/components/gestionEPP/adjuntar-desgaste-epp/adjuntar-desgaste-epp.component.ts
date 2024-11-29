import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {MatIconModule} from '@angular/material/icon';
import {CommonModule,NgOptimizedImage} from '@angular/common';
import {SolicitarService} from '../../../../services/solicitar.service';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {EnvioDatosAdjuntarService} from '../../../../services/envio-datos-adjuntar.service';

@Component({
  selector: 'app-adjuntar-desgaste-epp',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInput,
    MatIconModule,
    CommonModule,
    NgOptimizedImage,
    MatProgressSpinner,
  ],
  templateUrl: './adjuntar-desgaste-epp.component.html',
  styleUrls: ['./adjuntar-desgaste-epp.component.css']
})
export class AdjuntarDesgasteEppComponent implements OnInit{
  archivos: Array<{
    file: File;
    preview: string;
    isImage: boolean;
    isPDF: boolean;
    previewError: boolean;
    cargando: boolean; // Indica si el archivo se está subiendo
    subido: boolean;   // Indica si la subida fue exitosa
  }> = [];
  @Output() evidenciaGuardada = new EventEmitter<any>();

  evidencia: any = {};
  url = 'http://localhost:8094/nsrh-gestor-archivos-api/archivo/carga';
  @Input() dataEntrante:any;// Emisor de UUID
  constructor(private archivoService: SolicitarService,private adjuntarSerice:EnvioDatosAdjuntarService,public dialogRef: MatDialogRef<AdjuntarDesgasteEppComponent>) {}
  ngOnInit() {
    console.log('Entrando a la data...',this.dataEntrante);
  }
  guardarEvidencia() {
    if (this.evidencia.nombre) {
      this.evidenciaGuardada.emit(this.evidencia);  // Emitir los datos de la evidencia
    } else {
      alert("Por favor, ingrese un nombre de evidencia.");
    }
  }
  agregarFavorito(){
    console.log(this.dataEntrante);
    this.adjuntarSerice.disparadordeFavoritos.emit({
      data:this.dataEntrante
    })
  }
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      const isImage = file.type.startsWith('image/');
      const isPDF = file.type === 'application/pdf';

      reader.onload = (e: any) => {
        this.archivos.push({
          file,
          preview: e.target.result,
          isImage,
          isPDF,
          previewError: false,
          cargando: false,
          subido: false
        });
      };

      if (isImage || isPDF) {
        reader.readAsDataURL(file);
      } else {
        this.archivos.push({
          file,
          preview: '',
          isImage: false,
          isPDF: false,
          previewError: true,
          cargando: false,
          subido: false
        });
      }
    }
  }

  subirArchivo(archivo: any): void {
    archivo.cargando = true;

    this.archivoService.cargarArchivoConUrl(archivo.file, this.url).subscribe({
      next: (response) => {
        archivo.cargando = false;
        archivo.subido = true;
          // Al recibir la respuesta, emitimos el uuId
        this.evidenciaGuardada.emit({
          uuId: response.uuId,
          fileName: archivo.file.name
        });



        const uuid = response.uuId || 'UUID no proporcionado'; // Ajusta según tu API
        const fileData = {
          success: true,
          filePath: response.filePath || 'Ruta no proporcionada',
          uuId: uuid,
          fileName: archivo.file.name
        };

        console.log('Archivo subido exitosamente:', fileData);
        this.dialogRef.close(fileData); // Devuelve los datos al componente padre
      },
      error: (error) => {
        archivo.cargando = false;
        console.error('Error al subir archivo:', error);
      },
    });
  }

  eliminarArchivo(archivo: { file: File; preview: string; isImage: boolean; isPDF: boolean; previewError: boolean }): void {
    this.archivos = this.archivos.filter(a => a !== archivo);
  }

  onPreviewError(archivo: { file: File; preview: string; isImage: boolean; isPDF: boolean; previewError: boolean }): void {
    archivo.previewError = true;
  }
}
