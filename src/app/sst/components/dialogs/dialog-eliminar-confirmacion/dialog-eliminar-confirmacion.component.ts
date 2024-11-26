import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-eliminar-confirmacion',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose
  ],
  templateUrl: './dialog-eliminar-confirmacion.component.html',
  styleUrl: './dialog-eliminar-confirmacion.component.css'
})
export class DialogEliminarConfirmacionComponent {

}
