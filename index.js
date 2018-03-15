import Grid from "./src/Grid";
import Robot from "./src/Robot";
// import Validator from "./src/CommandValidator";
import Commander from "./src/Commander";
const readline = require('readline');

console.log("Toy Robot Simulator");

var grid = new Grid(5, 5);
var robot = new Robot();

var response = new Commander(robot, grid).execute("PLACE 3 4 NORTH");
console.log(response);
