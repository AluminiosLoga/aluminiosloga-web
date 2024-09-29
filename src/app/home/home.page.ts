import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(ToolbarComponent) toolbarComponent!: ToolbarComponent;

  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {}

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }

  // Función para manejar el evento de scroll
  onScroll(event: any) {
    const scrollTop = event?.detail?.scrollTop || 0;
    this.toolbarComponent.updateToolbarOnScroll(scrollTop);
  }

  // Abre el menú
  openMenu() {
    this.menu.open();
  }

  // Cierra el menú
  closeMenu() {
    this.menu.close();
  }
}
