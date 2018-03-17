import Grid from "./src/Grid";
import Robot from "./src/Robot";
import Commander from "./src/Commander";
const readline = require('readline');

console.log("Toy Robot Simulator ^.^");
var grid, robot;

function _init() {
    grid = new Grid(5, 5);
    robot = new Robot();
}

function _letsGetBusy() {
    console.log("Enter a command, Valid commands are:");
    console.log(" PLACE X,Y,NORTH|SOUTH|EAST|WEST \n MOVE \n LEFT \n RIGHT \n REPORT \n EXIT");

    let readline = require('readline');
    let rl = readline.createInterface(process.stdin, process.stdout);
    let response = "";

    rl.setPrompt('robot> ');
    rl.prompt();
    rl.on('line', function (line) {
        if (line === "exit") {
            rl.close()
        } else {
            response = new Commander(robot, grid).execute(line);
            console.log(response);
        }
        rl.prompt();
    }).on('close', function () {
        process.exit(0);
    });
}

_init();
_letsGetBusy();
