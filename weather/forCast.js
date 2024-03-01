const request = require("request");
const forCast = (lon, lat, callback) => {
  const url =
    "http://api.weatherapi.com/v1/current.json?key=ec7a576d0ae347e3bef203829242802&q=" +
    lat +
    "," +
    lon;

  request({ url, json: true }, (error, response) => {
    console.log("    >>    From: ForCast Function");

    if (error) {
      callback(" Unable to Connect to Weather API", undefined);
    } else if (response.body.error) {
      callback(response.body.error.message, undefined);
    } else {
      callback(
        undefined,
        "County is : " +
          response.body.location.name +
          ", and it is : " +
          response.body.current.condition.text
      );
    }
  });
};

module.exports = forCast;
