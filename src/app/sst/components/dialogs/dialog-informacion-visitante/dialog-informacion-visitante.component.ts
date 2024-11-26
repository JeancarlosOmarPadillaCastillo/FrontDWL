import {Component, inject} from '@angular/core';
import {DialogModificarComponent} from '../dialog-modificar/dialog-modificar.component';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-dialog-informacion-visitante',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDialogActions, MatFormFieldModule,
    MatInputModule, MatFabButton
  ],
  templateUrl: './dialog-informacion-visitante.component.html',
  styleUrl: './dialog-informacion-visitante.component.css'
})
export class DialogInformacionVisitanteComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogModificarComponent);
  }
}
