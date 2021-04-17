import * as L from "leaflet";
import { Comopany } from "./Company";
import { User } from "./User";
interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  constructor() {}

  map(user: User | Comopany): void {
    var mymap = L.map("mapid").setView(
      [user.location.lat, user.location.lng],
      13
    );
    var circle = L.circle([user.location.lat, user.location.lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(mymap);
  }

  companyMap(mapable: Mapable): void {
    var mymap = L.map("companyid").setView(
      [mapable.location.lat, mapable.location.lng],
      13
    );
    var circle = L.circle([mapable.location.lat, mapable.location.lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 500,
    }).addTo(mymap);
  }
}
