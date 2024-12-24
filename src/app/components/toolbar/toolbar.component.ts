import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {
  @Output() scrollToSection = new EventEmitter<string>();
  @Output() logoClicked: EventEmitter<void> = new EventEmitter();
  @Output() toggleMenu: EventEmitter<void> = new EventEmitter();
  @Input() backButton: boolean = false;

  activeSection: string = 'home-section';

  constructor(private router: Router) {}

  ngOnInit() {}

  // Método que se llama cuando el logo es clicado
  onLogoClick() {
    this.logoClicked.emit(); // Emite el evento al componente padre
  }

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }

  onButtonClick(sectionId: string) {
    this.activeSection = sectionId;
    this.scrollToSection.emit(sectionId);
  }

  toggleMenuEmit() {
    this.toggleMenu.emit();
  }
}
