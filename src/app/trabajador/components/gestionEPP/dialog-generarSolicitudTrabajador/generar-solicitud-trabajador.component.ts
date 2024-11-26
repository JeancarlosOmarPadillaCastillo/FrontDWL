import {Component, inject} from '@angular/core';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatFabButton} from '@angular/material/button';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-dialog-eliminar',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatFabButton
  ],
  templateUrl: './generar-solicitud-trabajador.component.html',
  styleUrl: './generar-solicitud-trabajador.component.css'
})
export class GenerarSolicitudTrabajadorComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    Swal.fire({
      icon:'success',
      title:'Solicitud registrada con exito',
      text:'En breve se recibirá los detalles de su solicitud'
    })
  }
}
