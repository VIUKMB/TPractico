// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var visualization = d3plus.viz()
.container("#viz3")
.data(
[
  {"Edad":43,"costo": 6250.44},
  {"Edad":43,"costo": 6837.37},
  {"Edad":43,"costo": 6849.03},
  {"Edad":43,"costo": 7325.05},
  {"Edad":43,"costo": 7337.75},
  {"Edad":43,"costo": 7345.73},
  {"Edad":43,"costo": 7441.50},
  {"Edad":43,"costo": 7727.25},
  {"Edad":43,"costo": 8310.84},
  {"Edad":43,"costo": 8410.05},
  {"Edad":43,"costo": 8522.00},
  {"Edad":43,"costo": 8606.22},
  {"Edad":43,"costo": 14478.33},
  {"Edad":43,"costo": 18767.74},
  {"Edad":43,"costo": 18806.15},
  {"Edad":43,"costo": 19144.58},
  {"Edad":43,"costo": 19798.05},
  {"Edad":43,"costo": 21771.34},
  {"Edad":43,"costo": 21774.32},
  {"Edad":43,"costo": 21880.82},
  {"Edad":43,"costo": 22478.60},
  {"Edad":43,"costo": 37829.72},
  {"Edad":43,"costo": 40941.29},
  {"Edad":43,"costo": 41034.22},
  {"Edad":43,"costo": 42124.52},
  {"Edad":43,"costo": 42560.43},
  {"Edad":43,"costo": 45863.21},])
.type("box")
.id("Edad")
.x("Edad")
.y("costo")
.draw();



























