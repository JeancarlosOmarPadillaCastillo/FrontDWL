import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-side-bar-left',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgForOf,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './side-bar-left-t.component.html',
  styleUrl: './side-bar-left-t.component.css'
})
export class SideBarLeftTComponent {
  @Input() isLeftSidebarCollapsed: boolean = false;  // Usar propiedad booleana
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  openSubMenus: { [key: string]: boolean } = {};

  items = [
    {
      routeLink: 'estado-habilitacion',
      icon: 'fa-solid fa-home',
      label: 'Gestión De Ingresos a Agentes Supervisados',
      children: [
        { routeLink: 'mantenimiento-requisito', label: 'Mantenimiento de requisitos' },
        { routeLink: 'mantenimiento-agente-supervisado', label: 'Mantenimiento de agentes supervisado' },
        { routeLink: 'requisito-agente-supervisado', label: 'Requisitos por agente supervisado' },
        { routeLink: 'reporte-requisito-agente', label: 'Reporte Requisitos por agente supervisado' },
      ]
    },
    {
      routeLink: 'solicitar-epp-sst',
      icon: 'fa-solid fa-user',
      label: 'Gestión EPP',
      children: [
        { routeLink: 'revisar-solicitud-epp-sst', label: 'Revisar Solicitudes de EPP' },
        { routeLink: 'gestionar-inventario', label: 'Gestionar inventario' },
        { routeLink: 'gestionar-reportes', label: 'Gestionar reportes' },
        { routeLink: 'solicitar-epp-sst', label: 'Solicitar EPP' },
        { routeLink: 'recepcion-epp', label: 'Recepción de EPP' },
        { routeLink: 'ver-historial-sst', label: 'Ver historial de EPP' },
        { routeLink: 'historial-desiciones', label: 'Ver historial de Decisiones' },

      ]
    },
    {
      routeLink: 'settings',
      icon: 'fa-solid fa-wrench',
      label: 'Gestión de la Matriz IPERC',
    },
    {
      routeLink: 'settings',
      icon: 'fa-solid fa-file-circle-plus',
      label: 'Gestión de la Salud Ocupacional',
    },
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed);
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }

  // Alterna el estado de visibilidad del submenú
  toggleSubMenu(item: any): void {
    this.openSubMenus[item.routeLink] = !this.openSubMenus[item.routeLink];
  }

  // Verifica si un submenú está abierto
  isSubMenuOpen(item: any): boolean {
    return this.openSubMenus[item.routeLink] || false;
  }
}

