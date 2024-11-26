import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-modificar-confirmacion',
  standalone: true,
    imports: [
        MatDialogActions,
        MatDialogClose,
        MatDialogContent
    ],
  templateUrl: './dialog-modificar-confirmacion.component.html',
  styleUrl: './dialog-modificar-confirmacion.component.css'
})
export class DialogModificarConfirmacionComponent {

}
