import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RevisarSolicitudService {

  constructor(private http: HttpClient) {}

  listarSolicutudJefe(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitudes/1/286`);
  }
  listarSolicutudJefe1(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitudes/2/286`);
  }
  listarEPPDetalle(): Observable<any> {
    return this.http.get(`http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/48`);
  }

}
