import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, MenuController } from '@ionic/angular';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { Title } from '@angular/platform-browser';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(ToolbarComponent) toolbarComponent!: ToolbarComponent;
  @ViewChild(IonContent) content: IonContent | any;
  @ViewChild('videoElement') videoElement!: ElementRef;

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
  ];
  images: string[] = [
    '../../assets/img/services/svc1.png',
    '../../assets/img/services/svc2.png',
    '../../assets/img/services/svc3.png',
    '../../assets/img/services/svc4.png',
    '../../assets/img/services/svc5.png',
    '../../assets/img/services/svc6.png',
    '../../assets/img/services/svc7.png',
    '../../assets/img/services/svc8.png',
    '../../assets/img/services/svc9.png',
    '../../assets/img/services/svc10.png',
    '../../assets/img/services/svc11.png',
    '../../assets/img/services/svc12.png',
    '../../assets/img/services/svc13.png',
    '../../assets/img/services/svc14.png',
    '../../assets/img/services/svc15.png',
    '../../assets/img/services/svc16.png',
    '../../assets/img/services/svc17.png',
    '../../assets/img/services/svc18.png',
    '../../assets/img/services/svc19.png',
    '../../assets/img/services/svc20.png',
    '../../assets/img/services/svc21.png',
    '../../assets/img/services/svc22.png',
    '../../assets/img/services/svc23.png',
  ];
  currentImage: string = this.images[0];
  currentIndex: number = 0;
  phone = '528126602391';

  branches = [
    {
      title: 'Santa Catarina',
      image: '../../assets/img/sucursales/sucursal1.jpeg',
      address: 'Lic Manuel Ordoñez 1414, Hacienda de Santa Catarina, 66357 Cdad. Santa Catarina, N.L.',
      url: 'https://maps.app.goo.gl/LFdzK1Rokn28iJiq8'
    },
    {
      title: 'Sierra Real',
      image: '../../assets/img/sucursales/sucursal2.jpeg',
      address: 'Sierra Soledad 200, Sierra Real, 66004 García, N.L.',
      url: 'https://maps.app.goo.gl/sB3KsBWRoVQoguZg7'
    },
    {
      title: 'Santa Catarina',
      image: '../../assets/img/sucursales/sucursal3.jpeg',
      address: 'Lic Manuel Ordoñez 1414, Hacienda de Santa Catarina, 66357 Cdad. Santa Catarina, N.L.',
      url: 'https://maps.app.goo.gl/LFdzK1Rokn28iJiq8'
    }
  ];
  contact_cards = [
    {
      image: "../../assets/img/contact/Facebook.png",
      title: 'Facebook',
      desc: 'Aluminios Loga ',
      url: 'https://www.facebook.com/aluminios.loga'
    },
    {
      image: "../../assets/img/contact/whatsapp.png",
      title: 'Whatsapp',
      desc: '+52 8126602391',
      url: 'https://wa.me/528126602391'
    },
    {
      image: "../../assets/img/contact/clock-01.png",
      title: 'Horarios',
      desc: '09:30 a.m. - 20:00 p.m.',
      url: '://www.facebook.com/aluminios.loga'
    }
  ];
  isMenuOpen: boolean = false;

  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {
    // Iniciar la rotación de imágenes cada 20 segundos
    setInterval(() => {
      this.changeImage();
    }, 20000); // 20 segundos
  }

  ionViewWillEnter() {
    const video: HTMLVideoElement = this.videoElement.nativeElement;
    video.volume = 0;  // Set volume to 0 (mute)

    // Enable looping
    video.loop = true;

    // Play the video after ensuring it is loaded
    video.play().catch(error => {
      console.error('Video play failed:', error);
    });
  };

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Función que realiza el scroll suave hacia arriba
  scrollToTop(): void {
    this.content.scrollToTop(500); // 500ms para un scroll suave
  }

  changeImage(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.currentImage = this.images[this.currentIndex];
  }

  navigateTo(page: string, fromMobile?: boolean) {
    this.router.navigate(['/' + page]);

    if(fromMobile) {
      this.toggleMenu();
    }
  }

  openMenu() {
    this.menu.open();
  }

  closeMenu() {
    this.menu.close();
  }

  openMap(url: string) {
    window.open(url, '_blank');
  }

  scrollToSection(sectionId: string, fromMobile?: boolean) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if(fromMobile) {
      this.toggleMenu();
    }
  }

  goToBranch(url: string): void {
    window.open(url, '_blank');
  }

  getCurrentYear(): number {
    return new Date().getFullYear();
  }
}
