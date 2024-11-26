import { Routes } from '@angular/router';

import {GestionDeIngresosComponent} from './jefe-directo/components/gestion-de-ingresos/gestion-de-ingresos.component';
import {
  SolicitudHabitacionComponent
} from './jefe-directo/components/solicitud-habitacion/solicitud-habitacion.component';
import {
  ConsultarHabitacionTrabajadoresComponent
} from './jefe-directo/components/consultar-habitacion-trabajadores/consultar-habitacion-trabajadores.component';
import {
  ReporteEstadoHabilitacionTrabajadoresComponent
} from './jefe-directo/components/reporte-estado-habilitacion/reporte-estado-habilitacion-trabajadores.component';
import {
  ReporteHabilitacionAgenteComponent
} from './jefe-directo/components/reporte-habilitacion-agente-supervisado-component/reporte-habilitacion-agente.component';
import {
  ReporteObservacionesSubsanaciones
} from './jefe-directo/components/reporte-observaciones-subsanaciones-component/reporte-observaciones-subsanaciones';
import {JefeDirectoComponent} from './jefe-directo/jefe-directo.component';
import {TrabajadorComponent} from './trabajador/trabajador.component';
import {EstadoHabilitacionComponent} from './trabajador/components/estado-habilitacion/estado-habilitacion.component';
import {ValidarSolicitudesComponent} from "./medico/components/validar-solicitudes/validar-solicitudes.component";
import {
  ActualizarInformacionTrabajadoresComponent
} from "./medico/components/actualizar-informacion-trabajadores/actualizar-informacion-trabajadores.component";
import {MedicoComponent} from "./medico/medico.component";
import {
  MantenimientoAgenteSupervisadoComponent
} from "./sst/components/mantenimiento-agente-supervisado/mantenimiento-agente-supervisado.component";
import {
  MantenimientoRequisitoComponent
} from "./sst/components/mantenimiento-requisito/mantenimiento-requisito.component";
import {
  ReporteRequisitosAgenteComponent
} from "./sst/components/reporte-requisitos-agente/reporte-requisitos-agente.component";
import {
  RequisitosAgenteSupervisadoComponent
} from "./sst/components/requisitos-agente-supervisado/requisitos-agente-supervisado.component";
import {
  RevisarSolicitudEPPComponent
} from "./jefe-directo/components/gestionEPP/revisar-solicitud-epp/revisar-solicitud-epp.component";
import {
  GestionarInventarioComponent
} from "./jefe-directo/components/gestionEPP/gestionar-inventario/gestionar-inventario.component";
import {
  GestionarReportesComponent
} from "./jefe-directo/components/gestionEPP/gestionar-reportes/gestionar-reportes.component";
import {
  HistorialDecisionesComponent
} from "./jefe-directo/components/gestionEPP/historial-decisiones/historial-decisiones.component";
import {RecepcionEPPComponent} from "./jefe-directo/components/gestionEPP/recepcion-epp/recepcion-epp.component";
import {SolicitarEPComponent} from "./jefe-directo/components/gestionEPP/solicitar-ep/solicitar-ep.component";
import {
  RevisarSolicitudEPP2Component
} from "./jefe-directo/components/gestionEPP/revisar-solicitud-epp2/revisar-solicitud-epp2.component";
import {
  SolicitarEppTrabajadorComponent
} from './trabajador/components/gestionEPP/solicitar-epp-trabajador/solicitar-epp-trabajador.component';
import {SolicitarEppSstComponent} from './sst/components/gestion-epp/solicitar-epp-sst/solicitar-epp-sst.component';
import {
  SolicitarEppSst2Component
} from './sst/components/gestion-epp/solicitar-epp-sst-2/solicitar-epp-sst-2.component';
import {
  RevisarSolicitudEppSst2Component
} from './sst/components/gestion-epp/revisar-solicitud-epp-sst-2/revisar-solicitud-epp-sst-2.component';
import {
  RevisarSolicitudEppSstComponent
} from './sst/components/gestion-epp/revisar-solicitud-epp-sst/revisar-solicitud-epp-sst.component';
import {HistorialEPPComponent} from './jefe-directo/components/gestionEPP/historial-epp/historial-epp.component';
import {HistorialEppComponent} from './sst/components/gestion-epp/historial-epp/historial-epp.component';
import {MatrizEppComponent} from './sst/components/gestion-epp/matriz-epp/matriz-epp.component';
import {
  MaestroAsignacionesEppComponent
} from './sst/components/gestion-epp/maestro-asignaciones-epp/maestro-asignaciones-epp.component';
import {AsignacionEppGafComponent} from './gaf/components/gestionEPP/asignacion-epp-gaf/asignacion-epp-gaf.component';
import {
  AsignacionEppGaf2Component
} from './gaf/components/gestionEPP/asignacion-epp-gaf2/asignacion-epp-gaf2.component';
import {
  GestionarInventario2Component
} from './gaf/components/gestionEPP/gestionar-inventario/gestionar-inventario-2.component';
import {
  RegistroInventarioGafComponent
} from './gaf/components/gestionEPP/registro-inventario-gaf/registro-inventario-gaf.component';
import {RecepcionEPP2Component} from './jefe-directo/components/gestionEPP/recepcion-epp2/recepcion-epp2.component';
import {RecepcionEPP3Component} from './jefe-directo/components/gestionEPP/recepcion-epp3/recepcion-epp3.component';
import {SolicitarEP2Component} from './jefe-directo/components/gestionEPP/solicitar-ep2/solicitar-ep2.component';


