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
  templateUrl: './modal-items-rechazar.component.html',
  styleUrl: './modal-items-rechazar.component.css'
})
export class ModalItemsRechazarComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalItemsRechazarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string }
  ) {}

  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialogRef.close(true);
    Swal.fire({
      icon:'success',
      title:'Solicitud rechazada con exito'
    })
  }
}
