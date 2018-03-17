import Position from "../../src/helper/Position";
import Robot from "../../src/robot/Robot";
import Grid from "../../src/grid/Grid";
import PlaceCommand from "../../src/command/PlaceCommand";

var expect = require('chai').expect;

describe("Placing the robot to the grid", () => {
    it("should not place the robot to the grid. Given the invalid position", () => {
        let robot = new Robot();
        let placeCommand = new PlaceCommand(robot);
        let grid = new Grid(5,5);
        expect(placeCommand.execute(new Position(11, 4, "NORTH"))).to.be.false;
    });

    it("should place the robot to the grid. Given the valid position", () => {
        let robot = new Robot();
        let placeCommand = new PlaceCommand(robot);
        let grid = new Grid(5,5);
        expect(placeCommand.execute(new Position(3, 4, "NORTH"))).to.be.true;
    });
});
