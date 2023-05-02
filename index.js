// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var visualization = d3plus.viz()
.container("#viz3")
.data(
[
  {"year": 1991, "name":"alpha", "value": 15},
  {"year": 1991, "name":"beta", "value": 10},
  {"year": 1991, "name":"gamma", "value": 5},
  {"year": 1991, "name":"delta", "value": 50},
  {"year": 1992, "name":"alpha", "value": 20},
  {"year": 1992, "name":"beta", "value": 10},
  {"year": 1992, "name":"gamma", "value": 10},
  {"year": 1992, "name":"delta", "value": 43},
  {"year": 1993, "name":"alpha", "value": 30},
  {"year": 1993, "name":"beta", "value": 40},
  {"year": 1993, "name":"gamma", "value": 20},
  {"year": 1993, "name":"delta", "value": 17},
  {"year": 1994, "name":"alpha", "value": 60},
  {"year": 1994, "name":"beta", "value": 60},
  {"year": 1994, "name":"gamma", "value": 25},
  {"year": 1994, "name":"delta", "value": 32},])
.type("box")
.id("name")
.x("year")
.y("value")
.draw();
/*var visualization = d3plus.viz()
.container("#viz3")
.data(
[
  {"Edad":43,"name":"Edad 43","costo": 6250.44},
  {"Edad":43,"name":"Edad 43","costo": 6837.37},
  {"Edad":43,"name":"Edad 43","costo": 6849.03},
  {"Edad":43,"name":"Edad 43","costo": 7325.05},
  {"Edad":43,"name":"Edad 43","costo": 7337.75},
  {"Edad":43,"name":"Edad 43","costo": 7345.73},
  {"Edad":43,"name":"Edad 43","costo": 7441.50},
  {"Edad":43,"name":"Edad 43","costo": 7727.25},
  {"Edad":43,"name":"Edad 43","costo": 8310.84},
  {"Edad":43,"name":"Edad 43","costo": 8410.05},
  {"Edad":43,"name":"Edad 43","costo": 8522.00},
  {"Edad":43,"name":"Edad 43","costo": 8606.22},
  {"Edad":43,"name":"Edad 43","costo": 14478.33},
  {"Edad":43,"name":"Edad 43","costo": 18767.74},
  {"Edad":43,"name":"Edad 43","costo": 18806.15},
  {"Edad":43,"name":"Edad 43","costo": 19144.58},
  {"Edad":43,"name":"Edad 43","costo": 19798.05},
  {"Edad":43,"name":"Edad 43","costo": 21771.34},
  {"Edad":43,"name":"Edad 43","costo": 21774.32},
  {"Edad":43,"name":"Edad 43","costo": 21880.82},
  {"Edad":43,"name":"Edad 43","costo": 22478.60},
  {"Edad":43,"name":"Edad 43","costo": 37829.72},
  {"Edad":43,"name":"Edad 43","costo": 40941.29},
  {"Edad":43,"name":"Edad 43","costo": 41034.22},
  {"Edad":43,"name":"Edad 43","costo": 42124.52},
  {"Edad":43,"name":"Edad 43","costo": 42560.43},
  {"Edad":43,"name":"Edad 43","costo": 45863.21},])
.type("box")
.id("name")
.x("Edad")
.y("costo")
.draw();

*/

























