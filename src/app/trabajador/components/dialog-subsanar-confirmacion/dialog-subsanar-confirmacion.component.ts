import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-subsanar-confirmacion',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogActions
  ],
  templateUrl: './dialog-subsanar-confirmacion.component.html',
  styleUrl: './dialog-subsanar-confirmacion.component.css'
})
export class DialogSubsanarConfirmacionComponent {

}
