import {Component, inject} from '@angular/core';
import {DialogModificarComponent} from '../dialog-modificar/dialog-modificar.component';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-asociar-nuevo-requisito',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatInput,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './asociar-nuevo-requisito.component.html',
  styleUrl: './asociar-nuevo-requisito.component.css'
})
export class AsociarNuevoRequisitoComponent {
  readonly dialog = inject(MatDialog);
  openDialogAsociar() {
    this.dialog.open(DialogModificarComponent);
  }
}
