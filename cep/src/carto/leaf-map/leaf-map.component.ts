import { Component, OnInit } from '@angular/core';
import {circle, Control, latLng, LayerOptions, MapOptions, Marker, polygon, tileLayer} from 'leaflet';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model';
import LayersOptions = Control.LayersOptions;
import {Observer} from "rxjs";

@Component({
  selector: 'app-leaf-map',
  templateUrl: './leaf-map.component.html',
  styleUrls: ['./leaf-map.component.scss']
})
export class LeafMapComponent implements OnInit {

  private options: MapOptions = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 7,
    center: latLng(46.879966, -121.726909)
  };

  private layersControl: LeafletControlLayersConfig = {
    baseLayers: {
      'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    },
    overlays: {

    }
  };

  private markerTab: Marker[];

  private pointTab: Marker[];

  constructor() { }

  ngOnInit() {
  }

}