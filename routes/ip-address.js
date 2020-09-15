const express = require("express");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(express.static(path.join(__dirname, "../public")));
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  const address = req.body.input;
  const API_KEY = `at_QvK53ntKLZ6aojYwcGcybgkPjdLoI`;
  const url = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${address}`;
  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => (data += chunk));
    response.on("end", () => {
      let geoData = JSON.parse(data);
      let ip = geoData.ip;
      let city = geoData.location.city;
      let timezone = geoData.location.timezone;
      let lat = geoData.location.lat;
      let lng = geoData.location.lng;
      let isp = geoData.isp;
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
