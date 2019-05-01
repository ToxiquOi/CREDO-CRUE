import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {Circle, Marker} from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class LeafletServiceService {

  private markerTab: Marker[];
  private pointTab: Circle[];

  constructor(private httpClient: HttpClient) {
    this.markerTab = [];
  }

  public getAllMkFromDb() {
    this.httpClient.get('http://localhost:8081/map/marker', {responseType: 'json'});
    /*
        WORKKKK
     */
  }

  public addMarker(mk: Marker) {
    this.markerTab.push(mk);
  }



}
