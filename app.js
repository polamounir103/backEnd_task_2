const request = require("request");
const forCast = require("./weather/forCast");
const geoCode = require("./weather/geoCode");

const address = process.argv[2];


if (address){
  geoCode(address, (error, data) => {
    console.log("ERROR :", error);
    console.log("DATA :", data);
  
    forCast(data.lon , data.lat, (error, data) => {
      console.log("ERROR :", error);
      console.log("DATA :", data);
    });
  });
}else{
  console.log("You Should Enter An Address To Get Weather Data");
}