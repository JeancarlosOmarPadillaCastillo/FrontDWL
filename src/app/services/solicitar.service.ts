import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, Observable} from 'rxjs';

const base_url = `${environment.base_url}/sge-consulta-maestras-api`;
const BASE_URL = 'http://localhost:8095/sge-solicitud-epp-api/sge/solicitud';

export interface DetalleSolicitud {
  idDetalle: number;
  estadoProceso: string;
  idMotivoSolicitudEpp: string;
  motivoDescripcion: string;
  idTipoEpp: number;
  tipoEppDescripcion: string;
  nuevaActividad: string | null;
  cantidadSolicitada: number | null;
  cantidadAprobada: number;
  cantidadEntregada: number;
  eppAsignado: string | null;
  estadoSolicitud: string;
}
@Injectable({
  providedIn: 'root'
})
export class SolicitarService {

  constructor(private http: HttpClient) {
  }
// En tu servicio SolicitarService
  rechazarSolicitud(payload: any): Observable<any> {
    const url = 'http://localhost:8095/sge-solicitud-epp-api/sge/solicitud/accion'; // URL del endpoint
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ip-client': '127.0.0.1',  // Esto es según tu requerimiento
    });

    return this.http.put<any>(url, payload, { headers });
  }

  listarMotivos(): Observable<any> {
    return this.http.get(`${base_url}/sge/motivos`);
  }

  listarTipooEPP(): Observable<any> {
    return this.http.get(`http://localhost:8091/sge-consulta-maestras-api/sge/epp/tipos`);
  }

  listarTipoEPPTrabajador(): Observable<any> {
    return this.http.get(`http://localhost:8091/sge-consulta-maestras-api/sge/epps/puestos`);
  }

  listarTrabajadores(): Observable<any> {
    return this.http.get(`http://localhost:8091/sge-consulta-maestras-api/sge/epps/puestos`);
  }

  obtenerDetallesSolicitud(idSolicitud: string): Observable<DetalleSolicitud[]> {
    const url = `${BASE_URL}/${idSolicitud}`;
    return this.http.get<DetalleSolicitud[]>(url);
  }

  obtenerStockEppPorId(idTipoEpp: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8091/sge-consulta-maestras-api/sge/epp/tipos/${idTipoEpp}`);
  }


// Método para registrar la solicitud de EPP
  registrarSolicitud(data: any): Observable<any> {
    const url = `http://localhost:8095/sge-solicitud-epp-api/sge/solicitud`;
    const headers = new HttpHeaders({
      'ip-client': '127.0.0.1'  // Añadir el header aquí
    });

    // Enviar la solicitud POST con los headers
    return this.http.post(url, data, { headers });
  }

  cargarArchivoConUrl(archivo: File, url: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', archivo); // "file" debe coincidir con el nombre esperado por el servidor

    return this.http.post(url, formData);
  }
}
