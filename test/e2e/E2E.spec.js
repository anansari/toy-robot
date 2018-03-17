import RobotCommander from "../../src/robot/RobotCommander";
import Robot from "../../src/robot/Robot";
import Grid from "../../src/grid/Grid";

var expect = require('chai').expect;

var grid = null;
var robot = null;
var commander = null;

beforeEach(() => {
    grid = new Grid(5, 5);
    robot = new Robot();
    commander = new RobotCommander(robot, grid);
});

describe("The end to end flow with few scenarios", () => {
    it("Example a", () => {
        commander.execute("PLACE 0,0,NORTH");
        commander.execute("MOVE");
        let response = commander.execute("REPORT");

        expect(response.x + "," + response.y + "," + response.direction).to.be.eq("0,1,NORTH");
    });

    it("Example b", () => {
        commander.execute("PLACE 0,0,NORTH");
        commander.execute("LEFT");
        let response = commander.execute("REPORT");

        expect(response.x + "," + response.y + "," + response.direction).to.be.eq("0,0,WEST");
    });

    it("Example c", () => {
        commander.execute("PLACE 1,2,EAST");
        commander.execute("MOVE");
        commander.execute("MOVE");
        commander.execute("LEFT");
        commander.execute("MOVE");
        let response = commander.execute("REPORT");

        expect(response.x + "," + response.y + "," + response.direction).to.be.eq("3,3,NORTH");
    });
});
