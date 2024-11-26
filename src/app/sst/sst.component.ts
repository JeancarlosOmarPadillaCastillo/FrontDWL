import {Component, HostListener, Inject, PLATFORM_ID, signal} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {SideBarLeftTComponent} from './side-bar-left/side-bar-left-t.component';
import {MainComponentT} from './main/main.component-t';

@Component({
  selector: 'app-sst',
  standalone: true,
  imports: [
    MainComponentT,
    SideBarLeftTComponent
  ],
  templateUrl: './sst.component.html',
  styleUrl: './sst.component.css'
})
export class SstComponent {
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


