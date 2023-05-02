// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var visualization = d3plus.viz()
.container("#viz3")
.data(
[
  {"costo": 6250.44},
  {"costo": 6837.37},
  {"costo": 6849.03},
  {"costo": 7325.05},
  {"costo": 7337.75},
  {"costo": 7345.73},
  {"costo": 7441.50},
  {"costo": 7727.25},
  {"costo": 8310.84},
  {"costo": 8410.05},
  {"costo": 8522.00},
  {"costo": 8606.22},
  {"costo": 14478.33},
  {"costo": 18767.74},
  {"costo": 18806.15},
  {"costo": 19144.58},
  {"costo": 19798.05},
  {"costo": 21771.34},
  {"costo": 21774.32},
  {"costo": 21880.82},
  {"costo": 22478.60},
  {"costo": 37829.72},
  {"costo": 40941.29},
  {"costo": 41034.22},
  {"costo": 42124.52},
  {"costo": 42560.43},
  {"costo": 45863.21},])
.type("box")
.id("costo")
.x("costo")
.y("costo")
.draw();



























