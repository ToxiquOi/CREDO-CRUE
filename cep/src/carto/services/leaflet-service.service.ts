import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Circle, Marker} from 'leaflet';
import {GeoPointModel} from '../Models/GeoPoint.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LeafletServiceService {

  private endPoint: string = document.location.protocol + '//' + document.location.hostname + ':8081/';

  private markerTab: Marker[];
  private geoPointTab: GeoPointModel[];

  constructor(private httpClient: HttpClient) {
    this.markerTab = [];
  }

  private responseData(res: Response) {
    return res || {};
  }

  public async searchAllGeoPoints(pageNb?: number, itemPpage?: number) {
    let paramReq = '';

    if (pageNb || itemPpage) {
      if (pageNb) {
        paramReq += 'page=' + pageNb + '&';
      }
      if (itemPpage) {
        paramReq += 'itemsPerPage=' + itemPpage + '&';
      }
    }

    return await this.httpClient.get( (paramReq !== '') ? this.endPoint + paramReq : this.endPoint + 'geo_points').pipe(
        map(this.responseData));
  }

  public async searchCity(search?: string, pageNb?: number, itemPpage?: number) {
    let paramReq = '';

    if (search || pageNb || itemPpage) {
      if (search) {
        paramReq += 'name=' + search + '&';
      }
      if (pageNb) {
        paramReq += 'page=' + pageNb + '&';
      }
      if (itemPpage) {
        paramReq += 'itemsPerPage=' + itemPpage + '&';
      }
    }

    return await this.httpClient.get((paramReq !== '') ? this.endPoint + 'cities?' + paramReq : this.endPoint + 'cities').pipe(
        map(this.responseData));
  }



}
