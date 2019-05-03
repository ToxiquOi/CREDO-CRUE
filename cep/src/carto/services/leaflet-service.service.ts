import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observer} from 'rxjs';
import {Circle, Marker} from 'leaflet';
import {NgForm} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class LeafletServiceService {

  private markerTab: Marker[];
  private pointTab: Circle[];

  constructor(private httpClient: HttpClient) {
    this.markerTab = [];
  }

  public importCity(city: string) {
    const re = new RegExp(city + ' France');
    const res = this.httpClient.get('https://nominatim.openstreetmap.org/search?city=' + city + '&format=json');
    res.forEach(value => {
      if (re.test(value[8])) {
        console.log('city found');
      } else {
        console.log('regex not match');
      }
    });

  }

  // public getAllMkFromDb() {
  //   this.httpClient.get('http://localhost:8081/map/marker', {responseType: 'json'});
  //   /*
  //       WORKKKK
  //    */
  // }

  public addMarker(mk: Marker) {
    this.markerTab.push(mk);
  }



}
