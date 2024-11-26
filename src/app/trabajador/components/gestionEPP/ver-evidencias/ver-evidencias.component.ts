import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {DecimalPipe, NgForOf, NgIf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-ver-evidencias',
  standalone: true,
  imports: [
    DecimalPipe,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatIcon,
    MatProgressSpinner,
    NgForOf,
    NgIf
  ],
  templateUrl: './ver-evidencias.component.html',
  styleUrl: './ver-evidencias.component.css'
})
export class VerEvidenciasComponent implements OnInit {
  evidenciaId: string;
  evidenciafileName: string;
  archivos: { nombre: string; tipo: string; uuId: string }[] = [
    { nombre: 'Documento 1', tipo: 'pdf', uuId: '12345-abc' },
    { nombre: 'Documento 2', tipo: 'image', uuId: '67890-def' },
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
    this.evidenciaId = data.uuId;
    this.evidenciafileName = data.fileName;
  }

  ngOnInit() {
    console.log('uuId recibido en el modal:', this.evidenciaId, this.evidenciafileName);
  }

  visualizarArchivo(uuId: string) {
    const url = `http://localhost:8094/nsrh-gestor-archivos-api/archivo/2/${uuId}`;
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (response) => {
        const mimeType = response.type || 'application/octet-stream'; // Obtén el tipo MIME del archivo
        const blob = new Blob([response], { type: mimeType });
        const fileUrl = window.URL.createObjectURL(blob);
        window.open(fileUrl, '_blank');
      },
      (error) => {
        console.error('Error al obtener el archivo:', error);
      }
    );
  }

}
