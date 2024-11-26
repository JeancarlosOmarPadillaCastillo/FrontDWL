import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-rechazo-epp',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatInput, MatFormFieldModule,
    MatInputModule, FormsModule,
  ],
  templateUrl: './rechazo-epp.component.html',
  styleUrl: './rechazo-epp.component.css'
})
export class RechazoEppComponent {
  comentario: string = '';

  constructor(public dialogRef: MatDialogRef<RechazoEppComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.dialogRef.close(this.comentario);
  }
}
