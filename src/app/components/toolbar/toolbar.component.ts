import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent  implements OnInit {
  @Input() backButton: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(page: string) {
    this.router.navigate(['/' + page]);
  }
}
