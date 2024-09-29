import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {
  @Input() startTransparent: boolean = false;
  @Input() backButton: boolean = false;
  toolbarClass: string = 'white-toolbar';
  iconThemeMode: any = 'sunny-outline';
  paletteToggle = false;

  constructor(private router: Router) { }

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

    if (this.startTransparent) {
      this.toolbarClass = 'transparent-toolbar';
    }
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(newTheme: any) {
    this.iconThemeMode = newTheme;
    this.toggleDarkPalette();
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: any) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  toggleDarkPalette(shouldAdd?: any) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  // Método para cambiar la clase del toolbar basado en el scroll
  updateToolbarOnScroll(scrollTop: number) {
    if (scrollTop > 50) {
      this.toolbarClass = 'white-toolbar';
    } else if (this.startTransparent) {
      this.toolbarClass = 'transparent-toolbar';
    }
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
