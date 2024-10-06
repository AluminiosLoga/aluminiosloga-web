import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, MapStyle, Marker, config } from '@maptiler/sdk';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {
  map: Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  
  constructor() { }

  ngOnInit() {
    config.apiKey = 'BCn3eAo0i1LBPCufVLul';
  }

  ngAfterViewInit() {
    const initialState = { lng: -100.47611929220709, lat: 25.67669095367280, zoom: 18 };
  
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: MapStyle.STREETS,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });

    this.map.on('load', () => {
      setTimeout(() => {
        this.map?.resize();
        
        // Add marker after resizing
        if (this.map) {
          new Marker({ color: "#FF0000" })
            .setLngLat([initialState.lng, initialState.lat])
            .addTo(this.map);
        };
      }, 100);
    });
  }

  ngOnDestroy() {
    this.map?.remove();
  }
}
