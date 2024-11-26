import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideBarLeftComponent} from './jefe-directo/side-bar-left/side-bar-left.component';
import {MainComponent} from './jefe-directo/main/main.component';
import {JefeDirectoComponent} from './jefe-directo/jefe-directo.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {TrabajadorComponent} from './trabajador/trabajador.component';
import {MedicoComponent} from "./medico/medico.component";
import {SstComponent} from "./sst/sst.component";
import {GafComponent} from './gaf/gaf.component';
import {provideHttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule, RouterOutlet, SideBarLeftComponent, MainComponent, JefeDirectoComponent, TrabajadorComponent, MedicoComponent, SstComponent, GafComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nuestraEnergyAp';

}

