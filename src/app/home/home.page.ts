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
  frequent_questions = [
    {
      question: '¿Qué fabricamos?',
      descriptions: [
        '¡FABRICAMOS DE TODO!',
        '',
        'Fabricamos canceles para baño, vitrinas, ventanas, puertas, repisas, closets, cocinetas personalizadas.',
        '¡Y mucho más!',
      ],
    },
    {
      question: '¿Cómo puedo cotizar mi pedido?',
      descriptions: [
        '1. Contactanos a travez de: Inbox, Whatsapp, Vía telefónica.',
        '2. Información de producto: Tipo de producto para cotizar y medidas requeridas.',
        '3. Ubicación: En caso de necesitar instalación y/o flete, proporciónanos el municipio del que nos escribes para cotizarlo.'
      ],
    },
    {
      question: '¿Donde estamos ubicados?',
      descriptions: [
        'Nos ubicamos en la Av. Manuel Ordoñez 1414, Hacienda de Santa Catarina, 66357 Santa Catarina, N. L.',       
      ],
    },
  ]

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
