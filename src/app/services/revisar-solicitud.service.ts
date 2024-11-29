import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevisarSolicitudService {

  constructor(private http: HttpClient) {}

  listarSolicutudJefe(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitudes?vencido=1&bandeja=1&idEmpleado=286&fechaFin=2024-12-30&fechaInicio=2024-11-18`);
  }
  listarSolicutudGaf(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitudes?vencido=1&bandeja=3&idEmpleado=286&fechaFin=2024-12-30&fechaInicio=2024-11-18`);
  }
  listarSolicutudJefe1(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitudes?vencido=1&bandeja=2&idEmpleado=286&fechaFin=2024-12-30&fechaInicio=2024-11-18`);
  }
  listarRecepcionTrabajador(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/historial/trabajador?idEmpleado=286&fechaInicio=2024-11-12&fechaFin=2024-11-30`);
  }
  listarSolicutudJefeAcargo(): Observable<any> {
    return this.http.get(`http://localhost:8081/trabajadores/`);
  }
}
