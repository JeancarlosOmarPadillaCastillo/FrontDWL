import {Component, Inject, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modal-items-confirmacion',
  standalone: true,
    imports: [
        MatDialogActions,
        MatDialogClose,
        MatDialogContent
    ],
  templateUrl: './modal-items-confirmacion.component.html',
  styleUrl: './modal-items-confirmacion.component.css'
})
export class ModalItemsConfirmacionComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalItemsConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialogRef.close(true);
    Swal.fire({
      icon:'success',
      title:'solicitud aprobada con exito'
    })
  }
}
