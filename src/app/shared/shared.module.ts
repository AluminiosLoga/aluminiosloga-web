import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { MapComponent } from '../components/map/map.component';

@NgModule({
  declarations: [ToolbarComponent, MapComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [ToolbarComponent, MapComponent],
})
export class SharedModule { }
