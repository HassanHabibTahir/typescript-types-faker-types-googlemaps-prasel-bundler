import { Comopany } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();

const map = new CustomMap();
map.map(user);

console.log(user, "user====>");
const comapny = new Comopany();
map.companyMap(comapny);
// new google.maps.Map(document.getElementById("map"));
// var map = L.map("map").setView([42.35, -71.08], 13);

// L.tileLayer("http://tiles.mapc.org/basemap/{z}/{x}/{y}.png", {
//   attribution:
//     'Tiles by <a href="http://mapc.org">MAPC</a>, Data by <a href="http://mass.gov/mgis">MassGIS</a>',
//   maxZoom: 17,
//   minZoom: 9,
// }).addTo(map);
