// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

var visualization = d3plus.viz()
.container("#viz3")
.data(
[
  {"Edad":"Persona 1","Grupo":"Edad 43","costo": 6250.44},
  {"Edad":"Persona 2","Grupo":"Edad 43","costo": 6837.37},
  {"Edad":"Persona 3","Grupo":"Edad 43","costo": 6849.03},
  {"Edad":"Persona 4","Grupo":"Edad 43","costo": 7325.05},
  {"Edad":"Persona 5","Grupo":"Edad 43","costo": 7337.75},
  {"Edad":"Persona 6","Grupo":"Edad 43","costo": 7345.73},
  {"Edad":"Persona 7","Grupo":"Edad 43","costo": 7441.50},
  {"Edad":"Persona 8","Grupo":"Edad 43","costo": 7727.25},
  {"Edad":"Persona 9","Grupo":"Edad 43","costo": 8310.84},
  {"Edad":"Persona 10","Grupo":"Edad 43","costo": 8410.05},
  {"Edad":"Persona 11","Grupo":"Edad 43","costo": 8522.00},
  {"Edad":"Persona 12","Grupo":"Edad 43","costo": 8606.22},
  {"Edad":"Persona 13","Grupo":"Edad 43","costo": 14478.33},
  {"Edad":"Persona 14","Grupo":"Edad 43","costo": 18767.74},
  {"Edad":"Persona 15","Grupo":"Edad 43","costo": 18806.15},
  {"Edad":"Persona 16","Grupo":"Edad 43","costo": 19144.58},
  {"Edad":"Persona 17","Grupo":"Edad 43","costo": 19798.05},
  {"Edad":"Persona 18","Grupo":"Edad 43","costo": 21771.34},
  {"Edad":"Persona 19","Grupo":"Edad 43","costo": 21774.32},
  {"Edad":"Persona 20","Grupo":"Edad 43","costo": 21880.82},
  {"Edad":"Persona 21","Grupo":"Edad 43","costo": 22478.60},
  {"Edad":"Persona 22","Grupo":"Edad 43","costo": 37829.72},
  {"Edad":"Persona 23","Grupo":"Edad 43","costo": 40941.29},
  {"Edad":"Persona 24","Grupo":"Edad 43","costo": 41034.22},
  {"Edad":"Persona 25","Grupo":"Edad 43","costo": 42124.52},
  {"Edad":"Persona 26","Grupo":"Edad 43","costo": 42560.43},
  {"Edad":"Persona 27","Grupo":"Edad 43","costo": 45863.21}])
  .type("bar")
  .id("Edad")
  .x("Grupo")
  .y("costo")
  .draw();

























