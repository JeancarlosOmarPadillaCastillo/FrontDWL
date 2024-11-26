import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnvioDatosAdjuntarService {
// Crear un BehaviorSubject para almacenar lo
// ♠ datos compartidos
  @Output() disparadordeFavoritos:EventEmitter<any>=new EventEmitter();
  private dataSubject = new BehaviorSubject<any>(null);

  // Observable para que los componentes se suscriban
  data$ = this.dataSubject.asObservable();

  // Método para enviar datos al BehaviorSubject
  enviarDatosAdjuntar(data: any): void {
    this.dataSubject.next(data);
  }
}
