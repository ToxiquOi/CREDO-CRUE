import {GeoPointModel} from './GeoPoint.model';

export class CitiesModel {
    constructor(public name: string,
                public lat: number,
                public lon: number,
                public geoPoints?: GeoPointModel[]) {}
}
