var map = L.map("mapid", { scrollWheelZoom: false }).setView(
  [49.8361929, 24.0359099],
  16
);
var mapIcon = L.icon({
  iconUrl: "../img/mapicon.svg",
  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([49.8361929, 24.0359099], { icon: mapIcon })
  .addTo(map)
  .bindPopup("Grofa Travel")
  .openPopup();
