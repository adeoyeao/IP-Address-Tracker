const map = document.querySelector("#mapid")
const lat = map.getAttribute("data-lat")
const lng = map.getAttribute("data-lng")

const mymap = L.map("mapid").setView([lat, lng], 13)
const APIKey = `pk.eyJ1IjoiYWRlb3llYW8iLCJhIjoiY2tldjkyOTJ1MDNxZzMxbjRqeDVsMDVhbSJ9.1kpoewjVxUM_9YOqpBaEeg`;
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: APIKey,
  }
).addTo(mymap);
const marker = L.marker([lat, lng]).addTo(mymap);

export { mymap }