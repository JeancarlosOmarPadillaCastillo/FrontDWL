import {Component, inject} from '@angular/core';
import {
  DialogEliminarConfirmacionComponent
} from '../dialog-eliminar-confirmacion/dialog-eliminar-confirmacion.component';
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
  templateUrl: './dialog-eliminar.component.html',
  styleUrl: './dialog-eliminar.component.css'
})
export class DialogEliminarComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    Swal.fire({
      icon:'warning',
      title:'Eliminado con exito'
    })
  }
}
