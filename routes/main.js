const express = require("express");
const path = require("path");
const https = require("https");

const router = express.Router();

router.use(express.static(path.join(__dirname, "../public")));

router.get("/", (req, res) => {
  let address = `${Math.floor(Math.random() * 256)}.${Math.floor(
    Math.random() * 256
  )}.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}`;
  const API_KEY = `at_QvK53ntKLZ6aojYwcGcybgkPjdLoI`;
  const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${address}`;
  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => (data += chunk));
    response.on("end", () => {
      let geoData = JSON.parse(data);
      let ip = geoData.ip;
      let city = geoData.location.city;
      !city ? (city = "NA") : true;
      let timezone = geoData.location.timezone;
      !timezone ? (timezone = "NA") : true;
      let lat = geoData.location.lat;
      let lng = geoData.location.lng;
      let isp = geoData.isp;
      !isp ? (isp = "NA") : true;
      res.render("index", {
        ip: ip,
        city: city,
        timezone: timezone,
        isp: isp,
        lat: lat,
        lng: lng,
      });
    });
  });
});

module.exports = router;
