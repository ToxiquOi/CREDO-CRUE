/* tslint:disable:one-line */
import { Component, OnInit } from '@angular/core';
import {circle, Control, latLng, LayerOptions, MapOptions, Marker, polygon, tileLayer} from 'leaflet';
import {LeafletControlLayersConfig} from '@asymmetrik/ngx-leaflet/dist/leaflet/layers/control/leaflet-control-layers-config.model';
import {LeafletServiceService} from '../services/leaflet-service.service';
import {NgForm} from '@angular/forms';
import {CitiesModel} from '../Models/Cities.model';
import {Observable} from 'rxjs';
import {GeoPointModel} from '../Models/GeoPoint.model';

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

  private cities: CitiesModel[];

  private geoPoints: GeoPointModel[];

  constructor(private leafService: LeafletServiceService) {
  }

  ngOnInit() {
    this.getCities();
  }

  public getCities(params?: any[]) {
    if (params) {
      this.leafService.searchCity(params[0], params[1], params[2]).then((city: Observable<CitiesModel[]>) => {
        city.forEach( cty => {
          this.cities = cty;
        });
      });
    }
    else {
      this.leafService.searchCity().then((city: Observable<CitiesModel[]>) => {
        city.forEach( cty => {
          this.cities = cty;
        });
      });
    }
  }

  public getGeoPoint(params?: any[]) {
    if (params) {
      this.leafService.searchGeoPoints(params[0], params[1]).then((geoPoints: Observable<GeoPointModel[]>) => {
        geoPoints.forEach( (gp: GeoPointModel[]) => {
          this.geoPoints = gp;
        });
      });
    }
    else {
      this.leafService.searchCity().then((geoPoints: Observable<GeoPointModel[]>  ) => {
        geoPoints.forEach( (gp: GeoPointModel[]) => {
          this.geoPoints = gp;
        });
      });
    }
  }

  public onSubmit(form: NgForm) {
  }
}
