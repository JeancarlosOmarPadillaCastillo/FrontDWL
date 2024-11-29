import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogContent,
    MatDialogClose
  ],
  templateUrl: './dialogs.component.html',
  styleUrl: './dialogs.component.css'
})
export class DialogsComponent {

}
