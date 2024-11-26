import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-solicitud-confirmacion',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent
  ],
  templateUrl: './dialog-solicitud-confirmacion.component.html',
  styleUrl: './dialog-solicitud-confirmacion.component.css'
})
export class DialogSolicitudConfirmacionComponent {

}
