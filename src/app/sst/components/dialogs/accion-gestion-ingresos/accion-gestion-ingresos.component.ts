import {Component, inject} from '@angular/core';
import {DialogModificarComponent} from '../dialog-modificar/dialog-modificar.component';
import {MatDialog, MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-accion-gestion-ingresos',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose,
    MatSelect,
    MatOption,
    MatInput,MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './accion-gestion-ingresos.component.html',
  styleUrl: './accion-gestion-ingresos.component.css'
})
export class AccionGestionIngresosComponent {
  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(DialogModificarComponent);
  }
}
