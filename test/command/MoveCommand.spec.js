import Position from "../../src/helper/Position";
import Robot from "../../src/robot/Robot";
import Grid from "../../src/grid/Grid";
import MoveCommand from "../../src/command/MoveCommand";

var expect = require('chai').expect;

describe("Moving the robot one step a time in to the intended direction", () => {
    it("should not move the robot to the grid. Given it's the edge of the grid", () => {
        let robot = new Robot();
        let moveCommand = new MoveCommand(robot);
        let grid = new Grid(5, 5);
        let nextPosition = moveCommand.getNextPosition(new Position(5, 5, "NORTH"));
        expect(moveCommand.execute(nextPosition)).to.be.false;
    });

    it("should move the robot to the grid. Given it's not the edge of the grid", () => {
        let robot = new Robot();
        let moveCommand = new MoveCommand(robot);
        let grid = new Grid(5, 5);
        let nextPosition = moveCommand.getNextPosition(new Position(1, 1, "SOUTH"));
        expect(moveCommand.execute(nextPosition)).to.be.true;
    });
});

describe("Getting the next possible postion of the robot to determine the next move", () => {
    it("should move one step in the WEST", () => {
        let robot = new Robot();
        let moveCommand = new MoveCommand(robot);
        let grid = new Grid(5, 5);
        let nextPosition = moveCommand.getNextPosition(new Position(5, 5, "WEST"));
        expect(nextPosition).to.have.property("x").eq(4);
    });
    
    it("should move one step in the EAST", () => {
        let robot = new Robot();
        let moveCommand = new MoveCommand(robot);
        let grid = new Grid(5, 5);
        let nextPosition = moveCommand.getNextPosition(new Position(2, 3, "EAST"));
        expect(nextPosition).to.have.property("x").eq(3);
    });
});
