import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
declare var Lightbox: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  paletteToggle = false;
  iconThemeMode: any = 'sunny-outline';
  imgList1: any;
  imgList2: any;
  imgList3: any;
  imgList4: any;

  constructor(private menu: MenuController, private router: Router) {
    this.imgList1 = [
      'svc1.png',
      'svc2.png',
      'svc3.png',
      'svc4.png',
      'svc5.png',
      'svc6.png',
    ];

    this.imgList2 = [
      'svc7.png',
      'svc8.png',
      'svc9.png',
      'svc10.png',
      'svc11.png',
      'svc12.png',
    ];

    this.imgList3 = [
      'svc13.png',
      'svc14.png',
      'svc15.png',
      'svc16.png',
      'svc17.png',
      'svc18.png',
    ];

    this.imgList4 = [
      'svc19.png',
      'svc20.png',
      'svc21.png',
      'svc22.png',
      'svc23.png',
    ];
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');    
    if(prefersDark.matches) {
      this.iconThemeMode = 'moon-outline';
    }

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  ionViewDidEnter() {
    Lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });
  }

  navigateTo() {
    this.router.navigate(['/gallery']);
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: any) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleDarkPalette(shouldAdd?: any) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(newTheme: any) {
    this.iconThemeMode = newTheme;
    this.toggleDarkPalette();
  }

  // Función para manejar el evento de scroll
  onScroll(event: any) {
    const toolbar = document.getElementById('toolbar');
    
    if (event && event.detail && event.detail.scrollTop > 50) { // Si el scroll es mayor a 50px
      toolbar?.classList.remove('transparent-toolbar');
      toolbar?.classList.add('white-toolbar');
    } else {
      toolbar?.classList.remove('white-toolbar');
      toolbar?.classList.add('transparent-toolbar');
    }
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
