import {Component, EventEmitter, HostListener, Inject, Input, OnInit, Output, PLATFORM_ID, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {isPlatformBrowser, NgClass, NgForOf, NgIf} from '@angular/common';
import {SideBarLeftComponent} from './side-bar-left/side-bar-left.component';
import {MainComponent} from './main/main.component';

@Component({
  selector: 'app-jefe-directo',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    NgIf,
    NgForOf,
    SideBarLeftComponent,
    MainComponent
  ],
  templateUrl: './jefe-directo.component.html',
  styleUrl: './jefe-directo.component.css'
})
export class JefeDirectoComponent implements OnInit {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(0); // Inicializamos con 0 en lugar de window.innerWidth

  // Inyectar el PLATFORM_ID para poder detectar el entorno de ejecución
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize')
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth); // Solo accesible en el navegador
      if (this.screenWidth() < 768) {
        this.isLeftSidebarCollapsed.set(true);
      }
    }
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth.set(window.innerWidth); // Solo accesible en el navegador
      this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}


