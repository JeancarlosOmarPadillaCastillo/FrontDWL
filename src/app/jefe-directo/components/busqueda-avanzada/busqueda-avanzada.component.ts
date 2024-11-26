import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatInput} from '@angular/material/input';

@Component({
  selector: 'app-busqueda-avanzada',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInput
  ],
  templateUrl: './busqueda-avanzada.component.html',
  styleUrl: './busqueda-avanzada.component.css'
})
export class BusquedaAvanzadaComponent {

}