export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'jefe-directo', component: JefeDirectoComponent },
  { path: 'gestion-ingresos', component: GestionDeIngresosComponent },
  { path: 'solicitud-habilitacion', component: SolicitudHabitacionComponent },
  { path: 'consultar-habilitación-trabajadores', component: ConsultarHabitacionTrabajadoresComponent },
  { path: 'reporte-estado-habilitacion-trabajadores', component: ReporteEstadoHabilitacionTrabajadoresComponent },
  { path: 'reporte-habilitacion-agente-supervisado', component: ReporteHabilitacionAgenteComponent },
  { path: 'reporte-observaciones-subsanaciones', component: ReporteObservacionesSubsanaciones },


  { path: 'gestionar-inventario', component: GestionarInventarioComponent },
  { path: 'gestionar-reportes', component: GestionarReportesComponent },
  { path: 'historial-desiciones', component: HistorialDecisionesComponent },
  { path: 'historial-epp', component: HistorialEPPComponent },
  { path: 'recepcion-epp', component: RecepcionEPPComponent },
  { path: 'recepcion-epp-2', component: RecepcionEPP2Component },
  { path: 'recepcion-epp-3', component: RecepcionEPP3Component },

  { path: 'revisar-solicitud-epp', component: RevisarSolicitudEPPComponent },
  { path: 'revisar-solicitud-epp2', component: RevisarSolicitudEPP2Component },
  { path: 'solicitar-epp', component: SolicitarEPComponent },
  { path: 'solicitar-epp2', component: SolicitarEP2Component },

  { path: 'Trabajador', component: TrabajadorComponent },
  { path: 'estado-habilitacion', component: EstadoHabilitacionComponent },
  { path: 'solicitar-epp-trabajador', component: SolicitarEppTrabajadorComponent },

  { path: 'medico', component: MedicoComponent },
  { path: 'validar-solicitudes', component: ValidarSolicitudesComponent },
  { path: 'actualizar-informacion-trabajadores', component: ActualizarInformacionTrabajadoresComponent },

  { path: 'mantenimiento-agente-supervisado', component: MantenimientoAgenteSupervisadoComponent },
  { path: 'mantenimiento-requisito', component: MantenimientoRequisitoComponent },
  { path: 'reporte-requisito-agente', component: ReporteRequisitosAgenteComponent },
  { path: 'requisito-agente-supervisado', component: RequisitosAgenteSupervisadoComponent },
  { path: 'solicitar-epp-sst', component: SolicitarEppSstComponent },
  { path: 'solicitar-epp-sst-2', component: SolicitarEppSst2Component },
  { path: 'revisar-solicitud-epp-sst', component: RevisarSolicitudEppSstComponent },
  { path: 'revisar-solicitud-epp-sst-2', component: RevisarSolicitudEppSst2Component },
  { path: 'historial-epp-sst', component: HistorialEppComponent },
  { path: 'matriz-epp', component: MatrizEppComponent },
  { path: 'maestro-asignaciones-epp', component: MaestroAsignacionesEppComponent },

  { path: 'asignacion-epp-gaf', component: AsignacionEppGafComponent },
  { path: 'asignacion-epp-gaf-2', component: AsignacionEppGaf2Component },
  { path: 'gestionar-inventario-2', component: GestionarInventario2Component },
  { path: 'registro-inventario-gaf', component: RegistroInventarioGafComponent },
];
