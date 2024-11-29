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
  templateUrl: './side-bar-left.component.html',
  styleUrl: './side-bar-left.component.css'
})
export class SideBarLeftComponent {
  @Input() isLeftSidebarCollapsed: boolean = false;  // Usar propiedad booleana
  @Output() changeIsLeftSidebarCollapsed = new EventEmitter<boolean>();

  openSubMenus: { [key: string]: boolean } = {};

  items = [
    {
      routeLink: 'gestion-ingresos',
      icon: 'fa-solid fa-home',
      label: 'Gestión De Ingresos a Agentes Supervisados',

    },
    {
      routeLink: 'pages',
      icon: 'fa-solid fa-user',
      label: 'Gestión EPP',
      children: [
        { routeLink: 'asignacion-epp-gaf', label: 'Asignación de EPP' },
        { routeLink: 'gestionar-inventario-2', label: 'Gestionar inventario' },
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

