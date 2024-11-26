import {Component, inject} from '@angular/core';
import {
  DialogModificarConfirmacionComponent
} from '../dialog-modificar-confirmacion/dialog-modificar-confirmacion.component';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-modificar',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogActions,
    MatDialogContent
  ],
  templateUrl: './dialog-modificar.component.html',
  styleUrl: './dialog-modificar.component.css'
})
export class DialogModificarComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogModificarConfirmacionComponent);
  }
}
