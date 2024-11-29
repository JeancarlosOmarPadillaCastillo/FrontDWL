import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioDeDatosService {
// Crear un BehaviorSubject para almacenar los datos compartidos
  private dataSubject = new BehaviorSubject<any>(null);

  // Observable para que los componentes se suscriban
  data$ = this.dataSubject.asObservable();

  // Método para enviar datos al BehaviorSubject
  enviarDatos(data: any): void {
    this.dataSubject.next(data);
  }
}
